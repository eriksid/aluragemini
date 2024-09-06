const search = () => {
  // Seleciona a seção onde os resultados serão exibidos
  let $section = document.querySelector("#resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados da busca
  let results = '';

  // Itera sobre cada atleta na base de dados
  for (athlete of athletes) {
    // Cria um novo elemento HTML para cada atleta
    results += `
      <div class="item-resultado">
        <h2>${athlete.name}</h2> <p>${athlete.conquistas}</p> <a href="${athlete.link}" target="_blank">Saiba mais</a> </div>`;
  }

  // Atualiza o conteúdo da seção com os resultados da busca
  $section.innerHTML = results;
}