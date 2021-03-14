///  1 : set addeventlistener for btn and enter , then start "checktodolisttext" function
///  2 : if input value in empty or its character less than 5, show err
///  if the value was correct do :
//   3 : make an li and put the input value on them and craete a btn in it, then push it into the "ul"
//   4 : when the btn in the li clicked,the li will be removed

// 1 
const addbtn = document.getElementsByClassName('add-to-list-btn')[0];
addbtn.addEventListener('click', checktodolisttext);
const input = document.getElementsByClassName('text-input')[0];
input.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        checktodolisttext()
    }
})


function checktodolisttext() {
    // 2
    const errtext = document.querySelector('.err-text');
    if (input.value.length < 5){
        errtext.classList.add('err-text-show');
    }else{
        // 3
        errtext.classList.remove('err-text-show');
        const newitem = document.createElement('li');
        newitem.innerHTML = input.value;
        const deletebtn = document.createElement('button');
        deletebtn.innerHTML = '&#9747';
        newitem.appendChild(deletebtn)
        const ul = document.getElementsByClassName('list-area')[0];
        ul.appendChild(newitem);
        input.value = '';
        input.focus();
        // 4
        deletebtn.addEventListener('click',()=>{
            newitem.classList.add('fade');
            setTimeout(()=>{
                newitem.remove()
            },500)
        })
    }
}