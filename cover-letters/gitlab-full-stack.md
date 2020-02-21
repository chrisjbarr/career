# Gitlab

## Full Stack Engineer

Hello, I'm Chris - thanks for taking some time out of your day to read this cover letter, resume and application.

I've kept my eye on Gitlab open positions for close to a year now, often going back and forth on whether or not I'm qualified to work at 'well known, highly visible' company. One day I have imposter syndrome, the next I feel like I'm at the top of my craft. 

You see, I've been a developer for close to 20 years now, having started way back in 1998 with Netscape and Internet Explorer - DHTML, XML and `document.all` and `document.layers` and all the other goodie and baddies of that era - to the modern ecosystem of Virtual DOM, package management & versioning, Vue/Angular/React battlegrounds and lately, the CSS in JS wars. I've seen a lot, and yet, I haven't seen a lot... only within the last year have I started seeing what the developer community is up to on the Twitters which has opened my eyes up to many ideas, musings, emotions and sadly, toxic vitriol that I've not been exposed to previously. 

I'm often my own worst critic, confident among my friends, family and current peers - yet, horribly insecure and deeming myself unsuitable for employment at a  company such as Gitlab, or others like it. The developers I follow on Twitter have taught me that imposter syndrome is a real thing among even those I look up to, that even they dislike the code they've written yesterday, and that they also google the difference between splice and slice, or the difference between map and forEach - they even create editor snippets for them (ofcourse they would, why wouldn't they!?).

In these 20 years I've been mentored and I've been a mentor - and I enjoy being both, often at the same time. I've learned that I require time rolling up the sleeves and being in the trenches of development front-end, back-end, database or ETL. I've also learned that I require technical leadership, to provide direction and prioritization, and to communicate across departments, or as Sarah Drasner calls it, 'the glue' - and owning features from concept to delivery. 

Most importantly, I've learned that I can apply for a position at Gitlab and see how it goes, and not worry about the outcome or wasting any of my interviewer's time. A conversation can't hurt, and if anything, one or more of us will learn from the experience.

## Application Question & Answers

> Being a pretty standard Rails application, GitLab is built using the MVC design pattern. Please describe in as much detail as you think is appropriate what the responsibilities of the Model, View, and Controller are, both in general and in Rails specifically, and what the benefits of this separation are. *


Model, View and Controller. Generally speaking, it's a pattern for managing the separation of concerns between areas (or layers) of an application. This approach increases the ability to test areas in isolation as well as enhancing the abilities of specialized roles/humans to update those areas independently. MCV may have been a better fitting acronym as the controller is 'the glue' between the model and view.

Controller - An orchestratrr who's sole purpose in life is to process a request. "Process" is a generic term, but most often what happens during this process is validation of the request (permissions and payload conformity). The controller usually delegates the responsibility of performing those validations to something else - it knows how to handle valid and invalid states of each check and decides if the overall request is valid or not. For each request, the controller makes decisions on which view to present to the user, as well as what model is responsible for acquiring any data / handling business rules.

Model - Model can have multiple responsibilities depending on the approach taken. Generally speaking, the most common approach is to have a model be responsible for communicating with a database, populating itself with data, as well as have business rules such that it knows how to validate the data it contains. This is a pattern known as Active Record - which I believe is popular in rails/ruby... my experience has generally shied away from this pattern and instead used POCO models with the controller delegating the responsibillity of loading models and validating them via some domain specific service... ie. AuthenticationService, OrganizationService, and so on.

View - View is generally known as the 'dumbest' area in the trifecta. It's sole purpose in life is to present the model (data) to the user or owner of the request. Any business rules in the view are generally provided to it via the model (client side validation, workflow steps, etc). The view is responsible for presenting the data in a way that is suitable to the request, for example, if the model has numeric properties, the view is responsible for formatting the display of those numbers, whether it is currency, high precision/scale, etc. 

While I do not have any professional experience with Ruby/Rails, I'm confident my experience with it in ASP.NET MVC, Angular and even WPF MVVM (a bit of a variation but still similar) will allow for a successful transition to the RoR lifestyle.

> A user browses to https://gitlab.com/gitlab-org/gitlab-ce in their browser. Please describe in as much detail as you think is appropriate the lifecycle of this request and what happens in the browser, over the network, on GitLab servers, and in the GitLab Rails application before the request completes. *

1. Browser performs a DNS lookup on gitlab.com if it doesn't already know the value
2. Browser makes a GET request for the document '/gitlab-org/gitlab-ce' - which travels through the internets to the appropriate IP address (a load balancer / gateway) that serves the domain.
3. The load balancer passes the request to an underlying web server
4. The web server inspects the path requested, and due to some URL rewrite rules responds with a 302 Found and a location header of "https://gitlab.com/gitlab-org/gitlab-foss"
5. Browser makes a request to https://gitlab.com/gitlab-org/gitlab-foss (following steps 1 through 3 again)
6. Web server (I see nginx in the headers) receives request, performs any validations and hands off to RoR framework for processing
7. RoR processes request, this may include validations, session management, calls to the database for static/dynamic information, then builds up an HTML document
7. RoR responds with a 200 OK and an HTML document - this document is gzipped, and the server is communicating to the client that they should consider it stale via the max-age=0 header, lots of other headers here - only ones of note I see are `GitLab-LB` with a value of `fe-06-1b-gprd` and GitLab-SV with a value of `web-cny-03-sv-gprd`... which indicate to me they are the load balancer and web server I mentioned earlier... for fun, taking a stab at these prefixes it seems we have:

```
fe-06-1b-gprd:

a. "fe" - front end?
b. "06" - #6 resources in a farm of N resources
c. "1b" - the type of resource is a load balancer
d. "gprd" - this is a production resource

web-cny-03-sv-gprd:

a. "web" - the type of resource is a web server
b. "cny" - the physical location, or region, of the resource is in the gitlab cloud in new york
c. "03" - this is the 3rd resource in a farm of N resources
d. "sv" - the type of resource is 'server'
e. "gprd" - this is a production resource
```

8. The browser receives the HTML document and hands it off to an internal parser (this parser is different depending on browser vendor, some faster, some slower, some more compliant to w3c standards, some not, etc).
8a. Browser during parsing creates an internal tree structure of the document (DOM)
8b. The browser begins making requests for external resources defined in the HTML document (scripts, css, images, fonts, etc). The browser makes these requests concurrently - vendor specific, usually in the range of 4-8 concurrently
8c. The browser will make calls to external resources in the order they are defined in the HTML document - these block the rendering of the rendering/presentation. We can control this behavior by adding the defer attribute to script tags, there is not an attribute for controlling the behavior of parse-blocking CSS, however, it is recommended to load critical CSS via an inlined SCRIPT tag to mitigate or just use preload for the LINK rel attribute.
9. The browser renders the HTML document and raises the DOMContentLoaded event.
10. After loading, I see a few AJAX requests - Some of the responses return JSON (with HTML inside of it), others return pure JS (with jQuery) that is then eval(), and a polling call to "snowplow"
10a. JSON with HTML - this is the actual HTML that is being displayed in the main content area the screen.. due to it being HTML, my guess is jQuery is just doing an .html() somewhere and injecting various bits and pieces of it, and not using any type of templating (VueJS or handlebars, etc)
10b. Pure JS - This JavaScript is being eval'd on the AJAX success handler. It appears to be selecting multiple table rows, and for each row, finding it's tree-time-ago and tree-commit cells, and injecting HTML via jQuery .html() method. I'm sure there's a reason for this, but it seems a bit of an odd approach. :)
10c. Polling metrics - every few seconds there is a POST request to snowploy analytics.

