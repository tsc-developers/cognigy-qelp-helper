console.log('[React Alias] Using Cognigy Webchat React');

if (!window.__COGNIGY_WEBCHAT)
    throw new Error('Cognigy Webchat v2.7 or higher has to be loaded before this plugin');

module.exports = window.__COGNIGY_WEBCHAT.React;
