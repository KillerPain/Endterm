import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IContact } from '../contact.model';

@Component({
  selector: 'et-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones: IContact[] = [];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.contactObs.subscribe(
      data => {
        this.phones.push(data);
        console.log(this.phones);
      }
    );
  }

  onAdd() {
    this.service.openModal();
  }

}