> Please describe your experience with Javascript, including your use of any modern frameworks (if any) *

As mentioned in my cover letter, I've been using JavaScript for close to 20 years now. It's been fun (and frustrating) to see it's growth over that time, especially the last half. 

I have experience with all three of the top modern front-end frameworks, to varying degrees. React I worked with a few months and despite it's amazing community, found it did not align with the approach I like to take with front-end development. Specifically, I really disliked JSX and the lack of separation of concerns with HTML/CSS (in JS). The last year or so I've spent time with VueJS and Angular 7.

Angular, with it's backing of Google, is very opinionated about it's usage. I like that, I think it can be great to have this structure in place... but at the same time, it gets in the way. If you're going to code an Angular project, you're going to do it the Angular way. :) This includes folder structure, naming conventions, architectural choices (DI everywhere, for example) and others - the good thing about this is it is rather mundane process to onboard from one Angular project to another, the bad thing is it stifles creativity and sense of ownership. It's a heavy framework, and can be daunting for newcomers.

VueJS is quite the opposite. It's a library, not a framework like Angular, and is easily adopted into both legacy and greenfield applications - we can decide to use as much or as little of VueJS as we like. Vue is my favorite of the three - it's style is very similar to my approach for many years (almost reminds me of revealing module pattern back in the day), with webpack we can use Single File Components that allow us to code-time our HTML, Scripts and Styles in one file (minimizing the bloat we see in Angular, and to a degree, React), and the directives are not as obtrusive (or confusing) as Angular's... for example `<li v-for="item in items">` in VueJS compared to `<li *ngFor="let item of items; let i = index">` in Angular. Angular also makes heavy use of (), {} and [] which we developers often get confused on which ones to use. Finally, VueJS has Evan You and Sarah Drasner as core members, who's outreach and support in the community are unparalleled.

I also have experience with NodeJS wether it's writing helper scripts for my front-ends (mocking data calls, reprocessing images, etc) to serving web or socket servers for the front-ends I've written to communicate with each other. 


