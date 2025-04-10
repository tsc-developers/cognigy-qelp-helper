import React, { useState } from "react";
import MarkdownRenderer from './MarkdownRenderer';

require('./TutorialViewer.css');

const injectedStyles = `/* TutorialViewer.css */

.tutorial-viewer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
}

.tutorial-title {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
}

.tutorial-device {
  font-size: 1.1rem;
  padding: 0.5rem;
  color: #555;
}

.tutorial-steps-scroll-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.nav-button {
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 999;
  border: 0;
  background-color: #55555533;
}
.nav-button.next-step {
  right: 0;
}

.tutorial-navigation {
  position: relative;
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  height: fit-content;
}

.tutorial-navigation::-webkit-scrollbar {
  display: none;
}

.tutorial-step {
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  position: relative;
  text-align: center;
  padding: 1rem;
  width: calc(100% - 90px);
  height: fit-content;
  box-shadow: 0 0 4px 4px #55555533;
  border-radius: 8px;
  margin: auto;
}
.tutorial-step-img-wrapper {
  position: relative;
  display: block;
  width: 192px;
  height: 376px;
  margin: auto;
}

.tutorial-step img {
  position: absolute;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.tutorial-step-text {
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: left;
}

.clicker {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 0, 0, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.innerText = injectedStyles;
  document.head.appendChild(styleEl);
}

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
        <p className="tutorial-description">{tutorial.meta.description}</p>
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
