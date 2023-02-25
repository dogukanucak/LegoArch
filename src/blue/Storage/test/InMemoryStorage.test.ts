import { InMemoryStorage } from "../InMemoryStorage";

describe("InMemoryStorage", () => {
  let storage: InMemoryStorage;

  beforeEach(() => {
    storage = new InMemoryStorage();
  });

  test("should set key-value pair", async () => {
    await storage.set("key", "value");

    expect(await storage.get("key")).toBe("value");
  });

  test("should get undefined for non-existing key", async () => {
    expect(await storage.get("non-existing-key")).toBeUndefined();
  });

  test("should remove key-value pair", async () => {
    await storage.set("key", "value");
    storage.remove("key");

    expect(await storage.get("key")).toBeUndefined();
  });
});
