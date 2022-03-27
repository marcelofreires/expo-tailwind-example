import React from 'react';
import {TailwindProvider} from 'tailwind-rn';

import utilities from './tailwind.json';
import { Hello } from './components/Hello'

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Hello />
    </TailwindProvider>
  );
}
