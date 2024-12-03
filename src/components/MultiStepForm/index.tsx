"use client";
import { FC, FormEvent, useState } from "react";

import Step from "./Step";

import "./style.css";
import ButtonGroup from "components/Button/Group";
import Button from "components/Button";

type GenericObject = {
  [key: string]:
    | boolean
    | boolean[]
    | null
    | number
    | number[]
    | string
    | string[];
};
type StepsProps = GenericObject & {
  handleChange: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

interface MultiStepProps {
  done: (data?: GenericObject) => void;
  steps: FC<StepsProps>[];
}

const MultiStepForm: FC<MultiStepProps> = ({ done, steps = [] }) => {
  const [data, setData] = useState<GenericObject>();
  const [step, setStep] = useState<number>(1);

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const matcher = /([a-zA-Z0-9]+)(?:\[([0-9]+)\])$/;
    const newData: GenericObject = { ...data };

    let { name } = e.currentTarget;
    const { value } = e.currentTarget;
    let match: null | RegExpExecArray;

    if ((match = matcher.exec(e.currentTarget.name)) !== null) {
      name = name.replace(matcher, "$1");
      if (!newData[name]) {
        newData[name] = [];
      }
      if (!match[2]) {
        throw new Error("not sure if the regex has worked for this element?");
      }
      (newData[name] as (boolean | number | string)[])[parseInt(match[2])] =
        value;
      setData(newData);
      return;
    }
    newData[e.currentTarget.name] = e.currentTarget.value;
    setData(newData);
  };

  const nextStep = () => {
    if (step === steps.length) {
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step <= 0) {
      return;
    }
    setStep(step - 1);
  };

  const ActiveStep =
    steps.length > 0
      ? steps[step - 1]
      : () => <p>Steps appear to be missing...</p>;

  return (
    <div>
      <Step step={step} total={steps.length}>
        <ActiveStep {...data} handleChange={handleChange} />
      </Step>

      <ButtonGroup>
        {step !== 1 && (
          <Button data-testid="back" label="Back &lt;" onClick={prevStep} />
        )}
        {step !== steps.length && step - 1 < steps.length && (
          <Button data-testid="next" label="Next &gt;" onClick={nextStep} />
        )}
        {step === steps.length && (
          <Button
            data-testid="done"
            label="Complete!"
            onClick={() => done(data)}
          />
        )}
      </ButtonGroup>
    </div>
  );
};

export default MultiStepForm;
