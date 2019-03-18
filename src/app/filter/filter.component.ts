import { Component, OnInit } from '@angular/core';

import FilterService from './filter.service';
import Filter from '../classes/Filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.clear();
  }

  onApply() {
    const result = {};

    Filter.enumerateTypes().forEach((type: string) => result[type.toLowerCase()] = []);

    this.filterService.items.forEach((item: Filter) => result[item.getType().toLowerCase()].push(item));

    console.log(result);
  }


}
