import { catchError, of } from 'rxjs';
import {AjaxError, ajax} from 'rxjs/ajax';

//const url = 'https://httpbin.org/delay/1';
const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

/*const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);
obs$.subscribe(data => console.log('getJSON:', data));
obs2$.subscribe(data => console.log('ajax:', data));
*/

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);


obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('getJSON:', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete')
});

