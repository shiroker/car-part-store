import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface MenuListItem {
  itemID: number;
  itemLabel: string;
}
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input()
  menuListItem: MenuListItem[] = [];
  @Output()
  menuItemClick = new EventEmitter<MenuListItem>();

  onItemClicked(item: MenuListItem): void {
    this.menuItemClick.emit(item);
  }
}
