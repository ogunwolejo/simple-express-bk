import {IRouter, Router} from "express"

class MainRouter {
    public router: IRouter
    constructor() {
        this.router = Router({
            strict: true,
            caseSensitive: true,
        })
    }

    public addSubRouter(path: string, subRoute: IRouter) {
        this.router.use(path, subRoute)
    }

}

export default MainRouter
