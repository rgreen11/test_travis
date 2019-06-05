const express = require('express')
const app = express();

app.get('/', (request, response) => {
    response.status(200).json({
        'msg': `Successul request`,
    });
});

const sum = (a,b) => a + b;

module.exports = {
    app,
    sum,
}