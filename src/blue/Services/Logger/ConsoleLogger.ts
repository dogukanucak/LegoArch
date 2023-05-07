import { Log } from "@red/Types/Log/LogType";
import { AbstractLogger } from "@green/Services/BaseLogger/AbstractLogger";
import { injectable } from "inversify/lib/annotation/injectable";

@injectable()
export class ConsoleLogger extends AbstractLogger {
  public update(log: Log) {
    console.log(log.message);
  }
}
