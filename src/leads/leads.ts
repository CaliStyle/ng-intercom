import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { CONFIG } from '../shared/config-token';
import { IntercomConfig } from '../types/intercom-config';
import { LeadInput } from './lead-input';
import { LeadsListResponse } from './leads-list-reponse';
import { Observable } from 'rxjs';
import { Options } from '../shared/options';

/**
 * @description A provider with every interfaces for Leads
 * @export
 * @class Intercom
 */
@Injectable()
export class Leads {
    constructor(
        public http: HttpClient,
        public options: Options
    ) { }

    create(lead: LeadInput): Observable<object> {
        if (lead.user_id) {
            console.warn('You\'re trying to assign a user_id to a new user. To update a user, please use the Leads.update method.')
            delete lead.user_id;
        }
        return this.http.post('https://api.intercom.io/contacts', lead, this.options.getOptions())
            .map((res: HttpResponse<object>) => res.body)
    }

    get(leadId: string) {
        return this.http.get(`https://api.intercom.io/contacts/${leadId}`, this.options.getOptions())
            .map((res: HttpResponse<object>) => res.body)
    }

    update(lead: LeadInput) {
        if (!lead.user_id) {
            return this.http.post('https://api.intercom.io/contacts', lead, this.options.getOptions())
                .map((res: HttpResponse<object>) => res.body)
        } else {
            throw new Error('You did not pass in the required user_id to the Leads.update method. Please use Leads.create to create a fresh lead.');
        }
    }

    list(): Observable<LeadsListResponse> {
        return this.http.get('https://api.intercom.io/contacts', this.options.getOptions())
            .map((res: HttpResponse<LeadsListResponse>) => res.body);
    }

    listByEmail(email: string): Observable<LeadsListResponse> {
        return this.http.get(`https://api.intercom.io/contacts?email=${email}`, this.options.getOptions())
            .map((res: HttpResponse<LeadsListResponse>) => res.body);
    }

    delete(leadId: string): Observable<object> {
        return this.http.delete(`https://api.intercom.io/contacts/${leadId}`, this.options.getOptions())
            .map((res: HttpResponse<object>) => res.body);
    }

    convert(leadId: string, user): Observable<object> {
        return this.http.post(`https://api.intercom.io/contacts/convert`,
            { contact: { user_id: leadId }, user },
            this.options.getOptions())
            .map((res: HttpResponse<object>) => res.body);
    }

    scroll(userId?: string): Observable<LeadsListResponse> {
        if (userId) {
            return this.http.get(`https://api.intercom.io/contacts/scroll?scroll_param=${userId}`, this.options.getOptions())
                .map((res: HttpResponse<LeadsListResponse>) => res.body);
        } else {
            return this.http.get(`https://api.intercom.io/contacts/scroll`, this.options.getOptions())
                .map((res: HttpResponse<LeadsListResponse>) => res.body);
        }
    }


}
