import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IContact } from '../contact.model';

@Component({
  selector: 'et-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = '';
  phone = '';
  avatar = '';

  constructor(private service: AppService) { }

  ngOnInit() {
    console.log('here ' + name);
  }

  onCreate() {
    const contact: IContact = {
      name: this.name,
      phone: this.phone,
      avatar: this.avatar || ''
    };
    this.service.addContact(contact);
    this.service.closeModal();
  }

  close(){
    this.service.closeModal();
  }

}
