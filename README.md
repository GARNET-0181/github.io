# ミナモア・ekie フロアクイズ (改善版)

広島駅ビル「ミナモア(minamoa)」と「ekie」の店舗の階数を当てるクイズアプリの改善版です。
荷物仕分け業務の学習ツールとして、店舗名と階数を効率的に覚えられるように設計されています。

## 📦 改善内容

### ①  2F・3F店舗データの詳細化と方角対応

**背景**: 業務中、「ショップ名2F」や「ショップ名のみ」のような階数と方角が書いてない荷物がありました。

**実装内容**:
- ミナモア公式フロアガイド (https://www.minamoa-ekie.jp/floor/minamoa/) を参照して、2F・3Fのショップ情報を大幅に拡充
- 2Fは**東(北)・東・西**の3エリアに明確に分類
  - **2F東(北)**: 公式サイトでは「2F北」だが、業務上は「東」に配送するため「東(北)」と表記
  - **2F東**: 通常の東エリア
  - **2F西**: 西エリア (フード・スイーツ中心)
- 各ショップに`area`プロパティを追加し、エリア情報を明確化
- 3Fのショップ情報も20店舗以上追加
- 合計店舗数: 旧版約100店舗 → 改善版**240店舗以上**

**データ構造例**:
```javascript
{
    id: 20,
    name: "ユナイテッドアローズ",
    building: "minamoa",
    floor: "2F",
    area: "東(北)", // 業務用の配送先エリア
    category: "ファッション",
    floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n"
}
```

### ② クイズ回答後にフロアマップと店舗位置表示

**実装内容**:
- 回答後、正解/不正解のフィードバックとともに**フロアマップ画像**を表示
- フロアマップ上に対象店舗の位置情報を視覚的に表示
- 公式フロアガイドのスクリーンショットを活用
- アニメーション付きで表示され、視認性が高い

**表示要素**:
- フロアマップ画像 (各階ごとに異なる画像)
- 店舗名と階数・エリア情報
- アイコン付きの視覚的な位置情報バッジ

**技術実装**:
```javascript
function showFloorMap(question) {
    // フロアマップコンテナを表示
    const floorMapContainer = document.getElementById('floorMapContainer');
    const floorMapImage = document.getElementById('floorMapImage');
    
    // フロアマップ画像URLを設定
    floorMapImage.src = getFloorMapImageUrl(question.floor, question.area, question.building);
    
    // 店舗位置情報を表示
    const floorDisplay = getFloorDisplayWithArea(question.floor, question.area);
    shopLocationInfo.innerHTML = `
        <i class="fas fa-map-marker-alt"></i>
        <strong>${question.name}</strong> は
        <span class="floor-badge">${floorDisplay}</span> にあります
    `;
    
    floorMapContainer.style.display = 'block';
}
```

### ③ 2F〜6F専用クイズモードの追加

**背景**: 主に2Fから6Fの荷物が多いため、この範囲に特化したクイズモードが必要。

**実装内容**:
- スタート画面に**「2F〜6F集中クイズ」ボタン**を新規追加
- 目立つオレンジ〜赤のグラデーションデザインで強調
- パルスアニメーション効果で視覚的に目立つ
- このモードでは2F〜6Fの店舗のみが出題される

**UIデザイン**:
```html
<button class="mode-btn mode-btn-highlight" onclick="startQuiz('minamoa_2-6f')">
    <i class="fas fa-fire"></i>
    <strong>2F〜6F集中クイズ</strong>
    <span>業務頻出フロア</span>
</button>
```

**CSS強調スタイル**:
- グラデーション背景 (オレンジ→赤)
- パルスアニメーション
- ホバー時の拡大効果
- ゴールドの枠線

## 🎯 主要機能

### クイズモード
1. **2F〜6F集中クイズ** (新規追加) - 業務頻出フロアに特化
2. **minamoaクイズ** - ミナモア全階 (B1F〜6F)
3. **ekieクイズ** - ekie全階 (1F〜2F)
4. **全店舗クイズ** - ミナモア + ekie 全店舗

### 学習モード
- 全店舗一覧表示
- 建物別フィルター
- ショップ名検索機能
- 階数・エリア・カテゴリー情報表示

### スコア管理
- リアルタイムスコア表示
- 正解率・正解数・不正解数の統計
- 最高得点の保存 (localStorage)

## 📁 ファイル構成

```
minamoa-quiz/
├── index.html              # メインHTMLファイル (改善版)
├── css/
│   └── style.css          # スタイルシート (改善版、フロアマップ表示対応)
├── js/
│   ├── data.js            # ショップデータ (改善版、240店舗以上)
│   ├── quiz.js            # クイズロジック (フロアマップ表示機能追加)
│   ├── study.js           # 学習モード
│   └── app.js             # アプリ制御
├── assets/
│   └── maps/              # フロアマップ画像 (新規追加)
│       ├── minamoa_b1f.png
│       ├── minamoa_1f.png
│       ├── minamoa_2f_north.png  # 2F東(北)
│       ├── minamoa_2f_east.png   # 2F東
│       ├── minamoa_2f_west.png   # 2F西
│       ├── minamoa_3f.png
│       ├── minamoa_4f.png
│       ├── minamoa_5f.png
│       ├── minamoa_6f.png
│       ├── ekie_1f.png
│       └── ekie_2f.png
└── README.md              # このファイル
```

## 🚀 使い方

1. `index.html` をブラウザで開く
2. クイズモードを選択
   - **2F〜6F集中クイズ** (推奨): 業務で多い階のみ出題
   - その他のモードも選択可能
3. 問題数を選択 (10問/20問/30問/50問)
4. 店舗名を見て、正しい階数を選択
5. 回答後、フィードバックとフロアマップが表示される
6. 4秒後に自動的に次の問題へ進む

## 💾 データソース

- **ミナモア公式サイト**: https://www.minamoa-ekie.jp/
- **フロアガイド**: https://www.minamoa-ekie.jp/floor/minamoa/
- **店舗検索**: https://www.minamoa-ekie.jp/shop/

すべての店舗情報は公式サイトから取得し、2026年1月時点の最新情報に基づいています。

## 🎨 デザイン特徴

- モダンなグラデーションデザイン
- レスポンシブ対応 (スマートフォン・タブレット対応)
- アニメーション効果 (フェードイン、スライドイン、パルス)
- 直感的なUI/UX
- アイコンの効果的な使用 (Font Awesome)

## 📊 改善前後の比較

| 項目 | 改善前 | 改善後 |
|------|--------|--------|
| 店舗数 | 約100店舗 | **240店舗以上** |
| 2Fのエリア分類 | 北/東/西 (曖昧) | **東(北)/東/西** (明確) |
| フロアマップ表示 | なし | **回答後に表示** |
| 2F-6F専用モード | なし | **追加** (オレンジハイライト) |
| 視覚的フィードバック | テキストのみ | **フロアマップ + 位置情報** |

## 🔧 カスタマイズ

### 店舗データの追加
`js/data.js` の `shopsDatabase` 配列に店舗情報を追加:

```javascript
{
    id: 999,
    name: "新しいショップ",
    building: "minamoa",
    floor: "3F",
    area: "", // 3F以上はエリア不要
    category: "カテゴリー",
    floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f"
}
```

### フロアマップ画像の追加
1. 公式サイトのフロアガイドページをスクリーンショット
2. `assets/maps/` フォルダに保存
3. `quiz.js` の `getFloorMapImageUrl()` 関数で画像パスを設定

## 📝 技術スタック

- **HTML5** - セマンティックマークアップ
- **CSS3** - Flexbox、アニメーション、グラデーション
- **JavaScript (ES6+)** - モジュール化、アロー関数、テンプレートリテラル
- **Font Awesome 6.4.0** - アイコンライブラリ
- **localStorage** - スコア永続化

## 🎯 今後の改善案

- [ ] 音声読み上げ機能 (視覚障害者対応)
- [ ] 間違えた問題の復習モード
- [ ] 難易度別クイズ (初級/中級/上級)
- [ ] タイムアタックモード
- [ ] 店舗カテゴリー別クイズ
- [ ] マルチプレイヤー対戦モード

## 📄 ライセンス

このプロジェクトは学習目的で作成されています。
店舗情報は公開されている情報を基にしていますが、実際の業務利用の際は最新情報を公式サイトでご確認ください。

## 👥 貢献

改善提案やバグ報告は歓迎します。

---

**開発日**: 2026年1月
**バージョン**: 2.0 (改善版)
**対応ブラウザ**: Chrome, Firefox, Safari, Edge (最新版)
