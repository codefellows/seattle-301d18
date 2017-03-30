# Portfolio Assignment for Class 13 -  Production Deployment

Ready to share your portfolio with the world? Yes! Your mom will be so proud.

Use what you practiced in pairs to deploy your portfolio site. The user stories are basically the same.

## User Stories: MVP
 1. As a developer, I want my portfolio to run in a development environment that closely matches production, so that I can reduce bugs related to infrastructure surprises.
  - You'll need to create a new Heroku app, and link it to your portfolio
 1. As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
  - You'll need to get your app deployed and running on Heroku.
  - Heroku will need to know what kind of app you are running, and how to run it.
  - You can create a new package.json file, or copy over `package.json` and `server.js` from the blog project.
 1. As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
  - You'll need to configure an environment variable on your production server, so the server.js file can access your token when it's running.


## User Stories: Stretch Goals
 1. As a site owner, I want [www.my-own-domain-name.io] hooked up to my Heroku app, so that I don't have to explain to people how to spell "my-site-name.herokuapp.com" over the phone.
 - As a site owner, I want my root domain to redirect to the `www` subdomain, so people can type in either one to load my app.

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint
 - DO NOT create your Heroku app with a default name. If you do accidentally, rename it. Or blow it away, and start again.
 - Link to your live site in your portfolio README on GitHub.
