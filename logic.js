
function getOtp(){
let length = Number(document.getElementById('i1').value);

 otp = Math.trunc((Math.random()*10**length) + (10**(length-1)));
 if(otp>=10**length){otp = (10**(length-1))-otp;
 }
 if(length<1 || length>7){
    document.getElementById('p1').style.display = 'block';
    document.getElementById('p1').style.color = 'red';
     document.getElementById('p1').innerHTML = ` Minimum length of otp is 1 
     & Maximum length of otp is 7`;
     disableAll();
}else{
 document.getElementById('p1').style.display = 'block';
document.getElementById('p1').innerHTML = `Your One Time Password is ${otp}`;
enableAll();
}
event.preventDefault();
}

//console.log(`Your One Time Password is ${otp}`);
function disableAll() {
  document.getElementById("i2").disabled = true;   // disable input
  document.getElementById("b2").disabled = true;  // disable button
}
 function enableAll() {
  document.getElementById("i2").disabled = false;  // enable input
  document.getElementById("b2").disabled = false; // enable button
}

function verifyOtp(){
    document.getElementById('p2').style.display = 'block';
    
entered_val = Number(document.getElementById('i2').value);

if(otp===entered_val){
    document.getElementById('p2').style.color = 'green';
    document.getElementById('p2').innerHTML = `OTP verified!!`;
}else{
     document.getElementById('p2').style.color = 'red';
     document.getElementById('p2').innerHTML = `OTP Not  verified!!`;

}
event.preventDefault();}


