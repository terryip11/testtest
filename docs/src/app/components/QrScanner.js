// app/components/QrScanner.js
export default function QrScanner({ onAddImage }) {
  const handleDemoClick = () => {
    // 使用随机图片作为示例
    const randomImage = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 100)}`;
    onAddImage(randomImage);
  };

  const handleQrClick = () => {
    alert('在实际应用中，这里会打开摄像头扫描QR码。\n\n现在将演示添加一张图片。');
    handleDemoClick();
  };

  return (
    <div className="qr-section">
      <h2>掃描QR碼添加圖片</h2>
      <div className="qr-scanner" onClick={handleQrClick}>
        <span>點擊掃描QR碼</span>
      </div>
      <p>或</p>
      <button className="btn" onClick={handleDemoClick}>
        演示：添加一張圖片
      </button>
    </div>
  );
}