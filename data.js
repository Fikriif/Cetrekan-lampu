function saklar(a, l) {
    let lampu1 = document.getElementById("lampu 1");
    let lampu2 = document.getElementById("lampu 2");
    let lampu3 = document.getElementById("lampu 3");

   if(a == "on"){
      if(l == 1){
        lampu1.src = "assets/image/on.gif";
      }
      if(l == 2){
        lampu2.src = "assets/image/on.gif";
      }
      if(l == 3){
        lampu3.src = "assets/image/on.gif";
      }
   }
   if(a == "off") {
    if(l == 1){
        lampu1.src = "assets/image/off.gif";
      }
    if(l == 2){
        lampu2.src = "assets/image/off.gif";
      }
    if(l == 3){
        lampu3.src = "assets/image/off.gif";
      }
   }
  }