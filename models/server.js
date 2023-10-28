const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.userPATH = '/home/users'


        //middleware
        this.middleware();

        this.routes();
    }

    middleware() {

        //Cors
        this.app.use(cors());

        //Parse and read body
        this.app.use(express.json());

        //Serve static files
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPATH, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('App Running on Port: ', this.PORT);
        });
    }
}


module.exports = Server;