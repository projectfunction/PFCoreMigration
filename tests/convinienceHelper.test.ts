
import {isEmailFormatValid, isEmptyOrUndefined, isNothing, isNullOrUndefined, randomString} from "../utils/convinienceHelper";

describe("isEmailFormatValid", ()=> {

	test("returns true on valid emails", ()=>{
		expect(isEmailFormatValid("test@email.com")).toBeTruthy();
		expect(isEmailFormatValid("test.user@email.com")).toBeTruthy();
		expect(isEmailFormatValid("test+user@email.com")).toBeTruthy();
		expect(isEmailFormatValid("test.user+a@email.com")).toBeTruthy();
		expect(isEmailFormatValid("t@email.com")).toBeTruthy();
		expect(isEmailFormatValid("t@sub.email.com")).toBeTruthy();
		expect(isEmailFormatValid("t2@sub.dub.email.com")).toBeTruthy();
		expect(isEmailFormatValid("t3@email.com")).toBeTruthy();
		expect(isEmailFormatValid("terminator@email.co")).toBeTruthy();
	});

	test("returns false on invalid emails", ()=>{
		expect(isEmailFormatValid(".test@email.com")).toBeFalsy();
		expect(isEmailFormatValid("+12test.user@email.com")).toBeFalsy();
		expect(isEmailFormatValid("12test.user@email.")).toBeFalsy();
		expect(isEmailFormatValid("12test..user@email.com")).toBeFalsy();
		expect(isEmailFormatValid("test.user+@email.com")).toBeFalsy();
		expect(isEmailFormatValid("test.user++abc@email.com")).toBeFalsy();
	});

});

describe("isNothing", ()=>{

	test("returns true on non and/or empty values", ()=>{
		expect(isNothing(null)).toBeTruthy();
		expect(isNothing(undefined)).toBeTruthy();
		expect(isNothing(false)).toBeTruthy();
		expect(isNothing(0)).toBeTruthy();
		expect(isNothing("")).toBeTruthy();
		expect(isNothing([])).toBeTruthy();
		expect(isNothing({})).toBeTruthy();
	});

	test("returns false on values", ()=>{
		expect(isNothing(1)).toBeFalsy();
		expect(isNothing(12341)).toBeFalsy();
		expect(isNothing("-")).toBeFalsy();
		expect(isNothing("0")).toBeFalsy();
		expect(isNothing([1, 2])).toBeFalsy();
		expect(isNothing({age: 12})).toBeFalsy();
	});

});

describe("isNullOrUndefined", ()=>{

	test("returns true on null or undefined values", ()=>{
		expect(isNullOrUndefined(null)).toBeTruthy();
		expect(isNullOrUndefined(undefined)).toBeTruthy();
	});

	test("returns false on non-null and non-undefined values", ()=>{
		expect(isNullOrUndefined(false)).toBeFalsy();
		expect(isNullOrUndefined(0)).toBeFalsy();
	});

});

describe("isEmptyOrUndefined", ()=>{

	test("returns true on empty values and undefined", ()=>{
		expect(isEmptyOrUndefined(undefined)).toBeTruthy();
		expect(isEmptyOrUndefined("")).toBeTruthy();
		expect(isEmptyOrUndefined([])).toBeTruthy();
		expect(isEmptyOrUndefined({})).toBeTruthy();
		expect(isEmptyOrUndefined(null)).toBeTruthy();
	});

	test("returns false on non-empty defined values", ()=>{
		expect(isEmptyOrUndefined(false)).toBeFalsy();
		expect(isEmptyOrUndefined(true)).toBeFalsy();
		expect(isEmptyOrUndefined("0")).toBeFalsy();
		expect(isEmptyOrUndefined([1, 2])).toBeFalsy();
		expect(isEmptyOrUndefined({age: 12})).toBeFalsy();
	});

});

describe("randomString", ()=>{
	const isArrayUnique = array => Array.isArray(array) && new Set(array).size === array.length;

	test("returns random-ish values when called multiple times", ()=>{
		let arr = [];
		let values = arr.map(_ => randomString(12));
		expect(isArrayUnique(values)).toBeTruthy();
	});

	test("returns random-ish values that are exactly 18 chars long", ()=>{
		let arr = [];
		let values = arr.map(_ => randomString());
		values.forEach(v => {
			expect(v.length).toEqual(18);
		});
	});

})