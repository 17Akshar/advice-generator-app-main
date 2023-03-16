var dice_btn = document.getElementById("dice")
var advice_para = document.getElementById("advice-content")
var advice_no = document.getElementById("advice-no")

dice_btn.addEventListener("click",change)

function change(){
  fetch("https://api.adviceslip.com/advice").then(response=>response.json()).then(data=>{
    advice_no.innerHTML = data.slip.id;
    advice_para.innerHTML = data.slip.advice
  })
}