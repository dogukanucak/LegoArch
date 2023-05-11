import { Log } from "@red/Types/Log/LogType";
import { ILoggerSubject, ILoggerObserver } from "@red/Contracts//Logger";
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
