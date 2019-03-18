import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Filter from '../../classes/Filter';
import FilterService from '../filter.service';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {

  @Input()
  filterIndex: number;

  filterTypes: string[];
  filterOperations: [string, string][];

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.filterTypes = Filter.enumerateTypes();
    this.filterOperations = this.filterService.items[this.filterIndex].enumerateOperations();
  }

  onChangeType(newType: string) {
    this.filterService.set(this.filterIndex, new Filter[newType]());
  }

  getItemType(): string {
    return this.filterService.items[this.filterIndex].isInstanceOf(Filter.Number) ? 'number' : 'text';
  }

}
