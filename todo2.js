const input=document.querySelector('.input1');
const addBtn=document.querySelector('.btn');
const makeEditBtn=document.querySelector('.editbuttn');
const ul=document.querySelector('ul');
const noTodo=document.querySelector('.tframe');
var flagC=0;
var id=0;
var item=[];
var listCard=[];

var displayTframe=()=>{
    if(item.length!=0){
    noTodo.style.display="none"
    }else
    {
     noTodo.style.display="block"
    }
}
// ading the task tab 
addBtn.addEventListener('click',(e)=>{
    if(input.value !=""){
        const data={
            id:id,
            work:input.value
        }
        listCard.push(data);
        id++;
        item.push(id);
        displayTframe()
        console.log(listCard);
    const li=document.createElement('li')
    li.classList.add('tracklist')
    //list added with class
    const div=document.createElement('div');
    div.classList.add('list-item');
    //div added with class
    const inpt=document.createElement('input');
    inpt.type="checkbox";
    inpt.name="checkBox"
    //check box added with class
    const p=document.createElement('p');
    p.innerText=input.value;
    //p added with inner text
    const div2=document.createElement('div');
    div2.classList.add('format');
    //div2 added with class
    const delbtn=document.createElement('button');
    
    const editbtn=document.createElement('button');

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
    li.classList.add('animate__animated');
    li.classList.add('animate__fadeInDown');
    ul.appendChild(li);
    input.value=""
    const checkboxI=document.querySelector('input[name="checkBox"]');
    //task complete
    inpt.addEventListener('click',(e)=>{
      
        let p_tagofLi=e.target.parentElement.childNodes[1];//grabing the parent li
            p_tagofLi.classList.toggle('lineThrough');
    })
   //deltodo
   delbtn.addEventListener("click",(e)=>{
    let list1=e.target.parentElement.parentElement.parentElement;
    let list001=e.target.parentElement.parentElement.childNodes[1];
    console.log(list001);
    if(confirm('Are you sure want to delete it?')){
        item.pop(0);
        displayTframe()
        list1.classList.add('animate__animated');
        list1.classList.add('animate__fadeOutUp');
        // list1.classList.add('animate__bounceOutRight');
        setTimeout(() => {
            list1.remove();
        }, 800);
        
    }
  
   })
    //completed task indication
 
    //for active li identification
    console.log(flagC,'OUTSIDE ()');
   var editAtask=(e)=>{
        const editli1=e.target.parentElement.parentElement.parentElement;
        const editli2=e.target.parentElement.parentElement.childNodes[1];
        console.log(flagC,"flagelement");
        if(flagC==0){
            flagC++;
            editli1.classList.add('libackground');
            addBtn.style.display="none";
            makeEditBtn.style.display="block";

            input.value=editli2.innerText;
        }
        if(flagC==1){
        }
        makeEditBtn.addEventListener('click',(e)=>{
            if(editli1.classList[3]=='libackground'){
            if(input.value!=''){
        
    
            editli1.classList.remove('libackground');
            makeEditBtn.style.display="none";
            addBtn.style.display="block";
            editli2.innerText=input.value;
            input.value='';
            flagC=0;     
           }
           else{
            if(editli1.classList[1]=='libackground'){
                alert("Nothing is Assigned");
            }
           }
        }
            
        })
        
    }

    editbtn.addEventListener("click",editAtask);

    //end of first if condition
//     if(e.target.tagName=='INPUT'){
//         let list1=e.target.parentElement.childNodes[1];
//         list1.classList.toggle('lineThrough');
//         console.log(list1,"list1");
//     }
}

//editing feature



});