import { IStorage } from "@yellow/Contracts/Storage/IStorage";

export class InMemoryStorage implements IStorage {
  private storage: { [key: string]: string | object } = {};

  public async set(key: string, value: string | object): Promise<void> {
    this.storage[key] = value;
  }

  public async get(key: string): Promise<string | object | undefined> {
    return this.storage[key];
  }

  public remove(key: string): void {
    delete this.storage[key];
  }
}
