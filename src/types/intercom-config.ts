export interface IntercomConfig {

    /**
     * Your intercom App ID
     */
    app_id: string;

    /**
     * Customize left or right position of messenger
     */
    alignment?: 'left' | 'right';

    /**
     * Customize horizontal padding
     */
    horizontal_padding?: number;

    /**
     * Customize vertical padding
     */
    vertical_padding?: number;
}
