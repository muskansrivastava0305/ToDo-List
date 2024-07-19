const ToDo = document.querySelector('#To-Do')
const ToDoList = document.querySelector('.To-Do-List')

const addToDo = () => {

    let ToDo1 = ToDo.value
    console.log(ToDo1)
    const listItem = document.createElement("li");
    listItem.innerHTML = `<div>${ToDo1}</div>
     <button class="btn1" onClick="edit(this)">Edit</button>
     <button onClick="remove(this)">Dlt</button>`


    ToDoList.appendChild(listItem)
}

function remove(e) {
    console.log(e.parentElement)
    e.parentElement.remove()
}

function edit(editBtn) {
    let li = editBtn.parentElement
    let textDiv = li.children[0]
    let editText = textDiv.textContent

    if (editBtn.textContent == "Edit") {
      editBtn.textContent = "Done"
      let textInput = document.createElement("input")
      textInput.type = "text"
      textInput.value = editText

      li.replaceChild(textInput, textDiv)
    } else {
      editBtn.textContent = "Edit"
      let newText = li.children[0].value
      let newTextDiv = document.createElement("div")
      newTextDiv.textContent = newText

      li.replaceChild(newTextDiv, li.children[0])
    }
  }


























//click',addValue)

// function addValue(){
//     const input = ToDo.value
//     console.log(input)

//     const newLi = document.createElement('li')
//     newLi.innerHTML = ` <div>${input}</div>
//       <button onClick="edit(this)">Edit</button>
//       <button onClick="remove(this)">Dlt</button>`

//     parentList.appendChild(newLi)
// }