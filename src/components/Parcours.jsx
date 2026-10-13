import { useState } from 'react';
import { STEPS, MVP } from '../data/content';

export default function Parcours() {
  const [currentStep, setCurrentStep] = useState(
    STEPS.findIndex((step) => step.active) >= 0
      ? STEPS.findIndex((step) => step.active)
      : 0
  );

  const activeStep = STEPS[currentStep];

  return (
    <section id="parcours" className="section">
      <div className="wrap">

        <h2 className="h2">Le parcours recommandé</h2>

        <p className="section-intro">
          De la première visite à la mise en place, en {STEPS.length} étapes explicites.
        </p>

        <div className="parcours-slider">

          <div className="parcours-slider__track">

            <div
              className="parcours-slider__progress"
              style={{
                width: `${(currentStep / (STEPS.length - 1)) * 100}%`,
              }}
            />

            {STEPS.map((step, index) => (
              <button
                key={step.label}
                type="button"
                className={`parcours-slider__point ${
                  index === currentStep
                    ? 'parcours-slider__point--active'
                    : ''
                }`}
                style={{
                  left: `${(index / (STEPS.length - 1)) * 100}%`,
                }}
                onClick={() => setCurrentStep(index)}
                aria-label={`Étape ${index + 1} : ${step.label}`}
                aria-current={index === currentStep ? 'step' : undefined}
              >
                <span className="parcours-slider__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="parcours-slider__dot" />
              </button>
            ))}

          </div>

        </div>

        <div className="parcours-detail">

          <span className="parcours-detail__number">
            {String(currentStep + 1).padStart(2, '0')} /{' '}
            {String(STEPS.length).padStart(2, '0')}
          </span>

          <h3 className="h3">
            {activeStep.label}
          </h3>

          {activeStep.sub && (
            <p>{activeStep.sub}</p>
          )}

        </div>

        <aside className="mvp">
          <h3 className="h3">{MVP.title}</h3>
          <p>{MVP.text}</p>
        </aside>

      </div>
    </section>
  );
}