---
title: Add PrismJS to Hugo
description: Add PrismJS syntax highlighting to Hugo in 5 steps
date: 2020-08-13
tags:
  - Hugo
  - PrismJS
layout: layouts/post.njk
---

Do you have a lot of code samples in your Hugo documentation site? [PrismJS](https://prismjs.com/index.html) is an excellent syntax highlighter that supports over 200 languages, and offers many plugins to add extra features to your code blocks, such as the ability to copy code samples to the clipboard. This post shows you how to use Prism as a syntax highlighter in your Hugo static site.

## Download Prism JS and CSS

Go to [PrismJS Download page](https://prismjs.com/download.html) and select the languages and plugins that you want to use for your code samples. Download the `css` and `js` files at the bottom of the page.

Not sure what to select? See the [full list of supported languages](https://prismjs.com/index.html#supported-languages) and [all available plugins](https://prismjs.com/index.html#plugins).

## Add the CSS and JS files to the `static` folder your project

To make the CSS and JS files available to your site when it is built by Hugo, copy them to the `static` folder in your project. Hugo copies all files in `static` directly to the `public` folder when it builds your site.

For example, copy the files to:

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

The CSS file needs to be referenced from the `<head>` section of all your pages, and the JS file from the end of the `<body>` section of all your pages. In most Hugo projects, you will find templates for these sections in `layouts/partials/`.

Let's add the CSS file to the header template:

```html
<head>
    ...
    <link rel="stylesheet" href="/css/prism.css" />
</head>
```

Let's add the JS file to the end of the `<body>`:

```html
<body>
    ...
    <script src='/js/prism.js'></script>
    ...
</body>
```

## Specify a language for your code blocks

To apply Prism syntax highlighting to code blocks in your Markdown files, you must use triple backticks with a language specifier. For example:

```markdown

    This is a HTML code block in Markdown:

    ```html
    <p>Hello</p>
    ```

    This is a JavaScript code block:

    ```js
    console.log("Hello world");
    ```

```

## Build your Hugo site

Rebuild your Hugo site and verify the results on localhost:

```bash
hugo server
```

Depending on the Prism theme and plugins you selected in your download, you should see something like this:

![Prism highlighting](/images/prism_highlighting.png){.img-fluid}
