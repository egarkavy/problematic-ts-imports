import { Injectable } from "@angular/core";
import { initialize as LDInitialize, LDClient } from 'launchdarkly-js-client-sdk';


@Injectable()
export class LaunchDarklyService {
    public doStuff(): void {
        const client = LDInitialize("", {}, {
            hash: "",
            bootstrap: {},
        });
    }
}