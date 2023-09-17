let textInput, addTask, tasks;

textInput = document.querySelector('.text');
addTask = document.querySelector('.add');
tasks = document.querySelector('.tasks');

addTask.addEventListener('click', function(e){
 e.preventDefault();
 let text = textInput.value;
 taskAdd(text);
});

tasks.addEventListener('click', function(e){
 let item = e.target;
 if(item.classList.contains('compBtn')){
  item.parentElement.classList.toggle('completed');
 } else if(item.classList.contains('trashBtn')){
  item.parentElement.remove();
 }
});

//create (div, list, button,)

function taskAdd(text){

 let div = document.createElement('div');  // creat div 
 div.classList.add('theTask');
 tasks.appendChild(div);

 let li = document.createElement('li');  // add list
 li.classList.add('taskText');
 li.innerText = text;
 div.appendChild(li);

 let compBtn = document.createElement('button'); //add button 
 compBtn.classList.add('compBtn');
 compBtn.innerHTML = "<i class='fas fa-check'></i>";
 div.appendChild(compBtn);
 
 let trashBtn = document.createElement('button'); // add remove button 
 trashBtn.classList.add('trashBtn');
 trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
 div.appendChild(trashBtn);

 textInput.value =''; // clear and focus
 textInput.focus();
}
