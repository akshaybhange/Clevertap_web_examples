
var clevertap = { event: [], profile: [], account: [], onUserLogin: [], region: 'eu1', notifications: [], privacy: [] };
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "4RR-R77-866Z" });
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: true }); //set the flag to true, if the user agrees to share their IP data
(function () {
  var wzrk = document.createElement('script');
  wzrk.type = 'text/javascript';
  wzrk.async = true;
  wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wzrk, s);
})();





function alertMessage(text) {
  alert(text)
}

function raise_event(name) {
  clevertap.event.push(name);
  console.log('event raised ' + name);
}

function chargedEvent(){
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
  });
  console.log('Charged event Pushed');
}

function login() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "TestProfile FlutterWeb",            // String
      "Email": "ct_flutter_web@gmail.com",         // Email address of the user
      "Phone": "+14155551236",           // Phone (with the country code)
      "Gender": "M",                     // Can be either M or F
    }
  });
  console.log('User Login');
}

function profileUpdate() {
  clevertap.profile.push({
    "Site": {
      "Gender": "F",                     // Can be either M or F
      "Language" : "En"
    }
  });
  console.log('Profile Update');
}

window.logger = (flutter_value) => {
  console.log({ js_context: this, flutter_value });
}