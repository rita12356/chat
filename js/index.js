

// контейнер всего чата

let usernameInput = document.querySelector(`#username`);
let messageInput = document.querySelector(`#message`);
let messagesNode = document.querySelector(`#messages`);
let sendButton = document.querySelector(`#send`);
let errorNode = document.querySelector(`#error`);
let hintsNode = document.querySelector('#hints');
let textNode = document.querySelector('.text');

let count = 0;



sendButton.addEventListener(`click`, function(){
 let text = messageInput.value;
 let username = usernameInput.value;
 if(text.length == 0 || username.length == 0) {
  errorNode.innerHTML = `Поля не могут быть пустыми`;
 } else if(username != `Олег` && username != `tester` && username != `admin` ){
  errorNode.innerHTML = `тебе нельзя в чат`;
  errorNode.innerHTML = `неправильное имя`;
 } else if(count == 0 && !text.includes(`hello, world!`)){
 errorNode.innerHTML = `пароль неверный`;
 } else{
 
  count++;
 
  
  
  text = text.replaceAll(`\n`, `<br>`);
  text = text.replaceAll(`ё`, `е`);
  text = text.replaceAll(`Ё`, `Е`);
  text = text.replaceAll(`а`, `1`);
  text = text.replaceAll(`в`, `п`);
  text = text.replaceAll(`ж`, `о`);
  text = text.replaceAll(`л`, `а`);
  text = text.replaceAll(`н`, `[`);
  text = text.replaceAll(`я`, `*`);
  text = text.replaceAll(`б`, `/`);
  text = text.replaceAll(`д`, `-`);
  text = text.replaceAll(`м`, `.`);
  
  
  
  
  
  
  

let newMessage =  `
<div class="card text-bg-light mb-3 align-self-sm-baseline">
  <div class="card-header">
    ${username}
  </div>
  <div class="card-body">
    <p class="card-text">
      ${text}
    </p>
  </div>
</div>
`;

  messagesNode.innerHTML += newMessage;
   messageInput.value =``;
   errorNode.innerHTML = ``;

 } 

});

hintsNode.addEventListener('click', function() {
 

btnNode.classList.toggle(`text`);
   
   
  

});