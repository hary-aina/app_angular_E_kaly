import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-dashboard-resto',
  templateUrl: './dashboard-resto.component.html',
  styleUrls: ['./dashboard-resto.component.css']
})
export class DashboardRestoComponent implements OnInit {

  user_name : string;
  user_id : string;
  user_contact : string;
  type_user_name : string;

  restaurant_name : string;
  restaurant_id : string;
  token : string;

  per_page = 10;
  page_number = 1;

  constructor(
    private restaurantService : RestaurantService,
    private cookie : CookieService,
    private router : Router
  ) {
    this.token = this.cookie.get('token');  
    this.restaurant_name = this.cookie.get('restaurant_name');
    this.restaurant_id = this.cookie.get('restaurant_id');
    this.user_name = this.cookie.get('user_name');
    this.user_id = this.cookie.get('user_id');
    this.user_contact = this.cookie.get('user_contact');
    this.type_user_name = this.cookie.get('type_user_name');
   }

  ngOnInit(): void {
    if(!(this.type_user_name == "restaurant" && this.token != undefined)){
      this.router.navigate(['/resto-bo/login']);
    }
    else{
      
    }
  }

}
