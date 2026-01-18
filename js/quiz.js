// クイズの状態管理
let quizState = {
    mode: '',              // 'minamoa', 'ekie', 'all', 'minamoa_2-6f'
    questions: [],         // 出題される問題
    currentIndex: 0,       // 現在の問題番号
    score: 0,              // 現在のスコア
    correctCount: 0,       // 正解数
    wrongCount: 0,         // 不正解数
    totalQuestions: 0,     // 総問題数
    answered: false        // 回答済みフラグ
};

// クイズ開始
function startQuiz(mode) {
    const questionCount = parseInt(document.getElementById('questionCount').value);
    
    // 状態を初期化
    quizState = {
        mode: mode,
        questions: getRandomShops(mode, questionCount),
        currentIndex: 0,
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        totalQuestions: questionCount,
        answered: false
    };
    
    // 画面切り替え
    showScreen('quizScreen');
    
    // 最初の問題を表示
    displayQuestion();
    updateQuizHeader();
}

// 問題を表示
function displayQuestion() {
    const currentQuestion = quizState.questions[quizState.currentIndex];
    
    // ショップ名と建物を表示
    document.getElementById('shopName').textContent = currentQuestion.name;
    document.getElementById('buildingTag').textContent = getBuildingDisplayName(currentQuestion.building);
    
    // フィードバックを非表示
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'none';
    feedback.className = 'feedback';
    
    // フロアマップを非表示
    const floorMapContainer = document.getElementById('floorMapContainer');
    if (floorMapContainer) {
        floorMapContainer.style.display = 'none';
    }
    
    // 回答済みフラグをリセット
    quizState.answered = false;
    
    // 選択肢を生成
    generateAnswerButtons(currentQuestion);
}

// 選択肢ボタンを生成
function generateAnswerButtons(question) {
    const answerGrid = document.getElementById('answerGrid');
    answerGrid.innerHTML = '';
    
    const floors = getFloorsForBuilding(question.building === 'minamoa' && quizState.mode === 'minamoa_2-6f' ? 'minamoa_2-6f' : question.building);
    
    floors.forEach(floor => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = floor;
        button.onclick = () => {
            const correctFloor = getFloorDisplayWithArea(question.floor, question.area);
            checkAnswer(floor, correctFloor, question);
        };
        answerGrid.appendChild(button);
    });
}

