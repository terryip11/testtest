// app/components/ImageGallery.js
export default function ImageGallery({ collectedImages }) {
  return (
    <div className="gallery">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="image-card">
          {collectedImages[index] ? (
            <>
              <img 
                src={collectedImages[index]} 
                alt={`收集的圖片 ${index + 1}`} 
              />
              <div className="image-info">圖片 {index + 1}</div>
            </>
          ) : (
            <>
              <div className="empty-slot">?</div>
              <div className="image-info">尚未收集</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}