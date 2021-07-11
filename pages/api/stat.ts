import {NextApiRequest, NextApiResponse} from "next";
import {calculateClientId} from "../../utils/convinienceHelper";

export default async function(req:NextApiRequest, res:NextApiResponse){

	let clientId = calculateClientId({ req });

	res.status(200).json({
		client: clientId
	});

}