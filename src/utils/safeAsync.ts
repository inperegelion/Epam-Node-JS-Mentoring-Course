export async function safeAsync<T = void>(
    func: (...args: any) => Promise<T>,
    args?: any[]
): Promise<[T, Error?]> {
    let response, error: Error;
    try {
        if (args) response = await func(...args);
        response = await func();
        return [response];
    } catch (caughtError) {
        error = new Error(caughtError);
        return [, error];
    }
}
