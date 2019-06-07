## Taxi Booking Form ##

For this challenge we are building a booking form. The goal is to create a form that functionally meets all requirements detailed above, with minimal styling to make it look decent. The emphasis however is on the functionality. 

A valid booking consists of the following information:
 - Pickup address: The address where the passenger wants to be picked up. 
 - Stop addresses: Optionally, a user should be able to enter one or more “via” addresses, where the taxi will stop by. 
 - Dropoff address: Address where the passenger wants to be dropped off.
 - ASAP: whether or not the passenger wants to be picked up as soon as possible
 - Date: Date at which the passenger wants to be picked up, when the trip is not ASAP. Formatted: dd-mm-yyyy
 - Time: Time at which the passenger wants to be picked up, when the trip is not ASAP. Formatted: hh:mm
 - Vehicle type: Type of vehicle the passenger wants to be picked up in. Options are:
   - Nissan Leaf
   - Tesla Model S
   - Tesla Model X
 - Passenger name: name of the passenger
 - Passenger phone: phone number of the passenger
 - Passenger email: optionally, email address of the passenger

Unless specified as optional, all fields are required. When a field is not valid, the user should see per field what is wrong with the input upon submitting. 

While the user is editing the form, the price is updated, by POST-ing the form contents, in JSON, to `localhost:9090/price`. In response the server will send back a (random) price, which in turn should be displayed to the user.

Upon submit, all the form data is validated, and POST-ed, as JSON, to `localhost:9090/book`, the location of the mock-backend server. 
Finally, the user is shown a "Thank you"-message and the form is reset to its initial state. 

---

### Technical Detials ##

This repository contains a minimal react setup. Feel free to add and adjust according to your needs.
Or if the setup is not familiar, you can also use your own.

You can start the dev-server by running the following. This will host the app at `localhost:8081`

```
npm run dev
```

For the backend, run:
```
npm run dev:backend
```

