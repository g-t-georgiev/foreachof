/**
 * Makes a flattening recursive iteration through nested list 
 * structure, invoking a callback function for each non-list item.
 * The starting point is by default 0, but can be set at any valid index 
 * in the provided target list length range.
 * @param {Array<any>} target 
 * @param {(item: any) => void} callback 
 * @param {number} startIndex 
 */
export function forEachOf(target, callback, startIndex = 0) {
    const len = target.length;
    let i = startIndex;

    while (i < len) {
        const item = target[i++];
        if (Array.isArray(item)) {
            forEachOf(item, callback);
        } else {
            callback(item);
        }
    }
}