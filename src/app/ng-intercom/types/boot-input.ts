export interface UserWithEmail {
    email?: string;
}

export interface UserWithUid {
    user_id?: string;
}

export interface Any {
    [propName: string]: any;
}

export interface DefaultBootInput {
    custom_launcher_selector?: string;
}

export type BootInput = ((UserWithEmail | UserWithUid) & DefaultBootInput & Any) | DefaultBootInput

