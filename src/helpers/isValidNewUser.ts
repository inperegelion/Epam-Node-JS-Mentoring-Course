import { UserCore } from '../interfaces';

export function isValidNewUser(data: UserCore): boolean {
    if (!data.age || !data.login || !data.password) {
        return false;
    }
    return true;
}
