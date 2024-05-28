export default () => {
  window.addEventListener(`load`, function () {
    const body = document.querySelector(`body`);
    body.classList.add(`loaded`);
  });
};
