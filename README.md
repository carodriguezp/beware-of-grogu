# Beware of Grogu-website

## Description

This project is a website layout exercise using **node y vite**. It is built using React and SCSS, providing a clean design for easy customization. 

This website is about a game of chance where we have 6 squares representing a path in the cargo area of the Razor Crest leading to the closet where the merchandise is safely stored. Thus, we will have 7 squares, 6 of the path, and one representing the closet. During the journey, you have done your job very well, but now you must empty the closet. To do this, you must unload the merchandise little by little. This is the most delicate moment, as Grogu may take advantage and reach the closet. If that happens, he will eat whatever he finds, and Mando will lose the chance to know where Ahsoka is. Therefore, you will be left without a reward. In addition to those 7 pieces, you will have three containers where each type of merchandise is stored. You will win the game if you manage to unload all the merchandise. You will lose if Grogu reaches the last square (the closet).


In the project we have used React's started Kit, which includes an HTML template engine, the SASS preprocessor and a local server and many other things. 

This Kit helps us to work more comfortably, since it automates tasks.

In the Kit there are 3 types of files and folders:

- The files that are loose in the repository root, such as vite.config.js, package.json.... They are the configuration of the project and we don't need to modify them (except this README.md, to describe your project).
- The `src/` folder: are the files of our web page, like HTML, CSS, JS...
- The `public/` folder, that has static files like images, fonts, favicon, old JavaScript libraries (jQuery, ...)
- And the `docs/` folder, which is automatically generated when we start the project. Kit reads the files inside `src/` and `public/`, processes them and generates them inside `public/` and `docs/`.

## Table of Contents

- Quick Start Guide
- Installation
- Usage
- Deployment
- Proyect structure
- Screenshots
- License

## Quick Start Guide

> **NOTE:** You need to have [Node JS](https://nodejs.org/) installed with a version higher than 14 to work with Adalab Starter Kit.

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

```bash

git clone https://github.com/your-username/project-name.git
```

2. Open the project folder in your preferred code editor.

3. Run a local development server (you can use tools like Live Server or any other server of your choice).

```bash
npm install  
npm start
```

## Usage

After the installation, open the project in your browser and navigate through the sections to explore the content. 

The website is designed to be responsive, providing a seamless experience across different devices such us mobile, tablet and desktop. 

The size of the elements has been adapted using rem units instead of px, for example in font size and margin, which ensures better responsiveness and adaptability to various devices.

## Deployment

To deploy this proyect, please use the command bellow:

```bash
npm run deploy
```

## Proyect structure

Please find folder structure below:

```
src

 ├─ components
 ├─ images
 ├─ style
 |  ├─core
 |  |  └─ reset
 |  └─ App
 └─ main 
    

```
## Screenshots


![Alt text](./public/img-1.png)
![Alt text](./public/img-2.png)

## Licence

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute the code for your projects. Make sure to check the license for more details.