import { ILoggerObserver } from "./ILoggerObserver";

export interface ILoggerSubject {
  attach(observer: ILoggerObserver): void;
  detach(observer: ILoggerObserver): void;
  notify(): void;
}
