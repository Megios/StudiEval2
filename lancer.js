// JavaScript 

let lancer6=`
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1 "></button>
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
`
let lancer5 =`
  <div class="d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
  <div class="d-flex justify-content-around">
    <button class="deScore1"></button>
  </div>
  <div class="d-flex justify-content-around">     
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>     
`

let lancer4=`
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
`

let lancer3=`
  <div class="h-33 d-flex justify-content-end mr-3">
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-left ml-3">
    <button class="deScore1"></button>
  </div>
`

let lancer2=`
  <div class="d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>`

let lancer1=`
  <div class="d-flex justify-content-around">
    <button class="deScore1" type=disabled >
  </div>
`

const RollDice = (jetD) =>{
  jetD.point = Math.floor(Math.random()*6 +1);
  console.log(`dans la fonction point = : ${jetD.point}`)
  if (jetD.point===1){ 
    jetD.score = 0
    return jetD
  } else{
    jetD.score += jetD.point;
    return jetD
  }

}
class JetD{
  constructor(){
    this.score=0
    this.point=0
  }
  
}
$(document).ready(() => {
  alert('test')
  let jetD = new JetD();
  jetD.score =0;
  jetD.point = 0;
  const startB = document.getElementById('jouer');
  let deHTML = document.getElementById('deStyle');
  deHTML.innerHTML= '';
  jetD = RollDice(jetD)
  
  console.log(`Round actuel : ${jetD.score}`)
  startB.addEventListener('click', () => {
    console.log('buton presser')
    jetD = RollDice(jetD)
    console.log(`jetD.point = ${jetD.point}`)
    if (jetD.point ===1){
      deHTML.innerHTML=lancer1;
    }
    if (jetD.point ===2){
      deHTML.innerHTML=lancer2;
    }
    if (jetD.point ===3){
      deHTML.innerHTML=lancer3;
    }
    if (jetD.point ===4){
      deHTML.innerHTML=lancer4;
    }
    if (jetD.point ===5){
      deHTML.innerHTML=lancer5;
    }
    if (jetD.point ===6){
      deHTML.innerHTML=lancer6;
    }
    /*
    switch (jetD.point){
      case jetD.point === 1 : 
        deHTML.innerHTML()='';
        console.log(deHTML);
        deHTML.innerHTML=`${lancer1}`;
      case jetD.point ===2 : console.log('test2')
        deHTML.innerHTML=`${lancer2}`;
      case jetD.point ===3 : 
        console.log('test 3')
        deHTML.innerHTML=`${lancer3}`;
      case (jetD.point ===4) : console.log('test 4')
        deHTML.innerHTML=`${lancer4}`;
      case (jetD.point ===5) : console.log('test 5')
        deHTML.innerHTML=`${lancer5}`;
      case jetD.point ===6 : console.log('test 6')
        deHTML.innerHTML=`${lancer6}`;
    }
    */
    console.log('Done')
  });
})
