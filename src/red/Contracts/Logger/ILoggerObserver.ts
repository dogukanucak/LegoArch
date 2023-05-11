import { Log } from "@red/Types/Log/LogType";

export interface ILoggerObserver {
  update(log: Log): void;
}
