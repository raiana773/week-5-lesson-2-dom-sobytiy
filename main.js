//  ! События- это сигнал браузера о том, что что-то произошло. То есть, если пользователь совершил какое-либо действие,
// ! то браузер сообщает нам об этом. И мы на это действие воспроизводим какаие-либо команды.
// ! В JS обработки события помогают проследить, когда произошло событие, и сразу же выполнить определенную команду
// ! События мыши:
// ? Contextmenu - клик правой кнопкой мыши
// ? Mouseover - на элемент наводится мышь
// ? mousedown,mouseup - кнопку мыши нажали или отжали
// ? Mousemove - при движении мыши

// ! События на элементах управлени: это все что связано с  формами
// ? Submit - посетитель отправил форму
// ? Focus - получение фокуса на элементе
// ? Blur - потеря фокуса

// ! Клавиатурные события:
// ? Keydown - посетитель нажимает на клавишу
// ? Keyup - посетитель отпускает клавишу

// ! События документа:
// ? DOMContentLoaded - когда HTML загружен и обработон, DOM документа полностью помтроен и доступен

// ? создать свой обработчик событий
// function handler() {
//   alert("Thank you!");
// }

// ? addEventListener - это наш слушатель событий, он присоединяет обработчик событий к опредеоенному элементу
// let btn = document.getElementById("btn");
// btn.addEventListener("click", handler);
// btn.addEventListener("click", handler2);

// function handler() {
//   alert("Thank you!");
// }

// function handler2() {
//   alert("Thank you again!");
// }

// ?   можно писать и так function это у нас анонимная

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     console.log("Hello Makers!");
// });

// ? можно и так стрелочным функцием
// btn.addEventListener('click', () => {
//     console.log('Hello Bootcamp!');
// })

// ? можно и так сразу обратиться к типу события
// btn.onclick = () => alert('Hello!')

// ? можно убирать обработчики событий - removeEventListener
// btn.addEventListener('click', handler);
// btn.addEventListener('click', handler2);

// function handler(){
//     alert('Thank you!')
// }

// function handler2(){
//     alert('Thank you again!')
// }

// btn.removeEventListener('click', handler);

// ! Для начала мы оброщяемся к элементу,  к которому хотим прикрепить событие,
// ! затем у этого элемента вызываем addEventListener- слушатель событий, в которой мы передаем 3 аргумента
// ! 1 event - тип события(за каким имено событием мы хотим проследить, будет нажатие кнобки, движение мыши и так далее)
// ! 2 handler - это обработчик событий(то есть это функция которя сработает при событий, которая мы передаем первым аргументом)
// ! 3 не обязатольный аргумент [phase,фаза]
// ! element.addEventListener (event, handler,[phase])

// ! Виды события
// let h1 = document.querySelector("h1");
// let inp = document.querySelector("#inp");
// inp.addEventListener("change", function (event) {
//   console.log(event.target.value);
//   // ? target -показывает на каком элементе событие, является свойством нашего объекта события
//   h1.innerText = event.target.value; // ? пишем только потом отображается на нашей странице
//   event.target.value = ""; // ? это что бы он очищал нашу страницу
// });
// console.log(h1, inp);

// let h1 = document.querySelector("h1");
// let inp = document.querySelector("#inp");
// inp.addEventListener("input", function (event) {
// ? input - когда мы пишем сразу автоматически отображается на нашей странице
//   h1.innerText = event.target.value;
//   console.log(event); // ? каждый раз когда мы меняем содержимое input то у нас страбатываем этот наш обработчик событий
// });

// let h1 = document.querySelector("h1");
// let inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function (event) {
// ? keydown - срабатывает когда мы нажимает на каку-то клавищу, можем посмотреть в свойстве key какуб клавищу он нажал
// ? h1 обратится  к свойству innerText и менять содержимое key
//   h1.innerText = event.key;     // ? key каждый раз потом у нас будет меняться буква
//   console.log(event);
// });

