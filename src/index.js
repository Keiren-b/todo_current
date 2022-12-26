const inputs = (() => {
    const createInput = () => {
        const mainContainer = document.getElementById('mainContainer')
        const inputContainer = document.createElement('div')
        mainContainer.appendChild(inputContainer)

        const titleLabel = document.createElement('label')
        titleLabel.setAttribute('id', 'titleLabel')
        titleLabel.textContent = 'Title'
        inputContainer.appendChild(titleLabel)

        const title = document.createElement('input')
        title.setAttribute('id', 'title')
        title.defaultValue = 'test'
        inputContainer.appendChild(title) 

        const storeButton = document.createElement('button')
        storeButton.setAttribute('id', 'storeButton')
        storeButton.textContent = 'Store ToDo'
        inputContainer.appendChild(storeButton)

    };

    const readInput = () => {
        let inputData = []
        inputData.push(document.getElementById('title').value)
        return {inputData}
    }

    const storeInput = () => {
        console.log(readInput.inputData)
    }

    // const storeBtnLogic = () => {
    //     const storeButton = document.getElementById('storeButton')
    //     storeButton.addEventListener('click', storeInput)
    // }



    return {
        createInput,
        readInput,
        storeInput,
        // storeBtnLogic,
    }
})();

inputs.createInput()
inputs.readInput()
inputs.storeInput()
// inputs.storeBtnLogic()


