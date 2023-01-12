import UserRoute from "@routes/user.route";
import IndexRoute from "@routes/index.route";
import { Routes } from "@interfaces/routes.interface";
const routerConf: Routes[]= [
    new IndexRoute(),
    new UserRoute(),
]
export default routerConf