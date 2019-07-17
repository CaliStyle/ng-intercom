import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UsersCollectionService } from './store/collections/users'

@Component({
  selector: 'app-500-component',
  templateUrl: './500.component.html',
  styleUrls: ['./500.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiveZeroZeroComponent {
  constructor(public usersService: UsersCollectionService) {
    usersService.findAll({})
  }
}
