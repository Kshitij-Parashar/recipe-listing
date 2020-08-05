# Dinner Spinner

## Description

This project implements all the features asked in the requirement document as per given guidelines.
I have tried to implement every component and functionality as asked.

Extras:

1. Login HOC has been implementated for authenticated routes
2. For login use any username and password. It doesn't store and check it anywhere.  Username and password fields have required validation.
3. Session maintainance is not implemented so user will logout on refresh
4. Client side pagination has been implemented and an independent component has been implemented for the same.

## Implementation Details

1. Implemented redux-saga for app's state maintenance.
2. Appropriate PropTypes are implemented for each component.
3. Action creators used for creating actions are present in src/actions folder.
4. Service classes generating api calls and are present in src/services folder.
5. Worker Sagas consume these services when an invoking action is dispatched and is watched by watcher saga.
6. No CSS library or preprocessor has been used as suggested.

## Tools used for development

1. CRA for bootstrapping the application

## Accessibility

1. Entire application is accessible via keyboard.

## Unit tests

1. Tests are writting using jest as test runner with enzyme.
2. Tests for sagas, components, and services are added in their respective folders
3. All important components are tested including pagination component, testing next 
and previous page functionality.
4. Sagas and services are tested for both resolve and reject cases.
5. JSDoc style comments are added all over the project.
6. Store, hooks, api and services are mocked to make tests non brittle.

## Responsiveness

This app is completely responsive and renders fine on all screen sizes (portrait and landscape)

## Start app

### `npm i`

### `npm start`

Runs the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. <br />
You will also see any lint errors in the console.

### `npm test`

Runs all test written in watch mode
