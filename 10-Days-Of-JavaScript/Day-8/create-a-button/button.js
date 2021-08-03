document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    
    button.addEventListener('click', (ev) => {
          const count = Number(ev.currentTarget.innerText) + 1;
        
          ev.currentTarget.innerText = count;
     })
})