import dotenv from "dotenv"
import Server from "./src/server"

class Main extends Server {
    constructor() {
        super();

        dotenv.config({
            debug: true,
            encoding: "utf-8",
        })

        this.initialize()
    }

}

new Main()
