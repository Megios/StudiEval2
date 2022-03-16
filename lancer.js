// JavaScript 
let base = `
  <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" fill="currentColor" class="bi bi-yin-yang m-auto" viewBox="0 0 16 16">
    <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"/>
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"/>
  </svg>
`
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
    this.player=1
  }
  reset(){
    this.score=0
    this.point=0
  }
  switchP(){
    if (this.player===1) this.player=2;
    else this.player=1;
  }
  
}
$(document).ready(() => {
  alert('Bienvenu')
  let jetD = new JetD();
  jetD.score =0;
  jetD.point = 0;
  const startB = document.getElementById('jouer');
  const reset = document.getElementById('reset');
  const player1=document.getElementById('scoreP1');
  const player2=document.getElementById('scoreP2');
  let tourP= document.getElementById('tourP');
  let deHTML = document.getElementById('deStyle');
  deHTML.innerHTML= base
  startB.addEventListener('click', () => {
    jetD = RollDice(jetD)
    switch (jetD.point){
      case 1: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer1;
          
        }, 1000);
        break;
      }
      case 2: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer2;
        }, 1000)
         break;
      }
      case 3: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer3;
        }, 1000);
        break;
      }
      case 4: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer4;
        }, 1000);
        break;
      }
      case 5: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer5;
        }, 1000);
        break;
      }
      case 6: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer6;
        }, 1000); break;
      }
    }
    console.log(`Round actuel : ${jetD.score}`)
    setTimeout(() => {
      if (jetD.player===1){
        player1.innerHTML=jetD.score;
        if (jetD.point===1) {
          jetD.switchP();
          tourP.innerHTML= 'Player 2'
        }
      } else{
        player2.innerHTML=jetD.score;
        if (jetD.point===1) {
          jetD.switchP();
          tourP.innerHTML= 'Player 1';
        }
      }
    }, 1000);
  });
  reset.addEventListener('click', () => {
    deHTML.innerHTML=base;
    jetD.reset();
    console.log(`Round actuel : ${jetD.score}`)
  })
})
