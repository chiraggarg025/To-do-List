
var currentTasks=0;
//List of the buttons to delete an element
var deleteElements = document.getElementsByClassName("delete");
var i;
for (i = 0; i < deleteElements.length; i++) {
    deleteElements[i].onclick = function() {
        currentTasks--;
        document.getElementById('task-left').innerText=currentTasks;
        document
        var parent = this.parentElement;
        parent.style.display = "none";
        
    }
}
// Helping in adding a task
function addTask(){
    var li=document.createElement("li");
    var task =document.getElementById('input').value;
    var item = document.createTextNode(task);
    var i = document.createElement("i");
    i.classList.add('delete');
    i.classList.add('fa');
    i.classList.add('fa-times');
    li.appendChild(item);
    li.appendChild(i);
    if(li.innerText==""){
        alert("Enter task to be added");
    }else{
        document.getElementById('list').appendChild(li);
        currentTasks++;
        document.getElementById('task-left').innerText=currentTasks;
    }
    document.getElementById('input').value="";
    
    

    //List of the buttons to delete an element
    for (i = 0; i < deleteElements.length; i++) {
        deleteElements[i].onclick = function() {
            var parent = this.parentElement;
            parent.style.display = "none";
            currentTasks--;
            document.getElementById('task-left').innerText=currentTasks;
        }
    }
}

       

    //Marking a list item as done for current object
        var list = document.querySelector('#list');
        list.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
        }, false);

    // Marking all tasks complete
function completeAll(){
    var tasks = document.querySelectorAll('#list li');
    for(let i=0;i<tasks.length;i++){
            if(tasks[i].className!='checked'){
                tasks[i].classList.add('checked');
            }
    }
}
    //clearing all tasks that are done
function clearCompleted(){

    var tasks = document.querySelectorAll('#list li');
        for(let i=0;i<tasks.length;i++){
                if(tasks[i].className=='checked' && tasks[i].style.display!='none'){
                    console.log(tasks[i].style.display!="none");
                    
                        currentTasks--; 
                        document.getElementById('task-left').innerText=currentTasks;
                    
                        tasks[i].style.display='none';
                    
                }
                
        }
        
}

// function to show incomplete tasks
function showIncomplete(){
    var tasks = document.querySelectorAll('#list li');
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].className=='checked'){
            tasks[i].style.visibility='hidden';
            currentTasks--;
        }else{
            tasks[i].style.visibility='visible';
        }
        
    }
}
//function to show completed tasks
function showCompleted(){
    var tasks = document.querySelectorAll('#list li');
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].className!='checked'){
            tasks[i].style.visibility='hidden';
            currentTasks--;
        }else{
            tasks[i].style.visibility='visible';
        }
        
    }
}
//function to show all
function showAll(){
    var tasks = document.querySelectorAll('#list li');
    for(let i=0;i<tasks.length;i++){
        tasks[i].style.visibility='visible';
        
    }
}