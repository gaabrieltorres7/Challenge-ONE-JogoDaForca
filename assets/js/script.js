let attempts = 6;
let randomWord;
let randomCategory;
let arr = [];
const words = [
  (word001 = {
    name: "IRELAND",
    category: "COUNTRIES",
  }),
  (word002 = {
    name: "ECUADOR",
    category: "COUNTRIES",
  }),
  (word003 = {
    name: "CHILE",
    category: "COUNTRIES",
  }),
  (word004 = {
    name: "INDONESIA",
    category: "COUNTRIES",
  }),
  (word005 = {
    name: "MALDIVES",
    category: "COUNTRIES",
  }),
  (word006 = {
    name: "ENGLAND",
    category: "COUNTRIES",
  }),
  (word007 = {
    name: "GREENLAND",
    category: "COUNTRIES",
  }),
  (word008 = {
    name: "UZBEKISTAN",
    category: "COUNTRIES",
  }),
  (word009 = {
    name: "SPAIN",
    category: "COUNTRIES",
  }),
  (word010 = {
    name: "FRANCE",
    category: "COUNTRIES",
  }),
  (word011 = {
    name: "BICYCLE",
    category: "TRANSPORT",
  }),
  (word012 = {
    name: "BOAT",
    category: "TRANSPORT",
  }),
  (word013 = {
    name: "SHIP",
    category: "TRANSPORT",
  }),
  (word014 = {
    name: "CABLE CAR",
    category: "TRANSPORT",
  }),
  (word015 = {
    name: "MOTORCYCLE",
    category: "TRANSPORT",
  }),
  (word016 = {
    name: "TRUCK",
    category: "TRANSPORT",
  }),
  (word017 = {
    name: "AIRCRAFT",
    category: "TRANSPORT",
  }),
  (word018 = {
    name: "TRAIN",
    category: "TRANSPORT",
  }),
  (word019 = {
    name: "KAYAK",
    category: "TRANSPORT",
  }),
  (word020 = {
    name: "BUS",
    category: "TRANSPORT",
  }),
  (word021 = {
    name: "CUP",
    category: "OBJECTS",
  }),
  (word022 = {
    name: "COIN",
    category: "OBJECTS",
  }),
  (word023 = {
    name: "TAPE",
    category: "OBJECTS",
  }),
  (word024 = {
    name: "BELL",
    category: "OBJECTS",
  }),
  (word025 = {
    name: "SHOWER",
    category: "OBJECTS",
  }),
  (word026 = {
    name: "KEYBOARD",
    category: "OBJECTS",
  }),
  (word027 = {
    name: "LAMP",
    category: "OBJECTS",
  }),
  (word028 = {
    name: "KNIFE",
    category: "OBJECTS",
  }),
  (word029 = {
    name: "PEN",
    category: "OBJECTS",
  }),
  (word030 = {
    name: "PENCIL",
    category: "OBJECTS",
  }),
  (word031 = {
    name: "WATERMELON",
    category: "FOODS",
  }),
  (word032 = {
    name: "PEANUT",
    category: "FOODS",
  }),
  (word033 = {
    name: "PIZZA",
    category: "FOODS",
  }),
  (word034 = {
    name: "LETTUCE",
    category: "FOODS",
  }),
  (word035 = {
    name: "GUAVA",
    category: "FOODS",
  }),
  (word036 = {
    name: "STRAWBERRY",
    category: "FOODS",
  }),
  (word037 = {
    name: "FISH",
    category: "FOODS",
  }),
  (word038 = {
    name: "CHICKEN",
    category: "FOODS",
  }),
  (word039 = {
    name: "MEAT",
    category: "FOODS",
  }),
  (word040 = {
    name: "VEGETABLE",
    category: "FOODS",
  }),
  (word040 = {
    name: "DRAGON",
    category: "ANIMALS",
  }),
  (word041 = {
    name: "CHICKEN",
    category: "ANIMALS",
  }),
  (word042 = {
    name: "PEACOCK",
    category: "ANIMALS",
  }),
  (word043 = {
    name: "CAMEL",
    category: "ANIMALS",
  }),
  (word044 = {
    name: "DOG",
    category: "ANIMALS",
  }),
  (word045 = {
    name: "CAT",
    category: "ANIMALS",
  }),
  (word046 = {
    name: "DROMEDARY",
    category: "ANIMALS",
  }),
  (word047 = {
    name: "LION",
    category: "ANIMALS",
  }),
  (word048 = {
    name: "MONKEY",
    category: "ANIMALS",
  }),
  (word049 = {
    name: "ALLIGATOR",
    category: "ANIMALS",
  }),
  (word050 = {
    name: "WOLF",
    category: "ANIMALS",
  }),
  (word051 = {
    name: "NARUTO",
    category: "TV AND CINEMA",
  }),
  (word052 = {
    name: "SPIDER MAN",
    category: "TV AND CINEMA",
  }),
  (word053 = {
    name: "IRON MAN",
    category: "TV AND CINEMA",
  }),
  (word054 = {
    name: "THE BOYS",
    category: "TV AND CINEMA",
  }),
  (word055 = {
    name: "STRANGER THINGS",
    category: "TV AND CINEMA",
  }),
  (word056 = {
    name: "SUITS",
    category: "TV AND CINEMA",
  }),
  (word057 = {
    name: "BREAKING BAD",
    category: "TV AND CINEMA",
  }),
  (word058 = {
    name: "VIKINGS",
    category: "TV AND CINEMA",
  }),
  (word059 = {
    name: "BOB SPONJA",
    category: "TV AND CINEMA",
  }),
  (word060 = {
    name: "GAME OF THRONES",
    category: "TV AND CINEMA",
  }),
];

