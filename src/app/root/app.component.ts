import { Inject, ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public title = ''
  public sidenav: {
    mode?: string
    opened?: string
    fixedInViewport?: boolean
    fixedTopGap?: number
    fixedBottomGap?: number
  } = {
    mode: 'side',
    opened: 'opened',
    fixedInViewport: true,
    fixedTopGap: 0,
    fixedBottomGap: 0,
  }

  constructor() {}

  ngOnInit() {}
}
