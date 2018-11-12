export interface BootInput {
    custom_launcher_selector?: string;
    user_id?: string;
    email?: string;
    /**
     * If no app_id is passed, the value on config will be used
     */
    app_id?: string;
    [propName: string]: any;
}
