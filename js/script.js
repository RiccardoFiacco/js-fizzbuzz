//Stampo i numeri da 1 a 100
//stampo multipli di 3
//stampo multipli di 5
//stampo i multipli comuni
const suono1 = "FIZZ!";
const suono2 = "BUZZ!";
const suono3 = "FIZZBUZZ!";
for (let i = 0; i < 100; i++) {
  let num = i + 1;
  let multipliDiTre = num % 3;
  let multipliDiCinque = num % 5;
  if (multipliDiTre === 0 && multipliDiCinque === 0) {
    //console.log(num + " è multiplo di entrambi: " + suono3);
    console.log(suono3);
  }else if (multipliDiTre === 0) {
    //console.log(num + " è multiplo di 3: " + suono1);
    console.log(suono1);
  }else if (multipliDiCinque === 0) {
    //console.log(num + " è multiplo di 5: " + suono2);
    console.log(suono2);
  }else{
    console.log(num);
  }
}
