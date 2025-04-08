import { redTextPlugin } from './RedText';
import { tutorialViewerPlugin } from './TutorialViewer';

window.cognigyWebchatMessagePlugins = window.cognigyWebchatMessagePlugins || [];
window.cognigyWebchatMessagePlugins.push(tutorialViewerPlugin);
window.cognigyWebchatMessagePlugins.push(redTextPlugin);
