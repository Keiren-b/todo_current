import './style.css';

localStorage.clear()

const inputs = (() => {
    const createInput = () => {
        const mainContainer = document.getElementById('mainContainer')
        const inputContainer = document.createElement('div')
        inputContainer.setAttribute('id', 'inputContainer')
        mainContainer.appendChild(inputContainer)
        mainContainer.classList.add('hello')

        const clearStorage = document.createElement('button')
        clearStorage.textContent = 'Clear Storage'
        clearStorage.addEventListener('click', ()=>{localStorage.clear()})
        mainContainer.appendChild(clearStorage)


        const titleLabel = document.createElement('label')
        titleLabel.setAttribute('id', 'titleLabel')
        titleLabel.textContent = 'Title'
        inputContainer.appendChild(titleLabel)

        const title = document.createElement('input')
        title.setAttribute('id', 'title')
        title.defaultValue = 'test'
        inputContainer.appendChild(title) 

        const desclabel = document.createElement('label')
        desclabel.setAttribute('id', 'descLabel');
        desclabel.innerHTML = "Description";
        inputContainer.appendChild(desclabel);

        const desc = document.createElement("textarea");
        desc.setAttribute('id', 'desc')
        desc.defaultValue = 'description'
        inputContainer.appendChild(desc)
    
        const duelabel = document.createElement('label')
        duelabel.setAttribute('id', 'dueLabel');
        duelabel.innerHTML = "Due Date";
        inputContainer.appendChild(duelabel);

        const due = document.createElement("textarea");
        due.setAttribute('id', 'due')
        due.defaultValue = 'due'
        inputContainer.appendChild(due)
    
        const prioritylabel = document.createElement("Label");
        prioritylabel.setAttribute("id", 'priorityLabel');
        prioritylabel.innerHTML = "Priority: ";
        inputContainer.appendChild(prioritylabel);

        const priority = document.createElement("select");
        priority.setAttribute('id', 'priority')
        let values = ['Low', 'Medium', 'High', 'Ugent']
        for (const val of values)
        {           var option = document.createElement("option");
                    option.value = val;
                    option.text = val.charAt(0).toUpperCase() + val.slice(1);
                    priority.appendChild(option);
                }
        inputContainer.appendChild(priority)

        const notesLabel = document.createElement('label')
        notesLabel.setAttribute('id', 'notesLabel');
        notesLabel.innerHTML = "Notes";
        inputContainer.appendChild(notesLabel);

        const notes = document.createElement("textarea");
        notes.setAttribute('id', 'notes')
        notes.defaultValue = 'notes'
        inputContainer.appendChild(notes)
    

        const storeButton = document.createElement('button')
        storeButton.setAttribute('id', 'storeButton')
        storeButton.textContent = 'Store ToDo'
        inputContainer.appendChild(storeButton)

    };

    function Todo(title, description, dueDate, priority,notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    
    const createTodo = () => {
        const title = document.getElementById('title').value
        const desc = document.getElementById('desc').value
        const due = document.getElementById('due').value
        const priority = document.getElementById('priority').value
        const notes = document.getElementById('notes').value
        
        const newToDo = new Todo (title, desc, due, priority, notes)
        console.log(newToDo)
        return newToDo
    }



    const storeInput = (task) => {
            if (localStorage.getItem(task.title)!=null){
            alert("This Task Already Exists. Choose another name")
            return
            }
            else{
            localStorage.setItem(task.title, JSON.stringify(task))
            }
    }

    const storeBtnLogic = () => {
        const storeButton = document.getElementById('storeButton')
        storeButton.addEventListener('click', ()=>storeInput(createTodo()))
    }
    

    return {
        createInput,
        createTodo,
        storeInput,
        storeBtnLogic,
    }
})();

inputs.createInput()
inputs.storeBtnLogic()


const hide = document.createElement('button')
hide.textContent = 'hide'
const mainContainer = document.getElementById('mainContainer')
mainContainer.appendChild(hide)
const inputContainer = document.getElementById('inputContainer')
inputContainer.classList.add('hello')
// function hideElement(){
//     inputContainer.classList.add('hidden')
// }
