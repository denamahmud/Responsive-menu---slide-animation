let openDOM = document.querySelector('.open')
let closeDOM = document.querySelector('.close')
let ulDOM = document.querySelector('ul')


openDOM.onclick = () => {
    
    openDOM.style.display = 'none'
    closeDOM.style.display = 'block'
    // ulDOM.style.animation = 'animate2 1s'

    ulDOM.style.transform = 'translate(0)'
    ulDOM.style.transition = '1s transform'
  
    
    
}
closeDOM.onclick = () => {
    
    closeDOM.style.display = 'none'
    openDOM.style.display = 'block'
    // ulDOM.style.animation = 'animate3 1s'

    ulDOM.style.transform = 'translate(-1700px)'
    ulDOM.style.transition = '1s transform'

    
}
