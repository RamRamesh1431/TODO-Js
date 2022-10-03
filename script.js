//  popup1

function popup(ob) {
  let pop = document.getElementsByClassName("popuplist")[0];
  pop.style.visibility = "visible";
  let con = document.getElementsByClassName("container")[0];
  con.classList.add("active");
  let con2 = document.getElementsByClassName("container2")[0];
  con2.classList.add("active");
}
function cl() {
  let pop1 = document.getElementsByClassName("popuplist")[0];
  pop1.style.visibility = "hidden";
  let pop2 = document.getElementsByClassName("popuplist2")[0];
  pop2.style.visibility = "hidden";
  let con = document.getElementsByClassName("container")[0];
  con.classList.remove("active");
  let con2 = document.getElementsByClassName("container2")[0];
  con2.classList.remove("active");
}
function nolists() {
  let divs = document.getElementsByClassName("listdiv");
  if (divs.length > 0) {
    document.getElementById("no").style.visibility = "hidden";
  }
}
setInterval(nolists, 100);

// list adding

function add() {
  let x = Date.now();
  let pop1 = document.getElementsByClassName("popuplist")[0];
  pop1.style.visibility = "hidden";
  let con = document.getElementsByClassName("container")[0];
  con.classList.remove("active");
  let con2 = document.getElementsByClassName("container2")[0];
  con2.classList.remove("active");
  let sel = document.getElementsByTagName("section")[0];
  let div = document.createElement("div");
  div.setAttribute("class", x);
  let a1 = document.createElement("a");
  a1.setAttribute("class", "heading");
  let a = document.createElement("a");
  let i = document.createElement("i");
  let a2 = document.createElement("a");
  let i2 = document.createElement("i");
  // a1.setAttribute("href", "second.html");
  a1.setAttribute("onclick", "values(this)");
  a1.innerText = document.getElementsByClassName("input1")[0].value;
  div.classList.add("listdiv");
  i.classList.add("fa");
  i.classList.add("fa-plus-circle");
  i2.classList.add("fa-solid");
  i2.classList.add("fa-trash-can");
  a2.classList.add("delete");
  a2.setAttribute("onclick", "remove(this)");
  i.ariaHidden = "true";
  a.setAttribute("onclick", "popup2(this)");
  a.classList.add(x);
  a.classList.add("plus");
  a.appendChild(i);
  a2.appendChild(i2);
  div.appendChild(a1);
  console.log(a.classList[0]);
  div.appendChild(a);
  div.appendChild(a2);
  div.classList.add("listdiv");
  sel.appendChild(div);
}

//popup2

function popup2(ob) {
  let pop1 = document.getElementsByClassName("popuplist2")[0];
  pop1.style.visibility = "visible";
  let con = document.getElementsByClassName("container")[0];
  con.classList.add("active");
  let con2 = document.getElementsByClassName("container2")[0];
  con2.classList.add("active");
  pop1.setAttribute("id", ob.parentElement.classList[0]);
  console.log(pop1.id);
}

function listadd(obj) {
  let pop1 = document.getElementsByClassName("popuplist2")[0];
  pop1.style.visibility = "hidden";
  let con = document.getElementsByClassName("container")[0];
  con.classList.remove("active");
  let con2 = document.getElementsByClassName("container2")[0];
  con2.classList.remove("active");
  let div = document.getElementsByClassName("listdiv");
  let divc1 = document.createElement("div");
  divc1.setAttribute("class", "todolistContainer");
  let divc = document.createElement("div");
  divc.setAttribute("class", "todolist");
  let p = document.createElement("p");
  p.innerText = document.getElementsByClassName("input2")[0].value;
  let button = document.createElement("button");
  button.setAttribute("onClick", "done(this)");
  button.innerText = "markdone";
  divc1.appendChild(divc);
  p.appendChild(button);
  divc.appendChild(p);
  for (i = 0; i < div.length; i++) {
    console.log(div[i].classList[0]);
    if (obj.parentElement.parentElement.id == div[i].classList[0]) {
      div[i].appendChild(divc1);
      break;
    }
  }
  console.log(div[0].value);
}

function done(ob) {
  ob.parentElement.style.textDecoration = "line-through";
  ob.parentElement.style.textDecorationColor = "red";
  ob.remove();
}
function remove(ob) {
  ob.parentElement.remove();
}
function values(ob) {
  ob.parentElement.parentElement.parentElement.style.display = "none";
  let con2 = document.getElementsByClassName("container2")[0];
  con2.style.visibility = "visible";
  let box2 = document.getElementsByClassName("box2")[0];
  box2.innerText = ob.innerText;
  let sec2 = document.getElementsByClassName("con2section")[0];
  con2.setAttribute("id", ob.parentElement.classList[0]);
  console.log(con2.classList);
  let div = document.getElementsByClassName(ob.parentElement.classList[0])[0];
  sec2.appendChild(div);
}
function content(ob) {
  let con = document.getElementsByClassName("container")[0];
  con.style.display = "flex";
  let con2 = document.getElementsByClassName("container2")[0];
  con2.style.visibility = "hidden";
  console.log(ob.parentElement.parentElement.parentElement.id);
  let div = document.getElementsByClassName(
    ob.parentElement.parentElement.parentElement.id
  )[0];
  let sec = document.getElementsByTagName("section")[0];
  sec.appendChild(div);
}
