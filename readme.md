Starter kit for building APIs w/ [Express.js](https://expressjs.com/)

---
## Installation

```bash
npx degix hxgf/slabjs
```

```bash
npm install
```

---
## Wait, so...what is it?

The intent of this starter kit is to provide a sensible and minimal default [Express.js](https://expressjs.com/) setup that you don't have to think about. 

Basic middleware is already configured. After you install it you can just start writing modules 👍

#### Included libraries:
  - [Express.js](https://expressjs.com/) (of course)
  - [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)
  - [cors](http://expressjs.com/en/resources/middleware/cors.html)

#### Everything is in index.js
Take a look at the [index.js](https://github.com/hxgf/slabjs/blob/master/index.js) file. It initializes the express app and configures CORS and body parser middleware, in addition to exposing a couple routes for error handling.

The real "magic" is this part:
```
const $ = {
  settings: settings
};
```
It's a handy object that's accessible in all of your modules. By default, it includes the contents of the [settings.js](https://github.com/hxgf/slabjs/blob/master/settings.js) file. You can, of course, extend it to include whatever you want (it's just an object!)

The other important part of this file is immediately after the cash object:
```
require('./app/example')(app, $);
```
This is where you'll specify the modules to be included in your application. Remember to specify both the 'app' and '$' parameters in the call.


#### 'app' directory
This is a place for all your application code to reside. It's just a folder, which you can organize however you need. 

Just remember to write your modules in CommonJS format using the global 'app' and '$' parameters, like so:
```
module.exports = function(app, $) { }
```
We've included an [example module](https://github.com/hxgf/slabjs/blob/master/app/example.js) in this directory that combines this pattern with a simple Express route and uses namespaced content from the [settings](https://github.com/hxgf/slabjs/blob/master/settings.js) file.



---
## Best Practices / Conventions

This is wild west, and the rest of how you build your app is up to you. There are, however, a few key concepts that may prove helpful as you develop:

#### Use the platform
- Introduce as few dependencies as possible, and be thoughtful and deliberate about the dependencies you decide to include.
- Prefer "native" solutions over 3rd-party libraries when possible _(ie, don't use [moment.js](https://momentjs.com/) if you just need to do a few date transformations, ask yourself if you REALLY need [lodash](https://lodash.com/), etc)_
- Favor code that takes advantage of node's concurrent processing model _(ex: map/reduce, async/await, etc)_
- Write modules using the standard [commonJS](http://wiki.commonjs.org/wiki/Modules/1.1) pattern _(as opposed to ES6 modules, whose node.js support is still experimental and weird)_

#### Keep it lean
- Only write the code you need
- Only solve problems you actually need to solve today _(not solving for potential/unlikely what-if cases)_

#### Keep it simple
- Make your code as easy to understand as possible.
- Be as descriptive as possible, but write for clarity. Do what you need to do without unnecessary detail.
- Don't be overly clever _(or technical/complex)_ with your solutions.
- Do the boring obvious thing...no surprises.



---
## Endorsed Libraries

| | |
| ----- | ----- |
| [knex](http://knexjs.org/)  | mysql |
| [multer](https://github.com/expressjs/multer)  | multipart  |
| [knox](https://github.com/Automattic/knox)  | s3 |
| [morgan](https://github.com/expressjs/morgan)  | logging  |
| [planer](https://github.com/lever/planer)  | email reply parser |
| [nodemailer](https://nodemailer.com/)  | send email |
| [socket.io](https://socket.io/)  | web sockets  |
| [twilio-node](https://github.com/twilio/twilio-node)  | send text messages  |
| [mailgun-js](https://www.npmjs.com/package/mailgun-js) | send email (w/ mailgun)  |





---
## Helpful Resources

- [The 80/20 Guide to Express Error Handling](https://thecodebarbarian.com/80-20-guide-to-express-error-handling)

- [Handle JavaScript data structures with map/reduce](https://codeburst.io/writing-javascript-with-map-reduce-980602ff2f2f)
- [Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)

- [JS.info - Async/await](https://javascript.info/async-await)






