import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Eolienne } from '../interfaces/eolienne';
import hard_coded_eoliennes from '../fake_data/hard_coded';

@Component({
  selector: 'app-turbine',
  templateUrl: './turbine.component.html',
  styleUrls: ['./turbine.component.css']
})
export class TurbineComponent {

  constructor(private location: Location) {
    this.currentUrl = this.location.path();
    this.eolienneId = parseInt(this.getSubstringAfterLastSlash(this.currentUrl));
    this.eolienne = hard_coded_eoliennes[this.eolienneId - 1];
  }

  eolienne!: Eolienne;
  currentUrl: string;
  eolienneId!: number;

  getSubstringAfterLastSlash(url: string): string {
    const lastSlashIndex = url.lastIndexOf('/');
    if (lastSlashIndex !== -1 && lastSlashIndex < url.length - 1) {
      return url.substring(lastSlashIndex + 1);
    }
    return '';
  }

}
