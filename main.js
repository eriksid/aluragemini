let $section = document.querySelector("#resultados-pesquisa");
//busca na base dados.js
let results = ''

for (athlete of athletes) {
  results += `
    <div class="item-resultado">
      <h2>${athlete.name}</h2>
      <p>${athlete.conquistas}</p>
      <a href="${athlete.link}" target="_blank">Saiba mais</a>
    </div>`
}

$section.innerHTML = results