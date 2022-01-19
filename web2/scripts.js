//task1
document.getElementById('second').addEventListener("click", function () {
    let csecond = document.getElementById('second')
    let cfifth = document.getElementById('fifth')

    swap(second, fifth);
})

document.getElementById('fifth').addEventListener("click", function () {
    let csecond = document.getElementById('second')
    let cfifth = document.getElementById('fifth')

    swap(second, fifth)
})

function swap(csec, cfif) {
    let temp = csec.innerHTML
    csec.innerHTML = cfif.innerHTML
    cfif.innerHTML = temp
}

//task2
let R = 3;
let square = 5/2*(R)^2*Math.sin(72);
document.getElementById("square").innerHTML = "Penta square: "+ square;

//task3

 function reversClick()
 {
    let num = document.getElementById("reverseInput").value;
     let num1 = num; 
   num1 = num.split("").reverse().join("");
    let res = num + " ---> " + num1;

    
      document.cookie = "reversed=" + res;
      alert(res);
     {
          console.log(document.cookie);
     }
 } 

// function reverseNumber() {
//   let number = document.getElementById("reverseInput").value;
//   console.log("Input - " + number);
//   let result = number.split("").reverse().join("");
//   console.log("Content to show - " + result);

//   if (Number.parseInt(number) > 0) {
//       document.cookie = "reversed=" + result;
//       alert(result);
//   }

//   console.log(document.cookie);
// }

 function showCookie() {
  let lastResult = getCookie('reversed');
   console.log('lastResult ' + lastResult);
  lastResult = lastResult !== "" ? lastResult : "Nothing";
  
   if (lastResult !== "Nothing") {
      alert("Reversed: " + lastResult + "\nAfter pressing OK it will be deleted");
      location.reload;
   }

  console.log(document.cookie);
  console.log(lastResult);

   document.cookie = "reversed=";
   document.getElementById('reverseInput').style.visibility = 'visible';
}

 function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(let i = 0; i < ca.length; i++) {
     let c = ca[i];
    while (c.charAt(0) === ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) === 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }


//task4
function saveAndChangeColor() {
  let color = document.getElementById("inputColor").value;

  document.getElementById('main').style.borderColor = color;

  document.getElementById('first').style.borderColor = color;
  

  document.getElementById('second').style.borderColor = color;
  

  document.getElementById('third').style.borderColor = color;
  

  document.getElementById('fourth').style.borderColor = color;
  

  document.getElementById('fifth').style.borderColor = color;
  

  document.getElementById('sixth').style.borderColor = color;
  

  document.getElementById('seventh').style.borderColor = color;

  console.log(color);

  localStorage.setItem('color', color);

  changeColor();
}

function changeColor() {
  let color = localStorage.getItem('color');

  if (color === '') {
    return;
  }

  console.log('storage' + color);

  if (color === null || color === undefined) {
    return;
  }
  
}

//task5
function createForm() {
  const width = "125px";
  const display = 'block';
  const margin = '0 auto';
  const height = '20px';


  const classInput = document.createElement('select');
  classInput.setAttribute('onchange', 'selectTag()');

  const defaultOpt = document.createElement('option');
  defaultOpt.innerText = 'Choose an option';
  defaultOpt.setAttribute('disabled', 'true');
  defaultOpt.setAttribute('selected', 'selected');

  const first = document.createElement('option');
  first.innerText = 'first';
  const second = document.createElement('option');
  second.innerText = 'second';
  const third = document.createElement('option');
  third.innerText = 'third';
  const fourth = document.createElement('option');
  fourth.innerText = 'fourth';
  const fifth = document.createElement('option');
  fifth.innerText = 'fifth';
  const sixth = document.createElement('option');
  sixth.innerText = 'sixth';
  const seventh = document.createElement('option');
  seventh.innerText = 'seventh';

  classInput.appendChild(defaultOpt);
  classInput.appendChild(first);
  classInput.appendChild(second);
  classInput.appendChild(third);
  classInput.appendChild(fourth);
  classInput.appendChild(fifth);
  classInput.appendChild(sixth);
  classInput.appendChild(seventh);

  classInput.setAttribute('id', 'class');
  classInput.style.width = width;
  classInput.style.display = display;
  classInput.style.margin = margin;

  document.getElementById('fourth').appendChild(classInput);

}

