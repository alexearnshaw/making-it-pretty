---
layout: layouts/post.njk
title: Jamstack conf virtual May 2020
description: My first virtual conference!
date: 2020-05-27T23:00:00.000Z
featuredImage: /images/uploads/banner.png
---
This week I attended my first ever virtual conference. I had fairly low expectations as I really didn't expect a virtual conference to come anywhere close to the experience of an in-person live conference. But I was very pleasantly surprised!

The Jamstack conference was hosted on a platform called [Hopin](https://hopin.to/) and I have to say this platform was just outstanding. It handled over 3000 attendees without a hitch and provides live chat facilities, a stage for the main conference speakers, breakout areas for exhibitor booths and for live Q&A sessions, and a networking area where you can have a 3 minute video call with another random attendee (the equivalent of meeting in the hallway!).

![Harper Reed](/images/uploads/harperreed.png){.img-fluid}



# What is the Jamstack and why did I attend this conference?

The Jamstack is a stack for modern web development, involving Javascript, APIs, and Markup. I am not a web developer but I became acutely aware of this stack when I became involved in a work project to open up our user documentation using what's known as "docs-as-code". 



# How does docs-as-code utilize the Jamstack?

* All documentation content is stored in a public GitHub repository in Markdown format (that's the Markup)
* A static site generator is used (in my case, Hugo) to build and render a static HTML website from the Markdown files (interesting fact: our documentation now takes approximately 3 minutes to build, using our previous tooling the same documentation took over 40 minutes to build!)
* The static website is built and deployed on a CDN using Netlify, a hugely popular build and deployment platform for Jamstack sites.
* Various APIs and Javascript are used to add "dynamic" features to the final website, such as Algolia DocSearch to provide a site search, the Netlify CMS React app to provide a WYSIWYG edit capability for contributors, and many more!



# What were the highlights from Jamstackconf?

* For me, it was simply an eye-opener to discover how a conference can be successfully held virtually when the right tooling is used. I really didn't find the conference lacking in any way and there was huge energy from the constant stream of chatter from all of the participants!
* One of the things I really liked was that the majority of the talks were prerecorded. Some participants didn't like this but it meant that the speaker could join in live with the chat and answer attendees questions while the talk was ongoing and it also meant no time was wasted on fixing technical issues that might occur with live talks.
* I was amazed at the sheer amount and types of websites that are developed using the Jamstack. For example, did you know that the Obama presidential campaign raised $250m dollars using a Jamstack website, or that the [Covid-19 tracking project](https://covidtracking.com/) is also a Jamstack site that now serves millions of users per day?
* The most interesting talk for me was a presentation of results from a survey of over 3000 Jamstack users. In this survey I learned how the tools we're using for our current docs-as-code implementation compare to the other tools available in terms of popularity and satisfaction.

![Jamstack tools survey](/images/uploads/2020-05-27_15-00-08.png){.img-fluid}



The takeaway quote for me was this one:

> Today we make it work. Tomorrow we make it look pretty.

![Covid project quote](/images/uploads/covid19.png){.img-fluid}

This was from one of the volunteers on the Covid tracking project. I will definitely try to apply this to my work from now on as I often find that we spend a lot of time discussing and sharing opinions on how something looks, when all users really want is something that works!



All in all it was a really cool virtual conference and I really enjoyed it. I won't hesitate to attend another virtual conference 👏



Here are [YouTube recordings of all the talks](https://www.youtube.com/watch?v=w9yrrQBBKos&list=PL58Wk5g77lF8jzqp_1cViDf-WilJsAvqT) and you can learn more about the Jamstack at [jamstack.org](https://jamstack.org/).