# News homepage solution

There are two additional elements related to the mobile menu, which are conditionally rendered based on the toggle state variable use in News Homepage

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](./src/design/desktop-design.jpg)
![Mobile](./src/design/mobile-menu.jpg)

### Links

- Solution URL: [Github](https://github.com/AJstyles903/news-homepage)
- Live Site URL: [Netlify](https://superb-gecko-53b785.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Tailwind CSS
- Vite

### What I learned

Within the Navbar component, there is a state variable called toggle and a function to update it called setToggle. These are created using the useState hook.
The initial value of the toggle variable is set to false.

To see how you can add code snippets, see below:

```js
const [toggle, setToggle] = useState(false);
const toggleMenu = () => {
  setToggle(!toggle);
};
```

## Author

- Frontend Mentor - [@AJstyles903](https://www.frontendmentor.io/profile/AJstyles903)
- Twitter - [@aryanjay903](https://www.twitter.com/aryanjay903)