// 回答をチェック
function checkAnswer(selectedFloor, correctFloor, question) {
    if (quizState.answered) return;
    
    quizState.answered = true;
    const isCorrect = selectedFloor === correctFloor;
    
    // すべてのボタンを無効化
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        
        // 正解のボタンを緑に
        if (btn.textContent === correctFloor) {
            btn.classList.add('correct');
        }
        
        // 不正解の選択を赤に
        if (btn.textContent === selectedFloor && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // スコアと統計を更新
    if (isCorrect) {
        quizState.correctCount++;
        quizState.score += 10;
    } else {
        quizState.wrongCount++;
    }
    
    // フィードバックを表示
    showFeedback(isCorrect, correctFloor, question);
    
    // フロアマップを表示
    showFloorMap(question);
    
    // ヘッダーを更新
    updateQuizHeader();
    
    // 次の問題へ（4秒後 - マップ表示時間を確保）
    setTimeout(() => {
        nextQuestion();
    }, 4000);
}

// フィードバックを表示
function showFeedback(isCorrect, correctFloor, question) {
    const feedback = document.getElementById('feedback');
    const feedbackText = feedback.querySelector('.feedback-text');
    const feedbackDetail = feedback.querySelector('.feedback-detail');
    
    if (isCorrect) {
        feedback.classList.add('correct');
        feedbackText.textContent = '正解！';
        feedbackDetail.textContent = `${question.name}は${correctFloor}にあります`;
    } else {
        feedback.classList.add('wrong');
        feedbackText.textContent = '不正解';
        feedbackDetail.textContent = `正解は${correctFloor}です（${question.category}）`;
    }
    
    feedback.style.display = 'block';
}

// フロアマップを表示
function showFloorMap(question) {
    const floorMapContainer = document.getElementById('floorMapContainer');
    if (!floorMapContainer) return;
    
    const floorMapImage = document.getElementById('floorMapImage');
    const shopLocationInfo = document.getElementById('shopLocationInfo');
    
    // フロアマップのURLを設定
    if (question.floorMapUrl) {
        // フロアマップの画像URLを生成（公式サイトのフロアマップページのスクリーンショット）
        // 実際の実装では、事前に取得したフロアマップ画像を使用
        floorMapImage.src = getFloorMapImageUrl(question.floor, question.area, question.building);
        floorMapImage.alt = `${question.floor}のフロアマップ`;
        
        // 店舗位置情報を表示
        const floorDisplay = getFloorDisplayWithArea(question.floor, question.area);
        shopLocationInfo.innerHTML = `
            <i class="fas fa-map-marker-alt"></i>
            <strong>${question.name}</strong> は
            <span class="floor-badge">${floorDisplay}</span> にあります
        `;
        
        floorMapContainer.style.display = 'block';
    }
}

// フロアマップ画像のURLを取得
function getFloorMapImageUrl(floor, area, building) {
    // ここでは、事前に保存したフロアマップ画像のURLを返す
    // 実際の画像は別途用意する必要があります
    const floorKey = area ? `${floor}_${area}` : floor;
    const mapImages = {
        // minamoa
        'B1F': 'assets/maps/minamoa_b1f.png',
        '1F': 'assets/maps/minamoa_1f.png',
        '2F_東(北)': 'assets/maps/minamoa_2f_north.png',
        '2F_東': 'assets/maps/minamoa_2f_east.png',
        '2F_西': 'assets/maps/minamoa_2f_west.png',
        '3F': 'assets/maps/minamoa_3f.png',
        '4F': 'assets/maps/minamoa_4f.png',
        '5F': 'assets/maps/minamoa_5f.png',
        '6F': 'assets/maps/minamoa_6f.png',
        // ekie
        'ekie_1F': 'assets/maps/ekie_1f.png',
        'ekie_2F': 'assets/maps/ekie_2f.png',
    };
    
    const key = building === 'ekie' ? `${building}_${floor}` : floorKey;
    return mapImages[key] || 'assets/maps/placeholder.png';
}

// 次の問題へ
function nextQuestion() {
    quizState.currentIndex++;
    
    if (quizState.currentIndex < quizState.totalQuestions) {
        // 次の問題を表示
        displayQuestion();
        updateQuizHeader();
    } else {
        // クイズ終了
        showResults();
    }
}

// クイズヘッダーを更新
function updateQuizHeader() {
    document.getElementById('currentQuestion').textContent = quizState.currentIndex + 1;
    document.getElementById('totalQuestions').textContent = quizState.totalQuestions;
    document.getElementById('currentScore').textContent = quizState.score;
    
    // プログレスバーを更新
    const progress = ((quizState.currentIndex + 1) / quizState.totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// 結果を表示
function showResults() {
    showScreen('resultScreen');
    
    const accuracy = Math.round((quizState.correctCount / quizState.totalQuestions) * 100);
    
    // 結果を表示
    document.getElementById('finalScore').textContent = quizState.score;
    document.getElementById('maxScore').textContent = quizState.totalQuestions * 10;
    document.getElementById('correctCount').textContent = quizState.correctCount;
    document.getElementById('wrongCount').textContent = quizState.wrongCount;
    document.getElementById('accuracy').textContent = accuracy;
    
    // メッセージを生成
    let message = '';
    if (accuracy === 100) {
        message = '🎉 完璧です！全問正解おめでとうございます！';
    } else if (accuracy >= 80) {
        message = '👏 素晴らしい！かなり覚えていますね！';
    } else if (accuracy >= 60) {
        message = '👍 良い調子です！もう少しで完璧ですね！';
    } else if (accuracy >= 40) {
        message = '💪 頑張りました！復習して再挑戦しましょう！';
    } else {
        message = '📚 学習モードで覚えてから再挑戦してみましょう！';
    }
    
    document.getElementById('resultMessage').textContent = message;
    
    // 最高得点を保存
    const isNewRecord = saveBestScore(quizState.score);
    if (isNewRecord) {
        message += '\n🏆 新記録達成！';
        document.getElementById('resultMessage').textContent = message;
    }
    
    // 最高得点を更新
    updateStats();
}

// もう一度挑戦
function restartQuiz() {
    startQuiz(quizState.mode);
}

// クイズヘッダーにスコア表示のアニメーション
function animateScore() {
    const scoreDisplay = document.getElementById('currentScore');
    scoreDisplay.style.transform = 'scale(1.3)';
    setTimeout(() => {
        scoreDisplay.style.transform = 'scale(1)';
    }, 300);
}
