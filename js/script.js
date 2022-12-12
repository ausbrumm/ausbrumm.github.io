const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

// add event listeners to the nav icons
document.querySelectorAll('.fas').forEach(e =>{
    e.addEventListener('click', (e)=>{
       if(e.target.id != ''){     
            window.location.href = e.target.id + '.html'
       }
    })
})