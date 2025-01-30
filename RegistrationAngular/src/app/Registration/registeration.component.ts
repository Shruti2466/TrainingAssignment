import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
 
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-registeration',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
@Output() addItem = new EventEmitter<any>();

states:string[]=["Maharashtra","Kerala","Punjab"];
 
cities = ['Pune', 'Mumbai', 'Nagpur'];
 
formData = {
  name: '',
  email: '',
  dob: '',
  state: ''
};

 
onSubmit() {
  console.log('Form Data:', this.formData); // Debugging log
  this.addItem.emit({ ...this.formData });
  this.formData = { name: '', email: '', dob: '', state: '' }; // Clear the form
}
}
