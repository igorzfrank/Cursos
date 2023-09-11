var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// console.log(videoGames.pop());

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

videoGames.forEach(function (item, index) {
  console.log(item, index);
});
