export const renderChatBanner = (data) => {
  const params = new URLSearchParams(window.location.search);
  const idURL = params.get("id");

    const chatBanner = document.createElement('div');
    chatBanner.classList.add('container_itens');

    const item = data.find(({ id }) => id === idURL);
  
      chatBanner.innerHTML += `
     <li itemscope itemtype="mulheresTech" class="container_itens" >
        <dl itemscope itemtype="mulheresTech"> 
          <dt class="font-size"></dt><dd itemprop="imageUrl" class="justify-align font-size"><img class="justify-align" src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
          <dt class="font-size"></dt><dd itemprop="personaName" class="justify-align font-size">${item.personaName}</dd>
          <dt class="font-size"></dt><dd itemprop="name" class="justify-align font-size">${item.name}</dd>

        </dl>
      </div>
     `;
  
    chatBanner.className = "flex-center";
  
      
    return chatBanner;
  };