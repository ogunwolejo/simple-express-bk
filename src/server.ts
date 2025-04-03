import express from "express";
import cors from "cors";
import helmet from "helmet";

import MainRouter from "./routes";
import AuthRouter from "./routes/auth.router";

class Server {
    private app: express.Application
    private mainRouter: MainRouter

    constructor() {
        this.app = express();
        this.mainRouter = new MainRouter();
    }

    public initialize() {
        this.middleware()

        // Calling the sub-router module
        const authRouter = new AuthRouter().router
        this.mainRouter.addSubRouter("/auth", authRouter)

        this.app.use("/api", this.mainRouter.router)

        this.startup()
    }

    private middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({
            credentials: true,
            methods: ["POST", "PATCH", "PUT", "GET", "OPTIONS", "DELETE"],
            origin: "*",
        }))
        this.app.use(helmet())
    }

    private startup() {
        const port = Number(process.env.PORT) || 3000;
        this.app.listen(port, (err) => {
            if (err) {
                throw err
            }

            console.log(`Server has started at port ${process.env.PORT}`)
        })
    }

}

export default Server
