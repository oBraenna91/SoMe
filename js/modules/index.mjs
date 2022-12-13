import * as posts from "../modules/api/posts/index.mjs";
import { setRegisterFormListener } from "../modules/handlers/register.mjs";
import { setLoginFormListener} from "../modules/handlers/login.mjs";

const path = location.pathname;

if (path === '/login.html') {
    setLoginFormListener();
} else if (path === '/register.html') {
    setRegisterFormListener();
}
