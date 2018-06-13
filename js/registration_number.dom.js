var inputName = document.querySelector('.inputName');
var AddBtnElement = document.querySelector('.AddBtn');
var selectElement = document.querySelector('select');
var registrationElement = document.querySelector('.registration');
var display = document.querySelector('.display');
var counter = document.querySelector('.count');
var clear = document.querySelector('.clear');
var message = document.querySelector('.message');

var storedregs = localStorage.getItem('Regs') ? JSON.parse(localStorage.getItem('Regs')) : {};

var callReg = Registration(storedregs);
// sto.innerHTML = callReg.count();

function createReg(registrationNum) {
  var li = document.createElement("li");
  li.innerText = registrationNum;
  display.appendChild(li);
}
function RegNumber() {
// message.innerHTML = '';
  var inputValue = inputName.value.trim().toUpperCase();
   inputName.value = '';
  if(callReg.regKey(inputValue)){
    localStorage.setItem('Regs', JSON.stringify(callReg.storedMap()));
    createReg(inputValue);
    // counter.innerHTML = callReg.count();
     message.innerHTML = 'added';
 }
 else {
       var map = Object.keys(callReg.storedMap());
       map.indexOf(inputValue)!=-1 ?  message.innerHTML = "RegNum already exist" :message.innerHTML = "invalid RegNum";

       if (message !=='') {
         setTimeout(() => message.innerHTML='',3000)
       }
     }
}
selectElement.addEventListener('change', function() {
  display.innerHTML = '';
  var town = selectElement.value;
  var filteredRegs = callReg.filt(town);
  for (var i = 0; i < filteredRegs.length; i++) {
  createReg(filteredRegs[i]);
  }
});

AddBtnElement.addEventListener('click', RegNumber);

function clearButton() {
  localStorage.clear();
  location.reload();
}
window.addEventListener('load', function() {
  if (storedregs !== undefined) {
    var store = Object.keys(storedregs);
    for (var i = 0; i < store.length; i++) {
      console.log(store[i]);
      var li = document.createElement("li");
      li.innerText = store[i];
      display.appendChild(li);
    }
  }
})
clear.addEventListener('click', clearButton);
