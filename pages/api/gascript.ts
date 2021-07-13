import {NextApiRequest, NextApiResponse} from "next";
import {calculateClientId} from "../../utils/convinienceHelper";

export default async function(req:NextApiRequest, res:NextApiResponse){

	let clientId = calculateClientId({req});

	let content = await fetch("https://www.google-analytics.com/analytics.js").then(o => o.text());

	res.status(200).send(`
window['ga']=window['ga']||function(){
	(window['ga'].q=window['ga'].q||[]).push(arguments)
};
window['ga'].l=1*new Date();

window['gClientId'] = 'nextsite-${clientId}';
	
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