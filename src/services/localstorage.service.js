function getLocalStorage(name) {
    try {
        return JSON.parse(localStorage.getItem(name));
    } catch (error) {
        return null;
    }
}

function saveLocalStorage(name,data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function removeLocalStorage(name) {
    localStorage.removeItem(name);
}

export { getLocalStorage,saveLocalStorage,removeLocalStorage }