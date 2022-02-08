# NewFeedApp
A new React Native Project

## Getting Started

This project is starting point for news feed application

# First packages need to be installed

yarn install or npm install

# IOS 
pod install

# Android

Nothing is required from android side

# Packages used
* React navigation for navigating between screens
* React native share to be able to share links on social media
* Shimmer package to have a loading effect acting as placeholder
* axios package for backend/apis communication
* Redux package for global state management

## Project structure

First ,Typescript is used to maintain better quality code and to have typed system

1. Components : any reusable components
2. Containers : main screens
3. Redux : handle state management
4. Navigation : main navigation file for the whole app
5. Utils : any required utilities for the app
6. Models : for any data coming from the backend to be used as model
7. Theme: required for colors,fonts,...etc
8. Services: main services required for communicating the backend
9. Hooks : for any custom Hooks 

# Screens

Mainly Two screens:
1. Home Screen : 
    * A List of articles gathered from the api
    * A search input to be used for any preferred articles

2. Details Screen:
    * It has more details for the article itself 
    * It has a share floating button for sharing article's link



