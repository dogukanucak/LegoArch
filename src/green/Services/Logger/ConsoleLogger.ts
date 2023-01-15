import { Log } from "@red/Types/Logger/LogType";
import { AbstractLogger } from "@yellow/Abstractions/Logger/AbstractLogger";
import { injectable } from "inversify/lib/annotation/injectable";

@injectable()
export class ConsoleLogger extends AbstractLogger {
  public update(log: Log) {
    console.log(log.message);
  }
}
