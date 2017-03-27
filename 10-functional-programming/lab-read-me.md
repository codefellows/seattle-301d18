![CF](https://i.imgur.com/7v5ASc8.png)  Lab 10: Functional Programming
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

The concepts of functional programming have significantly shaped Computer Science from the early days.

Apply some "FP" concepts to the MVC Blog!

Today there are many TODO items, but they are (mostly) smaller bites.

## TODOs: MVP

1. Let's make sure each one of our scripts are properly enclosed. Wrap the contents of article.js in an IIFE, just like articleView.js has been. Set up your IIFE so it receives a parameter to which it can attach behavior.  

1. For both `index.html` and `admin.html`, we'll want access to the `Article.all` data...but we'll have different view functions to set up each of those pages. Help complete the `fetchAll` function so that it calls a `next` parameter: a function to invoke when it's work is done.  

1. Ensure both the index page and the admin page call `fetchAll` in a way that properly triggers the appropriate page setup methods.  
1. Use chained map/reduce calls to transform the data into what you need it to be.  


## Stretch Goals:
- What statistical analysis would be of interest to you with this data set? Code it up!  
