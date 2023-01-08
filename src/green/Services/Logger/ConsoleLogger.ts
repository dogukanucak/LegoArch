import { Log } from "@red/Types/Logger/LogType";
import { AbstractLogger } from "@yellow/Abstractions/Logger/AbstractLogger";

export class ConsoleLogger extends AbstractLogger {
  public update(log: Log) {
    console.log(log.message);
  }
}
