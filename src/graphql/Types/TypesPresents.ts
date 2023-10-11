export interface TypesGetPresentsResponse {
    GetPresents: {
        id: number;
        name: string;
        urlImg: string;
        link: string;
        price: string;
        isSelected: boolean;
        userId: number;
    }[]
}

export interface TypesGetPresentsResponse {
    GetPresentsByUserId: {
        id: number;
        userId: number;
        presentId: number;
        user: {
            id: number;
            name: string;
        }
        present: {
            id: number;
            name: string;
        }
    }[]
}

export interface TypesSetPresentResponse {
    SetPresent: {
        id: number;
        name: string;
    }
}

export interface TypesPutPresentResponse {
    PutPresent: {
        id: number;
        name: string;
    }
}

export interface TypesDeletePresentResponse {
    DeletePresent: {
        id: number;
        name: string;
    }
}