import { RxJsAdapter } from "@green/Services/Http/Adapters/RxJSAdapter/RxJsAdapter";
import { HttpClient } from "@green/Services/Http/HttpClient";
import { ConsoleLogger } from "@green/Services/Logger/ConsoleLogger";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import DI_CONTAINER from "@red/IoC/di.container";

class AppInjector {
  inject(): void {
    DI_CONTAINER.bind("ConsoleLogger").to(ConsoleLogger);

    DI_CONTAINER.bind(HTTP_TOKENS.HttpClient).to(HttpClient);
    DI_CONTAINER.bind(HTTP_TOKENS.HttpAdapter).to(RxJsAdapter);
  }
}

export default new AppInjector();
