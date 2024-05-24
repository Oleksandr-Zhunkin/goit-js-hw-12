import { getPhotos } from './js/pixabay-api.js';
import { imagesTemplate } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconEr from './img/error.svg';

const formEl = document.querySelector('.js-form');
const galleryEl = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const inputQuery = e.currentTarget.elements.search.value.trim();

  if (inputQuery === '') {
    return iziToast.error({
      message: 'Sorry, the input field cannot be empty!',
      maxWidth: 360,
      position: 'topRight',
      iconUrl: iconEr,
      backgroundColor: '#ef4040',
      messageColor: '#fff',
    });
  }

  loader.classList.remove('visually-hidden');

  getPhotos(inputQuery)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 360,
          position: 'topRight',
          iconUrl: iconEr,
          backgroundColor: '#ef4040',
          messageColor: '#fff',
        });
      }

      galleryEl.innerHTML = imagesTemplate(response.hits);

      lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('visually-hidden');
      e.target.reset();
    });
}
