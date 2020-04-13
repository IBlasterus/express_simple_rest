const express = require("express");
const app = express();
const jsonParser = express.json();

app.post("/calls/events", jsonParser, (req, res, next) => {
    console.log(req.body);

    let response = {
        resp_status: 'ok',
        error: ''
    };
    res.json(response);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});