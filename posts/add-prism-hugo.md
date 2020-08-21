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

## Download Prism JavaScript and CSS

Go to [PrismJS Download page](https://prismjs.com/download.html) and select the languages and plugins that you want to use for your code samples. Download the `css` and `js` files at the bottom of the page.

Not sure what to select? See the [full list of supported languages](https://prismjs.com/index.html#supported-languages) and [all available plugins](https://prismjs.com/index.html#plugins).

## Add the CSS and JavaScript files to the `static` folder your project

To make the CSS and JavaScript files available to your site when it is built by Hugo, copy them to the `static` folder in your project. Hugo copies all files in `static` directly to the `public` folder when it builds your site.

For example, copy the files to:

```bash
/static/css/prism.css
/static/js/prism.js
```

When Hugo builds your site, the files will be available in:

```bash
/css/prism.css
/js/prism.js
```

## Add a reference to the CSS and JavaScript files to your templates

Like any other stylesheet, the `prism.css` file needs to be referenced from the `<head>` section of all your pages. Like any other scripts, the `prism.js` needs to be referenced from the end of the `<body>` section of all your pages.

Hugo builds all the pages for your site using various HTML templates in the `layouts` folder. The correct templates to add the files to depends on your specific project. Some themes have hooks like `head-end.html` and `body-end.html` to make it easy for you to add your own code. If your theme doesn't provide this then you'll need to identify the right templates yourself - it can help to look for the templates where any other CSS or Javascript files are referenced.

When you identify the correct templates, add the following line to add the `prism.css` stylesheet.

```html
<link rel="stylesheet" href="/css/prism.css" />
```

When Hugo builds your site, this line appears inside the `<head>` section of every page.

Next, add the `prism.js` JavaScript:

```html
<script src='/js/prism.js'></script>
```

When Hugo builds your site, this line appears at the end of the `<body>` section of every page.

At this point you can rebuild your site using `hugo server` and verify that the CSS and JS references appear in the source of every page.

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

If you don't specify a language specifier on your code blocks, Prism syntax highlighting is not applied. However, to apply Prism styling to code blocks without a specific language you can use `none` as the language specifier.

## Check the results

 Now you can rebuild your site and see the results! Depending on the Prism theme and plugins you selected in your download, you should see something like this:

![Prism highlighting](/images/prism_highlighting.png){.img-fluid}
