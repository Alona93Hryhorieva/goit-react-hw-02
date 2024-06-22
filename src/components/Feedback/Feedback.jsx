export default function Feedback({ good, neutral, bad, total, positive }) {
  positive = total > 0 ? Math.round((good / total) * 100) : 0;
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
}
