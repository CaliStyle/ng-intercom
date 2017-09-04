import { Inject, Injectable } from '@angular/core';

import { CONFIG } from './config-token';
import { HttpHeaders } from '@angular/common/http';
import { IntercomConfig } from '../types/intercom-config';

@Injectable()
export class Options {

    constructor(
        @Inject(CONFIG) private config: IntercomConfig,
    ) { }

    getOptions() {
        return {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.config.apiToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        }
    }
}