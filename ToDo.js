let AddtoDobutton = document.getElementById('AddtoDO');
let toDoContainer = document.getElementById('toDoContainer');
let inputfield = document.getElementById('to_do');

AddtoDobutton.addEventListener('click', function(){

    var paragraph=document.createElement('p')
    paragraph.innerText = inputfield.value;
    toDoContainer.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click', function(){

        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
});