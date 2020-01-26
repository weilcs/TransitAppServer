const HomeRouter = require('./route.home');

let API = '/api';

module.exports.applyRoutes = (app) => {
    app.use(API, FloorPlanRouter);
};