import {queryStringify} from "../helpers/queryStringify";

const METHODS = {
    GET: 'GET',
};

class HTTPTransport {
    get = ({url, options = {}}: { url: any, options?: {} }) => {
        const response = this.request({url: url, options: {...options, method: METHODS.GET}, timeout: options.timeout});
        response.then(
            result => {
                options.data = queryStringify(result.response)
            },
            error => console.log(error)
        )
        return response;
    };

    options = {
        timeout: null,
        data: {},
        headers: {},
    }

    request = ({url, options, timeout = 5000}: { url: string, options: any, timeout?: number }) => {
        const { method, data } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,);
            xhr.responseType = 'json';

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        })
    };
}
