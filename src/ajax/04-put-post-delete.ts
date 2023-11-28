import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

//ajax.post(url, {
/*ajax.put(url, {
        id: 1,
    nombre: 'Fernando'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log);*/

ajax({
    url: url,
    method: 'POST',
    //method: 'PUT'
    headers: {
        'mi-token': 'ABC13'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe(console.log);
