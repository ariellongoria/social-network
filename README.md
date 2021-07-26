# Social Network API

## Description

This simple social network API uses MongoDB to store user data, along with their thoughts (posts) and reactions to thoughts.

## Installation

Make sure to have MongoDB installed in your machine. If necessary open a terminal and run the `mongod` command to start the MongoDB server.

To install the necessary packages type `npm i` into the console. This should install mongoose and express into your folder.

## Usage

Use a tool such as Insomnia Core to test the endpoints of the api. Use `localhost:3001/api/` to test the routes.

Here are the routes to test:

-   GET and POST routes for users at `/users`
-   GET, PUT, and DELETE routes for individual users at `/users/:id`
-   GET and POST routes for thoughts at `/thoughts`
-   GET, PUT, and DELETE routes for individual thoughts at `/thoughts/:id`
-   POST route for reactions at `/thoughts/:thoughtId/reactions`
-   DELETE route for reactions at `/thoughts/:thoughtId/reactions/:reactionId`

Here is a video walkthrough on how to use it: https://drive.google.com/file/d/1MoVBmKWbtvuxYBkZKJMQu8dm5ZPLC-P8/view

## Questions

Check out the repository on [GitHub](https://github.com/ariellongoria/social-network).
