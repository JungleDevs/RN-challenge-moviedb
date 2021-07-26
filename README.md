# Jungle Devs - React Native Challenge The Movie DB


## Installation:

### 1.
#### After you clone the project, in the project's folder first run:  

#### `npm install` or `yarn`

### 2:

### iOS:
#### `npx pod-install ios` and then `npx react-native run-ios` or you can open your project's .xcworkspace file with Xcode and click the play button

### Android:
#### `npx react-native run-android`

## Description

**Challenge goal**: The purpose of this challenge is to give a general idea of how to create a simple app using a variety of well accepted practices and technologies in the market. You'll be implementing a simplified version of a movie preview app using The Movie DB API. The concepts that you're gonna apply are:
- React hooks;
- Redux;
- API calls;
- FlatList;
- Error handling;
- Loading states;

**Target level**: This is an all around challenge that covers both juniors and experienced devs based on the depth of how the concepts were applied.
**Final accomplishment**: By the end of this challenge you'll have a working development app.

## Resources
**Design**: [Figma](https://www.figma.com/file/gRw33pnPCjbRAE8DyhOsZm/Android-%E2%80%93-Challenge-2?node-id=0%3A1)

## Acceptance criteria
- Clear instructions on how to run the application
- Implement the screens using The Movie DB trending endpoint (Create an account and generate an API access key for development to be able to access it)
- Initial screen should show the list of trending movies in the week and highlight the top spot
- Initial screen should allow the user to search any movie by name even if not in the trending list, choose an appropriate endpoint
- Details screen should show the details about the current movie and a list containing the other movies trending
- Clicking on movie cards should open the details screen
- The stack of screens on the app must not scale indefinitely
- The app should follow the design provided in Figma
- Use proper Redux structures

## Desirables
- Use Flatlist
- Implement error handling and reload options
- Manage the loading states accordingly
- Paginate the movies list

## Instructions to run
Fork the repo, in the forked repo, create a new branch to work on. Create a new project using React Native CLI and do your work on that branch of the forked repo. When done, open a pull request from your branch to the master branch of the forked repo so that the end result can be reviewed.

## Evaluation
Our evaluation will be conducted over the state of the forked repository in which the challenge is done.
