const PLACEHOLDER_POSTER_URLS = {
  A: "https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E6%9F%A0%E6%AA%AC%E5%A5%B6-%E4%BB%B7%E6%A0%BC_01.png",
  B: "https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E6%9F%A0%E6%AA%AC%E5%A5%B6%E9%9B%AA%E6%B3%A5-%E4%BB%B7%E6%A0%BC_01.png",
  C: "https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E5%85%AD%E6%9C%88%E9%9C%9C-%E4%BB%B7%E6%A0%BC_01.png",
  D: "https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E8%A5%BF%E6%B9%96%E9%86%8B%E9%B1%BC-%E4%BB%B7%E6%A0%BC_01.png",
};

const LOCAL_POSTER_URLS = {
  A: "./产品海报/柠檬奶-价格_01.png",
  B: "./产品海报/柠檬奶雪泥-价格_01.png",
  C: "./产品海报/六月霜-价格_01.png",
  D: "./产品海报/西湖醋鱼-价格_01.png",
};

const questions = [
  {
    title: "你今天出门前的精神状态更像？",
    options: {
      A: "还行，想喝点甜甜酸酸的东西安慰自己",
      B: "热到灵魂出窍，只想立刻降温",
      C: "表面平静，内心已经开了 18 个待办",
      D: "我也不知道，我的人生最近有点随机播放",
    },
  },
  {
    title: "如果你的夏天有一个关键词，会是？",
    options: {
      A: "小时候",
      B: "冰块",
      C: "植物",
      D: "荒诞",
    },
  },
  {
    title: "朋友问你“要不要尝一口奇怪的东西”，你会？",
    options: {
      A: "先问：甜不甜？",
      B: "先问：冰不冰？",
      C: "先问：有没有咖啡因？",
      D: "直接说：来，我命硬",
    },
  },
  {
    title: "你最能接受哪种“离谱但合理”的饮品描述？",
    options: {
      A: "像小时候喝过的某种神秘奶饮",
      B: "像把夏天塞进冰箱里搅碎",
      C: "像植物在你脑子里开了个空调",
      D: "像杭州菜系突然决定参加咖啡比赛",
    },
  },
  {
    title: "今天如果你变成一种小动物，你更像？",
    options: {
      A: "一只刚睡醒的小奶牛",
      B: "一只趴在冰柜上的企鹅",
      C: "一只在山里深呼吸的水豚",
      D: "一条觉得世界很有意思的鱼",
    },
  },
  {
    title: "你面对压力的方式是？",
    options: {
      A: "找点熟悉的味道，把自己哄好",
      B: "先冷静，物理意义上的冷静",
      C: "喝点清爽的，让脑子重新上线",
      D: "压力？拿来，我要把它做成段子",
    },
  },
  {
    title: "你对“咖啡创新”的态度是？",
    options: {
      A: "可以创新，但不要吓到我",
      B: "只要冰爽，好说",
      C: "最好清新、有层次、不腻",
      D: "越离谱越想试，失败也算人生素材",
    },
  },
  {
    title: "你现在最想获得哪种超能力？",
    options: {
      A: "一秒回到童年暑假",
      B: "随身自带冷气",
      C: "大脑自动清空缓存",
      D: "把尴尬场面变成爆梗",
    },
  },
];

