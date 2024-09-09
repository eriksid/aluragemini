const isAttribute = (atribute, search) => {
  return atribute.toLowerCase().includes(search.toLowerCase());
  
}
document.querySelector("#search-input").addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      search();
  }
});
const search = () => {
  // Seleciona a seção onde os resultados serão exibidos
  let $section = document.querySelector("#resultados-pesquisa");
  let searchInput = document.querySelector("#search-input").value;
    if (!searchInput)  {
      return;
    } 

  // Inicializa uma string vazia para armazenar os resultados da busca
  let results = '';

  // Itera sobre cada atleta na base de dados
  for (athlete of athletes) {
    if (!isAttribute(athlete.name, searchInput)
    && !isAttribute(athlete.link, searchInput)
    && !isAttribute(athlete.modalidade, searchInput)
    && !isAttribute(athlete.pais, searchInput)) {
      continue;
    }
    // Cria um novo elemento HTML para cada atleta
    results += `
      <div class="item-resultado">
        <h2>${athlete.name} - ${athlete.modalidade}</h2> <p>${athlete.conquistas}</p> <a href="${athlete.link}" target="_blank">Saiba mais</a> </div>`;
  }

  if (!results) {
    results = "<p>Nenhum atleta encontrado</p>";
  }
  // Atualiza o conteúdo da seção com os resultados da busca
  $section.innerHTML = results;
}