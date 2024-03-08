import { Component } from '@angular/core';
import { Eolienne } from '../interfaces/eolienne';
import hard_coded_eoliennes from '../fake_data/hard_coded';
@Component({
  selector: 'app-turbine-board',
  templateUrl: './turbine-board.component.html',
  styleUrls: ['./turbine-board.component.css']
})
export class TurbineBoardComponent {

  eoliennes: Eolienne[] = hard_coded_eoliennes;

}
