# Class 05: *Form Building Workshop*

Today we'll code together in an in-class workshop to wire up a new page in our blog app. This is done in lieu of a pair-programming assignment, but you will still need to fork/clone the lab code, get it working, and submit a pull request (by Monday at 12:59pm) as you have been doing. Note that we probably will not get to 100% functionality today *(gotta leave y'all a little bit of work to do, right?)*, and also that there are optional stretch goals.

We'll not work to a schedule, but instead work for an hour or so, take a break, etc., until we finish. We should be able to get wrapped up somewhere between 5:00 and 6:00 today.

## The questions that Steven put into Slack

Not a single `articleView` method works, except `handleMainNav`, unless your template is built correctly. Why was it important that your template have a nigh-identical markup structure to lab 03's template?

Wasn't the whole point of including Handlebars to simplify everything?

1. What is `articleView.populateFilters` doing, anyway? We didn't write it, but it must be in there for *some* reason.

2. What bit of markup structure did your template need in order for `articleView.handleAuthorFilter` and `articleView.handleCategoryFilter` to function properly?

3. What's up with that first line of `articleView.setTeasers`? What is the selector `nth-of-type(n+2)`? Why was it important that your template have `<a href="#" class="read-on">Read on &rarr;</a>` in it?

4. How DID this simplify things? What is the advantage of even using Handlebars instead of doing `$('article.template').clone()`?

## Overview of what we're doing today

A new page has been added to the blog: **new.html**. It is an admin page that is not linked from the blog, and its purpose is to provide a form where a new article can be created. The form generates a preview so that the user can ensure the formatting is correct and see what the published version will look like, and also generate JSON that can be copy-pasted into the `rawData` array to add a new article to the blog.

## Learning Objectives

* Recap the primary concepts discussed throughout the week.
    * "What have you learned so far?"
    * "What has been challenging?"
    * "What has been helpful?"
* Work through a form-based inputs to build out a JSON string export of a new blog article.
* Implement 3rd party library integration for dynamic code highlighting and Markdown creation.
