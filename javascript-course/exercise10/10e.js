function toggled(btn){
  // Store the button element in a variable to make the code cleaner
  const buttonElement = document.querySelector(`.${btn}-button`);
  if(buttonElement.classList.contains(`toggle-button`)){
    buttonElement.classList.remove('toggle-button');
  } else {
    buttonElement.classList.add('toggle-button');
  }
}