export function sortByField<T>(fieldName: string) {
    return (a: T, b: T) => {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    };
}
