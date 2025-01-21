# Node JS

## What is Node JS:

Node JS is runtime Environment for JavaScript.

## Installation:

- Go to the Node.js
- Download the Windows installer (LTS version recommended).
- Run the installer and follow the on-screen instructions.
- After installation, open the Terminal and verify the installation by running

```
node -v
npm -v 
```
📌 NPM mean Node package Manager 

## Helo World
- window
- npm package
- create script | start 

## Modules
- require |  import 
- exports 
- module.exports

## File System
- Create File (writeFileSyn | writeFile)
- Read File  (readFileSyn | readFile)
- Save previous data with out over write (append)
- copy File
- Delete File (unlinksync)
- Create Folder

## Architecture | How NodeJS Works?
![](./images/Node.js-Architecture-Chart.png)
![](./images/nodejs.webp)
- Default Thread pool size is 4
  - Max? = 8core cp = 8

```
const os = require('os');
console.log(os.cpus().length);
```

