const express = require('express');
const mysql = require('mysql');
const app = express();

let con = mysql.createConnection({
    host: "localhost",
    user: "survey_db_user",
    password: "password",
    database: "survey_db"
});

function sqlGetSurvey(callback, id) {
    con.query('SELECT * FROM Survey WHERE survey_id = ?;', [id], function(err, result) {
        if (err) throw err;
        callback(result);
    });
}

function sqlGetScale(callback, id) {
    con.query('SELECT * FROM Scale WHERE scale_id = ?;', [id], function(err, result) {
        if (err) throw err;
        callback(result);
    });
}

function sqlIncrementOption(callback, id, option) {
    let optionStr = getColumnName(option);
    console.log(option);
    if(optionStr != null) {
        con.query("UPDATE Scale SET " + optionStr + " = " + optionStr + " + 1 WHERE scale_id = ?;",
            [id],
            function(err, result) {
                if (err) throw err;
                callback(result);
            });
        //todo call error
    }
}

function getColumnName(option) {
    switch(option) {
        case '1':
            return 'option1';
        case '2':
            return 'option2';
        case '3':
            return 'option3';
        case '4':
            return 'option4';
        case '5':
            return 'option5';
        default:
            return null;

    }
}

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.route('/api/survey/:id').get((req, res) => {
    sqlGetSurvey(function(data) {
        res.send(data);
    }, req.params.id);
});

app.route('/api/scale/:id/vote/:option').get((req, res) => {
    sqlIncrementOption(function(data) {
        //todo
        res.send('id:' + req.params.id + ' option:' + req.params.option);
    }, req.params.id, req.params.option);
});

app.route('/api/scale/:id').get((req, res) => {
    sqlGetScale(function(data) {
        res.send(data);
    }, req.params.id);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});