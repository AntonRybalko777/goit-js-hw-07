import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", handlerCLick);

function handlerCLick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" alt="${evt.target.alt}"/>
    
`);

  instance.show();

  document.addEventListener("keydown", handlerClose);

  function handlerClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
