# Class 11 - Routing and Single Page Apps

*At the heart of every web app is the Web Request-Response Cycle. Pay close attention to how your app is creating and responding to requests. With client-side routing and the History API, we can add a layer of abstraction on top of the traditional routing.*

--

- Code Review (30 minutes or so)

[**Slides: Routing & Controllers**](11-SPA-client-side-routing.pdf)

`BREAK (10 minutes)`

**Single-Page Apps**

- Why single page?
	1. Performance trade-offs
	2. User experience

- jQuery’s role so far
	1. Event handling for our tabs
	2. Will still be hiding and showing content

- Benefits of adding a ‘route’ to our page
	1. Lets user (and browser) believe they are navigating
	2. Updates History API to allow for ‘forward’ and ‘back’ actions

**Look at PageJS repo**

- Hands-on PageJS example: clone [this repo](https://github.com/codefellows/301-11-page-js-demo.git) and let's build it out!

`BREAK (10 minutes)`

**More on PageJS...**

- Look at the History API in the console
	1. `history` is just an object
	2. It has a length property

- Head to another page & check the history length again

- Now use some methods like ‘go’ ‘forward’ and ‘back’
	1. Length will update based on pushState
	2. It cannot be directly modified!

- Client-side routing
	1. How to use page.js
  2. Look at how `history` is used in PageJS
	3. Docs!

**Review of the code for lab**

--

**Class 11 Learning Objectives**

* Identify useful URLs for an app, and be able to implement those routes given the new library presented.

* Recognize other server technologies such as Node, new dependencies

--

**Class 11 Readings (to be completed before class)**

* JS&jQ: 424-427 (History API) (Essential)

* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)

* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)
