// ミナモア・ekieの正確なショップデータ (改善版)
// 公式サイト https://www.minamoa-ekie.jp/ に基づく
// 2F は東・東(北)・西の3エリアに分類 (業務上、北エリアは東に配送)

const shopsDatabase = [
    // ========== minamoa B1F ==========
    { id: 1, name: "キンコーズ", building: "minamoa", floor: "B1F", area: "", category: "サービス", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=b1" },
    { id: 2, name: "吉野家", building: "minamoa", floor: "B1F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=b1" },
    { id: 3, name: "リトルマーメイド", building: "minamoa", floor: "B1F", area: "", category: "ベーカリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=b1" },
    { id: 4, name: "リンガーハット", building: "minamoa", floor: "B1F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=b1" },
    { id: 5, name: "セブン-イレブン ハートイン", building: "minamoa", floor: "B1F", area: "", category: "コンビニ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=b1" },

    // ========== minamoa 1F ==========
    { id: 10, name: "スターバックス コーヒー", building: "minamoa", floor: "1F", area: "", category: "カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 11, name: "もみじ饅頭のやまだ屋", building: "minamoa", floor: "1F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 12, name: "にしき堂", building: "minamoa", floor: "1F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 13, name: "藤い屋", building: "minamoa", floor: "1F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 14, name: "八天堂", building: "minamoa", floor: "1F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 15, name: "広島駅ビル名店街", building: "minamoa", floor: "1F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 16, name: "ドンク", building: "minamoa", floor: "1F", area: "", category: "ベーカリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 17, name: "タリーズコーヒー", building: "minamoa", floor: "1F", area: "", category: "カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 18, name: "銀座に志かわ", building: "minamoa", floor: "1F", area: "", category: "ベーカリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },
    { id: 19, name: "カルビー プラス", building: "minamoa", floor: "1F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=1f" },

    // ========== minamoa 2F東(北) ==========
    // 注意: 公式では「2F北」だが、業務上は「東」に配送するため「2F東(北)」と表記
    { id: 20, name: "ユナイテッドアローズ", building: "minamoa", floor: "2F", area: "東(北)", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 21, name: "ジェラート ピケ", building: "minamoa", floor: "2F", area: "東(北)", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 22, name: "ファミリア", building: "minamoa", floor: "2F", area: "東(北)", category: "子供服", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 23, name: "シェイク シャック", building: "minamoa", floor: "2F", area: "東(北)", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 24, name: "DEAN & DELUCA", building: "minamoa", floor: "2F", area: "東(北)", category: "カフェ・食品", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 25, name: "ザ・ボディショップ", building: "minamoa", floor: "2F", area: "東(北)", category: "コスメ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 26, name: "アインズ&トルペ", building: "minamoa", floor: "2F", area: "東(北)", category: "ドラッグストア", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 27, name: "熊野筆ショップ", building: "minamoa", floor: "2F", area: "東(北)", category: "工芸品・生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 28, name: "PLAZA", building: "minamoa", floor: "2F", area: "東(北)", category: "ライフスタイルストア", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 29, name: "ISETAN MiRROR Make&Cosmetics", building: "minamoa", floor: "2F", area: "東(北)", category: "コスメ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 200, name: "ANEMONE", building: "minamoa", floor: "2F", area: "東(北)", category: "バッグ・アクセサリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 201, name: "Garland of Dew", building: "minamoa", floor: "2F", area: "東(北)", category: "アクセサリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 202, name: "LOVERARY BY FEILER", building: "minamoa", floor: "2F", area: "東(北)", category: "ファッション雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 203, name: "Matoeru", building: "minamoa", floor: "2F", area: "東(北)", category: "アクセサリー・生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 204, name: "Biople", building: "minamoa", floor: "2F", area: "東(北)", category: "オーガニックコスメ・食品", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 205, name: "成城石井", building: "minamoa", floor: "2F", area: "東(北)", category: "スーパーマーケット", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },
    { id: 206, name: "AKOMEYA TOKYO", building: "minamoa", floor: "2F", area: "東(北)", category: "食料品・生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_n" },

    // ========== minamoa 2F東 ==========
    { id: 30, name: "3COINS", building: "minamoa", floor: "2F", area: "東", category: "雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 31, name: "PLAZA", building: "minamoa", floor: "2F", area: "東", category: "雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 32, name: "ヴィレッジヴァンガード", building: "minamoa", floor: "2F", area: "東", category: "雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 33, name: "サンリオギフトゲート", building: "minamoa", floor: "2F", area: "東", category: "雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 34, name: "ロフト", building: "minamoa", floor: "2F", area: "東", category: "雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 207, name: "Vendome Aoyama", building: "minamoa", floor: "2F", area: "東", category: "ジュエリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 208, name: "russet", building: "minamoa", floor: "2F", area: "東", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 209, name: "BIRTHDAY BAR", building: "minamoa", floor: "2F", area: "東", category: "生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 210, name: "ete", building: "minamoa", floor: "2F", area: "東", category: "ジュエリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 211, name: "kate spade new york", building: "minamoa", floor: "2F", area: "東", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 212, name: "ORBIS", building: "minamoa", floor: "2F", area: "東", category: "コスメ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 213, name: "アニエスベー", building: "minamoa", floor: "2F", area: "東", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 214, name: "emmi", building: "minamoa", floor: "2F", area: "東", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 215, name: "B AND A", building: "minamoa", floor: "2F", area: "東", category: "生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 216, name: "MOTHERHOUSE", building: "minamoa", floor: "2F", area: "東", category: "バッグ・革小物", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 217, name: "IL BISONTE", building: "minamoa", floor: "2F", area: "東", category: "ファッション雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 218, name: "Shake Shack", building: "minamoa", floor: "2F", area: "東", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },
    { id: 219, name: "WithGreen", building: "minamoa", floor: "2F", area: "東", category: "食品", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_e" },

    // ========== minamoa 2F西 ==========
    { id: 124, name: "すし辰の立ち食い", building: "minamoa", floor: "2F", area: "西", category: "食品＆デリカ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 220, name: "あさぎり牛乳", building: "minamoa", floor: "2F", area: "西", category: "洋菓子", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 221, name: "セブン-イレブン ハートイン", building: "minamoa", floor: "2F", area: "西", category: "コンビニ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 222, name: "フルーツタルト専門店Gowdy", building: "minamoa", floor: "2F", area: "西", category: "洋菓子", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 223, name: "りんごとバター。苺のワルツ", building: "minamoa", floor: "2F", area: "西", category: "洋菓子", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 224, name: "治一郎", building: "minamoa", floor: "2F", area: "西", category: "洋菓子", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 225, name: "神戸屋", building: "minamoa", floor: "2F", area: "西", category: "ベーカリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 226, name: "グリーン・グルメ", building: "minamoa", floor: "2F", area: "西", category: "惣菜", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 227, name: "広島牛 青ひげ", building: "minamoa", floor: "2F", area: "西", category: "広島牛の弁当・総菜", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 228, name: "THE CITY BAKERY", building: "minamoa", floor: "2F", area: "西", category: "ベーカリー・カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 229, name: "Soup Stock Tokyo", building: "minamoa", floor: "2F", area: "西", category: "食品", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 230, name: "PRESS BUTTER SAND", building: "minamoa", floor: "2F", area: "西", category: "おみやげ＆スイーツ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },
    { id: 231, name: "COCONCA MAISON by 藤い屋", building: "minamoa", floor: "2F", area: "西", category: "おみやげ＆スイーツ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=2f_w" },

    // ========== minamoa 3F ==========
    { id: 40, name: "無印良品", building: "minamoa", floor: "3F", area: "", category: "雑貨・衣料", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 41, name: "ユニクロ", building: "minamoa", floor: "3F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 42, name: "ABC-MART", building: "minamoa", floor: "3F", area: "", category: "靴", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 43, name: "niko and...", building: "minamoa", floor: "3F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 44, name: "グローバルワーク", building: "minamoa", floor: "3F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 45, name: "SM2 keittio", building: "minamoa", floor: "3F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 46, name: "ニトリ", building: "minamoa", floor: "3F", area: "", category: "インテリア", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 47, name: "Francfranc", building: "minamoa", floor: "3F", area: "", category: "インテリア", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 240, name: "Editorial", building: "minamoa", floor: "3F", area: "", category: "ファッション雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 241, name: "CLASKA Gallery & Shop \"DO\"", building: "minamoa", floor: "3F", area: "", category: "生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 242, name: "LE TALON", building: "minamoa", floor: "3F", area: "", category: "レディスシューズ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 243, name: "Mila Owen", building: "minamoa", floor: "3F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 244, name: "LOUNIE", building: "minamoa", floor: "3F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 245, name: "NOLLEY'S sophi", building: "minamoa", floor: "3F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 246, name: "tandey waltz", building: "minamoa", floor: "3F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 247, name: "SNIDEL HOME", building: "minamoa", floor: "3F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 248, name: "deux C", building: "minamoa", floor: "3F", area: "", category: "生活雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 249, name: "Afternoon Tea LIVING", building: "minamoa", floor: "3F", area: "", category: "生活雑貨・カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 250, name: "金子眼鏡店", building: "minamoa", floor: "3F", area: "", category: "メガネ・サングラス", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 251, name: "CAFÉ AUX BACCHANALES", building: "minamoa", floor: "3F", area: "", category: "レストラン＆カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },
    { id: 252, name: "MLESNA TEA HIROSHIMA", building: "minamoa", floor: "3F", area: "", category: "レストラン＆カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=3f" },

    // ========== minamoa 4F ==========
    { id: 50, name: "BEAMS", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 51, name: "UNITED ARROWS", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 52, name: "SHIPS", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 53, name: "URBAN RESEARCH", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 54, name: "JOURNAL STANDARD", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 55, name: "WEGO", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 56, name: "Kastane", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 57, name: "チャオパニック", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 58, name: "スタディオクリップ", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 260, name: "apu", building: "minamoa", floor: "4F", area: "", category: "ファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 261, name: "MERCURYDUO", building: "minamoa", floor: "4F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 262, name: "SLY", building: "minamoa", floor: "4F", area: "", category: "レディスファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 263, name: "Zoff", building: "minamoa", floor: "4F", area: "", category: "メガネ・サングラス", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 264, name: "ブリーズビリッツ", building: "minamoa", floor: "4F", area: "", category: "ファッション雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 265, name: "Maker's Watch Knot", building: "minamoa", floor: "4F", area: "", category: "時計", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 266, name: "TENTIAL", building: "minamoa", floor: "4F", area: "", category: "レディス・メンズファッション", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },
    { id: 267, name: "ATHENA", building: "minamoa", floor: "4F", area: "", category: "帽子", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=4f" },

    // ========== minamoa 5F ==========
    { id: 60, name: "ジュンク堂書店", building: "minamoa", floor: "5F", area: "", category: "書店", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 61, name: "スキッズガーデン", building: "minamoa", floor: "5F", area: "", category: "キッズ施設", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 270, name: "アクアリウムヒロシマ", building: "minamoa", floor: "5F", area: "", category: "観賞魚", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 271, name: "ドラスティック サイバーゾ", building: "minamoa", floor: "5F", area: "", category: "ファッション雑貨", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 272, name: "JINS", building: "minamoa", floor: "5F", area: "", category: "メガネ・サングラス", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 273, name: "ABC-MART", building: "minamoa", floor: "5F", area: "", category: "シューズ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 274, name: "ゴボンテラック", building: "minamoa", floor: "5F", area: "", category: "カード＆ホビー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 275, name: "スポーツカードゲームショップ MINT", building: "minamoa", floor: "5F", area: "", category: "カード＆ホビー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 276, name: "ポケモンセンターヒロシマ", building: "minamoa", floor: "5F", area: "", category: "カード＆ホビー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 277, name: "MOOMIN SHOP CASUAL EDITION", building: "minamoa", floor: "5F", area: "", category: "カード＆ホビー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 278, name: "JUMP SHOP広島店", building: "minamoa", floor: "5F", area: "", category: "カード＆ホビー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },
    { id: 279, name: "らぱらぱ スト屋", building: "minamoa", floor: "5F", area: "", category: "カード＆ホビー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=5f" },

    // ========== minamoa 6F (DINING) ==========
    { id: 70, name: "鼎泰豊", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 71, name: "一風堂", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 72, name: "牛角", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 73, name: "かつ丼 吉兵衛", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 74, name: "とんかつ 新宿さぼてん", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 75, name: "韓国料理 ビビム", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 76, name: "串家物語", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 77, name: "オムライスの店 ポムの樹", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 78, name: "タリーズコーヒー", building: "minamoa", floor: "6F", area: "", category: "カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 79, name: "サイゼリヤ", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 80, name: "焼肉きんぐ", building: "minamoa", floor: "6F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 280, name: "スキッズガーデン", building: "minamoa", floor: "6F", area: "", category: "プレイブランド", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 281, name: "麺屋くら正", building: "minamoa", floor: "6F", area: "", category: "ラーメン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 282, name: "KAISENMART", building: "minamoa", floor: "6F", area: "", category: "海鮮", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 283, name: "博多ちょうおおおやき", building: "minamoa", floor: "6F", area: "", category: "博多ちょうおおおやき", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 284, name: "お好み焼き・鉄板焼 厳選", building: "minamoa", floor: "6F", area: "", category: "お好み焼き・鉄板焼", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 285, name: "広島牛天鍋 舞瑠鍋", building: "minamoa", floor: "6F", area: "", category: "せんじ肉専門店", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },
    { id: 286, name: "月島もんじゃ もんた", building: "minamoa", floor: "6F", area: "", category: "もんじゃ専門店", floorMapUrl: "https://www.minamoa-ekie.jp/floor/minamoa/?floor=6f" },

    // ========== ekie 1F ==========
    { id: 100, name: "マクドナルド", building: "ekie", floor: "1F", area: "", category: "ファストフード", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 101, name: "ケンタッキーフライドチキン", building: "ekie", floor: "1F", area: "", category: "ファストフード", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 102, name: "モスバーガー", building: "ekie", floor: "1F", area: "", category: "ファストフード", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 103, name: "ミスタードーナツ", building: "ekie", floor: "1F", area: "", category: "カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 104, name: "ドトールコーヒーショップ", building: "ekie", floor: "1F", area: "", category: "カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 105, name: "サンマルクカフェ", building: "ekie", floor: "1F", area: "", category: "カフェ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 106, name: "ベーカリー ポンパドウル", building: "ekie", floor: "1F", area: "", category: "ベーカリー", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 107, name: "お好み焼 長田屋", building: "ekie", floor: "1F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 108, name: "広島駅弁 ひろしま駅弁当", building: "ekie", floor: "1F", area: "", category: "弁当", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 109, name: "てんや", building: "ekie", floor: "1F", area: "", category: "レストラン", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },
    { id: 110, name: "銀だこ", building: "ekie", floor: "1F", area: "", category: "ファストフード", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=1f" },

    // ========== ekie 2F ==========
    { id: 120, name: "広島お土産館", building: "ekie", floor: "2F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=2f" },
    { id: 121, name: "広島銘品館", building: "ekie", floor: "2F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=2f" },
    { id: 122, name: "がんす娘", building: "ekie", floor: "2F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=2f" },
    { id: 123, name: "カープグッズショップ", building: "ekie", floor: "2F", area: "", category: "おみやげ", floorMapUrl: "https://www.minamoa-ekie.jp/floor/ekie/?floor=2f" },
];

// フロアの選択肢を生成する関数
function getFloorsForBuilding(building) {
    if (building === 'minamoa') {
        return ['B1F', '1F', '2F東(北)', '2F東', '2F西', '3F', '4F', '5F', '6F'];
    } else if (building === 'ekie') {
        return ['1F', '2F'];
    } else if (building === 'minamoa_2-6f') {
        // 2F-6F専用モード
        return ['2F東(北)', '2F東', '2F西', '3F', '4F', '5F', '6F'];
    } else {
        // 全店舗モードの場合
        return ['B1F', '1F', '2F東(北)', '2F東', '2F西', '3F', '4F', '5F', '6F'];
    }
}

// ランダムにショップを取得
function getRandomShops(building, count) {
    let filteredShops = shopsDatabase;
    
    if (building === 'minamoa') {
        filteredShops = shopsDatabase.filter(shop => shop.building === 'minamoa');
    } else if (building === 'ekie') {
        filteredShops = shopsDatabase.filter(shop => shop.building === 'ekie');
    } else if (building === 'minamoa_2-6f') {
        // 2F-6F専用モード
        filteredShops = shopsDatabase.filter(shop => 
            shop.building === 'minamoa' && 
            (shop.floor === '2F' || shop.floor === '3F' || shop.floor === '4F' || shop.floor === '5F' || shop.floor === '6F')
        );
    }
    
    // シャッフル
    const shuffled = [...filteredShops].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// フロアと方角の表示名を生成
function getFloorDisplayWithArea(floor, area) {
    if (area && area !== '') {
        return `${floor}${area}`;
    }
    return floor;
}

// 建物名の表示名
function getBuildingDisplayName(building) {
    return building === 'minamoa' ? 'minamoa' : 'ekie';
}

// ローカルストレージのキー
const STORAGE_KEY = 'minamoa_quiz_best_score';

// 最高得点を保存
function saveBestScore(score) {
    const currentBest = getBestScore();
    if (score > currentBest) {
        localStorage.setItem(STORAGE_KEY, score.toString());
        return true; // 新記録
    }
    return false;
}

// 最高得点を取得
function getBestScore() {
    const score = localStorage.getItem(STORAGE_KEY);
    return score ? parseInt(score) : 0;
}

// 統計情報を取得
function getStats() {
    return {
        totalShops: shopsDatabase.length,
        minamoaShops: shopsDatabase.filter(s => s.building === 'minamoa').length,
        ekieShops: shopsDatabase.filter(s => s.building === 'ekie').length,
        bestScore: getBestScore()
    };
}
