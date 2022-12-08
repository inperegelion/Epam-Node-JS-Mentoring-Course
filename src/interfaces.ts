export interface User extends UserCore {
    id: string;
    isDeleted: boolean;
}

export interface UserCore {
    login: string;
    password: string;
    age: number;
}

export interface Error {
    message: string;
}
