import { Log } from "@red/Types/Logger/LogType";
import { AbstractLogger } from "@yellow/Abstractions/Logger/AbstractLogger";

export class FileLogger extends AbstractLogger {
  private filePath: string;

  constructor(filePath: string) {
    super();
    this.filePath = filePath;
  }

  public update(log: Log) {
    // Write message to file
    console.log("Simulate as if log is written in file: ", log.message);
  }
}
