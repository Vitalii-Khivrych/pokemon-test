export default function pokemonCard({
  name,
  sprites,
  weight,
  height,
  abilities,
}) {
  return `
    <div class='card'>
      <div class='card-img'>
        <img src='${sprites.front_default}' alt='${name}' />
      </div>
      <div class='card-body'>
        <h2 class='card-title'>Name: ${name}</h2>
        <p class='card-text'>Weight: ${weight}</p>
        <p class='card-text'>Height: ${height}</p>

        <p class='card-text'><b>Abilities</b></p>
            <ul class='card-list'>
              ${pokemonAbilities(abilities)}
          </ul>
      </div>
    </div>`;
}

function pokemonAbilities(arr) {
  return arr
    .map(obj => {
      return `<li class='card-item'>${obj.ability.name}</li>`;
    })
    .join('');
}
