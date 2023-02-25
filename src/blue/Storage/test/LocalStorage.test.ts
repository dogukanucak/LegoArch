import { LocalStorage } from "../LocalStorage";

describe("LocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set an item in local storage", () => {
    const storage = new LocalStorage();
    storage.set("testKey", "testValue");
    expect(localStorage.getItem("testKey")).toBe('"testValue"');
  });

  it("should get an item from local storage", () => {
    const storage = new LocalStorage();
    storage.set("testKey", "testValue");
    expect(storage.get("testKey")).toBe("testValue");
  });

  it("should remove an item from local storage", () => {
    const storage = new LocalStorage();
    storage.set("testKey", "testValue");
    storage.remove("testKey");
    expect(localStorage.getItem("testKey")).toBe(null);
  });
});
