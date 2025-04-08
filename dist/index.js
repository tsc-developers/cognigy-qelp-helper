(() => {

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $da2c81592e27e985$exports = {};
var $d170ef2c6ed47533$exports = {};
console.log('[React Alias] Using Cognigy Webchat React');
if (!window.__COGNIGY_WEBCHAT) throw new Error('Cognigy Webchat v2.7 or higher has to be loaded before this plugin');
$d170ef2c6ed47533$exports = window.__COGNIGY_WEBCHAT.React;


const $aaac81b1609d807f$export$5dbeb92769ba3878 = (props)=>{
    const text = props.message?.text ?? 'No text';
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("span", {
        style: {
            color: 'red'
        }
    }, text);
};
const $aaac81b1609d807f$export$65e42e5ffa7c7b85 = {
    match: 'red-text',
    component: $aaac81b1609d807f$export$5dbeb92769ba3878
};



const $a3890b0e758ab3ef$export$f6a3cc9ffa13e18e = ({ message: message })=>{
    const tutorial = message?.data?._plugin?.tutorial;
    console.log(message);
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
        className: "w-full h-full flex flex-col overflow-hidden"
    }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
        className: "p-4"
    }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("h1", {
        className: "text-2xl font-bold"
    }, tutorial.topic.name), /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("h2", {
        className: "text-lg text-gray-600"
    }, tutorial.product.name)), /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
        className: "flex-1 overflow-x-auto whitespace-nowrap snap-x snap-mandatory"
    }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
        className: "flex h-full"
    }, tutorial.steps.map((step, index)=>/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
            key: index,
            className: "relative flex-shrink-0 w-full snap-center flex flex-col items-center justify-start p-4",
            style: {
                minWidth: "100%"
            }
        }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
            className: "relative w-full max-w-full h-auto"
        }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("img", {
            src: step.mergedUrl,
            alt: `Step ${index + 1}`,
            className: "w-full h-auto object-contain"
        }), step.clicker && /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("div", {
            className: "absolute bg-blue-500 opacity-75 rounded-full border-2 border-white pointer-events-none",
            style: {
                width: 60,
                height: 60,
                top: `${step.clicker.y}%`,
                left: `${step.clicker.x}%`,
                transform: "translate(-50%, -50%)"
            }
        })), /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d170ef2c6ed47533$exports))).createElement("p", {
            className: "mt-4 text-center text-base text-gray-800"
        }, step.text))))));
};
const $a3890b0e758ab3ef$export$cfa223d39f988ec3 = {
    match: 'qelp-tutorial',
    component: $a3890b0e758ab3ef$export$f6a3cc9ffa13e18e
};


window.cognigyWebchatMessagePlugins = window.cognigyWebchatMessagePlugins || [];
window.cognigyWebchatMessagePlugins.push((0, $a3890b0e758ab3ef$export$cfa223d39f988ec3));
window.cognigyWebchatMessagePlugins.push((0, $aaac81b1609d807f$export$65e42e5ffa7c7b85));

})();
