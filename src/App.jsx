const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

import { useState } from "react";
import "./styles/style.css";

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <div className="close">&times;</div>

      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <StepMessage step={step}>
          <div className="buttons">
            <Button
              bgColor="#e7e7e6"
              textColor="#333"
              handleClick={() => {
                alert(`Learn how to ${messages[step - 1]}`);
              }}
            >
              Learn how
            </Button>
          </div>
        </StepMessage>

        <div className="buttons">
          <Button
            bgColor="#7950f2"
            textColor="#fff"
            handleClick={handlePrevious}
          >
            <span>👈</span>Previous
          </Button>
          <Button bgColor="#7950f2" textColor="#fff" handleClick={handleNext}>
            Next<span>👉</span>
          </Button>
        </div>
      </div>
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {messages[step - 1]}

      {children}
    </div>
  );
}

function Button({ bgColor, textColor, handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
