// JavaScript 


const RollDice = (points) =>{
  let point = Math.floor(Math.random()*6 +1);
  console.log(`Lancer actuel : ${point}`)
  if (point===1){ 
    points = 0
    return points
  } else{
    points+= point;
    return points
  }

}

// Test 
let jetD = RollDice(11)
console.log(`Round actuel : ${jetD}`)
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
*/