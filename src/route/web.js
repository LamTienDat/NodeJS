
import express from "express";
import homeController from "../controllers/homeController";


let router = express.Router();
let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)

    // rest api
    router.get("/ldat", (req, res) => {
        return res.send('ldat')
    })


    
    
    return app.use("/", router);
}
module.exports = initWebRoutes