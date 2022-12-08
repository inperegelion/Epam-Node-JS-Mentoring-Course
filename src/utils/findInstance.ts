/**
 *
 * @param array of instances where utility will find the wanted one for you
 * @param fieldName utility will search an instance by this param
 * @param wantedFieldValue expected value of a `feildName`
 * @returns array of 2 elements, `index` of an instance in array, and a found `instance` itself
 */
export function findInstance<T, P>(
    array: T[],
    fieldName: string,
    wantedFieldValue: P
): [index: number, instance?: T] {
    let index: number;
    const instance = array.find((instance, i) => {
        if (instance[fieldName] === wantedFieldValue) {
            index = i;
            return true;
        }
    });
    if (instance) return [index, instance];
    return [-1];
}