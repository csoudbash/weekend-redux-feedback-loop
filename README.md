
# FEEDBACK LOOP REDUX

## Description

_Duration: ~10 hours_

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `prime_feedback` 
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. once the browser opens, you should be greeted with a page asking you how you are feeling on a scale from 1 to 5
2. once you answer and click the next button, another page asking you how your understanding is/was on a scale from 1 to 5
3. the next pages will also ask you questions with either a number value from 1 to 5 or an open comment section if youd like to add any
4. the 5th page will display a review page of your responses and verify with you whether or not these are acceptable or not. once verified, the data will be sent to and stored on a postgreSQL database.
5. the final page will ask you if youd like to do another survey, if you agree you will return to the feeling page and will be able to submit another survey of answers


## Built With

html
css
javscript
node.js
react.js
redux.js
postgreSQL


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people). Once again, id love to thank all of the people who have dedicated saturdays to coming in and assisting both others and i on these weekend projects. 

## Support
If you have suggestions or issues, please email me at [csoudbash@gmail.com](www.google.com)