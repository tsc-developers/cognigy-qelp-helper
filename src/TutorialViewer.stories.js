import React from "react";
import { TutorialViewer } from "./TutorialViewer";

export default {
  title: "Cognigy Plugins/TutorialViewer",
  component: TutorialViewer,
};

const sampleTutorial = {
    "id": "152f6c4e-6801-4f6b-ad83-72faaf6b38e3",
    "product": {
        "id": 2438,
        "name": "iPhone 11",
        "slug": "apple-iphone-11",
        "sort": "00075",
        "type": {
            "id": "946",
            "name": "smartphone",
            "image": null,
            "label": null
        },
        "image": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/540febd949ba161890f0237990f40500.png",
        "label": "iPhone 11",
        "urlLabel": "iPhone 11 14",
        "deviceFlag": null,
        "internalId": 4034,
        "deviceModel": null,
        "isGenericOs": false,
        "emulatorAvailable": false,
        "inManufacturerPosition": "00059"
    },
    "manufacturer": {
        "id": 166,
        "slug": "apple",
        "sort": "00004",
        "image": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/a0b3605f762d50dbea42b67ad0b5496e.png",
        "label": "Apple",
        "internalId": 18
    },
    "os": {
        "id": 1324,
        "name": "iOS",
        "image": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/99ac1139baa6421094916f91613946a0.png",
        "number": "iOS 16",
        "version": "iOS 16",
        "released": {
            "formatted": "2022-07-11"
        },
        "internalId": 1324,
        "cpmsDeviceId": 5272,
        "emulatorAvailable": false
    },
    "topic": {
        "id": 15744,
        "name": "Change privacy settings in browser",
        "slug": "change-privacy-settings-in-browser",
        "sort": "00007",
        "type": "regular",
        "image": null,
        "highlight": null,
        "internalId": 1172,
        "externalLink": null,
        "extendedTopic": null
    },
    "choice": null,
    "category": {
        "id": 2418,
        "name": "Apps & Accessories",
        "slug": "apps-accessories",
        "sort": "00001",
        "image": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/892b302af3d9ae47ed553c26bfe57ebf.svg",
        "highlight": null
    },
    "flow": null,
    "steps": [
        {
            "meta": null,
            "text": "* In the browser of your Apple iPhone 11, you can determine for yourself which information you share while surfing the Internet. You can increase your privacy by, for example, disabling cookies.\n* Choose *Next* for step-by-step instructions.",
            "zoomOn": null,
            "clicker": null,
            "mergedUrl": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/c72c8fcad40873e17f46a5229cbfd0b8.png"
        },
        {
            "meta": null,
            "text": "* Go to the Home screen.\n* Choose *Settings*.",
            "zoomOn": null,
            "clicker": {
                "x": 0.7916666666666666,
                "y": 0.6941489361702128
            },
            "mergedUrl": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/c72c8fcad40873e17f46a5229cbfd0b8.png"
        },
        {
            "meta": null,
            "text": "* Scroll down.\n* Choose *Safari*.",
            "zoomOn": null,
            "clicker": {
                "x": 0.5,
                "y": 0.6728723404255319
            },
            "mergedUrl": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/76131cb37e04eb598612f606445f25de.png"
        },
        {
            "meta": null,
            "text": "* Scroll down.\n* Turn on *Block All Cookies*.",
            "zoomOn": null,
            "clicker": {
                "x": 0.7708333333333334,
                "y": 0.3164893617021277
            },
            "mergedUrl": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/d1288de18f2aaadc5e21c56bdd1707cd.png"
        },
        {
            "meta": null,
            "text": "* Choose *Block All*.",
            "zoomOn": null,
            "clicker": {
                "x": 0.6302083333333334,
                "y": 0.5851063829787234
            },
            "mergedUrl": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/173a7e7af13e0ee665479acb35142559.png"
        },
        {
            "meta": null,
            "text": "* Check if *Fraudulent Website Warning* is enabled.\n* Optional: For more information on privacy in Safari, choose *About Safari & Privacy...*\n* Return to the Home screen.",
            "zoomOn": null,
            "clicker": null,
            "mergedUrl": "https://horizon-cms.s3.eu-central-1.amazonaws.com/image-service/fc70d0b6aadf4bf668da759f6b6e8115.png"
        }
    ],
    "meta": {
        "type": "usecase",
        "title": "How to Change privacy settings in browser | Apple iPhone 11 14 | Step-by-step tutorials for your device",
        "keywords": "Change, privacy, settings, in, browser, iPhone 11 14, Apple, Change privacy settings in browser, Apps & Accessories",
        "description": "Change privacy settings in browser on your Apple iPhone 11 14. Use our step-by-step tutorials to manually configure your iPhone 11 14"
    }
};

const Template = (args) => (
  <div style={{ width: "100%", height: "500px" }}>
    <TutorialViewer {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tutorial: sampleTutorial,
};
