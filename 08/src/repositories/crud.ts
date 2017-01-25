import * as Promise from "bluebird";
import * as http from "http";
import * as request from "request";

// ------------------------------------------------

function base(method: string, uri: string, data?: any) {
    const options = {
        baseUrl: "http://localhost:3001",
        body: data,
        method,
        uri,
        withCredentials: false,
    };

    return new Promise((resolve: any, reject: any) => {
        request(options, () => handleResponse.bind(resolve, reject));
    });
}

function handleResponse(resolve: any, reject: any, error: any, response: http.IncomingMessage, body: any) {
    const jsonType = "application/json";
    const typeHeader = response.headers ? response.headers["content-type"] : "";
    const isJson = typeHeader.indexOf(jsonType) !== -1;

    switch (response.statusCode) {
        case 200:
            const formatedBody = isJson ? JSON.parse(body) : body;
            resolve(formatedBody);
            break;

        default:
            console.log(response.statusCode, response.statusMessage, error);
            const err = new Error();
            err.message = error ? error.message : "Ops, something went wrong!";
            err.stack = error ? error.stack : "N/A";
            reject(err);
            break;
    }
}

// ------------------------------------------------

export function del(uri: string) {
    return base("DELETE", uri);
}

export function get(uri: string) {
    return base("GET", uri);
}

export function patch(uri: string) {
    return base("PATCH", uri);
}

export function post(uri: string) {
    return base("POST", uri);
}
