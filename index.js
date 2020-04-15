const express = require("express");
const basicAuth = require('express-basic-auth');
const app = express();
const jsonParser = express.json();

const logger = require('rufus');
logger.addHandler(new logger.handlers.File('simplerest.log'));

app.use(basicAuth({
    users: {'testUser': 'testPassword'}, // Login and password
    unauthorizedResponse: getUnauthorizedResponse
}));

function getUnauthorizedResponse(req) {
    let response = {
        resp_status: 'error',
        error: 'Unauthorized'
    };
    return response;
}

app.post("/calls/events", jsonParser, (req, res, next) => {
    console.log(req.body);
    logger.info(req.body);

    let response = {
        resp_status: 'ok',
        error: ''
    };
    res.json(response);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});