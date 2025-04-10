import React from "react";
import { TutorialViewer } from "./TutorialViewer";

export default {
  title: "Cognigy Plugins/TutorialViewer",
  component: TutorialViewer,
};

const mockMessage = {
  data: {
    _plugin: {
      type: "qelp-tutorial",
      baseUrl: "https://tmobileusa-99-staging.qelpcare.com/usecases",
      productId: 2438,
      topicId: 15744,
      locale: "en_US"
    }
  }
};

export const Default = () => <TutorialViewer message={mockMessage} />;
