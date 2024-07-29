const menu_bar = document.getElementById('menus');

function myToggle() {
  if(menu_bar.style.display === 'block'){
    menu_bar.style.display = 'none';
  }else{
    menu_bar.style.display = 'block';

  }
}