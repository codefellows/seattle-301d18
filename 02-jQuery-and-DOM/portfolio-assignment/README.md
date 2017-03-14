# Your professional online presence

The portfolio site that you create will highlight your projects and your interests, and showcase your skills to potential employers or clients.

You will create, from scratch, a static portfolio site (no "backend server" code required), to represent your personal online presence.


## User Stories: Minimum Viable Product (MVP)
Let these user stories guide your development:
 1. As a developer, I want my site to use valid and semantic markup, so that employers will love me.
 - As the creator, I want the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
 - As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.
 - As a developer, I want my CSS organized (think SMACSS) so that I can find my stylings swiftly.

## User Stories: Stretch Goals
- As a visitor, I want the portfolio to show the newest material on top so that I can easily see the developers recent work.
- As a visitor, I want relative timestamps on such material to give me a idea of how many days ago something was created.


## Technical Requirements and Grading Rubric
  - Think of some ideas for your source data, and code it up in its **own file**! Build out an array of three objects to   start with, all having similar properties.
  - Create a new .js file with the appropriate methods to help modify your source data to help render it to the DOM:
  - Use good Object Oriented code: Create a constructor function for projects or source data.
  - Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - Use jQuery to `clone` the example markup for each project, as you add additional content.
  - Your "Project" prototype should have a `.toHtml()` function that adds new data to the DOM.
  - Refactor your CSS into a base, layout, and module structure where applicable.
