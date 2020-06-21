// Function to add a Task
let currentTasks=0;
refreshList();
// Helipng in adding a task
function addTask(){
    var li=document.createElement("li");
    var task =document.getElementById('input').value;
    var item = document.createTextNode(task);
    var i = document.createElement("i");
    i.classList.add('delete');
    i.classList.add('fa');
    i.classList.add('fa-times');
    list[list.length]=i;
    li.appendChild(item);
    li.appendChild(i);
    if(li.innerText==""){
        alert("Enter task to be added");
    }else{
        document.getElementById('list').appendChild(li);
        currentTasks++;
    }
    document.getElementById('input').value="";
    
    document.getElementById('task-left').innerText=currentTasks;
    refreshList();
    // document.getElementById('list').appendChild(i);
    
}

// Function to refresh the list of tasks after adding a task

    function refreshList(){
        var list = document.getElementsByClassName('delete');
        for(let i=0;i<list.length;i++){
            list[i].addEventListener('click',function(){    
                if(tasks[i].style.display!='none')
                    currentTasks--;        
                list[i].parentElement.style.display='none';
                
                document.getElementById('task-left').innerText=currentTasks;
            });
        }
        var tasks = document.querySelectorAll('#list li');
        for(let i=0;i<tasks.length;i++){
            tasks[i].addEventListener('click',function(){
                if(tasks[i].className!='checked'){
                    tasks[i].classList.add('checked');
                    
                }else{
                    tasks[i].classList.remove('checked');
                }
                
            })
        }
       
    }   
    var tasks = document.querySelectorAll('#list li');
        for(let i=0;i<tasks.length;i++){
            tasks[i].addEventListener('click',function(){
                if(tasks[i].className!='checked'){
                    tasks[i].classList.add('checked');
                    
                }else{
                    tasks[i].classList.remove('checked');
                }
                
            })
        }
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
                if(tasks[i].className=='checked'){
                    if(tasks[i].style.display!='none')
                    currentTasks--;
                    tasks[i].style.display='none';
                    
                }
                
        }
        currentTasks=1;
        document.getElementById('task-left').innerText=currentTasks;
    refreshList();
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