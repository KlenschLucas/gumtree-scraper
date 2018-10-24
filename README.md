# Gumtree Scraper
Just a simple gumtree scraper

### Prerequisites 
<img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" width="52px"/>[Git](https://git-scm.com/) - version control software

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Node" height=52px />[Node](https://nodejs.org) - Application is powered by node

<img src="https://raw.githubusercontent.com/npm/cli/latest/html/npm-64-square.png" alt="npm" height=52px />[npm](https://www.npmjs.com/) - package manger for node

### Getting Starting
##### Step 1 - Install node
*Windows* - Download/Install node from https://nodejs.org/en/

*Linux* - `apt install nodejs npm` [deb-based], `dnf install nodejs npm` [rpm-based]

##### Step 2 - Install Git
*Windows* - Download/Install git from https://git-scm.com/download/win

*Linux* - `apt install git` [deb-based], `dnf install git` [rpm-based]

##### Step 3 - Clone Package using Git
*Run* `git clone https://github.com/KlenschLucas/gumtree-scraper.git` to clone repository 

##### Step 4 - Start Server
**With nodemon**
*Run* `npm install nodemon -g` to install nodemon globally
*Run* `npm install` inside the project folder to install dependencies 
*Run* `nodemon` inside the project folder to start server which will monitor for changes

**Without nodemon**

Run `npm start` inside the project folder to start server, it will install dependencies automatically

**The Server will start on localhost:3000**

To find some test data goto localhost:3000/test