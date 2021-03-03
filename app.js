document.querySelectorAll('.question-btn').forEach(item=>item.addEventListener('click',function(e){
    
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.toggle('show-text')

}))
