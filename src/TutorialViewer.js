import React, { useState } from "react";
import "./TutorialViewer.css";

import MarkdownRenderer from './MarkdownRenderer';

export const TutorialViewer = ({ message }) => {
  const tutorial = message?.data?._plugin?.tutorial;
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = tutorial.steps[currentStep];

  return (
    <div className="tutorial-viewer">
      <div className="tutorial-header">
        <h1 className="tutorial-title">{tutorial.topic.name}</h1>
        <h2 className="tutorial-device">{tutorial.product.name}</h2>
      </div>

      <div className="tutorial-navigation">

        <button className="nav-button prev-step" onClick={prevStep} disabled={currentStep === 0}>
          ←
        </button>
        <div className="tutorial-step">
          <div className="tutorial-step-img-wrapper">
            <img
              src={step.mergedUrl}
              alt={`Step ${currentStep + 1}`}
              className="w-full h-auto object-contain"
              loading="eager"
            />
            {step.clicker && (
              <div
                className="clicker"
                style={{
                  width: 60,
                  height: 60,
                  top: `${step.clicker.y * 100}%`,
                  left: `${step.clicker.x * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            )}
          </div>
          <p className="tutorial-step-text">
            <MarkdownRenderer markdown={step.text} />
          </p>
        </div>
        <button className="nav-button next-step" onClick={nextStep} disabled={currentStep === tutorial.steps.length - 1}>
          →
        </button>

      </div>
    </div>
  );
};

export const tutorialViewerPlugin = {
  match: "qelp-tutorial",
  component: TutorialViewer
};
