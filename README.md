# react-native boilerplate

Another react native boilerplate,
based on NoteTaker app, checkout this book and star it.:
https://www.gitbook.com/book/react-made-native-easy/react-made-native-easy/details

## Features
* Scalable, Maintainable and Production ready architecture
* Redux, react-redux and redux-thunks
* React navigation
* Environment variables
* Internationalization i18n
* React native vector icons 
* Theme variables and commons styles
* Tests with Jest out of the box
* ESLint set up for code conventions
* pre-push hooks

## App structure
* app/assets - This is where all the images, videos, etc will go in.
* app/config - This is where configurations for the app will go in. For example your environment specific config for dev and prod,languages files,etc.
* app/styles - This is where your global styles, themes and mixins will go.
* app/utils - This is where all the services/utility files such as http utility to make api calls, storage utility, data transformation utility,etc will go.
* app/components - The directory will contain all the dumb components. In short these components will only do layouting and wont contain any states or business logic inside them. All the data to these components will be passed in as props. This concept will be explained in much detail later.
* app/pages - This directory will hold all the smart component. Smart components are those components which contain business logic and states in them. Their job is basically to pass the props to the dumb components after all the business logic is executed.
* app/routes - This is where we will keep all our app's routing logic. This will contain the map between the pages(smart components) and the routes.
* app/redux - This will contain all our redux state management files like actions ,reducers, store config, thunks etc. 


## Make it yours

1. Download the code
2. Run `cd react-native-boilerplate`
3. Run `rm -rf ios/ && rm -rf android/`
4. Change root directory name and app.json name
5. Run `react-native eject`
6. Run `react-native link`

## Run ios
1. Run `npm install` or `yarn`
2. Run `npm run start` or `yarn start`
2. Run `yarn ios`

## Run android
1. Run `npm install` or `yarn`
2. Run `npm run start` or `yarn start`
2. Run `yarn android`
 
