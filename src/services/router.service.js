import { getLocalStorage } from './localstorage.service';
import router              from "@/router";

const authCheck = () => {
    const userData = getLocalStorage("user_token");
    
    if (userData == null) {
        
        router.push('/login');
        return false;
    } 
}

const loginCheck = async (to, from, next) => {
    const userData = getLocalStorage("user_token");

    if (userData != null) {
        next({path: '/login'});
    }

    next();
}

export { authCheck,loginCheck };