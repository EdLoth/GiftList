
export interface TypesGetUserResponse {
    GetUsers: {
        id: number;
        name: string;
        email: string;
        password: string;
    }
}


export interface TypesLoginResponse {
    Login: {
        api_token: string;
        id: number;
        name: string;
    }
}

export interface TypesSetUserResponse {
    SetUser: {
        id: number;
        name: string;
    }
}
