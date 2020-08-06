---
layout: layouts/post.njk
title: Small steps along the road to self-service documentation
description: This is a summary of a my first experiment with using docs-as-code
  for documentation as part of a company hackathon in 2019.
date: 2019-05-16T23:00:00.000Z
featuredImage: /images/uploads/documentation-for-the-kc12fe.jpg
---
I was thrilled to take part in another company hackathon :) and I think again it was a great opportunity to take some time out from the pressures and constraints of our everyday work and focus on some big idea for improvement! In this post I'm going to try and briefly describe the different elements of the solution we tried out, discuss what worked and what didn't, and suggest some ideas for future work. As a recent attendee at an [Agile conference](/posts/firstpost/) which included Barry O'Reilly as a keynote speaker, and a recipient of his book "Unlearn" I'm going to try and show how I applied his "Think big, start small, learn fast" idea to this hackathon project! Let's see how it goes ;)

# Think big

Currently our docs are read-only, meaning there is no way for an end-user to edit them (or even easily give feedback) on the [documentation portal](https://docs.axway.com).

We have received more and more requests (internally and externally) for this ability, so our aim was to find a way for anyone (technical or non-technical) to be able to contribute directly to docs, using a workflow that would enable us to be able to quickly review, edit, and publish the changes.

Instead of thinking about all the reasons and obstacles that would prevent us from doing this (current formats and tools used in the company etc) we decided to focus on the end user and what would work best for them. When we looked at how other companies are addressing this need it seemed like an 'Edit on Github' button on every website page could be a solution. However, we also wanted to accommodate non-technical users who don't know Git, so we decided to go a step further and look at a CMS (content management system) solution too.

# Start small

To get something that provided the user experience we hoped to achieve in the short space of time we had these are the tools and workflow we went with. We just wanted to get something up and running as quickly as we could and then put it out to potential users for feedback!

# Hackathon tools

## Markdown

Markdown is a lightweight markup syntax (it's like a shorthand for HTML). There are other lightweight markups (such as Asciidoc and reStructuredText) but we chose Markdown as it seems to be the most widely used and widely supported by static site generators. [More about Markdown](https://idratherbewriting.com/learnapidoc/pubapis_markdown.html) on Tom Johnson's blog.

As our current documentation is in Madcap Flare XHTML or Confluence, we first generated HTML and then used [pandoc](https://pandoc.org/) to convert from HTML to Github-flavoured Markdown (GFM). This involved quite a bit of manual reformatting and clean up, but this could be automated/scripted in a future iteration.

## Static site generators

So what is a static site generator (SSG)?

SSGs generate a static website (HTML) from your simpler source files. But SSGs don't just convert Markdown content files to HTML, they also build the entire static website layout and structure using simple layout files, configuration files, and "include" files. For example, an SSG reads your configuration file and pushes your Markdown content into the layout files, adds whatever "includes" are referenced (such as a navigation bar, a site header or footer, even chunks of reused content), and writes out the HTML pages ready for viewing online on a static website. SSGs can usually be run from the command line so can also be easily called from build scripts etc. Most SSGs also integrate very well with Git.

Many technical writers (until recently including myself!) assume that SSGs and the whole docs-as-code approach do not compare to the more powerful enterprise authoring tools that we are more used to using, however it has become clear to me now that actually SSGs are more flexible and can be just as powerful if you have (or have access to people with) the skills to set them up properly. Here's a couple of posts (again from Tom Johnson, have you guessed I'm a big fan!!!) about how SSGs compare to more traditional HATs (help authoring tools):

* [Thoughts on docs-as-code after 3 years -- it works!](https://idratherbewriting.com/2018/07/03/docs-as-code-after-three-years/)
* [Will docs as code scale?](https://idratherbewriting.com/2016/08/01/responding-to-feedback-on-modern-tech-writing-review/)

### Jekyll

We chose Jekyll as the SSG for the hackathon because it's open source, it seemed fairly simple to set up, it's been around a long time and has a big community that should be able to help if we ran into problems. Additionally, there was a readily available [Jeklyll theme for documentation](https://idratherbewriting.com/documentation-theme-jekyll/) that we could quickly adapt to our needs:

![Documentation built from Jekyll](/images/uploads/jekyll.png "Documentation site built from Jekyll")

However, there are many other alternative SSGs, so I'm not sure Jekyll is the right one for our needs. Hugo is growing in popularity (used by [K8s](https://kubernetes.io/docs/home/) and other documentation sites), as is Gatsby and Middleman.

The choice of SSG is largely dependent on the programming skills you have available: [Jekyll](https://jekyllrb.com/) uses Ruby/Liquid, while [Hugo](https://gohugo.io/) uses Go/Golang, and [Gatsby](https://www.gatsbyjs.org/) uses React.

Another consideration is the availability of suitable documentation themes (as some SSGs are aimed more at marketing or product websites). I learned after the Hackathon that Google have recently made a Hugo documentation theme called [Docsy](https://github.com/google/docsy) available, which looks quite impressive!

## Hosting and CI/CD

You can publish a static website on any web server, but for the hackathon we wanted a very quick, easy way to deploy and publish our site. We don't have much in the way of Jenkins skills so we needed something that would do the build and deploy for us as soon as we committed to a Git repo. Enter Netlify!

![Netlify](/images/uploads/netlify_hackathon.png "Netlify")

[Netlify](https://www.netlify.com/) is a continuous deployment hosting platform. When you commit a change to a Git repo, the site is automatically rebuilt and deployed on the Netlify server, on a random domain name, e.g. for our hackathon this was `https://hopeful-jennings-7da6b5.netlify.com`.

Netlify is a paid product but they have a free tier, which was adequate for our hackathon project. Netlify offers lots of enterprise features on the paid tiers, and is used by lots of well known organizations, such as K8s, Docker, Cisco, Atlassian, and many more. Netlify was a good choice for this project as it was easy to set up and use, however there are alternatives, such as Github Pages, CloudCannon, etc., and they each have their own pros and cons. For more, see [Hosting and deployment options](https://idratherbewriting.com/learnapidoc/pubapis_hosting_and_deployment.html) on Tom Johnson's blog.

## CMS

So, what about those non-technical users who maybe don't have knowledge of Git or Markdown? To get as many people as possible contributing to documentation we really needed something that would be very easy for anyone, no matter what their skills, to use. Ideally it would provide a WYSIWYG view for editing, and although it should enable us technical writers to still review and approve edits using pull requests in Git, for end users it shouldn't require any knowledge of Git workflows at all. There were not that many solutions to choose from here, and we went with [Netlify CMS](https://www.netlifycms.org/) as it's open source, so totally free, in active development, and works very well with Netlify.

![Netlify CMS](/images/uploads/cms_hackathon.png "Netlify CMS")

Netlify CMS supports both Github and Gitlab, but for the hackathon we decided to go with Github as it turned out that the "editorial workflow", that would enable us to review and approve any changes proposed by contributors before they are published live, and this workflow is only supported on Github currently. We did have some issues setting up Netlify CMS, in that the editorial workflow didn't seem to work as expected, and by default it only allows users to edit certain elements of your website (blog posts and not content pages). However, we are confident that we can find solutions if we had more time, and it definitely meets the brief in terms of the end-user experience:

![Edit in Netlify CMS](/images/uploads/usecms_hackathon.png "Edit in Netlify CMS")

# Learn fast

To get some early feedback on both of these options, we asked everyone we could think of (developers and non-technical people) to test one or both of the solutions. We provided brief instructions and asked them to complete a short NPS survey. 

# Conclusion

I think using lightweight markup like Markdown along with a static site generator certainly could be the future for documentation. We can't ignore the fact that the 'Edit on Github' model for contribution is being adopted by more and more companies, big private companies like Microsoft and Amazon, not just open source organisations. Alongside the benefits for users, in that they feel more involved and more able to make a difference by contributing to and improving our documentation, there are benefits for technical writers too. If the contribution workflow is quick and simple enough it should empower developers and non-developers alike to edit the documentation directly, instead of opening Jira tickets, assigning them to tech writers, and waiting for us to implement them. It should help remove the bottlenecks in our current process, reduces dependencies, and although it's not completely self-service (as all contributions will still need to be reviewed by tech writers), I think this solution is a small step in the right direction :)

Going forward there are many things to consider, such as:

* Can we find a mostly automated way to migrate our content from current formats (Flare/Confluence) to Markdown?
* Can we find an SSG and a documentation theme that is flexible and powerful enough to build a modern documentation website?
* Could our current doc portal (Zoomin) implement/support this? If not, can we achieve the same functionality and features (user visibility, taxonomy, search, SSO, etc. ) with another hosting platform like Netlify?

All in all I think we achieved a lot in a very short space of time, and we learned a lot about what is possible for docs :)