import './App.module.css';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <Description />
      <Options />
      <Feedback feedback={feedback} />
    </>
  );
};

export default App;
