import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils functions tests", () => {
  test("getCurrentYear should return the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  test("getFooterCopy should return the correct string when isIndex is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test("getFooterCopy should return the correct string when isIndex is false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  test("getLatestNotification should return the correct notification string", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});