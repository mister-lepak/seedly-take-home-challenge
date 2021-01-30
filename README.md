# Seedly Frontend Take-Home Challenge

Instructions to Seedly take-home challenge can be found in Instructions.md

## Dev Setup

- Install React at least version 17.0.1
- Install ReactJS dependency libraries “npm install”

## Running the app or View the app

1. Clone the repositories first
2. The app can be run with: "npm start"
3. Alternatively, it can be viewed directly in the github pages link below:
   https://mrlepak.github.io/test_for_ghpages/#/

## Design

Data Structure (models)

1. Topics
   - This model works as tags to help filter the related questions
2. Users
   - This model is the record of users available
3. Questions
   - This model is the data source for the questions posted and linked to tagged topics and answers
4. Answers
   - This model is the data source for the answers posted and linked to related questions and users who answered

## Design of Data Structures

The design of this data structure is assuming backend database did not provide necessary data population.
Hence, data assessment such as selecting Featured Answers and Dates formatting is done at the frontend.

## State Management

In view of the sandboxed environment, state is managed only with useState and useEffect.
All states are solely located in centralized component -- i.e. App component

## Dependencies

- Moment.js
- React-router-dom

## Testing

Testing is done at the unit testing level

- Test #1: simple test to see if the page is rendering
- Test #2: function test to check if the select Featured Answers work as per intended

## Future Improvements

- Layouts Aesthetics
- Fonts
- Status (Recent, Unanswered, Trending, Editoral)
- Top Navbar
- Pagination of questions when database comes in large size
