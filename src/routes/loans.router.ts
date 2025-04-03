import {IRouter, Router} from "express"


class LoanRouter {
    public router: IRouter

    constructor() {
        this.router = Router();

        this.router.get("/loans", (req, res) => {})
        this.router.get("/logout", (req, res) => {})
    }
}

export default LoanRouter
