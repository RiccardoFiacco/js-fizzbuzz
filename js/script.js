//Stampo i numeri da 1 a 100
//stampo multipli di 3
//stampo multipli di 5 
//stampo i multipli comuni
const suono1 = "FIZZ!";
const suono2 = "BUZZ!";
const suono3 = "FIZZBUZZ!";
for(let i=0; i<100; i++){
    let num = i+1;
    let multipliDiTre = num % 3;
    if(multipliDiTre === 0){
        console.log(num+" è multiplo di 3: "+suono1);
    }
}