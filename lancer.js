// JavaScript 


const RollDice = (points) =>{
  let point = math.floor(Math.random()*6);
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
console.log(jetD)
