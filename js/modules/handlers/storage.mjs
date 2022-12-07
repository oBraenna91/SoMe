export function saveToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocal(key){
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}

export function itemFromLocal(key){
    const value = localStorage.getItem(key);
    return value;
}

export function deleteFromLocal(key) {
    localStorage.removeItem(key);
}