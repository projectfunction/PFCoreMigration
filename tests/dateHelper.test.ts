import {dateFormat, dateParse, timeFormat} from "../utils/dateHelper";

describe("dateParse", ()=>{

	test("returns properly converted Date object", ()=>{
		let val1 = dateParse("25/11/1993", "DD/MM/YYYY");
		let val2 = dateParse("25th feb 1993", "DD MMM YYYY");
		let val3 = dateParse("may 29th", "MMM DD");
		let val4 = dateParse("october 10th 2006", "MMMM DD YYYY");

		expect(val1.getDate()).toEqual(25);
		expect(val1.getMonth()).toEqual(11);
		expect(val1.getFullYear()).toEqual(1993);

		expect(val2.getDate()).toEqual(25);
		expect(val2.getMonth()).toEqual(1);
		expect(val2.getFullYear()).toEqual(1993);

		expect(val3.getDate()).toEqual(29);
		expect(val3.getMonth()).toEqual(4);

		expect(val4.getDate()).toEqual(10);
		expect(val4.getMonth()).toEqual(9);
		expect(val4.getFullYear()).toEqual(2006);
	});

	test("throws error when format doesn't match input", ()=>{

		expect(()=>{
			dateParse("october 10th 2006", "MMMM DD");
		}).toThrow("The dateString provided cannot be matched by the format specified");

	});

});

describe("dateFormat", ()=>{

	test("formats date correctly", ()=>{

		let exampleDate = new Date(2020, 1, 19, 20,32, 0);

		let exampleDate2 = new Date("2021-03-12T18:30:00.000Z");

		expect(dateFormat(exampleDate, "DD MM YYYY")).toEqual("19 02 2020");
		expect(dateFormat(exampleDate, "DD MMM YYYY")).toEqual("19 feb 2020");
		expect(dateFormat(exampleDate, "DD M YYYY")).toEqual("19 2 2020");

		expect(dateFormat(exampleDate, "MMMM DD YYYY")).toEqual("february 19 2020");
		expect(dateFormat(exampleDate, "DD MMM YY")).toEqual("19 feb 20");
		expect(dateFormat(exampleDate, "DD M YY")).toEqual("19 2 20");

		expect(timeFormat(exampleDate, "hh:mm")).toEqual("20:32");
		expect(dateFormat(exampleDate, "DD")).toEqual("19");

		expect(dateFormat(exampleDate2, "D MMM YYYY")).toEqual("12 mar 2021");

	});

});