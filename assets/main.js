const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultsSection = document.querySelector("#resultados-pesquisa");

const normalize = (value) => (value ?? "").toString().toLowerCase();

const matchesAttribute = (attribute, term) => normalize(attribute).includes(term);

const clearResults = () => {
  resultsSection.innerHTML = "";
};

const showMessage = (message) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  resultsSection.appendChild(paragraph);
};

const buildResultCard = (athlete) => {
  const wrapper = document.createElement("div");
  wrapper.className = "item-resultado";

  const title = document.createElement("h2");
  title.textContent = `${athlete.name} - ${athlete.modalidade}`;

  const description = document.createElement("p");
  description.textContent = (athlete.conquistas ?? []).join(" | ");

  const link = document.createElement("a");
  link.href = athlete.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Saiba mais";

  wrapper.appendChild(title);
  wrapper.appendChild(description);
  wrapper.appendChild(link);

  return wrapper;
};

const search = () => {
  const rawTerm = searchInput.value.trim();

  clearResults();

  if (!rawTerm) {
    showMessage("Digite o nome de um atleta para iniciar a busca.");
    return;
  }

  const normalizedTerm = rawTerm.toLowerCase();
  const fragment = document.createDocumentFragment();
  let matchesFound = 0;

  for (const athlete of athletes) {
    const hasMatch =
      matchesAttribute(athlete.name, normalizedTerm) ||
      matchesAttribute(athlete.link, normalizedTerm) ||
      matchesAttribute(athlete.modalidade, normalizedTerm) ||
      matchesAttribute(athlete.pais, normalizedTerm) ||
      (athlete.conquistas ?? []).some((conquista) =>
        matchesAttribute(conquista, normalizedTerm)
      );

    if (!hasMatch) {
      continue;
    }

    matchesFound += 1;
    fragment.appendChild(buildResultCard(athlete));
  }

  if (matchesFound === 0) {
    showMessage("Nenhum atleta encontrado");
    return;
  }

  resultsSection.appendChild(fragment);
};

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

searchButton.addEventListener("click", search);