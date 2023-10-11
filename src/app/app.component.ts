import { Component, Input } from '@angular/core';
import { CardsComponent } from './cards/cards.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Task2';
  
  plans=[
    {
      plan:"FREE",
      price:"0",
      desc:"Single User",
      storage:"5GB Storage",
      limit:"Unlimited Public Projects",
      access:"Community Access",
      private:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      reports:"Monthly Status Reports",
      isTextMuted:false,
    },
    {
      plan:"PLUS",
      price:"9",
      desc:"5 Users",
      storage:"50GB Storage",
      limit:"Unlimited Public Projects",
      access:"Community Access",
      private:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      reports:"Monthly Status Reports",
    },
    {
      plan:"PRO",
      price:"49",
      desc:"Unlimited Users",
      storage:"150GB Storage",
      limit:"Unlimited Public Projects",
      access:"Community Access",
      private:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subdomain:"Free Subdomain",
      reports:"Monthly Status Reports",
    }
  ]
}





