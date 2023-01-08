import { ILoggerSubject } from "@yellow/Interfaces/Logger";
import { AbstractLogger } from "./AbstractLogger";
import { Log } from "@red/Types/Logger/LogType";

export class Logger implements ILoggerSubject {
  private observers: AbstractLogger[] = [];
  private log: Log;

  public attach(observer: AbstractLogger) {
    this.observers.push(observer);
  }

  public detach(observer: AbstractLogger) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  public notify() {
    for (const observer of this.observers) {
      observer.update(this.log);
    }
  }

  public write(log: Log) {
    this.log = log;
    this.notify();
  }
}
