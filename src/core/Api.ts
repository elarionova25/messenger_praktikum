enum METHODS {
    GET = 'GET',
    POST =  'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

let url = 'https://url/';

type Options = {
    headers: (name: string) => (string | null);
    method: METHODS;
    timeout: number;
    data?: any;
}


function queryStringify(data:object) {
    let string = Object.entries(data);
    let resultString = '';
    string.map(function ([key, value]) {
        resultString = resultString + '?' + key + '=' + value;
    });
    return resultString;
}

class HTTPTransport {
    get = (url:string, options = {}) => {
        return this.request(url, {
            ...options, method: METHODS.GET,
            timeout: 5000,
            headers: function (name: string): string | null {
                throw new Error("Function not implemented.");
            }
        });
    };

    request = (url:string, options: Options) => {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(options.method, url);

            options.headers = xhr.getResponseHeader;

            xhr.responseType = 'json';

            if(options.method === METHODS.GET || !options.data){
                xhr.send();
            } else {
                xhr.send(JSON.stringify(options.data));
            }

            xhr.timeout = options.timeout;
            xhr.ontimeout = reject;
            xhr.onerror = reject;
            xhr.onabort = reject;

            xhr.onload = function () {
                let responseObj = xhr.response;
                queryStringify(responseObj);
            };
        })
    };
}

new HTTPTransport().get(url);

