// start-dark-mode
let body = document.body;
let btn = document.querySelector('.btn-dark');

btn.onclick= function(){
   if(body.classList.contains('black')){
        body.classList.toggle('black')
        btn.innerHTML= "Dark Mood"
   }else{
        body.classList.toggle('black')
        btn.innerHTML= "Light Mood"
   }
}
// end-dark-mode


// start-show-data
let task = document.getElementById('task');
let btntask = document.getElementById('btntask');
let notask = document.getElementById('notask');
let tasks = document.querySelector('#tasks');
let vald = document.getElementById('vald');
let closee = document.getElementById('closee');


let addTask = ()=>{
     let inputData = task.value ;
     if (inputData.trim() == 0 || inputData.length < 3 ){
          vald.classList.remove('none');
     }else{
          notask.classList.add('none');
          tasks.innerHTML+= `
          <div class="alert alert-info pb-4" style="  margin-bottom: 4px;">
               ${inputData}
               <button id="del" class="del btn btn-danger ">Delete</button>
          </div>
          `;
          task.value = "";
     }
}
let rem = ()=>{
     vald.classList.add('none');
}

btntask.addEventListener('click', addTask);
closee.addEventListener('click' , rem);

document.addEventListener('click', function(a){
     if(a.target.classList.contains('del')) {
          a.target.parentElement.remove();
          if(tasks.children.length  == 0 ) {
               notask.classList.remove('none');
          }
          
     }

})



// end-show-data




