const results = {
  A: {
    type: "A 型：湖州柠檬奶",
    title: "童年回血型人格",
    product: "湖州柠檬奶",
    intro:
      "你的灵魂深处住着一个暑假小孩。\n不是不想长大，只是长大之后，连喝点甜的都要考虑热量、工作、KPI 和明天早会。",
    drink: "经典古早味，酸甜、顺口、不含咖啡因，像把童年冰箱门打开了一条缝。",
    keywords: ["童年感", "回血", "软乎乎", "想被照顾"],
    reason: "你今天不需要被咖啡教育，你需要被柠檬奶温柔接住。",
    posterAlt: "湖州柠檬奶产品海报",
  },
  B: {
    type: "B 型：柠檬奶雪泥",
    title: "冰爽发疯型人格",
    product: "柠檬奶雪泥",
    intro:
      "你的身体在上班，你的灵魂在申请冷冻保存。\n你不是脾气差，你只是温度太高。冰块一到位，你就重新做人。",
    drink: "冰凉清爽，酸甜奶感，像把夏天按进碎冰机里，直接给大脑降噪。",
    keywords: ["怕热", "需要降温", "清爽", "续命冰块"],
    reason: "你今天不是缺咖啡，你是缺一场舌尖小型暴风雪。",
    posterAlt: "柠檬奶雪泥产品海报",
  },
  C: {
    type: "C 型：莫干山六月霜美式",
    title: "草本清醒型人格",
    product: "莫干山六月霜冰美式",
    intro:
      "你看起来很稳，其实脑子里已经开了十几个后台程序。\n你需要的不是甜蜜安慰，而是一种清清凉凉、薄荷绿茶香草迷迭香式的精神重启。",
    drink:
      "莫干山六月霜提取液，搭配阿拉比卡咖啡豆现萃浓缩，植物感、清凉感和咖啡感一起上线。",
    keywords: ["清醒", "植物系", "薄荷感", "脑子要开机"],
    reason: "你不是困，你是需要被一片植物轻轻拍醒。",
    posterAlt: "莫干山六月霜冰美式产品海报",
  },
  D: {
    type: "D 型：西湖醋鱼咖啡",
    title: "怪味冒险型人格",
    product: "西湖醋鱼咖啡",
    intro:
      "你的人生信条是：\n“来都来了，不如喝点离谱的。”\n\n你不害怕奇怪，甚至觉得太正常的东西有点无聊。别人点单是为了解渴，你点单是为了获得一段可以发朋友圈的经历。",
    drink: "酸甜清新，口口有“鱼”，真的不是黑暗料理，不信你试试。",
    keywords: ["猎奇", "社交货币", "杭州特调", "命硬但会玩"],
    reason: "你喝的不是咖啡，是一条在杯子里翻身的杭州梗。",
    posterAlt: "西湖醋鱼咖啡产品海报",
  },
};

const tieBreaker = {
  AB: "B",
  AC: "A",
  AD: "D",
  BC: "C",
  BD: "D",
  CD: "C",
};

const state = {
  currentQuestion: 0,
  answers: [],
  resultKey: "A",
};

const introScreen = document.querySelector("#introScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const startBtn = document.querySelector("#startBtn");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");
const prevQuestionBtn = document.querySelector("#prevQuestionBtn");
const questionIndex = document.querySelector("#questionIndex");
const questionTitle = document.querySelector("#questionTitle");
const optionList = document.querySelector("#optionList");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const resultType = document.querySelector("#resultType");
const resultTitle = document.querySelector("#resultTitle");
const resultIntro = document.querySelector("#resultIntro");
const resultProduct = document.querySelector("#resultProduct");
const resultDrink = document.querySelector("#resultDrink");
const resultReason = document.querySelector("#resultReason");
const keywordRow = document.querySelector("#keywordRow");
const resultPosterPreview = document.querySelector("#resultPosterPreview");
const posterPreviewBtn = document.querySelector("#posterPreviewBtn");
const showPosterBtn = document.querySelector("#showPosterBtn");
const sharePosterBtn = document.querySelector("#sharePosterBtn");
const posterModal = document.querySelector("#posterModal");
const modalPoster = document.querySelector("#modalPoster");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modalBackdrop = document.querySelector("#modalBackdrop");

function switchScreen(screen) {
  introScreen.classList.toggle("is-hidden", screen !== "intro");
  quizScreen.classList.toggle("is-hidden", screen !== "quiz");
  resultScreen.classList.toggle("is-hidden", screen !== "result");
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const questionNumber = state.currentQuestion + 1;
  questionIndex.textContent = `QUESTION ${String(questionNumber).padStart(2, "0")}`;
  questionTitle.textContent = question.title;
  progressText.textContent = `${questionNumber} / ${questions.length}`;
  progressFill.style.width = `${(questionNumber / questions.length) * 100}%`;
  prevQuestionBtn.disabled = state.currentQuestion === 0;

  optionList.innerHTML = "";
  Object.entries(question.options).forEach(([key, text]) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.innerHTML = `
      <span class="option-letter">${key}</span>
      <span class="option-text">${text}</span>
    `;
    button.addEventListener("click", () => selectAnswer(key));
    optionList.appendChild(button);
  });
}

