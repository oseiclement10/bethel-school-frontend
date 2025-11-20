export type User = {
    id: number;
    first_name: string;
    other_names: string;
    full_name: string;
    email: string;
    phone_number: string;
    phone_code: string;
    status: boolean;
    address?: string;
    passport:string;
};
export interface AuthUser {
    user: User;
    token: string;
}


