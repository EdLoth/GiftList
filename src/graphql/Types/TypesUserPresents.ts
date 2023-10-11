export interface TypesAssociationUserPresentResponse {
    associationUserPresent: {
        id: number;
        presentId: number;
        userId: number;
    }
}

export interface TypesDeleteAssociationUserPresentResponse {
    deleteAssociationUserPresent: {
        id: number;
        present: {
            id: number;
            name: string;
        }
        user: {
            email: string;
            password: string;
        }
    }
}

