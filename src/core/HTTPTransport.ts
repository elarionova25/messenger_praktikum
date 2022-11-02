export enum Method {
    Get = 'Get',
    Post = 'Post',
    Put = 'Put',
    Patch = 'Patch',
    Delete = 'Delete'
}

type Options = {
    method: Method;
    data?: any;
};

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get<Response>(path = '/'): Promise<Response> {
        return this.request<Response>(this.endpoint + path);
    }

    public post<Response = void>(path: string, data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Post,
            data,
        });
    }

    public put<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Put,
            data,
        });
    }

    public patch<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Patch,
            data,
        });
    }

    public delete<Response>(path: string, data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Delete,
            data,
        });
    }

    private request<Response>(url: string, options: Options = {method: Method.Get}): Promise<Response> {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onreadystatechange = (e) => {

                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject({reason: 'abort'});
            xhr.onerror = () => reject({reason: 'network error'});
            xhr.ontimeout = () => reject({reason: 'timeout'});

            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (method === Method.Get || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}

/**
 * @warning Мой код
 */
// import {queryStringify} from "../helpers/queryStringify";
//
// const METHODS = {
//     GET: 'GET',
// };
//
// class HTTPTransport {
//     get = ({url, options = {}}: { url: any, options?: {} }) => {
//         const response = this.request({url: url, options: {...options, method: METHODS.GET}, timeout: options.timeout});
//         response.then(
//             result => {
//                 options.data = queryStringify(result.response)
//             },
//             error => console.log(error)
//         )
//         return response;
//     };
//
//     options = {
//         timeout: null,
//         data: {},
//         headers: {},
//     }
//
//     request = ({url, options, timeout = 5000}: { url: string, options: any, timeout?: number }) => {
//         const { method, data } = options;
//
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             const isGet = method === METHODS.GET;
//
//             xhr.open(method,
//                 isGet && !!data
//                     ? `${url}${queryStringify(data)}`
//                     : url,);
//             xhr.responseType = 'json';
//
//             xhr.onload = function () {
//                 resolve(xhr);
//             };
//
//             xhr.onabort = reject;
//             xhr.onerror = reject;
//
//             xhr.timeout = timeout;
//             xhr.ontimeout = reject;
//
//             if (method === METHODS.GET || !data) {
//                 xhr.send();
//             } else {
//                 xhr.send(data);
//             }
//         })
//     };
// }
