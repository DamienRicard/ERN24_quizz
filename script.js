//----- On crée un tableau de questions -----
const questions = [
  {
    questions:
    "Quelle est la plus haute montagne des Pyrénées ?",
    options: ["Mont Perdu", "Pic d'Aneto", "Pic du Midi de Bigorre", "Pic du Canigou"],
    answer: "Pic d'Aneto",
  },
  {
    questions:
      "Quel pays partage une frontière avec la France le long des Pyrénées ?",
    options: ["Italie", "Espagne", "Portugal", "Suisse"],
    answer: "Espagne",
  },
  {
    questions:
      "Dans quelle région les Pyrénées prennent-elles naissance",
    options: ["Auvergne-Rhône-Alpes", "Occitanie", "Nouvelle-Aquitaine", "PACA"],
    answer: "Auvergne-Rhône-Alpes",
  },
  {
    questions:
      "Quel est le nom du parc national situé du côté espagnol des Pyrénées ?",
    options: ["Parc national des Pyrénées", "Parc national de la Vanoise", "Parc National d'Ordesa et du Mont-Perdu", "Parc national des Ecrins"],
    answer: "Parc National d'Ordesa et du Mont-Perdu",
  },
  {
    questions:
      "Quelle activité est populaire dans les stations de ski des Pyrénées ?",
    options: ["La randonnée", "Le ski", "Le ski alpin", "Le trail"],
    answer: "Le ski",
  },
  {
    questions:
      "Quelle ville des Pyrénées est célèbre pour ses eaux thermales  ?",
    options: ["Pau", "Tarbes", "Bagnères-de-Bigorre", "Lourdes"],
    answer: "Bagnères-de-Bigorre",
  },
  {
    questions:
      "Quel célèbre sentier de randonnée traverse les Pyrénées du golfe de Gascogne à la mer Méditerranée ?",
    options: ["Le GR 5", "Le GR 10", "Le GR 20", "Le GR 15"],
    answer: "Le GR 10",
  },
  {
    questions:
      "Quelle est la longueur approximative de la chaîne des Pyrénées?",
    options: ["1200 km", "700 km", "800 km", "1000 km"],
    answer: "800 km",
  },
  {
    questions:
      "Quel animal emblématique des Pyrénées est souvent considéré comme en danger d'extinction ?",
    options: ["Le loup", "Le lynx", "Le cerf", "L'ours"],
    answer: "L'ours",
  },
  {
    questions:
      "Quelle est la période de l'année où les Pyrénées sont le plus visitées par les randonneurs?",
    options: ["Printemps", "Eté", "Automne", "Hiver"],
    answer: "Eté",
  },
];

let score = 0;
const nbrQuestions = questions.length;


 
//function pour afficher la question actuelle et receuillir la réponse
function afficherQuestion() {
  // Obtenir et supprimer la première question du tableau
  const currentQuestion = questions.shift();
  // Sélection de l'élément avec l'ID "card"
  const cardDiv = document.getElementById('card');
 
  // Création de l'élément p contenant le texte de la question
  const questionParagraph = document.createElement('p');
  questionParagraph.textContent = currentQuestion.questions;
 
  // Création du formulaire avec l'ID "quizForm"
  const form = document.createElement('form');
  form.id = 'quizForm';
 
  //dans une boucle on crée les options de réponse
  currentQuestion.options.forEach((option) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
 
    const label = document.createElement('label');
    label.textContent = option;
 
    // Ajout des éléments input et label au formulaire
    form.appendChild(input);
    form.appendChild(label);
  });
 
  // Création du bouton de validation
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Valider';
 
  // Ajout du bouton de validation au formulaire
  form.appendChild(submitButton);
 
  // Ajout de l'élément p et du formulaire à l'élément div "card"
  cardDiv.appendChild(questionParagraph);
  cardDiv.appendChild(form);
 
  // Ajouter un écouteur d'événement pour le formulaire
  document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name=answer]:checked');
    if (!selectedAnswer) {
      alert("Veuillez sélectionner une réponse.");
      return;
    }
    const userAnswer = selectedAnswer.nextSibling.textContent;
    if (userAnswer === currentQuestion.answer) {
      alert("Bonne réponse!");
      //on vide card
      cardDiv.innerHTML = '';
      score++;
    } else {
      alert(`Mauvaise réponse! La bonne réponse est: ${currentQuestion.answer}`);
      //on vide card
      cardDiv.innerHTML = '';
    }
    selectedAnswer.checked = false;
    if (questions.length > 0) {
      afficherQuestion();
    } else {
      finDePartie();
    }
  });
}
//fonction pour gérer la fin de partie
function finDePartie() {
  alert(`Fin de partie! Votre score est de ${score}/${nbrQuestions}`);
}
 
//création d'un bouton pour commencer le jeu
let startButton = document.getElementById('start');
startButton.addEventListener('click', afficherQuestion);
let button = document.createElement('button');
button.innerHTML = "Commencer le jeu";
startButton.appendChild(button);
 
//création du bouton pour recharger le jeu
let reloadButton = document.getElementById('reload');
reloadButton.addEventListener('click', () => {
  location.reload();
})
 
let button2 = document.createElement('button');
button2.innerHTML = "Rejouer";
reloadButton.appendChild(button2);
