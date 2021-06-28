import {markup} from "../utils/reactHelper";

describe("markup", ()=>{

	test("returns properly structured raw html object", ()=>{

		expect(markup("<b>hello</b> world")).toEqual({
			__html: "<b>hello</b> world"
		});

	});

});