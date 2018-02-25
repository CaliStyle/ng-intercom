import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public appTitle: string
  public homeTitle: string

  constructor() { }

  ngOnInit() {
    this.appTitle = 'NgEngine'
    this.homeTitle = 'Hello World'
  }
}
