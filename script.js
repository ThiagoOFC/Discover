function mudarTema() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  // pegar imagem
  const img = document.querySelector("#perfil img")
  //subistitur imagem
  if (html.classList.contains("ligth")) {
    // se tiver modo claro subistituir
    img.setAttribute("src", "./assets/avatar-d.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
