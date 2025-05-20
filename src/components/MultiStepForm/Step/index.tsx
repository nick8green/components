import type { FC, PropsWithChildren } from "react";

import "./style.css";

type StepProps = {
  step: number;
  total: number;
};

export const Step: FC<PropsWithChildren<StepProps>> = ({
  children,
  step,
  total,
}) => {
  return (
    <div>
      <h3>
        Step {step} of {total}...
      </h3>
      {children}
    </div>
  );
};

export default Step;