// let btn = document.querySelector("#btn");
// let inp = document.querySelector("#inp");
// let container = document.querySelector("#container");
// // следующим образом мы будем создавать новый элемент и закидовать в <div id="container"></div>
// let addElemToContainer = function () {
// console.log(inp.value);
// let newElem = document.createElement("div");
// if (!inp.value) return;
// newElem.innerText = inp.value;
//// нам нужно добавть этот новый элемент в наш контейнер в скобках передаем новый элемент
// container.append(newElem);
// // но наш инпут не очищяется сделаем так
// inp.value = "";
// };
// // оброщяем на нашей кнопке
// btn.addEventListener("click", addElemToContainer);
// inp.addEventListener("change", addElemToContainer); // ? через энтер не нажимая на кнопку клик смогли добавить наш элемент  в контейнер

// document.addEventListener("mousemove", function (event) {
//   // console.log("mose");
//   // console.log(event);
//   console.log(`X=${event.clientX} Y=${event.clientY}`); // ? здес в кавычках координаты будем указывать
// });

// ? исскуственное событие
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");

// btn1.addEventListener("click", function () {
//   alert("BTN 1 clicked");
// });
// //  мы можем создать исскуственное событие (когда перезагружаем нашу страницу )
// let event = new Event("click"); // ? new Event- создаем исскуственное событие (перезагрузить страницу и return сам выйдет)
// // btn1.dispatchEvent(event);  //  dispatchEvent - вызывает это усскуственное событие в (event) передаем наше исскуственное событие
// // можно и другим способом создать исскуственное событие
// btn2.addEventListener("click", () => {
//   btn1.dispatchEvent(event);
// });

// ? это такой тип события когда наша страница html странница только подгружена и как бы готова для работы
// document.addEventListener("DOMContentLoaded", () => {
//   let btn1 = document.querySelector("#btn1");
//   console.log(btn1);
// });

// ! Разбор
// ! DOM events - дом события
// let btnChange = document.getElementById('btn-change')
// function changeColor (){
//     document.body.style.backgroundColor = 'red'
// }
// btnChange.addEventListener('click', changeColor)

// let btnDark = document.querySelector('#btn-dark')
// let btnLight = document.querySelector('#btn-light')
// console.log(btnDark, btnLight)
// btnLight.style.display = 'none'
// function changeToDark(){
//     document.body.style.backgroundColor = 'blue'
//     btnDark.style.display = 'none'
//     btnLight.style.display = 'block'
// }
// btnDark.addEventListener('click', changeToDark)

// function changeToLight(){
//     document.body.style.backgroundColor = 'pink'
//     btnLight.style.display = 'none'
//     btnDark.style.display = 'block'
// }
// btnLight.addEventListener('click',changeToLight)

// document.addEventListener('contextmenu', function() {
//     console.log('context menu event');
// })

// let imgZoom = document.getElementById("img-zoom")
// console.log(imgZoom);

// imgZoom.addEventListener("mouseover", function (){
//     console.log("mouseover event!");
//     imgZoom.style.width = "200px"
//     imgZoom.style.transition = "2s"
// }) // ? при наведении на фото

// imgZoom.addEventListener("mouseout", function (){
//     console.log("mouseout event!");
//     imgZoom.style.width = "800px"
// }) // ? когда наведение за фото

// document.addEventListener('mousemove', function (event) {
//     console.log(event.clientX, event.clientY);
// })

// !!!!!!!!!
// let inpLogin = document.getElementById('inp-Login')
// let inpPassword = document.getElementById('inp-Password')
// let btnLogin = document.getElementById('btn-Login')
// let iconShowPassword = document.getElementById('show-password')
// let iconHidePassword = document.getElementById('hide-password')

// iconHidePassword.style.display = 'none'

// console.log(inpLogin,inpPassword,btnLogin,iconShowPassword,iconHidePassword);
// iconShowPassword.addEventListener('click', function(){
//     inpPassword.setAttribute('type', 'text')
//     iconShowPassword.style.display = 'none'
//     iconHidePassword.style.display = 'inline'   // ? inline - строчный
// })
// iconHidePassword.addEventListener('click', function(){
//     inpPassword.setAttribute('type', 'password')
//     iconHidePassword.style.display = 'none'
//     iconShowPassword.style.display = 'inline'
// })

