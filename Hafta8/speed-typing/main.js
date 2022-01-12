window.addEventListener('load', init);
const settingsForm = document.querySelector('#settings-form');
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};
let currentLevel = levels.easy;
settingsForm.addEventListener('change', (e) => {
  if (e.target.value === 'easy') {
    currentLevel = levels.easy;
  } else if (e.target.value === 'medium') {
    currentLevel = levels.medium;
  } else if (e.target.value === 'hard') {
    currentLevel = levels.hard;
  }
});
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'yer',
  'en',
  'insan',
  'değil',
  'yıl',
  'gün',
  'iş',
  'şey',
  'ara',
  'el',
  'zaman',
  'çocuk',
  'içinde',
  'yol',
  'neden',
  'konu',
  'kadın',
  'ev',
  'göz',
  'dünya',
  'durum',
  'yan',
  'hal',
  'su',
  'arkadaş',
  'devlet',
  'kitap',
  'sistem',
  'bugün',
  'gerçek',
  'herkes',
  'çevre',
  'yaşam',
  'sokak',
  'tarih',
  'anlam',
  'banka',
  'madde',
  'adalet',
  'haber',
  'şirket',
  'program',
  'hareket',
  'gazete',
  'doktor',
  'mühendis',
  'muhasebeci',
  'film',
  'şarj',
  'telefon',
  'müşteri',
  'eğitim',
  'deniz',
  'düşünce',
  'milyon',
  'temel',
  'kültür',
  'resim',
  'ışık',
  'hizmet',
  'ihtiyaç',
  'yön',
  'oyun',
  'işlem',
  'oran',
  'bilgisayar',
  'dikkat',
  'gelecek',
  'lira',
  'üretim',
  'dakika',
  'araba',
  'ağız',
  'duygu',
  'örnek',
  'derece',
  'duvar',
  'sanat',
  'ana',
  'hastalık',
  'öğrenci',
  'televizyon',
  'yöntem',
  'masa',
  'müzik',
  'enerji',
  'üniversite',
  'spor',
  'basketbol',
  'internet',
  'sabah',
  'sağlık',
  'köy',
  'düzey',
  'savaş',
  'hayvan',
  'kalan',
  'sayfa',
  'teknoloji',
  'koku',
  'sektör',
  'öğretmen',
  'kural',
  'şiir',
  'model',
  'görüş',
  'bahçe',
  'mükemmel',
  'efsane',
  'yazılımcı',
  'konuşmacı',
  'vesselam',
  'sosyal',
  'medya',
  'galatasaray',
  'fenerbahçe',
  'beşiktaş',
  'amerika',
  'ingiltere',
];

//Initialize Game
function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countDown, 1000);
  setInterval(checkStatus, 1000);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (
    turkishToUpper(wordInput.value) === turkishToUpper(currentWord.innerHTML)
  ) {
    message.innerHTML = 'Doğru!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
  seconds.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Oyun Bitti!';
    score = -1;
  }
}

function turkishToUpper(string) {
  var letters = { i: 'İ', ş: 'Ş', ğ: 'Ğ', ü: 'Ü', ö: 'Ö', ç: 'Ç', ı: 'I' };
  string = string.replace(/(([iışğüçö]))/g, function (letter) {
    return letters[letter];
  });
  return string.toUpperCase();
}
