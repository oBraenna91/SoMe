/**
 * This function stores items in the localstorage,
 * using key value pairs.
 * @param { string } key This will be the key of which to locate
 * the item later.
 * @param value This will be the value to store.(Value will be stringified)
 * @example
 * ```js
 * // Use this function to store items in the localstorage.
 * saveToLocal('name', 'Ola')
 * ```
 */
export function saveToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
/**
 * This function retrieves items from localstorage.
 * @param {string } key this will be the key in the key / value
 * pair you want to retrieve. 
 * @returns the value from the key / value pair parsed.
 * @example
 * ```js
 * // Use this function to retrieve items from localstorage.
 * getFromLocal('name');
 * returns 'Ola'
 */
export function getFromLocal(key){
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}
/**
 * This function deletes items from localstorage.
 * @param {string} key this will be the key in the key / value
 * pair you want to retrieve. 
 * @example
 * ```js
 * // Use this function to delete items from localstorage.
 * removeFromLocal('name');
 */
export function removeFromLocal(key) {
    localStorage.removeItem(key);
}
