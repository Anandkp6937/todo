const input=document.querySelector('.input1');
const addBtn=document.querySelector('.btn');
const makeEditBtn=document.querySelector('.editbuttn');
const ul=document.querySelector('ul');
const li=document.querySelectorAll('li');

var id=0;
// var tesAr=[{id:0,todoContent:"todo1",status:false,class:false}];
// localStorage.setItem("todoList",JSON.stringify(tesAr));
var todoLi=localStorage.getItem("todoList")?
JSON.parse(localStorage.getItem("todoList")):[];
//making a todo
function makeTodo(){
    if(todoLi.length!=0){
        ul.innerHTML='';
       for(i=0;i<todoLi.length;i++){
        const li=document.createElement('li')
        li.classList.add('tracklist')
        //list added with class
        const div=document.createElement('div');
        div.classList.add('list-item');
        //div added with class
        const inpt=document.createElement('input');
        inpt.type="checkbox";
        inpt.name="checkBox"
        inpt.classList.add('cbox');
        if(todoLi[i].status==true){
            inpt.checked=true;
        }
        //check box added with class
        const p=document.createElement('p');
        p.innerText=todoLi[i].todoContent;
        const delbtn=document.createElement('button');
        
        const editbtn=document.createElement('button');
        if(todoLi[i].status==true){
            p.classList.add('lineThrough');
            p.classList.add('opacity');
            li.classList.add('opacity');
            delbtn.classList.add('opacity');
            editbtn.classList.add('opacity');
            li.style.border="1px solid rgba(255,255,255,0.2)"
        }
        //p added with inner text
        const div2=document.createElement('div');
        div2.classList.add('format');
        //div2 added with class
 
    
        editbtn.classList.add('edit')
        editbtn.innerHTML="Edit"
        delbtn.innerHTML="Del"
        delbtn.classList.add('del')
        div2.appendChild(editbtn);
        div2.appendChild(delbtn);
        div.appendChild(inpt);
        div.appendChild(p);
        div.appendChild(div2);
        li.appendChild(div);
        // li.classList.add('animate__animated');
        // li.classList.add('animate__fadeInDown');
        ul.appendChild(li);
       }
        
        todoComplete();   
        todoDel();
        todoEdit();
       }
    else{
        ul.innerHTML=`<li class="tracklist tframe">
        <div class="list-item v">   
            <p>Nothing ToDo</p>     
        </div>
        </li> `
    }
}
input.addEventListener('keydown',(e)=>{
if(e.keyCode===13){
    addBtn.click();
}
})

//identifying the delete button of list
function todoDel(){
let delbtn=document.querySelectorAll('.del');

delbtn.forEach((dbtn,i)=>{
    dbtn.addEventListener("click",(e)=>{
        if(confirm(`Are you sure want to delete Todo?`)){
            let itm=dbtn.parentElement.parentElement.parentElement;
            itm.classList.add('animate__animated');
            itm.classList.add('animate__fadeOutUp');
            setTimeout(()=>{
                deleteitem(i);
            },800)
        }
    })
})
}
//deleting todo function
function deleteitem(i){
    todoLi.splice(i,1);
    localStorage.setItem('todoList',JSON.stringify(todoLi));
    makeTodo();
}
//add todo
addBtn.addEventListener("click",()=>{
    if(input.value!=''){
    let inputV=input.value;
    let listX={
        id:id,
        todoContent:inputV,
        status:"false",
        class:false
    }
    id++;
    todoLi.push(listX);
    localStorage.setItem('todoList',JSON.stringify(todoLi));
    input.value="";
    makeTodo();
}
else{
    alert("No todo to add");
}
})

makeTodo()

//identifying edit btn
let flag=0;

function todoEdit(){
    let editbtn=document.querySelectorAll('.edit');
    
    editbtn.forEach((ebtn,i)=>{
        ebtn.addEventListener("click",(e)=>{
            if(flag==0){
                editItem(i);
                var li=ebtn.parentElement.parentElement.parentElement;
            li.classList.add('libackground');
            todoLi[i].class=true;
            localStorage.setItem('todoList',JSON.stringify(todoLi));

            flag=1;
            }
            
        })
    })
    }
    function editItem(i){
        addBtn.style.display="none";
            makeEditBtn.style.display="block";
            input.value=todoLi[i].todoContent;
            makeEditBtn.addEventListener('click',(e)=>{
                if(todoLi[i].class==true){
                    if(input.value!=''){
                todoLi[i].todoContent=input.value;
                localStorage.setItem('todoList',JSON.stringify(todoLi));
                makeEditBtn.style.display="none";
                addBtn.style.display="block";
                makeTodo();
            input.value="";
            flag=0;
            todoLi[i].class=false;
                    }    
                    else{
                        alert("Nothing to Edit");
                        makeEditBtn.style.display="none";
                        addBtn.style.display="block";
                        todoLi[i].class=false;
                        localStorage.setItem('todoList',JSON.stringify(todoLi));
                        makeTodo();
                        flag=0;
                    }   
                }
        })
    }
    // task complete
    function todoComplete(){
        let checkbox=document.querySelectorAll('.cbox');
        checkbox.forEach((btn,i)=>{
            btn.addEventListener("change",(e)=>{
               if(e.currentTarget.checked){
                todoLi[i].status=true;
                localStorage.setItem('todoList',JSON.stringify(todoLi));
                makeTodo();
                
               }
               if(e.currentTarget.checked==false){
                todoLi[i].status=false;
                localStorage.setItem('todoList',JSON.stringify(todoLi));
                makeTodo();
            
               }
            })
        })
    }
