import React, { useState } from "react";

const WAIARIA: React.FC = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDetails();
    }
  };

  return (
    <div
      role="article"
      aria-labelledby="cardTitle1"
      aria-describedby="cardDesc1"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h2 id="cardTitle1">WAI-ARIAのサンプルカードです。</h2>
      <p id="cardDesc1">
        ここにカードの説明文が入ります。これはカードコンポーネントの説明部分です。WAI-ARIAの様々な特性を理解するために実装しています。
      </p>
      <button
        aria-label="詳細を見るボタン1の説明。"
        tabIndex={0}
        onClick={toggleDetails}
      >
        仮の詳細ボタン1
      </button>
      {detailsVisible && (
        <div aria-live="polite">
          ここに詳細情報が表示されます。WAI-ARIAの様々な特性を理解するために実装しています。
        </div>
      )}
    </div>
  );
};

export default WAIARIA;
