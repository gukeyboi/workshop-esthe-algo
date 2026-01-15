// random
const rand = {
  nextInt: max => Math.floor(Math.random() * max),
  nextBoolean: () => Math.random() < 0.5
};

// listes de mots
const first = ["Salut", "Salutations"];
const second = ["voleur", "filou", "fripon"	,"bandit", "fripouille", "pirate", "aigrefin",
"coquin", "malfaiteur", "vaurien", "malhonnête", "intrigant", "forban",	"flibustier", "faisan",
"crapule", "magouilleur", "larron", "faiseur", "brigand","stellionataire", "gangster", "flibuste",
"estampeur", "escroc", "charlatan", "carotteur","carambouilleur", "arnaqueurécornifleur"];

const adjectives = [
  "méchant", "vil", "odieux", "sinistre", "malveillant",
  "diabolique", "pervers", "sournois", "corrompu", "perfide",
  "trompeur", "traître", "infâme", "malfaisant", "venimeux",
  "cruel", "malintentionné", "malhonnête", "machiavélique", "vénéneux",
  "déloyal", "roublard", "ignoble", "odieux", "infâme",
  "scélérat", "dépravé", "malicieux", "malandrin", "voyou",
  "opportuniste", "maléfique", "hostile", "pernicieux", "malsain",
  "féroce", "haineux", "malicieux", "trompeur", "maléfique",
  "vengeur", "vile", "médisant", "hypocrite", "malchanceux",
  "nuisible", "déloyal", "malfaisant", "corrompu", "hargneux"
]
;

const nouns = [
  "voleur", "filou", "fripon", "bandit", "fripouille",
  "pirate", "aigrefin", "coquin", "malfaiteur", "vaurien",
  "intrigant", "forban", "flibustier", "crapule", "magouilleur",
  "larron", "brigand", "gangster", "escroc", "charlatan",
  "carotteur", "arnaqueur", "tricheur", "opportuniste", "manipulateur",
  "traître", "calomniateur", "scélérat", "criminel", "voyou",
  "malandrins", "assassin", "tortionnaire", "voyageur", "ravageur",
  "piraterie", "extorqueur", "voyou", "saboteur", "corrompu",
  "trafiquant", "escrocquer", "brigandage", "spoliateur", "usurpateur",
  "maraudeur", "pilleur", "racketteur", "banditisme", "forbanerie"
]
;

const adverbs = [
  "lentement", "rapidement", "doucement", "brutalement", "silencieusement",
  "bruyamment", "calmement", "nerveusement", "sagement", "follement",
  "prudemment", "hardiment", "clairement", "confusément", "simplement",
  "soigneusement", "maladroitement", "facilement", "difficilement", "étrangement",
  "bizarrement", "subtilement", "grossièrement", "violemment", "tendrement",
  "froidement", "chaleureusement", "passionnément", "timidement", "fièrement",
  "honteusement", "joyeusement", "tristement", "sérieusement", "légèrement",
  "lourdement", "intensément", "faiblement", "fermement", "mollement",
  "naturellement", "artificiellement", "précipitamment", "progressivement",
  "constamment", "rarement", "souvent", "parfois", "toujours"
]
;

const verbs = [
  "cours", "pense", "mange", "écris", "écoute",
  "regarde", "construis", "casse", "apprend", "oublie",
  "cherche", "trouve", "rêve", "parle", "marche",
  "saute", "respire", "ris", "pleure", "aime",
  "déteste", "choisis", "attends", "voyage", "chante",
  "danse", "joue", "dessine", "programme",
  "répare", "invente", "décide", "hésite", "grandis",
  "tombe", "lève-toi", "disparaît", "apparaît", "transforme",
  "observe", "imagine", "comprend", "explique", "frappe",
  "pousse", "tire", "brûle", "gèle", "flotte"
];

const victimes = [
  "le petit garçon que tu as racketté", "ta femme que tu as trompé", "ton petit fils que tu as abandonné" + "\n" + "sur l'aire d'autoroute de la nationale 7",
  "Mamie Mimi, que tu as arnaqué"
];

const temps = [
  "hier", "avant-hier", "lundi dernier", "mardi dernier", "mercredi dernier", "jeudi dernier", "vendredi dernier",
  "la semaine dernière", "il y a un mois", "il y a 10 ans"
];

const formulations = [
    "espèce de", "gros", "sale"
];

// fonctions
function choice(words) {
  return words[rand.nextInt(words.length)];
}

function maybe(words) {
  return rand.nextBoolean() ? " " + choice(words) : "";
}

function longer() {
  return (
    choice(formulations) +
    maybe(adjectives) +
    " " +
    choice(nouns) +
    maybe(adverbs) +
    " " +
    choice(verbs) +
    " ton" +
    maybe(adjectives) +
    " " +
    choice(nouns) +
    "."
  );
}

function shorter() {
  return " " + choice(adjectives) + " " + choice(nouns) + ".";
}

function body() {
  let text = "";
  let youAre = false;

  for (let i = 0; i < 5; i++) {
    if (rand.nextBoolean()) {
      text += longer();
      youAre = false;
    } else {
      if (youAre) {
        text = text.slice(0, -1) + choice(formulations) + shorter();
        youAre = false;
      } else {
        text += " Tu es un" + shorter();
        youAre = true;
      }
    }
  }
  return text;
}

function wrapText(text, maxWidth) {
  const words = text.split(" ");
  let result = "";
  let lineLength = 0;

  for (const word of words) {
    if (lineLength + word.length > maxWidth) {
      result += "\n";
      lineLength = 0;
    }
    result += word + " ";
    lineLength += word.length + 1;
  }
  return result.trim();
}

function letter() {
  return (
    choice(first) + " " + choice(second) + "\n\n" +
    wrapText(body(), 80) + "\n\n" + choice(adverbs) + "\n\n" +
                                      choice(victimes) + " " + choice(temps) + "\n"
  );
}

// effets

const output = document.getElementById("output");
const TYPING_SPEED = 25;
const LETTER_DELAY = 18000;

const styles = [
  "bold",
  "italic",
  "white",
  "red",
  "blue",
  "green",
  "gray",
  "big",
  "small",
  "medium",
  "big",
  "verybig",
  "huge"
];

function randomStyle() {
  // 50% de chance de modifier la lettre
  if (Math.random() < 0.5) return "";
  return styles[Math.floor(Math.random() * styles.length)];
}

function typeText(text) {
  let index = 0;
  output.innerHTML = "";

  function typeNext() {
    if (index < text.length) {
      const span = document.createElement("span");
      span.classList.add("char");

      const style = randomStyle();
      if (style) span.classList.add(style);

      span.textContent = text[index++];
      output.appendChild(span);

      setTimeout(typeNext, TYPING_SPEED);
    }
  }

  typeNext();
}

function generateAndTypeLetter() {
  typeText(letter());
}

// lancement et reboot
generateAndTypeLetter();
setInterval(generateAndTypeLetter, LETTER_DELAY);
