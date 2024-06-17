import { useState } from "react";

import { Description, Feedback, Options } from "./componens";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}
