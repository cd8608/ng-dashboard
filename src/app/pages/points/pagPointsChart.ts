import {Component} from '@angular/core';
import {IMGConfig} from "../../mg/metricsGraphicsCmp";

@Component({
moduleId: module.id,
styleUrls: ['../pagesStyles.css'],
template:`

<h5>Points Chart</h5>

<ml-card shadow="3">
  <ml-card-text>
    <div class="chart-title">Simple scatter plot</div>  
    <mg-graphic [config]="config1" [urlData]="urlData1"></mg-graphic>
  </ml-card-text>
  <ml-card-menu>
    <ml-card-menu>
      <ml-menu position="top-right" class="menu-btn" ripple>
        <ml-menu-item ripple>item 1</ml-menu-item>
        <ml-menu-item ripple>item 2</ml-menu-item>
      </ml-menu>
    </ml-card-menu>
  </ml-card-menu>  
</ml-card>

<br>

<ml-card shadow="3">
  <ml-card-text>
    <div class="chart-title">Line of the best fit</div>  
    <mg-graphic [config]="config2" [urlData]="urlData2" [preprocess-fn]="convertDateFn"></mg-graphic>
  </ml-card-text>
  <ml-card-menu>
    <ml-card-menu>
      <ml-menu position="top-right" class="menu-btn" ripple>
        <ml-menu-item ripple>item 1</ml-menu-item>
        <ml-menu-item ripple>item 2</ml-menu-item>
      </ml-menu>
    </ml-card-menu>
  </ml-card-menu>  
</ml-card>

<br>

`//template
}) export class PagPointsChart {

  urlData1 = 'assets/data/points1.json';
  urlData2 = 'assets/data/fake_users1.json';

  config1: IMGConfig = {
    chart_type: 'point',
    height: 180,
    left: 60,
    right: 10,
    x_accessor: 'x',
    y_accessor: 'y',
    x_label: 'years',
    buffer: 0
  };

  config2: IMGConfig = {
    chart_type: 'point',
    height: 180,
    left: 60,
    right: 10,
    least_squares: true,
    x_accessor: 'date',
    y_accessor: 'value',
    buffer: 0
  };

  convertDateFn(data: any[]): void {
    MG.convert.date(data, 'date');
  }
}
