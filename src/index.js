'use strict'
import cuid from 'cuid';

export default (options) => {
    options = options || {};

    if (options.constructor.name === 'IncomingMessage') {
        throw new Error('You might have used the module like `app.use(requestCuid)`, but it should be `app.use(requestCuid()`');
    }

    return function id(request, response, next) {
        const id = cuid();

        response.header('x-request-id', id);
        response.id = id;

        next();
    }
}