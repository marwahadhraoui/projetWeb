import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  brandlogo='../../../../assets/icons/logo.png';
  year=new Date().getFullYear();
  brand='Click&Cart';
}
