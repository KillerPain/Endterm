import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IContact } from '../contact.model';

@Component({
  selector: 'et-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: IContact[] = [];
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.contactObs.subscribe(
      data => {
        this.contacts.push(data);
        console.log(this.contacts);
      }
    );
  }

  onAdd() {
    this.service.openModal();
  }

  onEdit(contact) {
    console.log(contact);
    this.service.openModalEditV(contact);
  }

  onDelete(i) {
    console.log(i);
    this.contacts[i] = null;
  }
}
