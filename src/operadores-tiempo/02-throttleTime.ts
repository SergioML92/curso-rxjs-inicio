import { asyncScheduler, debounceTime, from, fromEvent } from "rxjs";
import { distinctUntilChanged, map, pluck, tap, throttleTime } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(1000)
).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<PointerEvent>(input, 'keyup');

input$.pipe(
    tap(console.log),
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    //pluck('target', 'value')
    map(ev => ev?.target?.value),
    distinctUntilChanged()
).subscribe(console.log);
