# TutorialViewer Plugin

This plugin displays tutorial steps fetched from a remote API based on parameters passed from a Cognigy message. It features horizontal step navigation and dynamically injected CSS styling — all bundled into the final JS file using a *pre/post-build* script system.

---

## Build
This uses nvm 18.17.0
```
nvm use 18.17.0 
```

To build the plugin to the dist folder run `npm run build`. Please ignore the parcel/babel warnings:

```
  /Users/sergiomarreiro/Documents/cognigy-qelp-helper/.babelrc:3:8
    2 |     "presets": [
  > 3 |       ["@babel/preset-react", { "runtime": "classic" }]
  >   |        ^^^^^^^^^^^^^^^^^^^^^
    4 |     ]
    5 |   }
```
- The warning pops up because Storybook doesn’t officially support Parcel as its internal builder.

- Our plugin project might be built with Parcel, but Storybook doesn’t use the bundler — it uses its own, either Webpack or Vite.

- When running Storybook, it’s running in its own isolated context, and it only needs access to our React components, not our plugin bootstrapping logic (window.cognigyWebchatMessagePlugins).

## Deployment & Public Distribution

After running the build process, the generated plugin (index.js) can be pushed to the master branch. This triggers the GitHub Pages pipeline configured for the repository. Once the pipeline completes, the plugin becomes publicly available at:

https://tsc-developers.github.io/cognigy-qelp-helper/dist/index.js

This URL can be used as the public distribution link to load the plugin into Cognigy Webchat.

## Running locally

To develop and preview the plugin locally, we use Storybook.

```bash
npm run storybook
```
This opens Storybook in your browser, allowing you to interactively test and tweak the plugin components.

To generate a static Storybook build, run:
```bash
npm run build-storybook
```
This creates a static version in the storybook-static folder. After deployment, you can access it online at:
https://tsc-developers.github.io/cognigy-qelp-helper/storybook-static/index.html

## CSS Injection

We inject CSS into the TutorialViewer.js file during the build process to ensure all styles are bundled into a single JavaScript file, making it compatible with Cognigy Webchat, which doesn’t support external CSS files. This is done by a pre-build script (inject-css.js) that reads and escapes the CSS content, then replaces a placeholder in the JS file with the actual CSS and a small injection snippet that appends it to the page. After the build, a post-build script (restore-placeholder.js) removes the injected CSS and restores the placeholder, keeping the source file clean and ready for future builds.

## Features
- Horizontal scrolling with left/right navigation
- Dynamic Markdown rendering
- API-based tutorial loading
- Automatic style injection (no external CSS files)
- Works in Cognigy Webchat V2

## Topic API Integration

The TutorialViewer dynamically loads a tutorial via HTTP request using data from the Cognigy message:

- ex url: https://tmobileusa-99-staging.qelpcare.com/usecases
- Required query parameters:
    - product_id
    - topic_id
    - locale (defaults to en_US)

- Fields: product, manufacturer, os, topic, choice, category, flow, steps, meta

The component will pick the first result from the list and display its steps with images and optional clicker indicators.

## Example Usage (Inside Cognigy)

Use a Say node, make sure the message includes _plugin data, ex:

```JSON
{
  "_plugin": {
    "type": "qelp-tutorial",
    "baseUrl": "https://tmobileusa-99-staging.qelpcare.com/usecases",
    "productId": "2438",
    "topicId": "15744",
    "locale": "en_US"
  }
}
```