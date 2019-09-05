# DynamicJsonForm

dynamic-json-form@0.1.7 is the initial working version and update previous version if you had installed.
 
## Steps to use

>  Install - npm i dynamic-json-form --save


>  Add mustache path to scripts array of angular.json
   Eg.  "scripts": [
                     "node_modules/mustache/mustache.min.js"
                   ]


>  Add theme of angular-material in your global css file by default in angular project it is styles.css
   @import "~@angular/material/prebuilt-themes/indigo-pink.css";


>  Skip this Add this 2 properties into compiler options of tsconfig.json to import json.
   Like => "compilerOptions" : {
                                  "resolveJsonModule": true, 
																  "esModuleInterop": true,
                               }

	
>  Add this statement into your main module(by Default app.module.ts) 
   import {DynamicJsonFormModule} from 'dynamic-json-form';
   Also import in imports array of NgModule.


>  <lib-dynamic-json-form 
                       [modelSchema]="modelSchema"
                       [uiSchema]="uiSchema"
                       [errorMessageSchema]="errorMessageSchema">
    </lib-dynamic-json-form>
