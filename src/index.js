import '../src/css/common.css';
import pokemonCard from './js/pokemon-card.js';
import fetchPokemonById from './js/api-service.js';
import getRefs from './js/get-refs.js';

const refs = getRefs();

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const { search } = e.currentTarget.elements;

  fetchPokemonById(search.value)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => refs.form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCard(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Not found!!!');
}
