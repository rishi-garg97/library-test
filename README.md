# DynamicJsonForm

dynamic-json-form@0.1.7 is the initial working version and update previous version if you had installed.
 
## Steps to use

###  Install 
     npm i dynamic-json-form --save

###  Add Mustache 
     Write path of mustache to scripts array of angular.json
     Eg.  "scripts": [ "node_modules/mustache/mustache.min.js" ]

###  Add Angular Theme
     Add angular-material theme in your global css file. By default in angular project it is styles.css
     @import "~@angular/material/prebuilt-themes/indigo-pink.css";

###  Resolve Json Mmodule 
     Skip this if you use json file using http else Add this 2 properties into compiler options of tsconfig.json.
     "compilerOptions" : {
                            "resolveJsonModule": true, "esModuleInterop": true
                         }

###  Import dynamic-json-form Module
     Add this statement into your main module(by Default app.module.ts) 
     import {DynamicJsonFormModule} from 'dynamic-json-form';
     
     Also import in imports array of NgModule.

###  How to Use in your html file 
     <lib-dynamic-json-form 
                        [modelSchema]="modelSchema"
                        [uiSchema]="uiSchema"
                        [errorMessageSchema]="errorMessageSchema">
     </lib-dynamic-json-form>
     where modelSchema, uiSchema, errorMessageSchema contain json file.
