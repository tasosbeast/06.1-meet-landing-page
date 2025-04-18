# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Meet Landing page](./screenshot.png)

### Links

- Solution URL: [https://github.com/tasosbeast/06.1-meet-landing-page](https://github.com/tasosbeast/06.1-meet-landing-page)
- Live Site URL: [https://meettasos.netlify.app/](https://meettasos.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Framer Motion](https://www.framer.com/motion/) - For animations

### What I learned

This project helped me refine my skills in building responsive layouts and implementing animations using Framer Motion. I learned how to create smooth transitions and animations that enhance the user experience. I also improved my understanding of React and how to manage state effectively.

Here’s an example of a component I’m proud of:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center"
>
  <h1>Experience more together</h1>
</motion.div>
```

### Continued development

In future projects, I want to focus on:

- Advanced animations and transitions
- Learn more about React applications
- Exploring more CSS Grid layouts for complex designs

### Useful resources

- [Framer Motion Documentation](https://www.framer.com/motion/) - Helped me understand how to create smooth animations.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - A great resource for quickly styling components.

## Author

- Frontend Mentor - [@tasosbeast](https://www.frontendmentor.io/profile/tasosbeast)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and helping me improve my skills. Special thanks to the Tailwind CSS and Framer Motion communities for their excellent documentation and examples.
