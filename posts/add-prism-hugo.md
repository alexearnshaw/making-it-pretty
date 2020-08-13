---
title: Add PrismJS to Hugo
description: Add PrismJS syntax highlighting to Hugo in 5 steps
date: 2020-08-13
tags:
  - Hugo
  - PrismJS
layout: layouts/post.njk
---

Do you have a lot of code samples in your Hugo documentation site? [PrismJS](https://prismjs.com/index.html) is an excellent syntax highlighter that supports copying code samples to the clipboard and many other features. This post shows you how to use Prism as a syntax highlighter in your Hugo static site.

## Download Prism JS and CSS

Go to [PrismJS Download page](https://prismjs.com/download.html) and select the languages and plugins that you want to use for your code samples. Download the `css` and `js` files at the bottom of the page.

## Add the CSS and JS files to the `static` folder your project

To make the CSS and JS files available to your site when it is built by Hugo, copy them to the `static` folder in your project. Hugo copies all files in `static` directly to the `public` folder when it builds your site.

For example, if you copy the files to the following locations:

```bash
/static/css/prism.css
/static/js/prism.js
```

In the built site the files will be available in:

```bash
/css/prism.css
/js/prism.js
```

## Add a reference to the JS and CSS files to your templates

The CSS file needs to be referenced from the `<head>` section of all your pages, and the JS file from the end of the `<body>` section of all your pages. In most Hugo projects, you will find these templates in `layouts/partials/`.

For example, let's add the CSS file to the header template:

``` html
   ...
    <link rel='stylesheet' href='/assets/scss/prism.css' />
```

