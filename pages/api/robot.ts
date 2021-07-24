import {NextApiRequest, NextApiResponse} from "next";

export default async function(req:NextApiRequest, res:NextApiResponse){
	res.status(200).send([
		"User-agent: *",
		"Sitemap: https://projectfunction.io/sitemap.xml"
	].join("\n"));
}