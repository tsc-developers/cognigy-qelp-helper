var $yx6n1$reactjsxruntime = require("react/jsx-runtime");
require("react");



const $91fc7c7f5ab63f5b$var$RedText = (props)=>{
    const text = props.message.text;
    return /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)("span", {
        style: {
            color: 'red'
        },
        children: text
    });
};
const $91fc7c7f5ab63f5b$var$redTextPlugin = {
    match: 'red-text',
    component: $91fc7c7f5ab63f5b$var$RedText
};
// create if it does not exist yet
if (!window.cognigyWebchatMessagePlugins) window.cognigyWebchatMessagePlugins = [];
window.cognigyWebchatMessagePlugins.push($91fc7c7f5ab63f5b$var$redTextPlugin);


//# sourceMappingURL=index.js.map
