# Frontend Mentor - Notifications page solution with theme switcher

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/notification%20dark.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Illyaas4Show/Notification-page)
- Live Site URL: [Add live site URL here](https://superlative-praline-98b9c8.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow

### What I learned

I haven't coded in quite a while so this was like a refresh project but I still learnt a lot, which is something I love about coding! 
- I learnt how to make a theme switcher, which was pretty cool.
- I am starting to get the hang of the 7-1 Sass layout.
- I learnt how to use the `:has()` selector.
- I learnt about the `display: inline-block;` - didn't really know what it did until now.
- I learnt an important difference between SCSS variables `$example: red;` and CSS custom properties `--example: red;`:
  - the fact that you can set CSS variables in the `:root` makes it possible to use the `:has()` property to switch themes:
    ```css
      :root:has(.light:checked) {
        /* change whatever variables you need */
        --white: black;
      }
    ```

### Continued development

I really enjoyed the theme switching so I will try to use it in my future projects. I will also try to make my own little SCSS template to make starting up projects a lot easier.

### Useful resources

- [JavaScript Front](https://www.youtube.com/watch?v=qs_VhlPq5Ik) - This helped me with the little dots on the notifications by informing me about the `display: inline-black;`.
- [Kevin Powell](https://www.youtube.com/watch?v=fyuao3G-2qg) - He helped me with the theme switcher.

## Author

- Frontend Mentor - [@Illyaas4Show](https://www.frontendmentor.io/profile/Illyaas4Show)
- Github - [@Illyaas4Show](https://github.com/Illyaas4Show)