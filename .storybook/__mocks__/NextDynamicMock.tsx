import React from 'react';

type DynamicImport = <T>(component: React.FC<T>) => React.FC<T>;

// Mock next/dynamic simply returns the passed component
const NextDynamicMock: DynamicImport = (component) => component;

export default NextDynamicMock;
