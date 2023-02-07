import { Component } from '@angular/core';
import clevertap from 'clevertap-web-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'clevertap-sdk-angular';

  handleEventPushClick () {
    clevertap.event.push('Product Viewed', {
      "Product name": "Casio Chronograph Watch",
      "Category": "Mens Accessories",
      "Price": 59.99,
      "Date": new Date()
    }); // Replace Payload as per your event schema and design
    console.log('event pushed : Product Viewed');
  }
  handleChargedEventPushClick () {
    clevertap.event.push('Charged', {
      "Quantity": 2, //integer
      "Currency": "USD", //String
      "Amount": 59.99, //double
      "Date": new Date(), //date
      "Items": [ // Array
        {
          "Category": "Books",
          "Book name": "The Millionaire next door",
          "Quantity": 1
        },
        {
          "Category": "Books",
          "Book name": "Achieving inner zen",
          "Quantity": 1
        },
      ],
    }); // Replace Payload as per your event schema and design
    console.log('event pushed : Charged');
  }
  handleUserLoginClick () {
    clevertap.onUserLogin.push({
      "Site": {
        "Name": "TestProfile Angular",            // String
        "Email": "ct_angular@gmail.com",         // Email address of the user
        "Phone": "+14155551234",           // Phone (with the country code)
        "Gender": "M",                     // Can be either M or F         // Enable WhatsApp notifications
      }
     });
     console.log('user login : ct_angular@gmail.com');
  }
  onUpdateUserClick () {
    clevertap.profile.push({
      "Site": {     // Phone (with the country code)
        "Gender": "F", 
        "Language" : "En"
      }
     });
     console.log('user Profile updated : ct_angular@gmail.com');
  }
}
