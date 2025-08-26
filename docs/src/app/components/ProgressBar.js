export default function ProgressBar({ collectedCount }) {
  const progress = (collectedCount / 8) * 100;
  
  return (
    <div className="progress-container">
      <h2>收集進度: {collectedCount}/8</h2>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}