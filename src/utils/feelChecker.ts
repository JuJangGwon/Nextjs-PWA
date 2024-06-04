export default function feelChecker(t: string) {
  const happyWords = [
    "행복",
    "기뻣",
    "기뻤",
    "즐겁",
    "좋았",
    "좋아",
    "신났",
    "즐거움",
    "기쁨",
    "만족",
    "환희",
    "뿌듯함",
    "들뜸",
    "감격",
    "안도",
    "흐뭇함",
    "신남",
    "신난",
    "좋다",
    "즐겁",
    "재밌",
    "존잼",
    "감사",
    "놀라움",
    "즐겁게",
  ];
  const angryWords = [
    "분노",
    "화남",
    "싫어",
    "싫었",
    "나빴",
    "나쁜",
    "나빠",
    "열받",
    "열 받",
    "역겨",
    "싫지",
    "격노",
    "짜증",
    "불만",
    "성남",
    "악",
    "불행",
    "울분",
    "실망",
    "불쾌",
    "언짢음",
    "화",
    "열받",
    "좆",
    "ㅈ같다",
    "번민",
    "불편함",
    "힘들다",
    "질투",
  ];
  const sadWords = [
    "회상",
    "이별",
    "분리",
    "분리 불안",
    "설움",
    "서러움",
    "허전함",
    "슬프",
    "눈물",
    "슬퍼",
    "울고",
    "엉엉",
    "슬픔",
    "우울",
    "눈물",
    "슬펐",
    "우울함",
    "비통",
    "서럽",
    "그리움",
    "외로움",
    "쓸쓸함",
    "낙담",
    "상심",
    "절망",
    "비애",
    "고독",
    "비참",
    "비참함",
    "침울",
    "우울감",
    "마음 아픔",
    "괴로움",
    "비탄",
    "상실",
    "후회",
    "한탄",
    "애도",
    "눈물 나",
    "서운함",
    "비탄감",
    "고통",
    "괴로웠",
    "소외감",
  ];
  const kors = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ];
  const alpha = [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
    "g",
    "H",
    "h",
    "I",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
  ];
  let korCount = 0;
  t.split("").forEach((word) => {
    if (kors.join("").includes(word)) {
      korCount++;
    }
  });
  if (korCount > 29) {
    return ["fail"];
  }
  let alphaCount = 0;

  t.split("").forEach((word) => {
    if (alpha.join("").includes(word)) {
      alphaCount++;
    }
  });
  console.log(alphaCount, korCount);

  if (alphaCount > 29) {
    return ["fail"];
  }
  let happyCount = 0;
  happyWords.forEach((word) => {
    if (t.includes(word)) {
      happyCount++;
    }
  });

  let angryCount = 0;
  angryWords.forEach((word) => {
    if (t.includes(word)) {
      angryCount++;
    }
  });
  let sadCount = 0;
  sadWords.forEach((word) => {
    if (t.includes(word)) {
      sadCount++;
    }
  });
  if (happyCount === 0 && angryCount === 0 && sadCount === 0) {
    return ["fail"];
  }
  if (happyCount > angryCount && happyCount > sadCount) {
    return ["happy", happyCount, angryCount, sadCount];
  }
  if (happyCount < angryCount && sadCount < angryCount) {
    return ["angry", happyCount, angryCount, sadCount];
  }
  if (happyCount < sadCount && angryCount < sadCount) {
    return ["sad", happyCount, angryCount, sadCount];
  }
  if (happyCount === sadCount && angryCount === sadCount) {
    return ["normal", happyCount, angryCount, sadCount];
  }
  return ["normal", happyCount, angryCount, sadCount];
}
