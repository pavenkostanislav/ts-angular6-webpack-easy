#Car Loan Online

to start the project, run "npm dev"

#Setup environment
*install VS code - https://code.visualstudio.com/download
*install tsLint - https://github.com/palantir/tslint
*install nodejs LTS v8.11.4 & npm 5.6.0 - https://nodejs.org/en/download/
*install global package "npm install -g typescript @angular/cli webpack-cli tslint eslint"

#Issues
*RESP API - https://online-auto.rusfinance.ru/OnlineApproval/api
*RESP api documentation - https://online-auto.rusfinance.ru/OnlineApproval/api-docs

#Demo
*Registration - https://91.199.205.97/OnlineApproval/#sh:sm=Lid&ws=sh

#FAQ
*update project to angular 6 and other packages

*install SASS preprocessor for css "npm install -g node-sass" "npm install node-sass sass-loader --save-dev"
*add script for compile "compile:sass": "node-sass src/assetc/main.scss src/assetc/styles.css"
*add script for starting "start:sass-dev": "npm run compile:sass && npm run dev"
#todo setup to webpack!!! "sass-loader": "^7.1.0"

*install boostrap package "npm install ng-bootstrap @ng-bootstrap/ng-bootstrap --save"
*setup boostrap css type in src/assetc/mail.scss row: @import "/node_modules/bootstrap/dist/css/bootstrap.css";

*install angular2-text-mask package "npm i angular2-text-mask --save" to add a mask for entering tags on the DOM markup. Example: phone
