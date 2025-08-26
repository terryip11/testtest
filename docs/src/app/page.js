'use client';

import { useState, useEffect } from 'react';
import ImageGallery from './components/ImageGallery';
import ProgressBar from './components/ProgressBar';
import QrScanner from './components/QrScanner';
import ResultSection from './components/ResultSection';
import Header from './components/Header';
import InstallPWA from './components/InstallPWA';
import './globals.css';

export default function Home() {
  const [collectedImages, setCollectedImages] = useState([]);
  const [combinedImage, setCombinedImage] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // 添加新图片
  const addImage = (imageUrl) => {
    if (collectedImages.length < 8) {
      const newImages = [...collectedImages, imageUrl];
      setCollectedImages(newImages);
      
      // 检查是否集齐8张图片
      if (newImages.length === 8) {
        generateCombinedImage();
      }
    }
  };

  // 生成合成图片
  const generateCombinedImage = () => {
    // 在实际应用中，这里应该是服务器端生成合成图片的逻辑
    // 这里我们使用一张预设的图片作为示例
    const randomImage = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 100)}`;
    setCombinedImage(randomImage);
    setShowResult(true);
    
    // 滚动到结果区域
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  // 重置收集
  const resetCollection = () => {
    setCollectedImages([]);
    setCombinedImage(null);
    setShowResult(false);
  };

  return (
    <div className="container">
      <Header />
      
      <ProgressBar collectedCount={collectedImages.length} />
      
      <ImageGallery collectedImages={collectedImages} />
      
      {!showResult && (
        <QrScanner onAddImage={addImage} />
      )}
      
      {showResult && (
        <ResultSection 
          combinedImage={combinedImage} 
          onReset={resetCollection} 
        />
      )}
      <InstallPWA />
    </div>
  );
}