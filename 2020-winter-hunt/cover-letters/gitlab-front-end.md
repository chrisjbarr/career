# Gitlab

# Front-end Engineer

Hello, I'm Chris - thanks for taking some time out of your day to read this cover letter, resume and application.

I've kept my eye on Gitlab open positions for close to a year now, often going back and forth on whether or not I'm qualified to work at 'well known, highly visible' company. One day I have imposter syndrome, the next I feel like I'm at the top of my craft. 

You see, I've been a developer for close to 20 years now, having started way back in 1998 with Netscape and Internet Explorer - DHTML, XML and `document.all` and `document.layers` and all the other goodie and baddies of that era - to the modern ecosystem of Virtual DOM, package management & versioning, Vue/Angular/React battlegrounds and lately, the CSS in JS wars. I've seen a lot, and yet, I haven't seen a lot... only within the last year have I started seeing what the developer community is up to on the Twitters which has opened my eyes up to many ideas, musings, emotions and sadly, toxic vitriol that I've not been exposed to previously. 

I'm often my own worst critic, confident among my friends, family and current peers - yet, horribly insecure and deeming myself unsuitable for employment at a  company such as Gitlab, or others like it. The developers I follow on Twitter have taught me that imposter syndrome is a real thing among even those I look up to, that even they dislike the code they've written yesterday, and that they also google the difference between splice and slice, or the difference between map and forEach - they even create editor snippets for them (ofcourse they would, why wouldn't they!?).

In these 20 years I've been mentored and I've been a mentor - and I enjoy being both, often at the same time. I've learned that I require time rolling up the sleeves and being in the trenches of development front-end, back-end, database or ETL. I've also learned that I require technical leadership, to provide direction and prioritization, and to communicate across departments, or as Sarah Drasner calls it, 'the glue' - and owning features from concept to delivery. 

Most importantly, I've learned that I can apply for a position at Gitlab and see how it goes, and not worry about the outcome or wasting any of my interviewer's time. A conversation can't hurt, and if anything, one or more of us will learn from the experience.

## Application Question & Answers

> What are some advantages of using a modern JavaScript framework (Vue, React, etc.) versus other solutions (i.e. jQuery, vanilla JavaScript)? What are some disadvantages? Please share about your experience working with modern JavaScript frameworks and what you were able to accomplish through them? *

Some of the advantages of using a modern framework such as Vue, React, etc. are: 

* They provide a proven, performant foundational level of functionality and allow developer's to focus on business problems instead of mundane boilerplate
* They make it easier for developers to implement cross-browser/platform solutions
* All are open source, have large communities that support them as well as (usually) very accessible core developers who take time out of their days to help either via Gitlab, Github, Slack, Twitch, Discord or similar.

Some disadvantages: 

* Without a watchful eye, sheer number of third party dependencies can lead to confusion, build inconsistencies, security vulnerabilities or worse, reliance on a dependency that is no longer maintained or supported. 
* Some modern frameworks most very fast, for example Angular puts out releases very often. While these changes are rarely breaking, they do introduce a learning curve and in the case of Angular, that can be steep. The pace at which modern frameworks release new versions seems to be faster than the products using them, and so often a product is so entrenched in one version that the effort involved to upgrade is too great - which introduces risk by depending on an outdated version of software. 

I've worked with React, VueJS and Angular in the past year. I have favorable impressions of VueJS and Angular. React to me was too much like Extjs and I just do not enjoy wrapping HTML and CSS in JavaScript. React was a completely different mindset to front-end development and to be honest, I struggled with the learning curve. I tried VueJS next and loved it - the clean sepration of the three in SFCs was attractive to me, as well as the implementation - it reminded me of how I wrote my own Vanilla components years ago - this was an easy transition for me, and I found Vuex much easier to reason about than Flux/Redux. Finally, I recently completed a 5 month freelance gig which I built in Angular 7 - I found this framework very similar to how things were done in ASP.NET MVC years ago - making heavy use of DI, opinionated folder structures and naming conventions and a well written CLI made for a pleasant development experience.

> Please navigate to the page: https://gitlab.com/sytses. From a frontend perspective: What is happening to display this page? How is that data getting presented on screen? If you had to build this from scratch, how would you do it? *

Initial request is pulling down shell of the page and presenting an ajax loader spinner for 2 or 3 content areas. Subsequently 2 or 3 AJAX calls are made for the contribution calendar (calendar.json), the activity (`[username]?limit=10`) and the projects (projects?limit=10). I haven't verified if the calendar call is made when browsing from my phone, but I do see that the calendar is not rendering. 

Calendar request is just pulling back a single object literal (JSON) with dates strings as properties, and the number of contributions for each property value. The success callback of this request then builds the HTML for the calendar.

Activity and projects requests are each pulling back a single object literal (JSON) with two properties, html and count. 

The success callbacks of these last 2 AJAX requests inject the HTML from the html properties of the response into the DOM instead of building it. 

The page has been packed via webpack and leverages jQuery and VueJS / Vuex (among others).

It seems to me, the UX intent of this page is to present a quicker loading experience to the user for these dynamic content areas, and due to the nature of the data being presented, I would agree with the approach. 

One could argue that it may be 'more right', or quicker or easier to reason about by sending an array of data for the activity and projects requests and applying/binding them against an HTML template. My guess is there is a performance gain somewhere in the pipeline - perhaps this HTML is used in multiple places throughout the webapp, native apps or elsewhere, and thus it makes sense to cache the full HTML of each activity or project elsewhere.

One may also argue that because this page never fetches these responses again on a timed interval nor saving it to a single state tree, that perhaps the data is not very dynamic - and due to its payload size, not very large, and could just come down with the full page shell in the first place. We're really only gaining a perceived notion of quick response time here - which, is usually all the justification that's needed for doing this type of page loading on a non-SPA web application anyway.

So in the end - I agree with teh approach and would not really do anything differently here, other than perhaps a sanity check with colleagues on the usage of HTML vs data binding on the AJAX responses.

> Tell us about the most advanced/exciting/mind-blowing frontend thing you have built. *

It's more of a full-stack thing, but I'll still tell you about it because I was and still am pretty excited I was able to pull it off! At a previous company, one of our customers (a top 8 USA brick and mortar retail store) wanted to know if people at their customer service line were looking at a 60" digital display. The display would play videos of ads or products throughout the day and was situated 15 feet to the left of where the lines funneled into. The display's content was scheduled by the customer's marketing specialists and was delivered by one of our native media players. Our solution was to integrate with an inexpensive USB camera that would allow us to analyze it's viewport for faces and report what it found via data visualizations in real time. 

The overall solution consisted of - 
* Omron hvc-p2 - with embedded image sensing functions such as gender, age and intent analysis and their coordinates and size within the camera's viewport (images were not saved, only data for example 45% probability the face is aged 60-65 years)
* A nodejs application that interfaces with the camera and pumped realtime results to Azure Event Hubs
* Azure Event Hubs, Data Storage, Data Streaming Analytics Jobs and Azure Functions
* Socket Server web app that received from Azure Functions and published realtime data to subscriptions
* A vanilla JavaScript and HTML page that displayed the faces as colored divs on a viewport (also a div) in realtime as faces moved

While not exactly mind-blowing, it was advanced and exciting due to the amount of architecture involved - physical and software based. It was really cool to see the divs that represented faces move as me or other testers moved in the camera's viewport. It was challenging because we did not have control over the output of the camera itself, so we needed to ETL it through Azure and perform aggregations on the fly and still have < 250ms display times from camera snapshot to display on the HTML app. It was also fun because it allowed me to write vanilla JavaScript for the first time in a while - and challenging because I had to relearn some math that I haven't done since highschool! We needed to attempt to identify the person in the viewport whom we could consider 'closest to center' - to be able to do this requires pythagoreom theorem and I prototyped the functionality of this out into a pen to get it right prior to integration with the app - you can view it here if you're interseted: https://codepen.io/chrisjbarr/pen/xaMpbr 

> Tell us about your latest "hard to debug" frontend problem. How did you resolve it? Which tools did you use? *

Not the answer you're looking for here, but I'm drawing a blank trying to think of a "hard to debug" problem on the front-end that I've had recently. One app I wrote was a VueJS app specifically targeting Chrome 64+ which displayed on an 80" touchscreen digital display. It was meant to be used by customers in a fashion store to allow them to browse a catalog of looks and ideas and give them the opportunity to add items to their 'changing room' and subsequently receive a text alert when a store associate gathered their items. There was also options for a 'cart' as well as a 'favorites list' that you could add items to. Lots of state management - I used Vuex and the Vue Devtools to help me during the development and testing process. The tools make debugging easy - and the fallback is almost always, for me at least, console.logging to there's no tomorrow. :) I wish a had a better story for this one but I don't - maybe something will come to me between now and if an interview happens!











