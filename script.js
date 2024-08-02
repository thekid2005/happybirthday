document.getElementById("nao").addEventListener("click", function () {
  const button = this;

  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;

  const buttonWidth = button.clientWidth;
  const buttonHeight = button.clientHeight;

  // Gera posições aleatórias
  const randomX = Math.floor(Math.random() * (bodyWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (bodyHeight - buttonHeight));

  // Define a nova posição
  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
});
