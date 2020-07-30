var express = require("express");
var app = express();
var bodyparser = require("body-parser");
const { response, request } = require("express");
const { text } = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var goods = [
    {
        "id": "1f",
        "name": "Ritik"
    },
    {
        "id": "2f",
        "name": "Sharma"
    }
];

app.get("/ing", function (request, response) {
    response.send(goods);
});

app.post("/ing", function (request, response) {
    var ing = request.body;
    if (!ing || ing.text === "") {
        response.status(500).send({ error: "Number bhar" })
    }
    else {
        goods.push(ing);
        response.status(200).send(goods);
    }


});

app.put('/ing/:idx', function (request, response) {

    var newText = request.body.name;

    if (!newText || newText === "") {
        response.status(500).send({ error: "You must provide ingredient text" })
    }
    else {
        for (var x = 0; x < goods.length; x++) {
            var ing = goods[x];
            if (ing.id === request.params.idx) {
                goods[x].name = newText;
                break;
            }
        }
        response.send(goods);
    }
});

app.listen(3000, function () {

    console.log("I am unbeatable");

})