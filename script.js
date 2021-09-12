  const openMenu = document.querySelector ('#openMenu');

  const navbar = document.querySelector('.navLinks')

  const icon = document.querySelector('.fa-bars')

  const closeMenu = document.querySelector('#closeMenu');


  openMenu.addEventListener('click', () => {
    navbar.classList.add('menu');
  })

  openMenu.addEventListener('click', ()=> {
    icon.classList.remove('fa-bars');
  })
 
  closeMenu.addEventListener('click', ()=> {
    icon.classList.add('fa-bars');
  })

  closeMenu.addEventListener('click', ()=> {
    navbar.classList.remove('menu');
  })

 