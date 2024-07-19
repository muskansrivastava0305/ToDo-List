const ToDo = document.querySelector('#To-Do')
const ToDoList = document.querySelector('#To-Do-List')

ToDo.addEventListener('click',addValue)

function addValue(){
    const input = ToDo.value
    console.log(input)

    const newLi = document.createElement('li')
    newLi.innerHTML = ` <div>${input}</div>
      <button onClick="edit(this)">Edit</button>
      <button onClick="remove(this)">Dlt</button>`

    parentList.appendChild(newLi)
}