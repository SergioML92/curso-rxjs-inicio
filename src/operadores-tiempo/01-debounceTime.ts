import { debounceTime, from, fromEvent } from "rxjs";
import { distinctUntilChanged, map, pluck, tap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000)
).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<PointerEvent>(input, 'keyup');

// target, value

input$.pipe(
    tap(console.log),
    debounceTime(1000),
    //pluck('target', 'value')
    map(ev => ev?.target?.value),
    distinctUntilChanged()
).subscribe(console.log);
