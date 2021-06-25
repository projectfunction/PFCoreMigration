import {NextApiRequest, NextApiResponse} from "next";
import {cyrb53, randomString} from "../../utils/convinienceHelper";
import {dateFormat} from "../../utils/dateHelper";


export default async function(req:NextApiRequest, res:NextApiResponse){

	let ip = req.headers["x-real-ip"] || "0.0.0.0";
	let ua = req.headers["user-agent"] || randomString(8);
	let ho = req.headers["host"] || "projectfunction.io";
	let lg = req.headers["accept-language"] || "en-US";
	let st = dateFormat(new Date(), "MMMM YYYY");

	let clientId = cyrb53([ip, ho, ua, lg, st].join(";")).toString(16);

	let content = await fetch("https://www.google-analytics.com/analytics.js").then(o => o.text());

	res.status(200).send(`
window['ga']=window['ga']||function(){
	(window['ga'].q=window['ga'].q||[]).push(arguments)
};
window['ga'].l=1*new Date();

window['gClientId'] = '${clientId}';
	
ga('create', 'UA-168556474-2', {
	'storage': 'none',
        'clientId': window['gClientId'],
        'storeGac': false,
    });

ga('set', 'anonymizeIp', true);
ga('set', 'transport', 'beacon');

ga('send', 'pageview');

${content}
`);

}