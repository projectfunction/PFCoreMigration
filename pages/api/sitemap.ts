import {NextApiRequest, NextApiResponse} from "next";
import {readdir} from "fs/promises";
import {join, resolve} from "path";
import {getNotesSummaryList, LocalNotes} from "../../utils/localNotesCopy";
import {LocalCourses} from "../../utils/localCoursesCopy";

async function walk(filePath, filterCallback){
	let results = [];
	let entries = await readdir(filePath, {withFileTypes:true});

	for (const entry of entries) {
		const fullPath = join(filePath, entry.name);
		if (entry.isFile()) results.push(await filterCallback(fullPath));
		if (entry.isDirectory()) results.push(...await walk(fullPath, filterCallback));
	}

	return results.filter(r => !!r).flatMap(r => r);
}

export default async function(req:NextApiRequest, res:NextApiResponse){
	const baseUrl = {
		development: "http://localhost:3000",
		production: "https://projectfunction.io",
	}[process.env.NODE_ENV];

	const currentPath = resolve("./pages/");

	const [ courses, posts ] = await Promise.all([
		LocalCourses,
		LocalNotes
	])

	const pages = await walk(currentPath, async filePath => {
		const relativePath = filePath.substr(currentPath.length + 1).split(".")[0];
		if (["_app", "404", "500"].includes(relativePath) || relativePath.startsWith("api/")) return;

		if (relativePath === "courses/[shortCode]"){
			return courses.map(course => `${baseUrl}/courses/${course.shortCode}`);
		}

		if (relativePath === "notes/[slug]"){
			return posts.map(post => `${baseUrl}/notes/${post.slug}`);
		}

		const completeUrl = `${baseUrl}/${relativePath}`;

		if (completeUrl.endsWith("index")){
			return completeUrl.replace(/^(.+?)\/index$/gm,(_,m)=>m)
		}

		return completeUrl;
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(url => {
      	return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${url.startsWith(`${baseUrl}/courses`) ? 'weekly' : 'monthly'}</changefreq>
              <priority>${url.startsWith(`${baseUrl}/courses`) ? '1.0' : '0.7'}</priority>
            </url>
          `;
	}).join("\n")}
    </urlset>
  `;

	res.send(sitemap);
	
}