
const Header = () => {
  const $header = document.createElement("header");
  $header.classList.add("header"); //clase para estilar en css
  $header.innerHTML = `
    <div class="header_logo"><a href="#/"><ion-icon name="home-outline"></ion-icon></a></div>

  `;
  return $header;
};
export default Header;

