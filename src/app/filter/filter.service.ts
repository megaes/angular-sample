import { Injectable } from '@angular/core';
import Filter from '../classes/Filter';

@Injectable({
  providedIn: 'root'
})
export default class FilterService {

  items: Filter[];

  constructor() { }

  add(filter: Filter = new Filter.Text()): void {
    this.items.push(filter);
  }

  clear(): void {
    this.items = [new Filter.Text()];
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  set(index: number, filter: Filter): void {
    this.items[index] = filter;
  }

}
