const userEditDropdown = () => {
  const userEditIcons = document.getElementsByClassName('fa-user-edit');
  const form = document.querySelector('.add-user-form');
  for (let i = 0; i < userEditIcons.length; i++) {
    userEditIcons[i].addEventListener('click', () => {
      form.classList.toggle('open');
    });
  }
  const closeFormIcon = document.querySelector('.add-user-form .fa-times');
  closeFormIcon.addEventListener('click', () => {
    form.classList.toggle('open');
  });
};
export default userEditDropdown;
