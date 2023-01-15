import { Log } from "@red/Types/Logger/LogType";
import { ILoggerSubject, ILoggerObserver } from "@yellow/Interfaces/Logger";
import { injectable } from "inversify";

@injectable()
export abstract class AbstractLogger implements ILoggerObserver {
  protected subject: ILoggerSubject;

  public attach(subject: ILoggerSubject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  public detach() {
    this.subject.detach(this);
    this.subject = null;
  }

  public abstract update(log: Log): void;
}
