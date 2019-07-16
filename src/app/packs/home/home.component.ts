import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { HomeCollectionService } from './store/collections/home'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public appTitle: string
  public homeTitle: string

  constructor(public homeCollection: HomeCollectionService) {}

  ngOnInit() {
    this.homeCollection.findAll({})

    this.appTitle = 'NgEngine'
    this.homeTitle = 'Hello World'
  }
}
