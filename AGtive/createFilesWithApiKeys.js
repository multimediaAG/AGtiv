const fs = require("fs");
const path = require("path");
let content = 'export const environment = {production: false, apiUrl: ""};';
fs.writeFileSync(path.join(__dirname, "./src/environments/environment.ts"), content);
content = 'export const environment = {production: true, apiUrl: ""};';
fs.writeFileSync(path.join(__dirname, "./src/environments/environment.prod.ts"), content);