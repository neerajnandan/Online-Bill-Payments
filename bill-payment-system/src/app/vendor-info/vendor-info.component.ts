import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../site/Vendor/vendor';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {
  @Input() vendors: Vendor[];

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {
    console.log(this.vendors);
  }

  showDetails(){
  
    //this.router.navigate(['bill'])
    //[routerLink]="['/item-edit',items.id]"
    console.log(this.vendors)
    console.log(this.authService.username);
   
   }

images:string;
   imageurl:string[] = ["https://images.unsplash.com/photo-1504250746301-659b6b611c48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1467293622093-9f15c96be70f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1559019727-963e0a4eab74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80",
"https://images.unsplash.com/photo-1563198804-b144dfc1661c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1341&q=80",
"https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1559067341-04a52c7d06d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"];

}