function selectAnswer(answer) {
  state.answers[state.currentQuestion] = answer;

  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion += 1;
    renderQuestion();
    return;
  }

  state.resultKey = calculateResult(state.answers);
  renderResult();
  switchScreen("result");
}

function calculateResult(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answer) => {
    counts[answer] += 1;
  });

  const max = Math.max(...Object.values(counts));
  const leaders = Object.keys(counts).filter((key) => counts[key] === max);

  if (leaders.length === 1) {
    return leaders[0];
  }

  if (leaders.length === 4) {
    return "D";
  }

  for (const pair of Object.keys(tieBreaker)) {
    if (pair.split("").every((key) => leaders.includes(key))) {
      return tieBreaker[pair];
    }
  }

  return leaders.includes("D") ? "D" : leaders[0];
}

function getPosterUrl(key) {
  return PLACEHOLDER_POSTER_URLS[key];
}

function applyPosterImage(image, key) {
  image.src = getPosterUrl(key);
  image.alt = results[key].posterAlt;
  image.onerror = () => {
    image.onerror = null;
    image.src = LOCAL_POSTER_URLS[key];
  };
}

function renderResult() {
  const result = results[state.resultKey];
  resultType.textContent = result.type;
  resultTitle.textContent = result.title;
  resultIntro.textContent = result.intro;
  resultProduct.textContent = result.product;
  resultDrink.textContent = result.drink;
  resultReason.textContent = result.reason;

  keywordRow.innerHTML = "";
  result.keywords.forEach((keyword) => {
    const chip = document.createElement("span");
    chip.textContent = keyword;
    keywordRow.appendChild(chip);
  });

  applyPosterImage(resultPosterPreview, state.resultKey);
  applyPosterImage(modalPoster, state.resultKey);
}

function startQuiz() {
  state.currentQuestion = 0;
  state.answers = [];
  renderQuestion();
  switchScreen("quiz");
}

function goToPreviousQuestion() {
  if (state.currentQuestion === 0) {
    return;
  }

  state.currentQuestion -= 1;
  renderQuestion();
}

function openPosterModal() {
  posterModal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closePosterModal() {
  posterModal.classList.add("is-hidden");
  document.body.style.overflow = "";
}

async function sharePoster() {
  const result = results[state.resultKey];
  const posterUrl = getPosterUrl(state.resultKey);
  const localPosterUrl = LOCAL_POSTER_URLS[state.resultKey];
  const fileName = `${result.title}.png`;

  try {
    const blob = await fetchPosterBlob(localPosterUrl);
    const file = new File([blob], fileName, { type: blob.type || "image/png" });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: "测测你的咖啡人格",
        text: `我测出来是：${result.title}`,
        files: [file],
      });
      return;
    }

    downloadBlob(blob, fileName);
  } catch (error) {
    const link = document.createElement("a");
    link.href = posterUrl;
    link.download = fileName;
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

async function fetchPosterBlob(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Poster image request failed");
  }

  return response.blob();
}

function downloadBlob(blob, fileName) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", () => switchScreen("intro"));
restartBtn.addEventListener("click", startQuiz);
prevQuestionBtn.addEventListener("click", goToPreviousQuestion);
showPosterBtn.addEventListener("click", openPosterModal);
sharePosterBtn.addEventListener("click", sharePoster);
posterPreviewBtn.addEventListener("click", openPosterModal);
closeModalBtn.addEventListener("click", closePosterModal);
modalBackdrop.addEventListener("click", closePosterModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePosterModal();
  }
});
