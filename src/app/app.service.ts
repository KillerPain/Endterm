import { Injectable } from '@angular/core';
import { IContact } from './contact.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {
  contacts = new BehaviorSubject<IContact>(null);
  contactObs = this.contacts.asObservable();

  modal = new BehaviorSubject<boolean>(false);
  modalObs = this.modal.asObservable();

  modalEdit = new Subject<IContact>();
  modalEditObs = this.modalEdit.asObservable();
  constructor() { }

  addContact(contact: IContact) {
    this.contacts.next(contact);
  }

  openModal() {
    this.modal.next(true);
  }

  closeModal() {
    this.modal.next(false);
  }

  openModalEditV(contact) {
    this.modal.next(true);
    this.modalEdit.next(contact);
  }
}
