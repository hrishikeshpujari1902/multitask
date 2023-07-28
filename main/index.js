const cluster = require('cluster');

//is the file being executed i master mode
if (cluster.isMaster) {
    //index.js to be executed again in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();


} else {
    //im a child im going to act like a  
    const express = require('express');

    const app = express();
    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {

        }
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi There!');

    });
    app.get('/fast', (req, res) => {

        res.send('This was fast!');

    });
    app.listen(3000);
}