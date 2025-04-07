console.log("✅ Using custom react/jsx-runtime alias");

if (!window.__COGNIGY_WEBCHAT)
    throw new Error('Cognigy Webchat v2.7 or higher has to be loaded before this plugin');

module.exports = window.__COGNIGY_WEBCHAT.React.__REACT_JSX_RUNTIME__;
