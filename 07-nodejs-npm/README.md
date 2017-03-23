# Code 301, Class 7: ***Node.js, NPM, and Express***

## Today's Plan

- ***Note: Today's lab is another one that is on the lighter side, but starting tomorrow, the next three labs are probably the toughest of the course. Resist the temptation to coast once you've completed today's lab! Make sure that you understand EVERYTHING in the starter code inside and out!!!***

- `let` and `const` are the new variable declarations in ES6. Let's review them and how they work!

- Code Review: Let's start with Steven's questions from the class Slack channel and go from there.

- AJAX review: Let's go through this [AJAX-demo.md](https://github.com/codefellows/seattle-301d18/blob/master/06-ajax-http/AJAX-demo.md) file that was added to the lecture repo this morning.

- [JSONLint](http://jsonlint.com/) is your friend.

`10 minute break`

- Let's quickly review the WRRC
- What is NodeJS?
- What are NPM, dependencies, and `package.json`?

- **Two main ways of working with Node/NPM projects**
	- 1. The project is already made; you're just using it
		- Clone the repo (or a fork of it)
		- `cd` into the repo, verify that there is a `package.json` with dependencies listed in it, and run `npm install` in the terminal
		- A bunch of stuff should install into a `node_modules` directory that is created automatically, and you're ready to go!
	- 2. You are creating a new Node/NPM project
		- Once the project directory is scaffolded, run `npm init` in the terminal from the root level of the project directory
		- This will ask you a series of questions that will create and set up a `package.json` file
		- As you identify NPM packages you want to add as dependencies to your project and are ready to use them, enter `npm install --save <dependency_name>` in the terminal, which will save the dependencies into a newly created `node_modules` directory and also keep track of them in the `package.json`
		- Be sure to `.gitignore` your `node_modules` directory!
		- You're ready to share your project with the world!
		
- `npm i -g nodemon` FTW
- ExpressJS overview
- Let's clone a repo and look at how to get it up and running: [Hour Long Lunch](https://github.com/bentongreen/hour-long-lunch)

`10 minute break`

- Code demo: Let's make a Node-powered server!
	- Clone the [301 Express demo](https://github.com/codefellows/301-express-demo) repo into your main 301 directory. It has no Node action... yet.
	- `npm init` to initialize it as a Node project
	- Install: ExpressJS
	- Write server.js, some helpful docs:
		- [Node: 'require'](https://nodejs.org/api/modules.html#modules_module_require_id)
		- [app.use()](https://expressjs.com/en/api.html#app.use)
		- [app.get()](https://expressjs.com/en/api.html#app.get.method)
		- [app.listen()](https://expressjs.com/en/api.html#app.listen)
- Lab Prep
	- Let's review the starter code and TODOs!

## Useful resources

<ul>
<li><a href="https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm">Node.js introduction on tutorialspoint.com</a></li>
<li><a href="https://www.sitepoint.com/an-introduction-to-node-js/">"An Introduction to Node.js" on sitepoint.com</a></li>
<li><a href="http://www.nodebeginner.org/">The Node Beginner Book</a></li>
</ul>

## Learning Objectives

* Understand client-server architecture
* Review the differences between the Browser Runtime env and Node's Runtime env
* Usage and best practices when implementing a NodeJS project using NPM packages and package.json configs
* Understand the basics of working with ExpressJS for server-side routing and functionality