createSecretWord();
function createSecretWord() {
  const indexWord = parseInt(Math.random() * words.length);
  randomWord = words[indexWord].name;
  randomCategory = words[indexWord].category;
}

createScreenWord();
function createScreenWord() {
  const screenWord = document.querySelector(".secret-word");
  screenWord.innerHTML = "";
  const category = document.querySelector(".category");
  category.innerHTML = randomCategory;

  for (let i = 0; i < randomWord.length; i++) {
    if (arr[i] == undefined) {
      if (randomWord[i] == " ") {
        arr[i] = " ";
        screenWord.innerHTML =
          screenWord.innerHTML +
          "<div class='spaceLetters'>" +
          arr[i] +
          "</div>";
      } else {
        arr[i] = "&nbsp;";
        screenWord.innerHTML =
          screenWord.innerHTML + "<div class='letters'>" + arr[i] + "</div>";
      }
    } else {
      if (randomWord[i] == " ") {
        arr[i] = " ";
        screenWord.innerHTML =
          screenWord.innerHTML +
          "<div class='spaceLetters'>" +
          arr[i] +
          "</div>";
      } else {
        screenWord.innerHTML =
          screenWord.innerHTML + "<div class='letters'>" + arr[i] + "</div>";
      }
    }
  }
}

function checkChosenLetter(letter) {
  document.querySelector("." + letter + "-key").disabled = true;
  if (attempts > 0) {
    changeLetterStyle(letter + "-key");
    compareLists(letter.toUpperCase());
    createScreenWord();
  }
}

function changeLetterStyle(key) {
  document.querySelector("." + key).style.background = "#ffbb00";
  document.querySelector("." + key).style.color = "#fff";
}

function compareLists(letter) {
  const pos = randomWord.indexOf(letter);
  if (pos < 0) {
    attempts--;
    loadImage();
    if (attempts == 0) {
      openModal("OPS!", "Maybe next! The correct word was <br>" + randomWord);
    }
  } else {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] == letter) {
        arr[i] = letter;
      }
    }
  }

  let winning = true;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] != arr[i]) {
      winning = false;
    }
  }

  if (winning == true) {
    openModal("Congrats!", "You made it! <br>");
    attempts = 0;
  }
}

function loadImage() {
  switch (attempts) {
    case 5:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca01.png')";
      break;
    case 4:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca02.png')";
      break;
    case 3:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca03.png')";
      break;
    case 2:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca04.png')";
      break;
    case 1:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca05.png')";
      break;
    case 0:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca06.png')";
      break;
    default:
      document.querySelector(".image").style.background =
        "url('../assets/img/forca.png')";
      break;
  }
}

function openModal(title, message) {
  let modaltitle = document.getElementById("exampleModalLabel");
  modaltitle.innerText = title;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = message;
  $("#myModal").modal({
    show: true,
  });
}

let btnRestart = document.querySelector(".btn-restart");
btnRestart.addEventListener("click", () => {
  location.reload();
});
