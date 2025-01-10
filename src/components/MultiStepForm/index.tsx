"use client";
import {
  cloneElement,
  FC,
  FormEvent,
  isValidElement,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

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
    | string[]
    | ((e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void);
};
export type StepProps = GenericObject & {
  handleChange?: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export interface MultiStepProps {
  done: (data?: GenericObject) => void;
}

const MultiStepForm: FC<PropsWithChildren<MultiStepProps>> = ({
  children,
  done,
}) => {
  if (!children || !Array.isArray(children)) {
    throw new Error(
      "Children are required for MultiStepForm and there must be more than one step to be completed!",
    );
  }

  const [data, setData] = useState<GenericObject>({});
  const [step, setStep] = useState<number>(1);

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const matcher = /([a-zA-Z0-9]+)(?:\[([0-9]+)\])$/;
    const newData: GenericObject = {};

    let { name } = e.currentTarget;
    const { value } = e.currentTarget;
    let match: null | RegExpExecArray;

    if ((match = matcher.exec(e.currentTarget.name)) !== null) {
      if (!match[2]) {
        throw new Error("not sure if the regex has worked for this element?");
      }
      name = name.replace(matcher, "$1");
      newData[name] = !data[name] ? [] : data[name];
      const index = parseInt(match[2]);
      (newData[name] as (boolean | number | string)[])[index] = value;
      setData((prevData) => ({ ...prevData, ...newData }));
      return;
    }
    newData[name] = value;
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const getStep = () => {
    const child = children[step - 1];
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...(child.props as object),
        ...data,
        ...{ handleChange },
      });
    }
    return child;
  };

  const [activeStep, setActiveStep] = useState(getStep());

  useEffect(() => {
    setActiveStep(getStep());
  }, [step]);

  const nextStep = () => {
    if (step < children.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <Step step={step} total={children.length}>
        {activeStep}
      </Step>

      <ButtonGroup>
        {step !== 1 && <Button label="&lt; Back" onClick={prevStep} />}
        {step !== children.length && step - 1 < children.length && (
          <Button label="Next &gt;" onClick={nextStep} />
        )}
        {step === children.length && (
          <Button label="Complete!" onClick={() => done(data)} />
        )}
      </ButtonGroup>
    </div>
  );
};

export default MultiStepForm;
