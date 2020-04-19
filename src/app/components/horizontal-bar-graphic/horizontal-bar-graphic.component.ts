import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graphic',
  templateUrl: './horizontal-bar-graphic.component.html',
  styleUrls: ['./horizontal-bar-graphic.component.css']
})
export class HorizontalBarGraphicComponent {

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  constructor() { }

  onSelect(event) { }

}
