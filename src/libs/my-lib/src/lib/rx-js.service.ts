import { Injectable } from "@angular/core";
import { debounceTime, delay, exhaustMap, interval, map, of, switchMap, tap, timer } from "rxjs";


@Injectable()
export class RxJsService {
    public doStuff(): void {
        of(10).pipe(
            delay(1),
            debounceTime(10),
            tap(() => {}),
            map(() => {}),
            switchMap(() => timer(10)),
            exhaustMap(() => of(10))
        )
    }
}