import React from "react";

const MicroData: React.FC = () => {
  return (
    <div itemScope itemType="https://www.dmm.co.jp/live/virtual/">
      <h2 itemProp="name">バーチャルライブチャット</h2>
      <div>
        関連会社:
        <span
          itemProp="provider"
          itemScope
          itemType="https://digitalcommerce.co.jp/"
        >
          <span itemProp="name">株式会社デジタルコマース</span>
        </span>
      </div>
      <div itemProp="description">
        バーチャルライブチャットは、バーチャルキャラクターのライブ配信を楽しむことができるサービスです。
      </div>
      <div>
        提供エリア: <span itemProp="areaServed">日本</span>
      </div>
      <div>
        サービスタイプ: <span itemProp="serviceType">エンターテイメント</span>
      </div>
    </div>
  );
};

export default MicroData;