// ? что бы он показывал написанный пароль  в консоль
// btnLogin.addEventListener("click", function () {
//   // console.log(inpLogin.value);
//   // console.log(inpPassword.value)
//   if (inpLogin.value.trim() === "" || inpPassword.value.trim() === "") {
//     alert("заполните поля!");
//     return;
//   }
//   if (inpPassword.value.length < 8 || inpPassword.value.length > 15) {
//     alert("пароль должен содержать больше 8 символов и меньше 15");

//     return;
//   }
//   let newUser = {
//     Login: inpLogin.value,
//     password: inpPassword.value,
//     id: Date.now(),
//     createdAt: new Date(),
//   };
//   console.log(newUser);
//   inpLogin.value = "";
//   inpPassword.value = "";
// });

// inpLogin.addEventListener('focus', function() {
//     console.log('focus event!');
//     inpLogin.setAttribute('placeholder', 'Start typing...')
// })

// inpLogin.addEventListener("blur", function () {
//   console.log("blur event!");
//   inpLogin.setAttribute("placeholder", "Login");
// });

// !!!!!!!!!!!

// ! разбвор
// let greenBlock = document.getElementById("green-block");
// greenBlock.style.width = "100px";
// greenBlock.style.height = "100px";
// greenBlock.style.backgroundColor = "green";
// greenBlock.style.transition = "1s";
// // console.log(greenBlock);
// document.addEventListener("keydown", function (e) {
//   console.log(e);
//   let marginLeft = parseInt(getComputedStyle(greenBlock).marginLeft);
//   let marginTop = parseInt(getComputedStyle(greenBlock).marginTop);
//   // console.log(marginLeft);
//   if (e.code === "ArrowRight") {
//     greenBlock.style.marginLeft = `${marginLeft + 100}px`;
//   }
//   if (e.code === "ArrowLeft") {
//     greenBlock.style.marginLeft = `${marginLeft - 100}px`;
//   }
//   if (e.code === "ArrowDown") {
//     greenBlock.style.marginTop = `${marginTop + 100}px`;
//   }
//   if (e.code === "ArrowUp") {
//     greenBlock.style.marginTop = `${marginTop - 100}px`;
//   }
// });

// ! новый див
// let redBlock = document.getElementById("red-block")
// // console.log(redBlock);
// redBlock.style.backgroundColor = "red"
// redBlock.style.width = "100px"
// redBlock.style.height = "100px"
// redBlock.style.position = 'absolute'
// redBlock.style.left = '0px'
// redBlock.style.top = '0px'
// redBlock.style.borderRadius = '100px'
// let leftPx = 0;
// let topPx = 0;
// let isMouseDown = false;

// redBlock.addEventListener("mousedown", function (e){
//     // console.log(e);
//     // console.log(leftPx, topPx);
//     isMouseDown = true

// })
// document.addEventListener('mousemove', function(e) {  // ? двидается но не отпускается
//     // console.log(e);
//     console.log(isMouseDown);
//     leftPx = e.clientX
//     topPx = e.clientY
//     if(isMouseDown) {
//         redBlock.style.left = `${e.clientX}px`
//         redBlock.style.top = `${e.clientY}px`
//     }
// })
// document.addEventListener('click', function(){   // ? перетаскивает и отпускает
//     isMouseDown = false

// })

// ! новый див
// let sizeBlock = document.querySelector('#size-block')
// console.log(sizeBlock);
// window.addEventListener('resize', function(e) {
//     sizeBlock.innerHTML = `<h1>height: ${e.target.screen.height} width: ${e.target.screen.width}</h1>`   // ? вывел на экран размеры с текстами
//     // console.log(e.target.screen.width);
//     // console.log(e.target.screen.height);
// })

// // ! работаем с css и html
// let btnCloseModal = document.getElementById('btn-close-modal')
// let modal = document.getElementById('modal')
// // console.log(btnCloseModal);
// // console.log(modal);
// let btnOpenModal = document.getElementById('btn-open-modal')
// console.log(btnOpenModal);

