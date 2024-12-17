
const input =document.getElementById("input");
const output =document.getElementById("output");
const toFaherenheit =document.getElementById("toFaherenheit");
const toCelsius =document.getElementById("toCelsius");
let temp;


function convert(){

if(toCelsius.checked){
   temp=Number(input.value);
   temp=(temp-32)*5/9;
    output.textContent =temp.toFixed(1) + '°C'

}else if(toFaherenheit.checked){
    temp=Number(input.value);
    temp=temp*9/5 +32;
    output.textContent =temp.toFixed(1) + '°F'
}else{
   output.textContent="Please Select a Unit"
}
  
    
}