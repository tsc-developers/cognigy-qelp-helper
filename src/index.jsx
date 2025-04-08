import { redTextPlugin } from './RedText';
import { tutorialViewerPlugin } from './TutorialViewer';

// Only run this if we're in a browser (Cognigy Webchat)
if (typeof window !== 'undefined') {
    if (!window.cognigyWebchatMessagePlugins) {
        window.cognigyWebchatMessagePlugins = [];
    }

    window.cognigyWebchatMessagePlugins.push(redTextPlugin);
    window.cognigyWebchatMessagePlugins.push(tutorialViewerPlugin);
}


// Cognigy Webchat Plugin Export
// if (typeof window !== "undefined" && window.Webchat) {
//     window.Webchat.registerPlugin({
//       name: "TutorialViewer",
//       component: TutorialViewer,
//       props: {
//         tutorial: {
//           type: "object",
//           description: "Tutorial JSON data conforming to schema"
//         }
//       }
//     });
//   }
  