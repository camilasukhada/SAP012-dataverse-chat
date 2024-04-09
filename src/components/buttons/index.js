export const renderButtons = () => {

  const btnHomePage = document.createElement('div');
  btnHomePage.innerHTML = `
  <div class="btnHome">
    <div>
      <button class="btnHomePage">Home</button>
    </div>
  </div>`;

  const btnHome = btnHomePage.querySelector(".btnHome");
  btnHome.addEventListener("click", () => {
    localStorage.removeItem("type");
    window.location.href = "/";
  });
  
  return btnHomePage
}