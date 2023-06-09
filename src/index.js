import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import './css/style.css';

const API_KEY =
  'live_XeTlTyCSq1TV4BNVV5sQtp1HkTM0b77UWvJrrCJ47zNb8oPtLbzoQLC2HcvFMfiS';
const BASE_URL = 'https://api.thecatapi.com/v1';

const refs = {
  select: document.querySelector('.breed-select'),
  animalCard: document.querySelector('.cat-info'),
  alertLoader: document.querySelector('.loader'),
  alertError: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', onNewChoiceAnimal);
refs.alertLoader.classList.add('is-hidden');

function onNewChoiceAnimal(event) {
  const breed_ids = event.target.value;
  return fetchCatByBreed(breed_ids);
}

fetchBreeds(`${BASE_URL}/breeds?${API_KEY}`);

export { refs, API_KEY, BASE_URL };
