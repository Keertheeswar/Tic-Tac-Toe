let currentPlayer = "x"
const buttonClicked = (e) => {
    e.target.innerText = currentPlayer
    e.target.disabled = true
    
    if (isWon()) {
        
        alert(currentPlayer + " wins!");
        console.log(`${currentPlayer} won!`)
        reset()
      } else if (isDraw()) {
        
        alert("It's a draw!");
        console.log(`Match is draw!`)
        reset()
      } else {
        togglePlayer();
      }
    
}
const reset = ()=>{
window.location.reload()
}

const isWon =()=>{
   let b1=document.getElementById("b-1").innerText
   let b2=document.getElementById("b-2").innerText
   let b3=document.getElementById("b-3").innerText
   let b4=document.getElementById("b-4").innerText

   let b5=document.getElementById("b-5").innerText
   let b6=document.getElementById("b-6").innerText
   let b7=document.getElementById("b-7").innerText
   let b8=document.getElementById("b-8").innerText
   let b9=document.getElementById("b-9").innerText

   if(b1===currentPlayer&&b2===currentPlayer&&b3===currentPlayer){
    return true
   }if(b1===currentPlayer&&b4===currentPlayer&&b7===currentPlayer){
    return true
   }
   if(b1===currentPlayer&&b5==currentPlayer&&b9===currentPlayer){
    return true
   }if(b3===currentPlayer&&b5==currentPlayer&&b7===currentPlayer){
    return true
   }if(b4===currentPlayer&&b5==currentPlayer&&b6===currentPlayer){
    return true
   }if(b7===currentPlayer&&b8==currentPlayer&&b9===currentPlayer){
    return true
   }if(b3===currentPlayer&&b6==currentPlayer&&b9===currentPlayer){
    return true
   }if(b2===currentPlayer&&b5==currentPlayer&&b8===currentPlayer){
    return true
   }else{
    return false
   }
   
}

const isDraw = () => {
    if (isWon()) {
      return false;
    }
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
      if (button.innerText === "") {
        return false;
      }
    }
    return true;
  };

  const togglePlayer = () => {
    currentPlayer = currentPlayer === "x" ? "o" : "x";
  }


const addAllEventListener = (button) => {
    button.addEventListener('click', buttonClicked)
}

document.querySelectorAll('button').forEach(addAllEventListener)

