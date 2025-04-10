import React, { useRef, useState, useEffect } from "react";
import "./TutorialViewer.css";
import MarkdownRenderer from './MarkdownRenderer';

// CSS INJECTION PLACEHOLDER
const injectedStyles = `__INJECT_CSS_HERE__`;
const style = document.createElement("style");
style.textContent = injectedStyles;
document.head.appendChild(style);
// END CSS INJECTION PLACEHOLDER


export const TutorialViewer = ({ message }) => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [tutorial, setTutorial] = useState(null);

  const baseUrl = message?.data?._plugin?.baseUrl;
  const productId = message?.data?._plugin?.productId;
  const topicId = message?.data?._plugin?.topicId;
  const locale = message?.data?._plugin?.locale || 'en_US';

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(
          `${baseUrl}?product_id=${productId}&topic_id=${topicId}&locale=${locale}&fields=product,manufacturer,os,topic,choice,category,flow,steps,meta`
        );
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setTutorial(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch tutorial:", error);
      }
    };

    if (baseUrl && productId && topicId) {
      fetchTutorial();
    }
  }, [baseUrl, productId, topicId, locale]);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveStep(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToStep = (direction) => {
    if (containerRef.current) {
      const stepWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: direction * stepWidth, behavior: 'smooth' });
    }
  };

  if (!tutorial) return <div className="tutorial-viewer">Loading tutorial...</div>;

  return (
    <div className="tutorial-viewer">
      <div className="tutorial-header">
        <h1 className="tutorial-title">{tutorial.topic.name}</h1>
        <h2 className="tutorial-device">{tutorial.product.name}</h2>
      </div>

      <div className="tutorial-navigation">
        <button className="nav-button" onClick={() => scrollToStep(-1)}>←</button>

        <div className="tutorial-steps-scroll" ref={containerRef}>
          {tutorial.steps.map((step, index) => (
            <div className={`tutorial-step ${index === activeStep ? "active" : ""}`} key={index}>
              <div className="tutorial-step-wrapper">
                <div className="tutorial-step-img-wrapper">
                  <img
                    src={step.mergedUrl}
                    alt={`Step ${index + 1}`}
                    className="w-full h-auto object-contain"
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
                <div className="tutorial-step-text">
                  <MarkdownRenderer markdown={step.text} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button next-step" onClick={() => scrollToStep(1)}>→</button>
      </div>
    </div>
  );
};

export const tutorialViewerPlugin = {
  match: 'qelp-tutorial',
  component: TutorialViewer
};
