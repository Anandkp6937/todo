const input=document.querySelector('.input1');
const addBtn=document.querySelector('.btn');
const editB=document.querySelector('.edit');
const makeEditBtn=document.querySelector('.editbuttn');
const ul=document.querySelector('ul')
const lis=document.querySelectorAll('li');
const delB=document.querySelectorAll('.del');
var listSelectToggle=false;

addBtn.addEventListener('click',(e)=>{
    if(input.value !=""){
    const li=document.createElement('li')
    li.classList.add('tracklist')
    //list added with class
    const div=document.createElement('div');
    div.classList.add('list-item');
    //div added with class
    const inpt=document.createElement('input');
    inpt.type="checkbox";
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
    ul.appendChild(li);
    input.value=""
    editbtn.addEventListener("click",(e)=>{
       console.log();
     })
    }
    else{
        alert("No task is written..")
    }
})
// remove list element 
ul.addEventListener("click",(e)=>{
    //completed task indication
    if(e.target.tagName=='INPUT'){
        let list1=e.target.parentElement.childNodes[1];
        list1.classList.toggle('lineThrough');
        // console.log(list1);
    }

    // to remove listitem
    if(e.target.classList[0]=='del'){
        if(confirm(`Are you sure wwant to delete task?`)){
        console.log(e.target.classList[0])
        let list=e.target.parentElement.parentElement.parentElement;
        if(list.classList.contains('tracklist')){
          list.remove();
        }
    }
}
//editing the todo
if(e.target.classList[0]=='edit'){
    var number=0;

    let list3=e.target.parentElement.parentElement.childNodes[1];
    let selectedli=e.target.parentElement.parentElement.parentElement;
    let list_00=e.target.parentElement.parentElement.parentElement;
        selectedli.classList.add('libackground');
        input.value=list3.innerText;
        addBtn.style.display="none"
        makeEditBtn.style.display="block";

        makeEditBtn.addEventListener('click',()=>{
    // console.log(list3);

            let list4=e.target.parentElement.parentElement.parentElement;
                if(list4.classList[1]=='libackground'){
                    if(input.value!=''){
                        list3.innerHTML=input.value;
                        addBtn.style.display="block"
                        makeEditBtn.style.display="none";
                        selectedli.classList.remove('libackground');
                        input.value=""
                    }
                    }
   
        // console.log(list4);
        
    });
};
}); 
//         list4=e.target.parentElement.parentElement.childNodes[3];
//         list4.innerText=list3.innerText;
//     })
   


