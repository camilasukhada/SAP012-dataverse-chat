export const renderChatBanner = (data) => {
  const params = new URLSearchParams(window.location.search);
  const idURL = params.get("id");

  const chatBanner = document.createElement('div');
  chatBanner.classList.add('container_itens');

  const item = data.find(({ id }) => id === idURL);

  chatBanner.innerHTML += `
     <li itemscope itemtype="mulheresTech" class="container_itensChat" >
        <dl itemscope itemtype="mulheresTech"> 
          <div class= "imagem">
        <dt class="font-size"></dt><dd itemprop="imageUrl" > <img class="imageChat" src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
          </div>
          <div class= "textBanner">
          <dt class="font-size"></dt><dd itemprop="personaName" class="personaName">${item.personaName}</dd>
          <dt class="font-size"></dt><dd itemprop="name" class="nome">${item.name}</dd>
                  </div>`;

  chatBanner.className = "flex-center";

  return chatBanner;
};