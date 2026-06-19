const inputField = document.querySelector('.panel')
const sendButton = document.querySelector('.sent-button')
const messangeWrap = document.querySelector('.messange-wrap')
const checkBox = document.querySelector('#checkbox')

sendButton.addEventListener('click', () => {
    sendNewMessage(inputField.value)
    inputField.value = ''
})

document.addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key == 'Enter' && inputField.value !=='' ) {
        sendButton.classList = 'sent-button-active'
        sendNewMessage(inputField.value)
        console.log('xZxZ')
        inputField.value = ''

    }
})

// куралесю куралесю куралесю куралесю куралесю куралесю куралесюкуралесю


document.addEventListener('keyup', (event) =>{
    if (event.key == 'Enter') {
        sendButton.classList = 'sent-button'

    }
})


function sendNewMessage(message) {
    const newMessage = document.createElement('div')
    if (checkBox.checked == true ){
    newMessage.classList = 'message'
    } else {
        newMessage.classList = 'message1' 
    }
    newMessage.textContent = message   
    messangeWrap.appendChild(newMessage)
}

checkBox.addEventListener('click', () => {
    console.log(checkBox.checked)
    
})


