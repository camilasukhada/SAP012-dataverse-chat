export const renderButtons = () => {

  const btnHomePage = document.createElement('div');
  btnHomePage.innerHTML = `
  <section class="btnHome">
    <div>
      <button class="btnHome">HOME</button>
    </div>
  </section>`;

  const btnHome = btnHomePage.querySelector(".btnHome");
  btnHome.addEventListener("click", () => {
    window.location.href = "/";
  });
  
  return btnHomePage
}



  