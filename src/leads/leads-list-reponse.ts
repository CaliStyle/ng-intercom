export interface LeadsListResponse {
    type: string;
    total_count: number;
    contacts: any[];
    pages: {
        next: string;
        page: number;
        per_page: number;
        total_pages: number;
    }
}