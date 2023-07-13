const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const htmlRender = require('./render');
function Router() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
}

Router.prototype.initialize = function () {
    this.setupMiddleware();
    this.setupServer();
};

Router.prototype.setupMiddleware = function () {
    this.app.disable('etag');
    this.app.enable('trust proxy');
    this.app.use(compression());
    this.app.engine('html', require('ejs').renderFile);
    this.app.use(bodyParser.json({ limit: '16mb' }));
    this.app.use(
        bodyParser.urlencoded({
            limit: '16mb',
            extended: true,
            parameterLimit: 50000,
        })
    );
    this.app.set('views', './seeds');
    this.app.set('view engine', 'ejs');
    this.app.use(express.static('./seeds'));
    this.app.use(this.routeConfig);
    this.app.use('/', htmlRender);
    this.app.use('*', this.routeHandler);
    this.app.use(this.logErrors);
    this.app.use(this.errorHandler);
};

Router.prototype.setupServer = function () {
    this.httpServer = http.Server(this.app);
    this.httpServer.timeout = 300000;
    this.httpServer.listen(process.env.PORT, '0.0.0.0', () =>
        log.green(`Spinning on ${process.env.PORT}`)
    );
};

Router.prototype.routeConfig = function (req, res, next) {
    req.sRemoteAddress =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (req.path === '/ping') return res.status(200).send({});
    res.reply = ({ code, message }, data = {}, header = undefined) => {
        res.status(code).header(header).json({ message, data });
    };
    next();
};

Router.prototype.routeHandler = function (req, res) {
    return res.redirect('/404');
};

Router.prototype.logErrors = function (err, req, res, next) {
    log.error(`${req.method} ${req.url}`);
    log.error('body -> ', req.body);
    log.error(err.stack);
    return next(err);
};

Router.prototype.errorHandler = function (err, req, res, next) {
    return res.redirect('/500');
};

module.exports = new Router();
