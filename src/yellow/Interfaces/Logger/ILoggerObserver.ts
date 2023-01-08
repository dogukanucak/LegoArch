import { Log } from "@red/Types/Logger/LogType";

export interface ILoggerObserver {
  update(log: Log): void;
}
