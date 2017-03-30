# Class 13 - Deployment with Heroku

####Overview

*The focus of this class is on understanding the concept of production deployments in conjunction with development and production environments.  Through the use of Heroku, students will learn about the deployment process, configuration of environment variables, and general issues that can arise during the deployment phase of a project. Students should also understand development, production, and feature branches and how they are used in collaborative development.*

**Note: We'll do this class in two hours, over two segments.**

- Reminder: the entrance exam for the 401 courses (which doubles as the final exam for this course) will be published on Friday afternoon and be available until 11:59pm Sunday.

- 	If you'd like to schedule a one-on-one meeting with Sam over the next week, please select one of the slots available at [this link](https://sam-301d18.youcanbook.me/).

**[Slides: Deployments](13-deployments.pdf)**

- Development vs. Production
- Linux Kernel & Git
- Managing Complexity
- Separation of Concerns
- Environment Variables
- Local & Remote Server Environments

**[Slides: Heroku](13-heroku.pdf)**

- Productivity
- Better Apps
- Trusted Platform
- Deployment Workflow: releases & easy rollbacks
- Logging
- Sharing
- Dynos
- Add-ons

**Key question: What to do with the GitHub token?**

- Do not want to push it to GitHub!
- How to make it accessible to a remote server yet still protected?
- `npm i --save express-request-proxy`

`BREAK (10 minutes)`

**DEPLOYMENT DEMO**

- Let's make a few changes to yesterday's demo and get it deployed!
- More on client-side vs. server-side routing
- How to set environment variables locally and on Heroku

**Discuss the lab assignment**

- Look at the README
- Lots of REVIEW items in the code to look at
- Find the TODO items in the code

--

### Class 13 Readings (to be completed before class)

* [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

* [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)


### Learning Objectives

* Be able to push a dev site to production, so the world can see it.
* Understand the difference between a static page and a dynamically generated app page.
