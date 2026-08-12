function displayAttribute() {
  const img = document.querySelector("#catImage");
  const imageLink = img.getAttribute("src");
  const p = document.querySelector("#attributeResult");
  p.innerText = imageLink;

  img.setAttribute("src", "https://mimo.app/r/kittles.png");
  // Ändert das src-Attribut des Bildes.
}

function displayStyle() {
  const el = document.querySelector("#aboutMe");
  const imageStyle = el.getAttribute("style");
  const p = document.querySelector("#styleResult");

  p.innerText = imageStyle;
  // Liest das style-Attribut des <a>-Elements aus.
}