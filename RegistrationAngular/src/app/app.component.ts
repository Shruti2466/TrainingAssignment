import { Component } from '@angular/core';
import { RegisterationComponent } from './registeration/registeration.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RegisterationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Registration';
  itemList: any[] = [];

  onItemAdded(newItem: any) {
    this.itemList.push(newItem);
  }
}
