// JavaScript 


// Test 

/*


lancer(6).innerHTML(`
  <div class=d-flex flex-column justify-content-around deFormat">
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
        </div>
        `
)
lancer(5).innerHTML(`
  <div class=d-flex flex-column justify-content-around deFormat">
            <div class="h-33 d-flex justify-content-around">
              <button class="deScore1"></button>
              <button class="deScore1"></button>
            </div>
            <div class="h-33 d-flex justify-content-around">
              <button class="deScore1"></button>
            </div>
            <div class="h-33 d-flex justify-content-around">
              
              <button class="deScore1"></button>
              <button class="deScore1"></button>
            </div>
        </div>
        `
)
lancer(4).innerHTML(`
  <div class=d-flex flex-column justify-content-around deFormat">
            <div class="h-33 d-flex justify-content-around">
              <button class="deScore1"></button>
              <button class="deScore1"></button>
            </div>
            <div class="h-33 d-flex justify-content-around">
              
              <button class="deScore1"></button>
              <button class="deScore1"></button>
            </div>
        </div>
        `
)
lancer(3).innerHTML(`
  <div class=d-flex flex-column justify-content-around deFormat">

            <div class="h-33 d-flex justify-content-end mr-3">
            <button class="deScore1"></button>
          </div>
          <div class="h-33 d-flex justify-content-around">
            <button class="deScore1"></button>
          </div>
          <div class="h-33 d-flex justify-content-left ml-3">
            <button class="deScore1"></button>
          </div>

        </div>
        `
)

let lancer2='
  <div class="d-flex justify-content-around">
     <button class="deScore1"></button>
     <button class="deScore1"></button>
  </div>'
  
)

Au click si 1 :
`*/
const RollDice = (jetD) =>{
  jetD.point = Math.floor(Math.random()*6 +1);
  jetD.point=1
  console.log(`Lancer actuel : ${jetD.point}`)
  if (jetD.point===1){ 
    jetD.points = 0
    return jetD
  } else{
    jetD.points += point;
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
  let jetD = new JetD();
  jetD.score =0;
  jetD.point = 0;
  const button = $("jouer");
  let deHTML = $("deStyle");
  deHTML.innerHTML= '';
  let lancer1=`
    <div class="d-flex justify-content-around">
      <button class="deScore1" type=disabled >
    </div>
  `
  jetD = RollDice(jetD)
  switch (jetD.point) {
    case 1 : deHTML.innerHTML=`${lancer1}`;
    //case 2 : deHTML.innerHTML(`${lancer(2)}`);
    //case 3 : deHTML.innerHTML(`${lancer(3)}`);
    //case 4 : deHTML.innerHTML(`${lancer(4)}`);
    //case 5 : deHTML.innerHTML(`${lancer(5)}`);
    //case 6 : deHTML.innerHTML(`${lancer(6)}`);
  }
  console.log(`Round actuel : ${jetD.score}`)
  /*let jetdD=RollDice(score);
  const deHTML = $("deStyle");
  switch (jetD) {
    case 1 : deHTML.innerHTML(`${lancer(1)}`);
    case 2 : deHTML.innerHTML(`${lancer(2)}`);
    case 3 : deHTML.innerHTML(`${lancer(3)}`);
    case 4 : deHTML.innerHTML(`${lancer(4)}`);
    case 5 : deHTML.innerHTML(`${lancer(5)}`);
    case 6 : deHTML.innerHTML(`${lancer(6)}`);
  }*/
 button.on('click', () => {
   RollDice(score,0);
  })
})
