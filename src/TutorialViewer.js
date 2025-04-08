import React from "react";

export const TutorialViewer = ({ message }) => {
  const tutorial = message?.data?._plugin?.tutorial;

  console.log(message);
  
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="p-4">
        <h1 className="text-2xl font-bold">{tutorial.topic.name}</h1>
        <h2 className="text-lg text-gray-600">{tutorial.product.name}</h2>
      </div>

      <div className="flex-1 overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
        <div className="flex h-full">
          {tutorial.steps.map((step, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full snap-center flex flex-col items-center justify-start p-4"
              style={{ minWidth: "100%" }}
            >
              <div className="relative w-full max-w-full h-auto">
                <img
                  src={step.mergedUrl}
                  alt={`Step ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
                {step.clicker && (
                  <div
                    className="absolute bg-blue-500 opacity-75 rounded-full border-2 border-white pointer-events-none"
                    style={{
                      width: 60,
                      height: 60,
                      top: `${step.clicker.y}%`,
                      left: `${step.clicker.x}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                )}
              </div>
              <p className="mt-4 text-center text-base text-gray-800">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const tutorialViewerPlugin = {
    match: 'qelp-tutorial',
    component: TutorialViewer
};