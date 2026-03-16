console.log("zika em escondidão isso aqui");//tipo de saída "silencioso"


                         //oque indica a separação no JS é o ponto e vírgula (";")     //java ignora epaços também

                          //isso são funções separadas por bloco.

                          //Aspas indica texto, senão indica número/valor
      //JS é sensível a Letras maiúsculas e minúsculas, CUIDADO!

document.getElementById("texto").textContent = "Employee Registration";

function verificar(){
let nome = document.getElementById("nome").value;
let date = document.getElementById("date").value;
let email = document.getElementById("email").value;
let number = document.getElementById("number").value;
let file = document.getElementById("file").value;
let algumVazio = (date === "" || nome === "" || nome === " " || email === ""|| number ===""|| file === "");
let onlyNumber = /[a-z]/.test(number);
let onlyNumber2 = /[A-Z]/.test(number);
let z = document.getElementById("teste");
let x = document.getElementById("test2");
if (algumVazio){
  z.textContent = "Make sure all files are filed up";
  z.style.color = "red";
} else{
  z.textContent = "";
}
if (onlyNumber || onlyNumber2 || onlyNumber && onlyNumber2){
   x.textContent = "Make sure to enter only numbers here.";
   x.style.color = "red";
} else {
  x.textContent = ""
}
}














                     
