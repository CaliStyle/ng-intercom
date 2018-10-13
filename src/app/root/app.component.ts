import { Inject, ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Intercom, IntercomConfig } from '../ng-intercom'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = ''
  public sidenav: {
    mode?: string,
    opened?: string,
    fixedInViewport?: boolean,
    fixedTopGap?: number,
    fixedBottomGap?: number
  } = {
      mode: 'side',
      opened: 'opened',
      fixedInViewport: true,
      fixedTopGap: 0,
      fixedBottomGap: 0
    }

  constructor(
    public intercom: Intercom
  ) { }

  ngOnInit() {
    this.intercom.boot({
      app_id: 'klwzj86j',
      // Supports all optional configuration.
      widget: {
        'activator': '#intercom'
      }
    })

    setTimeout(() => {
      this.intercom.shutdown()
      setTimeout(() => this.intercom.boot({
        app_id: 'klwzj86j',
        // Supports all optional configuration.
        widget: {
          'activator': '#intercom'
        }
      }), 1000)
    }, 1000)
  }
}
