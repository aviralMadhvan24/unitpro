const input =document.getElementById("input");
const output =document.getElementById("output");
const toFaherenheit =document.getElementById("toFaherenheit");
const toCelsius =document.getElementById("toCelsius");
let temp;


function convert(){

if(toCelsius.checked){
   temp=Number(input.value);
   temp=temp*2.2046;
    output.textContent =temp.toFixed(4)+ " Kilograms";

}else if(toFaherenheit.checked){
    temp=Number(input.value);
    temp=temp/2.2046;
    output.textContent =temp.toFixed(4) +" Lbs"
}else{
   output.textContent="Please Select a Unit"
}
  
    
}