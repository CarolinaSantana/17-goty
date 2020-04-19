# Goty

Practical exercise of Udemy course: [Angular: De cero a experto creando aplicaciones (Angular 9+)](https://www.udemy.com/share/101WdsB0sfd1tTRXo=/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

Application name refers to Game Of The Year.

Install Node.js from the [official page](https://nodejs.org/es/).

This application uses [ngx-charts](https://swimlane.gitbook.io/ngx-charts/), [Angular Material](https://material.angular.io/), [Firebase](https://firebase.google.com/), [AngularFire](https://firebaseopensource.com/projects/angular/angularfire2/), [Express](https://expressjs.com/es/), [Cors](https://github.com/expressjs/cors) and [sweetalert2](https://sweetalert2.github.io/).

## Install Firebase tools

Run `npm install -g firebase-tools --save` to install Firebase tools.

## Install CDK of Angular Material

Run `npm install @angular/cdk --save` to install CDK of Angular Material.

## Install AngularFire

Run ` npm install @angular/fire firebase --save` to install AngularFire.

## Install ngx-charts

Run `npm install @swimlane/ngx-charts --save` to install ngx-charts.

## Install sweetalert2

Run `npm install sweetalert2 --save` to install sweetalert2.

## Install dependencies

Run `npm install` to install dependencies.

## Create a database in Firebase

Create an account and check more information at [Firebase](https://firebase.google.com/).

Create a new application and a cloud firestore database with the collection name `goty`. You have to indicate that only reading is allowed.

Create 4 documents that refer to games. Each has to have the fields *id*, *name* and *url* of string type and *votes* of number type. The *url* has to be the link to a medium size image and *jpg* format.

You have to indicate your firebase data in`src/environments/environments.ts` and `src/environments/environments.prod.ts` files. These data can be found by selecting the option Red CDN in settings.

## Create the backend

Create a new folder outside the current project. Inside run the following commands.

Run `firebase login` and choose the account where you created the project.

Run `firebase init` and choose make use of functions with the language typescript and the option of an existing project.

Enter inside the generated functions folder and run `npm run build` to compile the files and `tsc --watch` to do it to typescript.

Generate in Firebase settings -> service accounts a new key using Node.js. The downloaded json file it has to be located in `functions/src/` and `functions/lib/` with the name `serviceAccountKey.json`.

Run `npm install express cors` to install a REST server. Then, run `npm install @types/express --save-dev` and `npm install @types/cors --save-dev` to install their typed.

Copy the file that is in the original project in `src/index.txt`. Locate it in this project in `functions/src/index.ts`. You must put the url to the database in firebase and save the changes.

Run `firebase serve` to get the url where you can test using this server. Also, run `ng serve` for a dev server in the original project. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy

In the original project put in `src/environments/environments.ts` and `src/environments/environments.prod.ts` files the url that corresponds to the local and production deployment respectively. 

Run `ng build --prod`, this generates the dist folder. Also, run `firebase init` selecting the options Hosting and use and existing project. You have to make public the folder `./dist/goty` and indicate that urls must rewrite so it works like a single page application. Finally do not overwrite the file `./dist/goty/index.html`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `firebase serve` in the backend project to test in development and then `firebase deploy` in the original project to test in production with Firebase and the link that generates to the application.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
