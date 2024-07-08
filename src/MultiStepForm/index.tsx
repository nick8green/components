'use client'
import { FC, FormEvent, useState } from 'react';

import Step from './Step';

import './style.css';

interface MultiStepProps {
    done: (data: any) => void;
    steps: FC[];
}

const MultiStepForm: FC<MultiStepProps> = ({ done, steps }) => {
    const [data, setData] = useState<object>();
    const [step, setStep] = useState<number>(1);

    const handleChange = (e: FormEvent<HTMLInputElement|HTMLSelectElement>) => {
        const matcher = /([a-zA-Z0-9]+)(?:\[([0-9]+)\])$/;
        const newData: any = {...data};

        let { name, value } = e.currentTarget;
        let match: any;


        if ((match = matcher.exec(e.currentTarget.name)) !== null) {
            name = name.replace(matcher, '$1');
            if (!newData[name]) {
                newData[name] = [];
            }
            newData[name][parseInt(match[2])] = value;
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

    const ActiveStep = steps[step - 1];
    const args = {
        ...data,
        handleChange,
    }

    return (<div>
        <Step step={step} total={steps.length}>
            <ActiveStep {...args as any} />
        </Step>

        <div className='button-group'>
            {step !== 1 && (<button onClick={prevStep}>Back &lt;</button>)}
            {step !== steps.length && (<button onClick={nextStep}>Next &gt;</button>)}
            {step === steps.length && (<button onClick={() => done(data)}>Complete!</button>)}
        </div>
    </div>);
};

export default MultiStepForm;
