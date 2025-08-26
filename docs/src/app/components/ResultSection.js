// app/components/ResultSection.js
export default function ResultSection({ combinedImage, onReset }) {
  return (
    <div className="result-section" id="result-section">
      <h2>恭喜！你已收集完所有圖片</h2>
      <p>這是你的合成圖片：</p>
      <img 
        src={combinedImage} 
        alt="合成圖片" 
        className="combined-image" 
      />
      <div style={{ marginTop: '20px' }}>
        <button className="btn" onClick={onReset}>
          重新開始收集
        </button>
      </div>
    </div>
  );
}