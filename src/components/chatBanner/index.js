export const renderChatBanner = (data) => {
  const params = new URLSearchParams(window.location.search);
  const idURL = params.get("id");

    const chatBanner = document.createElement('div');
    chatBanner.classList.add('container_itens');

    const item = data.find(({ id }) => id === idURL);
  
      chatBanner.innerHTML += `
     <li itemscope itemtype="mulheresTech" class="container_itensChat" >
        <dl itemscope itemtype="mulheresTech"> 
          <dt class="font-size"></dt><dd itemprop="imageUrl" class="justify-align font-size"><img class="justify-align imageChat" src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
          <dt class="font-size"></dt><dd itemprop="personaName" class="justify-align personaName">${item.personaName}</dd>
          <dt class="font-size"></dt><dd itemprop="name" class="justify-align font-size">${item.name}</dd>
          <dt class="font-size"></dt><dd itemprop="aboutMe" class="justify-align font-size">${item.aboutMe}</dd>
          <dt class="font-size">Tech Skills:</dt><dd itemprop="techSkills">${item.facts.techSkills}.</dd>
          <dt class="font-size">Soft Skills:</dt><dd itemprop="softSkills">${item.facts.softSkills}.</dd>

        </dl>
      </div>
     `;
  
  
    chatBanner.className = "flex-center";
  
  
    return chatBanner;
  };