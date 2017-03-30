# Class 14 - Middleware & Managing State

####Overview

*The focus of this class will be the underlying concepts of middleware and how to manage application state, through the use of a routing framework.  In particular, students should be able to use page.js to attach properties to its `ctx` object, use the `ctx` object to extract URL parameters and resource indicators, and use the provided `next` function, and understand callback chains to create modular and refactored routes.*

- Project samples! Here's a few more!
	- [Hike WA](https://hike-wa.herokuapp.com/)
	- [Baby Safe](http://baby-safe.herokuapp.com/)
	- [Seattle Field Finder](https://field-finder.herokuapp.com/)

- Projects! Let's talk about some basic calendar stuff.

- Reminder: the entrance exam for the 401 courses (which doubles as the final exam for this course) will be published Friday afternoon and be available until 11:59pm Sunday. It is a graded portion of this course, regardless of your intent to advance to a 401 course.

- To help you prepare for that, there will be an extra non-graded quiz published in Canvas tomorrow. It will give you a little more practice to get ready for the exam.
- Per Code Fellows policy, there will be a blackout on completing coursework during Project Week. You should have all of your lingering unfinished coursework submitted by no later than Monday morning at 8:59am.
	 - If you need more time after that, discuss a plan for that with Sam and/or our Admissions team. Also be aware of how your work progress and grades overlap with admissions requirements and deadlines for upcoming 401 courses. Enrollments are running high and we are already establishing waitlists for upcoming 401s.

- If you'd like to schedule a one-on-one meeting with Sam in the coming days, please select one of the slots available at [this link](https://sam-301d18.youcanbook.me/).

**Middleware?!?! What's that?**

[**Slides: Middleware** *(more of an extra resource than something we'll spend much time on in class)*](14-pagejs-middleware.pdf)

- What is it?
- Why are we using PageJS?
- The context object `ctx`, `next()`, and working with multiple callbacks in PageJS
- Working with URL params

**What other middleware have seen this week?**

`BREAK (10 minutes)`

**Middleware Demo**

Let's do something crazy and build something from scratch!

*(We'll grab a break in here at some point. This will probably take a couple of hours to finish)*

**Discuss the article on Google's research on teams** (as time allows)

**Look at the lab code** (as time allows)

--

### Class 14 Readings (not assigned but you can refer to them)

* [Page.js selections](https://github.com/visionmedia/page.js#context) *(Especially the "Context" and “Routing” sections)*


### Class 14 Learning Objectives

* Middleware in PageJS router
* Query params in Context
