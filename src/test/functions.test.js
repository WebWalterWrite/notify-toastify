import { mailProvider } from "../utils/functions/utils.functions";

describe("test function mailProvider", () => {
	const url = {
		gmail: "https://www.google.com/gmail/",
		yahoo: "https://mail.yahoo.com/",
		microsoft: "https://login.live.com/"
		//... other provider
	};
 
 // test personal email
	test(" provider not include", () =>
		expect(mailProvider("sam@mywebsite.com")).toBeNull());
 
 // test gmail mail
	test("provider gmail is include", () =>
		expect(mailProvider("samy@gmail.com")).toEqual(
			expect.stringContaining(url.gmail)
		));
 // test yahoo mail
	test("provider yahoo is not equal", () =>
		expect(mailProvider("samy@iyahoo.com")).not.toEqual(
			expect.stringContaining(url.yahoo)
  ));
 // test microsoft mail
 test("provider microsoft is include", () =>
 expect(mailProvider('samy@live.fr')).toEqual(expect.stringContaining(url.microsoft)))
});