function selectTag() {
  const width = "125px";
  const display = 'block';
  const margin = '0 auto';

  const prev = document.getElementById('tagSelect');
  if (prev !== null) prev.remove();
  if (document.getElementById('css') !== null) document.getElementById('css').remove();
  if (document.getElementById('btn1') !== null) document.getElementById('btn1').remove();
  if (document.getElementById('btn2') !== null) document.getElementById('btn2').remove();

  const elementClassName = document.getElementById('class').value;
  const elementOfClass = document.getElementById(elementClassName);

  console.log('Input class ' + elementClassName);


  for (let i = 0; i < elementOfClass.children.length; i++) {
    console.log(elementOfClass.children[i].tagName);
  }

  const elementsOfClass = elementOfClass.children;

  console.log('Elements ' + elementsOfClass); 

  const select = document.createElement('select');
  select.setAttribute('onchange', 'endFormCreation()');
  select.setAttribute('id', 'tagSelect');

  const tagNamesSet = new Set();

  for (let i = 0; i < elementsOfClass.length; i++) {
    tagNamesSet.add(elementsOfClass[i].tagName);
  }

  console.log(tagNamesSet);

  const defaultOpt = document.createElement('option');
  defaultOpt.innerText = 'Choose an option';
  defaultOpt.setAttribute('disabled', 'true');
  defaultOpt.setAttribute('selected', 'selected');

  select.appendChild(defaultOpt);

  for (let tagName of tagNamesSet.values()) {
    console.log(tagName);

    const el = document.createElement('option');
    el.innerText = tagName;

    select.appendChild(el);
  }

  select.style.width = width;
  select.style.display = display;
  select.style.margin = margin;

  document.getElementById('fourth').appendChild(select);
}

function endFormCreation() {
  if (document.getElementById('css') !== null) document.getElementById('css').remove();
  if (document.getElementById('btn1') !== null) document.getElementById('btn1').remove();
  if (document.getElementById('btn2') !== null) document.getElementById('btn2').remove();

  const width = "125px";
  const display = 'block';
  const margin = '0 auto';
  const height = '20px';

  const cssInput = document.createElement('input');
  cssInput.setAttribute('placeholder', 'Input css');
  cssInput.setAttribute('id', 'css');
  cssInput.style.width = width;
  cssInput.style.display = display;
  cssInput.style.margin = margin;

  const button1 = document.createElement('button');
  button1.setAttribute('value', '1');
  button1.setAttribute('id', 'btn1');
  button1.setAttribute('onclick', 'saveCss()');
  button1.style.width = width;
  button1.style.display = display;
  button1.style.margin = margin;
  button1.style.height = height;
  button1.innerText = '1';

  const button2 = document.createElement('button');
  button2.setAttribute('value', '2');
  button2.setAttribute('id', 'btn2');
  button2.setAttribute('onclick', 'deleteCss()');
  button2.style.width = width;
  button2.style.display = display;
  button2.style.margin = margin;
  button2.style.height = height;
  button2.innerText = '2';

  document.getElementById('fourth').appendChild(cssInput);
  document.getElementById('fourth').appendChild(button1);
  document.getElementById('fourth').appendChild(button2);
}


function saveCss() {
  const className = document.getElementById('class').value;
  const tag = document.getElementById('tagSelect').value;
  const css = document.getElementById('css').value;

  console.log('tag ------' + tag);
  console.log('css ------' + css);


  const rule = '.' + className + ' ' + tag + '{' + css +';}';
  const style = document.getElementById('style');

  style.innerText = style.innerText + rule;

  let rules = Number.parseInt(localStorage.getItem('rules'));
  rules++;

  localStorage.setItem('rule' + rules, rule);
  localStorage.setItem('rules', rules);

  document.head.appendChild(style);

  console.log(rules);
}

function deleteCss() {
  
  let rules = Number.parseInt(localStorage.getItem('rules'));

  for(let i = 1; i <= rules; i++) {
    localStorage.removeItem('rule' + i);
  }
  
  localStorage.setItem('rules', 0);

  document.getElementById('style').innerText = '';
}

function setCustomCss() {
  const style = document.createElement('style');
  style.setAttribute('id', 'style');
  document.head.appendChild(style);


  if (localStorage.getItem('rules') === null) {
    localStorage.setItem('rules', 0);
  }

  if (Number.parseInt(localStorage.getItem('rules')) < 1) {
    return;
  }
  
  let rules = Number.parseInt(localStorage.getItem('rules'));

  for(let i = 1; i <= rules; i++) {
    style.innerText += localStorage.getItem('rule' + i);
  }
}


 function onLoad() {
   setCustomCss();
   changeColor();
   showCookie();
 }