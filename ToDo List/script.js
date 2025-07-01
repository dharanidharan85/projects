
const inputbox=document.getElementById('inputbox');
const addbtn=document.getElementById('addbtn');
const todoList=document.getElementById('todolist');

const addTodo=()=>{
    const inputText=inputbox.value.trim();
    if(inputText.length <=0){
        alert("You must add some character");
        return false;

    }
    const p=document.createElement('p');
    const li=document.createElement('li');
    p.innerHTML=inputText;
    li.appendChild(p);

   

    const editbtn =document.createElement('button');
    editbtn.innerText='Edit';
    editbtn.classList.add('btn','editBtn');
    li.appendChild(editbtn);

     const deletebtn =document.createElement('button');
    deletebtn.innerText='Remove';
    deletebtn.classList.add('btn','deleteBtn');
    li.appendChild(deletebtn);

    todoList.appendChild(li);
    console.log(inputText);
    inputbox.value=""

}

const updateTodo=(e)=>{ 
    if(e.target.innerHTML==="Remove"){
        
        
        todoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML==="Edit"){
        inputbox.value= e.target.previousElementSibling.innerHTML;
    }
}
addbtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);

