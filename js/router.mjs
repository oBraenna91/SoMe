import * as listeners from "../js/modules/handlers/index.mjs";

/**
 * This function will select which of the listeners that 
 * will be active by watching the location.pathname.
 */
export function router() {
    const path = location.pathname;
    switch (path) {
        case '/index.html':
            listeners.setLoginFormListener();
        break;
        case '/register.html':
            listeners.setRegisterFormListener();
        break;
        case '/profile.html':
            listeners.setCreatePostFormListener();
        break;
        case '/home.html':
            listeners.setCreatePostFormListener();
            listeners.filterFeed();
        case '/edit.html':
            listeners.setUpdateFormListener();
            listeners.setRemovePostListener();
        break;
        case '/search.html':
            listeners.setSearchPostFormListener();
        break;
        case '/logout.html':
            listeners.setLogOutFormListener();
        break;
    }
    
}
