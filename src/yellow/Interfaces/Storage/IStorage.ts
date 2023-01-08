export interface IStorage {
  set(key: string, value: string | object): void;
  get(key: string): string | object;
  remove(key: string): void;
}
