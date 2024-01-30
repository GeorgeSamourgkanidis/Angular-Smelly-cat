# AngularSmellyCat
This project was generated with Angular 17.1.1, material ui, emailjs/browser, angular/google-maps

## Development server
After `npm install` run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Code Explanation
This is a "Contact Us" page demonstration. The default route redirects to the "/contact" route, since all the other pages are empty. The nagivation works but you will see the default component messages. First of all the header navbar is customized and sticky. If the screensize is small I will show a hamburger menu instead. There is also a footer which appears bellow the header and content, since these have a sum of 100% height. The "Contact Us" page is splitted into 2 main components, the form and the map. The form component is handling the inputs with Reactive forms. The formControls are passed to the custom input Component, but the final formGroup is handled by the parent component. On submit all the formControls are validated. If they are valid then a custom confirmation dialog will pop up. On confirm a spinner will show up inside the button until the email is sent. To sent emails I used emailjs/browser. Using angular/google-maps and setting lat,long I show the location as shown. Also I added some minor unit tests for the form.

## Notes
The public keys are visible for now in order to show the page. I could add global scss variables and customize the angular theme. Also when I send emails I could check for errors.
Experimented with new Angular standalone components, that's why you won't see any modules. Didn't have a change to showcase lifecycle onInit, onChange, onDestroy etc, or directives/pipes or ngrx, subscriptions rxjs.
