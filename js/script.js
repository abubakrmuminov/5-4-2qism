const buttons = document.querySelectorAll(".btns");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let theme = button.getAttribute("data-theme");
    changeTheme(theme);
  });
});

function changeTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
}
