(() => {
var $da2c81592e27e985$exports = {};
var $d170ef2c6ed47533$exports = {};
console.log('[React Alias] Using Cognigy Webchat React');
if (!window.__COGNIGY_WEBCHAT) throw new Error('Cognigy Webchat v2.7 or higher has to be loaded before this plugin');
$d170ef2c6ed47533$exports = window.__COGNIGY_WEBCHAT.React;


const $da2c81592e27e985$var$RedText = (props)=>{
    const text = props.message.text;
    return /*#__PURE__*/ $d170ef2c6ed47533$exports.createElement("span", {
        style: {
            color: 'red'
        }
    }, text);
};
const $da2c81592e27e985$var$redTextPlugin = {
    match: 'red-text',
    component: $da2c81592e27e985$var$RedText
};
// create if it does not exist yet
if (!window.cognigyWebchatMessagePlugins) window.cognigyWebchatMessagePlugins = [];
window.cognigyWebchatMessagePlugins.push($da2c81592e27e985$var$redTextPlugin);

})();
