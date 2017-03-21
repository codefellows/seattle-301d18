# Code 301, Class 6: ***HTTP, AJAX, & JSON***

*Here we go! Onwards, into Week 2 and a study of the Model layer. Asynchronous connections... and standardized data formats? This all sounds like a serious upgrade to our application logic! Let's see what you can do with the blog app (and your portfolios!) once we apply these concepts!*

*This week, you will construct a model layer in your application that accesses and transforms persisted data, conforming to common WRRC, FP, and CRUD conventions.*

## Today's Plan

- Announcements, etc.
	- Discussion re: upcoming schedule adjustments
	- How are everyone's Postgres setups? We need those solid by Thursday.
- Code Review/Q&A (let's try to keep it short, because there is a load of new stuff today
- Slides: [AJAX & JSON Overview](https://github.com/codefellows/seattle-301d18/blob/master/06-ajax-and-json/06-http-json-ajax.pdf)
	- The HTTP Party
	- JSON
	- AJAX

`10-minute break`

- Key points of the readings that we'll need, and demo some of them:
	- Duckett JS book, pp.367-408
		- p.370: What is [AJAX](https://en.wikipedia.org/wiki/Ajax_(mythology))?
		- p.371: Why use AJAX?
		- p.372: **How AJAX works**
		- p.373: Handling AJAX requests and responses *("vanilla AJAX")*
		- p.374: Data formats *(All you need to know is that JSON rules)*
		- p.376: JSON
		- p.382: Loading JSON with AJAX
		- p.388: **jQuery & AJAX: requests**
		- p.389: **jQuery & AJAX: responses**
		- p.392: jQuery's AJAX shorthand methods
		- p.408: **Summary of the AJAX & JSON chapter**

- **AJAX demo**

`10-minute break`

- Lab Prep
	- Let's review the starter code and TODOs!
	- But first, let's look at the working solution.
	- Note that this code uses new ES6 styles of variable declarations including  `let` and `const`

- [MDN docs for `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN docs for `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

- Key terms
	- [WRRC](http://celineotter.azurewebsites.net/world-wide-web-http-request-response-cycle/) (Web Request Response Cycle)
	- [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) vs. [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (Uniform Resource Locator vs. Uniform Resource Identifier)
	- [IP address](https://en.wikipedia.org/wiki/IP_address)
	- [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) (Domain Name System)
	- REQ/RES (Request/Response)

## Useful Resources

- [Pokéapi!](https://pokeapi.co/)
- [Star Wars API!](http://swapi.co/)

## Learning Objectives

* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.
* Understand how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.
  * Review the use of jQuery's Deferred Object (`$.get().then().catch()`)
* Refresh the localStorage object and JSON usage
* Understand the implementation and usage of ES2015 Syntax for `let` and `const`
