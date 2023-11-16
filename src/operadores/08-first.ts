import { first, fromEvent, map, take, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(console.log), 
    //take(1)
    //first()

    // first(event => event.clientY >= 150)

    /*map(event => ({
        clientY: event.clientY,
        clientX: event.clientX
    }))*/
    map(({clientX, clientY}) => ({clientY, clientX})),
    //first(event => event.clientY >= 150),
    first(({clientY}) => clientY >= 150)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});