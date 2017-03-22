## Pokéapi demo

We're going to explore how to use the jQuery AJAX methods to access an API, which will lead us toward how to work with the new format of data (a.k.a. ***the Model layer***) of our blog app.

The [Otero jQuery Cheatsheet](https://oscarotero.com/jquery/) will come in handy.

Let's start with a look at the mast basic jQuery AJAX method:

**`$.ajax(TAKES AN OBJECT AS ITS ARGUMENT)`**

In longer form, looks like this:

```
$.ajax({
  url: '',
  method: '', // we'll use the HTTP verb 'GET'
  success: [callback]
  });
```

```
$.ajax({
  url: 'http://pokeapi.co/api/v2/pokemon/42',
  method: 'GET',
  success: function(data, message, xhr) {
    console.log(data);
    }
  });
```

Two objects return:

 - readyState
 - the Pokemon object!

#### Let's streamline this with a `$.get()`!

```
$.get(URL)
```

```
$.get(URL).done(callback on success)
```

 Could also appear like this...


```
$.get(URL)
.done(callback on success)
```

Take a look at the "Deferred Object" of the far right "Core" group on the Otero cheat sheet to see other possible deferred methods:

- **`$.done()`** runs on successful AJAX request
- **`$.fail()`** runs on a failed AJAX request
- **`$.always()`** runs regardless of success/failure
- **`$.then()`** is the "promises" version to manage async order with both success/failure taken into account

```
$.get('https://pokeapi.co/api/v2/pokemon/42')
.done(function(data) { console.log(data) })
.fail(function(err) { console.error(err) })
```

Now let's put in a typo to get the error object response...

```
$.get('https://pokeapi.co/api/v2/pookmun/42')
.done(function(data) { console.log(data) })
.fail(function(err) { console.error(err) })
```

If we add on a `$.then()` we can handle the success and failure cases in a single method (the callbacks are empty for the moment to simplify the way things look)...

```
$.get('https://pokeapi.co/api/v2/pokemon/42')
.then(function(data) {}, function(err) {})
```

We can add another **`$.then()`** after that if we want to specify the next behavior of the app!

```
$.get('https://pokeapi.co/api/v2/pokemon/42')
.then(function(data) {}, function(err) {})
.then( // and now for something completely different)
```

This pattern of "promises" is how we can ensure that one method does not run until the previous one has succeeded, or, we catch an error at a specific spot that we can then go back and debug.

This enforces order of operation.

But all of this "promises" stuff is kinda off to the side of where we need to have our attention at the moment. It's good for perspective, but quickly grows more complex than our actual use case and is covered in much more detail in 401 level courses.

So, back on task: **`$.getJSON()`** is next:

```
$.getJSON('URL')
.then(successCallback, failCallback)
```
This makes a specific request for JSON formatted data. Let's take a look at the new data file in our lab file. It's JSON. We'll want to use **`$.getJSON()`** to bring it in to the blog app.

Take a look at the code demo for Class 6, or the starter code for Lab 7, to see an example of a `$.getJSON()` in action.
