const foodSuggestions = {
  happy: {
    name: "Ice Cream 🍦",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/happy-1238246_1280.jpg",
    description: "Celebrate your happiness with a scoop of your favorite flavor!",
    color: "#fff59d",
    sound: "https://www.soundjay.com/human/sounds/applause-01.mp3"
  },
  sad: {
    name: "Chocolate Cake 🍫",
    image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/cake-1958652_1280.jpg",
    description: "A rich slice of chocolate cake to cheer you up.",
    color: "#bbdefb",
    sound: "https://www.soundjay.com/human/sounds/sigh-01.mp3"
  },
  bored: {
    name: "Pizza 🍕",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    description: "Get adventurous with some loaded cheesy pizza!",
    color: "#e0e0e0",
    sound: "https://www.soundjay.com/button/sounds/button-16.mp3"
  },
  angry: {
    name: "Spicy Noodles 🌶",
    image: "https://cdn.pixabay.com/photo/2021/03/26/10/37/noodles-6126280_1280.jpg",
    description: "Burn that anger with some fire-hot spicy noodles.",
    color: "#ffcdd2",
    sound: "https://www.soundjay.com/button/sounds/button-3.mp3"
  }
};

function showFood(mood) {
  const food = foodSuggestions[mood];
  const resultDiv = document.getElementById("result");
  const foodImg = document.getElementById("foodImage");
  const foodName = document.getElementById("foodName");
  const foodDesc = document.getElementById("foodDesc");
  const audio = document.getElementById("sound");

  document.body.style.backgroundColor = food.color;
  foodImg.src = food.image;
  foodImg.alt = food.name;
  foodName.textContent = food.name;

  // Typing effect for description
  let desc = food.description;
  foodDesc.textContent = "";
  let i = 0;
  const type = () => {
    if (i < desc.length) {
      foodDesc.textContent += desc.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  };
  type();

  // Play sound
  audio.src = food.sound;
  audio.play();

  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("result");
}

function showRandomMood() {
  const moods = Object.keys(foodSuggestions);
  const random = moods[Math.floor(Math.random() * moods.length)];
  showFood(random);
}