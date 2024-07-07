function toggleMode() {
  //quando o botão for clicado, essa função será executada
  const html = document.documentElement;

  //jeito 1 para alternância de modos

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light"); //muda para darkMode
  // } else {
  //   html.classList.add("light"); //muda para lightMode
  // }

  //jeito 2 - simplificado

  html.classList.toggle("light");

  //funciona de maneira semelhante:
  //'classList' é uma propriedade que retorna uma coleção ativa de todas as classes de um elemento
  //'toggle()' é um método da propriedade 'classList' que alterna (ativa ou desativa) uma classe específica no elemento.
  //Portanto, classList fornece as classes presentes no documento html. Se a classe 'light' estiver presente, toggle irá removê-la. Mas se a classe 'light' não estiver presente, toggle irá adiciona-lá.

  //querySelector busca pelo seletor específicado e atribui à variável criada
  const img = document.querySelector('#profile img');

  //substituição da imagem
  if (html.classList.contains('light')) {
    //lightMode
    img.setAttribute('src', 'assets/avatar-light.png');
    img.setAttribute('alt', 'foto de Bruna Candeias com roupa branca');
  } else {
    //darkMode
    img.setAttribute('src', 'assets/avatar.png');
    img.setAttribute('alt', 'foto de Bruna Candeias com roupa marrom');
  }

  //'setAttribute' é um método para adicionar um novo atributo ou modificar o valor de um atributo existente em um elemento HTML
  //sintaxe: element.setAttribute(name,value);
}

