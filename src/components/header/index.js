export const renderHeader = () => {
  // Criação do elemento h1
  const header = document.createElement('h1');
  header.textContent = "Mulheres Tech";

  // Criação do elemento img
  const image = document.createElement('img');
  image.src = "assets/icones/mulherestech.png";
  image.alt = 'ícone mulheres tech'; 

  // Anexa a imagem ao cabeçalho
  header.appendChild(image);

  // Retorna o cabeçalho completo
  return header;
}
