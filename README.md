# Seedly Frontend Take-Home Challenge

Instructions to Seedly take-home challenge can be found in [Instructions.md](https://github.com/mrlepak/seedly-take-home-challenge/blob/main/Instructions.md)

## Dev Setup

- Install React at least version 17.0.1
- Install ReactJS dependency libraries **npm install**

## Running the app or View the app

1. Clone the repositories first
2. The app can be run with: **npm start**
3. Alternatively, it can be viewed directly in the github pages link below:
   https://mrlepak.github.io/test_for_ghpages/#/

# Design and Consideration

## Delivery Details

This application is built with the following functions as per instructions stated in [Instructions.md](https://github.com/mrlepak/seedly-take-home-challenge/blob/main/Instructions.md). Key highlights below:

- [x] Rendering of UI (navbar, banner, sidebar, Q&As, Advertisement, Footer)
- [x] Sidebar and tags links are able to filter the related questions
- [x] Separate Topic detailed page is rendered when the specific topics (from sidebars or question's tags) are clicked
- [x] Featured answer assessment capability is brought forward to frontend
  - Assuming data received from backend are not processed
  - This is done with the motivation of showcasing data cleaning capability in this code challenge
  - Featured answer's selection criteria is as per [Seedly's FAQ](https://support.seedly.sg/hc/en-us/articles/900003311886-Managing-your-Questions-and-Answers)
    - Assuming all mock data only consists of non-Verified Business Profile
    - Featured answer is based on the most upvoted answer
    - If answers have equal upvotes, then the most recent one is shown
- [x] Answer contents/texts shown partially by default to provide UI space (user has choice to expand the text)
- [x] Comments sections are provided, comments are sorted and shown partially by default to provide UI space (user has choice to expand the text)

## Data Structure (models)

1. Topics
   - This model works as tags to help filter the related questions
2. Users
   - This model is the record of users available
3. Questions
   - This model is the data source for the questions posted and linked to tagged topics and answers
4. Answers
   - This model is the data source for the answers posted and linked to related questions and users who answered
5. Comments
   - This model is the data source for the comments posted and linked to related answers and users who commented

Further details of the Data Structure can be referred in the [ModelStructure.md](https://github.com/mrlepak/seedly-take-home-challenge/blob/main/public/models/ModelStructure.md)

## Design of Data Structures

The design of this data structure is assuming the backend database did not provide the necessary data population.
Hence, data assessment such as selecting Featured Answers and Dates formatting is done at the frontend.

## State Management

In view of the sandboxed environment, state is managed only with useState and useEffect.
All states are solely located in centralized component -- i.e. App component

## Dependencies

External library used declared below:

- [Sematic UI](https://semantic-ui.com/) for CSS library framework
- [Moment.js](https://momentjs.com/) for Date Formatting library
- [React-router-dom] (https://www.npmjs.com/package/react-router-dom) for React Routing

## Testing

Testing is done at the unit testing level

- Test #1: function test to check if the select Featured Answers work as per intended
- Test #2: function test to check if the count of related answers associated to question is correct
- Test #3: function test to check if the count of related comments associated to answers is correct

## Future Improvements

- Layouts Aesthetics
- Fonts
- Status (Recent, Unanswered, Trending, Editoral)
- Top Navbar Links
- Pagination of questions when database comes in large size
