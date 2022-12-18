export function addRecord<T>(
    obj: T, //
    path: Array<string | symbol>,
    value: unknown
): T {
    if (!path[0]) return;

    const clone = { ...obj };

    if (path.length === 1) clone[path[0]] = value;
    if (path.length > 1)
        clone[path[0]] = addRecord(clone[path[0]], path.slice(1), value);

    return clone;
}

/**
 * BELOW YOU MAY OBSERVE A MADE UP TEST.
 * SHOULD BE REPLACED WHEN WE WILL GET TO LESSON WITH TESTS.
 * use command below to run tests:
 * `yarn ts-node src/utils/addRecord.ts`

interface TheT {
    s: boolean;
    k: {
        o: string;
        i: {
            d: string;
            tt?: { y: string };
        };
    };
}
const origin: TheT = { s: true, k: { o: '❌', i: { d: '❌' } } };
let res = addRecord<TheT>(origin, ['s'], '✔');
res = addRecord<TheT>(res, ['k', 'o'], '✔');
res = addRecord<TheT>(res, ['k', 'i', 'd'], '✔');
res = addRecord<TheT>(res, ['k', 'i', 'tt', 'y'], '✔');
console.log(JSON.stringify(res, null, 2));
*/
