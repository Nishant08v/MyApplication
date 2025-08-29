
function getOtp(){
let length = Number(document.getElementById('i1').value);
 otp = Math.trunc((Math.random()*10**length) + (10**(length-1)));
 if(otp>=10**length){otp = (10**(length-1))-otp;
 }
 document.getElementById('p1').style.display = 'block';
document.getElementById('p1').innerHTML = `Your One Time Password is ${otp}`;
event.preventDefault();
}

//console.log(`Your One Time Password is ${otp}`);

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