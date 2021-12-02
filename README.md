<!-- Auto-BnB

Auto-BnB was made using two distinct servers - one for the front end and one for the backend.

To Start the website on your local host you will need to
- change directory into the backend folder as well as the frontend folder.
- Create a new psql database for this project with nothing in it
- From the backend folder you will need to create a '.env' file for the credetials to a psql database that you have on your machine.
- run migrate and seed from sequelize inside the backend folder
- run npm start from both the backend and the frontend

After you have completed these steps, you should see the websited being hosted on your local Machine
 -->

# [Auto-BnB](https://auto-bnb.herokuapp.com/)
By Benjamin Rose

## Table of contents
   * [Auto-BnB at a glance](#auto-bnb-at-a-glance)
   * [Example Usage](#Example-Usage)
   * [Application Architexture](#application-architecture)
   * [Frontend Overview](#Frontend-Overview)
   * [Backend overview](#Backend-Overview)
   * [Styling](#Styling)
   * [Conclusion and Next Steps](#Conclusion-and-Next-Steps)


## Auto-BnB At A Glance
Auto-BnB is a fullstack app that allows the user to find cars to rent and list cars for others to rent.


## Example Usage
### Step 1
   * Visit the site
      * ![image](https://user-images.githubusercontent.com/8016326/144485593-94203d73-a28e-4cbd-b513-3bad523502c4.png)
### Step 2
   * click the dropdown in the top right corner and click the sign up button
      * ![image](https://user-images.githubusercontent.com/8016326/144485720-e404f7b7-25b0-4c36-9f73-2a2b344e3aec.png)
### Step 3
   * Fill out the sign up form completely and click sign up
      * ![image](https://user-images.githubusercontent.com/8016326/144485848-9a4a7a56-4e4a-49e6-b43d-ed8b9af5ad64.png)
### Step 4
   * Click on the type of car that you would like to rent
      * ![image](https://user-images.githubusercontent.com/8016326/144485955-1735902e-656a-4626-b25d-015dff379d49.png)
### Step 5 
   * Click on the car that you would like to rent
      * ![image](https://user-images.githubusercontent.com/8016326/144486110-0fdbe04c-2177-4b54-ae24-b283e901e132.png)

## Application Architecture
As mentioned before, Auto-BnB is a fullstack application.
   * Backend Server - Express
   * Database - PostgreSQL
   * Frontend - React Redux
   * Styling - Custom CSS



## Frontend Overview
### React

Acquire utilized react for its frontend, making use of props, hooks and countless other technologies provided by react. React allowed the process of creating the site to be much more efficient.

### Redux 

Acquire utilized redux for its state management on the frontend, making use of reducers, action creators, and custom thunks. Redux made the majority of all API calls to the backend, and stored all major, immediately needed data. 

## Backend Overview
### Express
The Express server consists of different routes that perform CRUD operations to the database.

### Postgresql 
Postgresql was chosen as the SQL language and is managed by Sequelize.


## Styling

### CSS 
Custom CSS was used for the styling of this project. 
Properties used frequently:
   * Position
      * relative
      * absolute
      * fixed
   * Display
      * flex
      * grid
   * animations and effects

## Conclusion and Next Steps

Auto-BnB was a blast to create and I look forward to managing it in the future.
There are some features that I plan on implementing in the future 
   * WebSockets for realtime comments
   * More establshed Search feature
   * AWS for photo upload
   * Responsive styling
   * Instant Messaging
   * Car Rental Booking


