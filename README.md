# kumparan-test

## Cypress
Cypress is a JavaScript end-to-end testing framework that allows you to write tests that run in a browser much like Selenium. The key difference is that it is easy to set up, has no dependencies and is a pleasure to write tests with and use. It takes the hassle of setup and replaces it with the joy of getting things done.

### What Makes Cypress Different?
- Architecture - Most testing tools operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.

- Works on Network Layer - Cypress also operates at the network layer by reading and altering web traffic on the fly. This enables Cypress to not only modify everything coming in and out of the browser but also to change the code that may interfere with its ability to automate the browser. Cypress ultimately controls the entire automation process from top to bottom.

- A New Kind of Testing - Having ultimate control over your application, the network traffic, and native access to every host object unlocks a new way of testing that has never been possible before. Instead of being "locked out" of your application and not being able to easily control it, Cypress instead lets you alter any aspect of how your application works.


## Build Setup
```
# install packages
$ npm install

# run Cypress
$ npx cypress open
```
