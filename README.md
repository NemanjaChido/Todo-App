# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge) 
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Todo app built with javascript library: React.js and styled with Tailwind css. In the app, each section of the UI is being rendered with individual piece of react component that includes; Todolist, Todo, Input. The app allows users to create, delete, mark tasks as complete, drag and rearrange task and navigate between ALL/ACTIVE and COMPLETED section, Thus providing a simple and intuitive interface for task management.

## The Challenge
Users are able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list by pressing "Enter" or "Add" button
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop to reorder items on the list

### Screenshot

![](./~$creenshot.mobile.docx)
![](./~$creenshot.Tablet.docx)

### Links

- Solution URL: [Add solution URL here](https://github.com/NemanjaChido/Todo-App.git)
- Live Site URL: [Add live site URL here](https://nemanjachido.github.io/Todo-App/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/docs/installation/tailwind-cli) - For styles
- SEO and Performance Check

### What I learned

* Use of "TodoContext" 
--For storing related context, properties, interactivities. Making their values dynamically accessible to various component by importing the created custom hook "useTodos".

* The Use of react hooks e.g useState 
--for handling event like adding todos using the "addTodo" function, where object of "newTodo" const bearing props like unique IDs, text and completed is created each time "Enter" or "add" button is triggered.
--clearing todos using the "clearTodo" function by targeting its unique ID in the array,.
--conditional rendering of completed items using "toggle" and targeting specifically their "id".
--strikethrough text for completed tasks when by iterating over the img icon.
--toggling between light and dark mode using the intialized state actions "theme" & setTheme.
--filtering and clearing completed todo item with "clearCompleted"
--Use of "handleDragStart", "handleDragOver" and "reorderTodos to drag and reorder items by targeting their (index) when (e) events like "onDragStart", "onDragOver", "onDragLeave", "onDrop" and "onDragEnd" are triggered..

* useEffects hook: 
-- To storing data in local storage depending on when "todos" task updates.


### Continued development

- Current State: it uses useState for task management, which is sufficient for a small-scale app but may become cumbersome with complex features.
- Current Code: My app’s codebase is functional but may include repetitive logic or tightly coupled components.
- Transition to a more scalable solution is necessary, thus, suggestions will be greatly appreciated


### Useful resources

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Author

- Frontend Mentor - [@NemanjaChido](https://www.frontendmentor.io/profile/NemanjaChido)
- Website - [@Ugwu Chidozie](https://www.github.com/NemanjaChido)
- Twitter - [@dzWata23](https://www.twitter.com/dzWata23)

