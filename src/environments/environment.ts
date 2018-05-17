// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyC4dsDgIb35ydK7oBrvykHk0JjcM1lIvAc",
    authDomain: "shoppinglist-fe6ae.firebaseapp.com",
    databaseURL: "https://shoppinglist-fe6ae.firebaseio.com",
    projectId: "shoppinglist-fe6ae",
    storageBucket: "shoppinglist-fe6ae.appspot.com",
    messagingSenderId: "61160140921"
  }
};
