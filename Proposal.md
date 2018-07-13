## Problem Statement: 

I love buying the “hot and new” cosmetic or makeup product on the market. However, I have a lot of cosmetics and makeup products in my bathroom that I forget to use because of the newcomers. I spend a lot of money on products and would slow down my spending if I had remembered to use my older "beloved" product prior to buying a new one.

## Project Description:

Mobile application that allows a user to take a photo of their new product in their bathrooms, allow the image to be digitally visualized and converted into text. Image recognition will categorize the product based on 2D attributes. Users can review products that will allow for the cadence of push notifications. Notifications will be sent as reminders to users before the expiration date, ultimately deterring them from buying new products until necessary. Based on the rating of the product, the notifications will differ, either encouraging the user to rebuy the product or save their money and not buy it again.

## User Experience:

* User opens app see a home screen that lists the different Pantry categories. Categories will include:
    * Makeup
    * Skin Care
    * Toiletries
* When each category is clicked on, a list of products will appear in that pantry in the form of a card.
* Each card will be clickable, displaying the details of the card and options to edit or delete the product.
* Each item will be sorted through date of expiration
* When a user wants to add a new product, they will click on a “+” symbol, rendering a form with the following fields:
    * “Add Image” button
    * Notes/Comments
    * “Add!” button
* When the image is uploaded, a Python image classification script will run and populate the following fields into the form: 
    * Name of Product
    * Brand
    * Category (drop down)
    * Expiration Date
* After the form populates with the text, the user can add "Notes/comments" to the form
* When the user is ready to add product to their pantry, they will click on the "Add!" button
* After an item is added, the user can update the information or delete it if need be.

## Technologies:

* React
* React Native
* Node
* Knex
* PostgreSQL
* Express
* Chart.js
* Python 
    * Tesseract for Optical Character Recognition (OCR)
    * Keras for Image Classification

## Future implementations
* Location tracking for application to send push notifications when they are in a Beauty store or a department store
* Data analysis on their profile of the types products they use, and amount of money spent on the product
* Chart showing amount of money spent on products monthly
* The Beauty Pantry will send push notifications to the user when:
    * The product is added
    * Bi-weekly reminders for the first two months
    * Monthly reminders
    * A reminder one month prior to expiration
    * Bi-Weekly reminders for the last month prior to expiration
    * When the product has expired.


