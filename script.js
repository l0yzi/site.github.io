




let TransBtn =  document.getElementById('translate_btn')

const Translate = () => {
  let VisibleElems = document.querySelectorAll('.visible');
  let HideElems = document.querySelectorAll('.hide');
  for (let visibleEl of VisibleElems){
    visibleEl.classList.remove('visible')
    visibleEl.classList.add('hide')
  }

  for (let hideEl of HideElems){
    hideEl.classList.remove('hide')
    hideEl.classList.add('visible')
  }
}

TransBtn.addEventListener("click", Translate)