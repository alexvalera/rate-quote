## Getting started 🐱‍💻 

- Clone this repository and then run `npm i`
- Open up the `.env` file and add an auth key
`REACT_APP_AUTH_KEY=<Add key here>`
- Run `npm start` 
- Visit `http://localhost:3000` 

## Notes and things I think could be improved upon
- I used styled components and made the form responsive, however the table itself is not responsive. I would achieve that by creating a mobile version of the table and swap to it on smaller screen sizes. 
- The final form UX feels stiff, if I had time to improve it I would apply slight transition animations either by using Suspense from react and applying a custom spinner animation, or by just having the table fade-in and slide-up using simple CSS animations when rendered. 
- I would bolster up my unit tests which of course are extremely important to scale any product. 
- Obviously in a production setting that `AUTH_KEY` value would most likely be passed in from our build pipeline and not manually added. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
