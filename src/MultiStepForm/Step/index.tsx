import { FC, PropsWithChildren } from 'react';

import './style.css';

interface StepProps {
    step: number;
    total: number;
}

const Step: FC<PropsWithChildren<StepProps>> = ({ children, step, total }) => {
    return (<div>
        <h3>Step {step} of {total}...</h3>
        {children}
    </div>);
};

export default Step;
