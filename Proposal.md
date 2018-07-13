## Problem Statement: 

I love buying the “hot and new” cosmetic or makeup product on the market. However, I have a lot of cosmetics and makeup products in my bathroom that I forget to use because of the newcomers. On random days, I will look through my cabinets and see an old product I loved and will want to use it, come to find that it has expired. 

## Project Description:

Mobile application that allows a user to take a photo of their new product, add information about it (brand, category, date added, expiration date, notes/reviews), and have it stored in their “pantry” that will be categorized by the type of cosmetic and in order of expiration date.

## User Experience:

* User opens app and is prompted to set up an account.
* Upon setting up the account, the user will be asked to provide the following details:
    * Name
    * Age
    * Email
    * Optional Name for their Pantry
* After creating an account, the user will be directed to the home screen that lists the different Pantry categories. Categories will include:
    * Makeup
    * Skin Care
    * Toiletries
* When each category is clicked on, a list of products will appear in that pantry in the form of a card.
* Each card will be clickable, displaying the details of the card and options to edit or delete the product.
* Each item will be sorted through date of expiration
* When a user wants to add a new product, they will click on a “+” symbol, rendering a form with the following fields:
    * “Add Image” button
    * Name of Product
    * Brand
    * Category (drop down)
    * Expiration Date
    * Notes/Comments
    * “Add!” button
* After an item is added, the user can update the information or delete it if need be.
* The Beauty Pantry will send push notifications to the user as each product reaches its expiration date.
* Future implementation includes: Optical Character Recognition (OCR) to convert the text of “Directions” from a product label to the form and Image Classification.


## Technologies:

* React
* Cordova
* React Native
* Node
* Knex
* PostgreSQL
* Express
* Chart.js
* Python 
    * Tesseract for OCR 
    * Keras for Image Classification