// btnCloseModal.addEventListener('click', function (){
//     modal.style.display = 'none'
// })

// btnOpenModal.addEventListener('click', function(){
//     modal.style.display = 'flex'
// })

// ! с верху есть такое же

// let users =[]

// let inpLogin = document.getElementById("inp-login")
// let inpPassword = document.getElementById("inp-password")
// let btnLogin = document.getElementById("btn-login")
// let iconShowPassword = document.getElementById("show-password")
// let iconHidePassword = document.getElementById("hide-password")

// iconHidePassword.style.display = 'none'
// // console.log(inpLogin, inpPassword, btnLogin,iconShowPassword);
// iconShowPassword.addEventListener("click", function (){
//     inpPassword.setAttribute("type", "text")
//     iconShowPassword.style.display = 'none'
//     iconHidePassword.style.display = 'inline'
// })

// iconHidePassword.addEventListener("click", function (){
//     inpPassword.setAttribute("type", "password")
//     iconHidePassword.style.display = 'none'
//     iconShowPassword.style.display = 'inline'
// })

// btnLogin.addEventListener("click", function (){
//     // console.log(inpLogin.value)
//     // console.log(inpPassword.value)
//     if(inpLogin.value.trim() === "" || inpPassword.value.trim() === ""){
//         alert("заполните поля!")
//         return
//     }
//     if(inpPassword.value.length < 8 || inpPassword.value.length > 15){
//         alert("пароль должен содержать больше 8 символов и меньше 15")
//         return
//     }
//     let newUser = {
//         login: inpLogin.value,
//         password: inpPassword.value,
//         id: Date.now(),
//         createdAt: new Date()
//     }
//     // console.log(newUser);
//     users.push(newUser)
//     // console.log(users);
//     render()
//     inpLogin.value = ""
//     inpPassword.value = ""
// })

// let userList = document.getElementById('users-list')
// // console.log(userList);
// function render (){   // ? будет отвечать за отоброжение
//     userList.innerHTML = ''
//     users.forEach((user) => {
//         let newDiv = document.createElement('div')
//         newDiv.innerHTML = `<span>${user.login}</span>`
//         userList.append(newDiv)   // ? добовляет
//     })
// }

// ! CRUD -> Create, Read, Update, Delete

// let inp = document.getElementById('inp')
// console.log(inp);
// inp.addEventListener('input', function (e){
//     console.log(e.target.value);
// })

// let inp = document.getElementById('inp')
// inp.addEventListener('change', function (e){
//     console.log(e.target.value);
// })

// !
// document.addEventListener('click', function(e) {
//     // console.log(e.target);
//     // alert(e.target.id)
//     // alert(e.target.className)
//     // e.target.remove()   // ? удоляет
//     let answer = confirm('вы хотите удалить блок?')
//     // console.log(answer);
//     if(answer) {
//         e.target.remove()
//     }else{
//         alert('вы отменили действие')
//     }

// })

let car1 = document.getElementById("car-1");
let car2 = document.getElementById("car-2");
// console.log(car1, car2);
car1.style.transition = "1s";
car2.style.transition = "1s";

document.addEventListener("keydown", function (e) {
  // console.log(e)
  let marginLeftCar1 = parseInt(getComputedStyle(car1).marginLeft);
  // console.log(marginLeftCar1)
  let marginLeftCar2 = parseInt(getComputedStyle(car2).marginLeft);
  // console.log(marginLeftCar2)
  if (e.code === "KeyD") {
    car1.style.marginLeft = `${marginLeftCar1 + 100}px`;
    // console.log("car1 move")
  }
  if (e.code === "ArrowRight") {
    car2.style.marginLeft = `${marginLeftCar2 + 100}px`;
    // console.log("car2 move")
  }
  if (marginLeftCar1 > 800) {
    alert("первая машина выиграла");
  }
  if (marginLeftCar2 > 800) {
    alert("вторая машина выиграла");
  }
});
