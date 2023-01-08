import { IStorage } from "@yellow/Interfaces/Storage/IStorage";

export class LocalStorage implements IStorage {
  set(key: string, value: string | object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): string | object {
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
