import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
// import userData from "../../userData.json";
// import friends from "../../friends.json";
// import transactions from "../../transactions.json";

export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description
        title="Sip Happens Café"
        response="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options />
      <Feedback />
    </div>
  );
}
