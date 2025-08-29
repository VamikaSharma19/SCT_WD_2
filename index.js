const display = document.getElementById('display');
const toggleBtn = document.querySelector('.toggle-btn');

function appendValue(val) {
  if(display.innerText === '0' || display.innerText.includes('=')) {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() { display.innerText = '0'; }
function deleteLast() { display.innerText = display.innerText.slice(0, -1) || '0'; }

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace('^','**'));
  } catch {
    display.innerText = 'Error';
  }
}

function factorial() {
  let n = parseInt(display.innerText);
  if(isNaN(n) || n < 0) return display.innerText = "Error";
  let f = 1;
  for(let i=1;i<=n;i++) f*=i;
  display.innerText = n + "! = " + f;
}

function sqrt() {
  let n = parseFloat(display.innerText);
  if(isNaN(n)) return display.innerText = "Error";
  display.innerText = "√" + n + " = " + Math.sqrt(n);
}

function inverse() {
  let n = parseFloat(display.innerText);
  if(isNaN(n) || n === 0) return display.innerText = "Error";
  display.innerText = "1/" + n + " = " + (1/n);
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  toggleBtn.innerText = document.body.classList.contains('dark') ? "Light" : "Dark";
}

document.addEventListener("keydown", (event) => {
const key = event.key;

if(!isNaN(key)) {               
  appendValue(key);
} 
else if(["+", "-", "*", "/", "%", "^", "."].includes(key)) {
  appendValue(key);
} 
else if(key === "Enter" || key === "=") {
  event.preventDefault();        
  calculateResult();
} 
else if(key === "Backspace") {
  deleteLast();
} 
else if(key === "Delete" || key === "Escape") {
  clearDisplay();
}
});