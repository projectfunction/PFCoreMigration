const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

export function dateParse(dateString:string, format:string="DD MM YYYY", failQuietly:boolean=false){
	let formatParts = format.split(/[^A-Za-z]+/gm);
	let dateStringParts = dateString.split(/[^A-Za-z0-9]+/gm);
	if (formatParts.length !== dateStringParts.length){
		if (failQuietly === false) throw new Error("The dateString provided cannot be matched by the format specified");
		return new Date();
	}

	let dateStructure = {
		day: (new Date()).getUTCDate(),
		month: (new Date()).getUTCMonth(),
		year: (new Date()).getUTCFullYear(),
		hour: 0,
		minutes: 0,
		seconds: 0
	}

	for (let i = 0; i < formatParts.length; i++){
		switch (formatParts[i]){
			case "DD":
				dateStructure.day = Number(dateStringParts[i].replace(/[^0-9]+/gm,''));
				break;
			case "MM":
				dateStructure.month = Number(dateStringParts[i]);
				break;
			case "MMM":
				let lowerMatch = months.filter(m => m.substr(0,3) === dateStringParts[i].toLowerCase())[0];
				dateStructure.month = months.indexOf(lowerMatch);
				break;
			case "MMMM":
				dateStructure.month = months.indexOf(dateStringParts[i].toLowerCase());
				break;
			case "YY":
				dateStructure.year = Number(`20${dateStringParts[i]}`);
				break;
			case "YYYY":
				dateStructure.year = Number(dateStringParts[i]);
				break;
			case "hh":
				dateStructure.hour = Number(dateStringParts[i]);
				break;
			case "mm":
				dateStructure.minutes = Number(dateStringParts[i]);
				break;
			case "ss":
				dateStructure.seconds = Number(dateStringParts[i]);
				break;
		}
	}

	return new Date(dateStructure.year, dateStructure.month, dateStructure.day, dateStructure.hour, dateStructure.minutes, dateStructure.seconds);
}

export function dateFormat(date:string, format:string)
export function dateFormat(date:Date, format:string)
export function dateFormat(inputDate:Date|string, format:string="DD MM YYYY"){
	let date:Date = (typeof inputDate === "string" || <any>inputDate instanceof String) ? new Date(inputDate) : <Date>inputDate;

	return format
		.replace(/(MMMM)/gm, months[date.getUTCMonth()])
		.replace(/(MMM)/gm, months[date.getUTCMonth()].substr(0, 3))
		.replace(/(DD)/gm, date.getUTCDate().toString().padStart(2, "0"))
		.replace(/(MM)/gm, (date.getUTCMonth() + 1).toString().padStart(2, "0"))
		.replace(/(YYYY)/gm, date.getUTCFullYear().toString())
		.replace(/(YY)/gm, date.getUTCFullYear().toString().substr(2))
		.replace(/(D)/gm, date.getUTCDate().toString())
		.replace(/(M)/gm, (date.getUTCMonth() + 1).toString())
}

export function timeFormat(time:Date, format:string="hh:mm:ss"){
	let m = time.getUTCHours() > 12 ? "pm" : "am";

	return format
		.replace(/(hh)/gm, time.getUTCHours().toString().padStart(2, "0"))
		.replace(/(mm)/gm, time.getUTCMinutes().toString().padStart(2, "0"))
		.replace(/(ss)/gm, time.getUTCSeconds().toString().padStart(2, "0"))
		.replace(/(h)/gm, time.getUTCHours().toString())
		.replace(/(m)/gm, time.getUTCMinutes().toString())
		.replace(/(s)/gm, time.getUTCSeconds().toString())
		.replace(/(x)/gm, m)
}