import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormComponent } from './form/form.component';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AppService } from './app.service';
import { IContact } from './contact.model';

@Component({
  selector: 'et-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('page', {read: ViewContainerRef })
  private pageContainer: ViewContainerRef ;
  contact: IContact = null;
  constructor(private cfr: ComponentFactoryResolver, private service: AppService) { }

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(FormComponent);
    // const componentRef = this.pageContainer.createComponent(factory);
    this.service.modalObs.subscribe(
      data => {
        let componentRef;
        if (data) {
          componentRef = this.pageContainer.createComponent(factory);
          this.service.modalEditObs.subscribe(
            _data => {
              this.contact = _data;
              componentRef.instance.name = this.contact.name;
              componentRef.instance.phone = this.contact.phone;
              componentRef.instance.avatar = this.contact.avatar;
            }
          );
        } else {
          this.pageContainer.clear();
        }
      }
    );
  }
}
