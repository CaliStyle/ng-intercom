import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { homeActions } from './store/actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public appTitle: string
  public homeTitle: string

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(homeActions.findAll({}))

    this.appTitle = 'NgEngine'
    this.homeTitle = 'Hello World'
  }
}
