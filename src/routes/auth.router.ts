import {IRouter, Router} from "express"


class AuthRouter {
    public router: IRouter

    constructor() {
        this.router = Router();

        this.router.post("/login", (req, res) => {})
        this.router.get("/logout", (req, res) => {})
    }
}

export default AuthRouter
