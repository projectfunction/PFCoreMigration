import {NextApiRequest, NextApiResponse} from "next";
import {NDEvent} from "../../utils/types";

const groups = [
	"Accessibility Nottingham, Digital Meet-Up", "Agile Nottingham", "All about Data Viz Nottingham",
	"Blockchain Nottingham", "Big Data Nottingham", "Craftin Notts (CMS)", "Cyber Security Nottingham Meetup",
	"Design Exchange Nottingham", "DevOps Notts", "dot net notts", "Drink Digital",
	"East Midlands Podcaster and Video Meetup", "Ideas in Play Entrepreneurs Lunch", "Ladies That UX Nottingham",
	"Ministry of Testing - Nottingham", "Mobile Notts", "Nottingham Artificial Intelligence Meetup", "Nottingham AWS",
	"Nottingham Programmers", "Nottingham R User Group", "Notts Dev Workshop", "Notts Techfast", "Notts Rust",
	"Notts IoT", "NottsJS", "Notts PowerShell Usergroup", "PASS East Midlands", "PHPMinds", "Tech Nottingham",
	"UX Notts", "Web Notts", "Women In Tech Nottingham", "Homebrew Website Club"
];

async function getGroupInfo(groupName:string):Promise<NDEvent>{
	let req = await fetch(`https://notts-digital.phpminds.uk/index.php?group=${encodeURIComponent(groupName)}`).catch();
	return (req ? await req.json() : {});
}

export default async function(req:NextApiRequest, res:NextApiResponse){

	let responses = await Promise.all(groups.map(g => getGroupInfo(g)));

	let result = responses.filter(g => g.iso_date.trim().length > 0);

	res.json({
		count: result.length,
		data: result
	});

}