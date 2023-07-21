const panels= document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        panel.classList.add('active')
    })
})

function removeAcriveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}



