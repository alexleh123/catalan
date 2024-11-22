// Verbs and their conjugations (simplified for the example)
const verbs = {
    "comprar (to buy)": {
        "jo": "compro", "tu": "comples", "ell/ella/vostè": "comple", 
        "nosaltres": "comprem", "vosaltres": "compreu", "ells/elles/vostès": "compren"
    },
    "muntar (to mount, to ride)": {
        "jo": "munto", "tu": "muntes", "ell/ella/vostè": "munta", 
        "nosaltres": "muntem", "vosaltres": "munteu", "ells/elles/vostès": "munten"
    },
    "negar (to deny)": {
        "jo": "nego", "tu": "negues", "ell/ella/vostè": "nega", 
        "nosaltres": "negem", "vosaltres": "negueu", "ells/elles/vostès": "neguen"
    },
    "escriure (to write)": {
        "jo": "escric", "tu": "escrius", "ell/ella/vostè": "escriu", 
        "nosaltres": "escrivim", "vosaltres": "escriviu", "ells/elles/vostès": "escriuen"
    },
    "parlar (to speak)": {
        "jo": "parlo", "tu": "parles", "ell/ella/vostè": "parla", 
        "nosaltres": "parlem", "vosaltres": "parleu", "ells/elles/vostès": "parlen"
    },
    "córrer (to run)": {
        "jo": "corro", "tu": "corres", "ell/ella/vostè": "corre", 
        "nosaltres": "correm", "vosaltres": "correu", "ells/elles/vostès": "corren"
    },
    "fer (to do, to make)": {
        "jo": "faig", "tu": "fes", "ell/ella/vostè": "fa", 
        "nosaltres": "fem", "vosaltres": "feu", "ells/elles/vostès": "fan"
    },
    "tenir (to have)": {
        "jo": "tinc", "tu": "tenes", "ell/ella/vostè": "té", 
        "nosaltres": "tenim", "vosaltres": "teniu", "ells/elles/vostès": "tenen"
    },
    "beure (to drink)": {
        "jo": "beu", "tu": "beus", "ell/ella/vostè": "beu", 
        "nosaltres": "bevem", "vosaltres": "beveu", "ells/elles/vostès": "beuen"
    },
    "dormir (to sleep)": {
        "jo": "dormo", "tu": "dorms", "ell/ella/vostè": "dorm", 
        "nosaltres": "dormim", "vosaltres": "dormiu", "ells/elles/vostès": "dormen"
    },
    "veure (to see)": {
        "jo": "veig", "tu": "veus", "ell/ella/vostè": "veu", 
        "nosaltres": "veiem", "vosaltres": "veieu", "ells/elles/vostès": "veuen"
    },
    "anar (to go)": {
        "jo": "vaig", "tu": "vas", "ell/ella/vostè": "va", 
        "nosaltres": "anem", "vosaltres": "aneu", "ells/elles/vostès": "van"
    },
    "sentir (to feel, to hear)": {
        "jo": "sento", "tu": "sents", "ell/ella/vostè": "sent", 
        "nosaltres": "sentim", "vosaltres": "sentiu", "ells/elles/vostès": "senten"
    },
    "venir (to come)": {
        "jo": "vinc", "tu": "vens", "ell/ella/vostè": "ve", 
        "nosaltres": "venim", "vosaltres": "veniu", "ells/elles/vostès": "venen"
    },
    "escoltar (to listen)": {
        "jo": "escolto", "tu": "escoltes", "ell/ella/vostè": "escolta", 
        "nosaltres": "escoltem", "vosaltres": "escolteu", "ells/elles/vostès": "escolten"
    },
    "mostrar (to show)": {
        "jo": "mostro", "tu": "mostres", "ell/ella/vostè": "mostra", 
        "nosaltres": "mostrem", "vosaltres": "mostreu", "ells/elles/vostès": "mostren"
    },
    "treballar (to work)": {
        "jo": "treballo", "tu": "treballes", "ell/ella/vostè": "treballa", 
        "nosaltres": "treballem", "vosaltres": "treballeu", "ells/elles/vostès": "treballen"
    },
    "aprendre (to learn)": {
        "jo": "aprenc", "tu": "aprenes", "ell/ella/vostè": "aprèn", 
        "nosaltres": "aprenem", "vosaltres": "apreneu", "ells/elles/vostès": "aprenen"
    },
    "estimar (to love)": {
        "jo": "estimo", "tu": "estimes", "ell/ella/vostè": "estima", 
        "nosaltres": "estimem", "vosaltres": "estimeu", "ells/elles/vostès": "estimen"
    },
    "entendre (to understand)": {
        "jo": "entenc", "tu": "entens", "ell/ella/vostè": "enten", 
        "nosaltres": "entenem", "vosaltres": "enteneu", "ells/elles/vostès": "enten"
    },
    "obrir (to open)": {
        "jo": "obro", "tu": "obres", "ell/ella/vostè": "obre", 
        "nosaltres": "obrim", "vosaltres": "obriu", "ells/elles/vostès": "obren"
    },
    "tancar (to close)": {
        "jo": "tanque", "tu": "tanques", "ell/ella/vostè": "tanque", 
        "nosaltres": "tanquem", "vosaltres": "tanqueu", "ells/elles/vostès": "tanquen"
    },
    "arribar (to arrive)": {
        "jo": "arribo", "tu": "arribes", "ell/ella/vostè": "arriba", 
        "nosaltres": "arribem", "vosaltres": "arribeu", "ells/elles/vostès": "arriben"
    },
    "sortir (to leave)": {
        "jo": "surto", "tu": "surt", "ell/ella/vostè": "surts", 
        "nosaltres": "sortim", "vosaltres": "sortiu", "ells/elles/vostès": "surt"
    },
    "voler (to want)": {
        "jo": "vull", "tu": "vols", "ell/ella/vostè": "vol", 
        "nosaltres": "volem", "vosaltres": "voleu", "ells/elles/vostès": "volen"
    },
    "cuinar (to cook)": {
        "jo": "cuino", "tu": "cuis", "ell/ella/vostè": "cuina", 
        "nosaltres": "cocinem", "vosaltres": "coceu", "ells/elles/vostès": "cocinen"
    },
    "jugar (to play)": {
        "jo": "jugo", "tu": "jugues", "ell/ella/vostè": "juga", 
        "nosaltres": "juguem", "vosaltres": "jugueu", "ells/elles/vostès": "juguen"
    },
    "viure (to live)": {
        "jo": "vivia", "tu": "vies", "ell/ella/vostè": "viu", 
        "nosaltres": "vivim", "vosaltres": "viviu", "ells/elles/vostès": "viuen"
    },
    "comprendre (to understand)": {
        "jo": "comprendre", "tu": "compreens", "ell/ella/vostè": "compreu", 
        "nosaltres": "comprenem", "vosaltres": "compreneu", "ells/elles/vostès": "compren"
    },
    "cantar (to sing)": {
        "jo": "canto", "tu": "cantes", "ell/ella/vostè": "canta", 
        "nosaltres": "cantem", "vosaltres": "canteu", "ells/elles/vostès": "canten"
    },
    "pintar (to paint)": {
        "jo": "pinto", "tu": "pintes", "ell/ella/vostè": "pinta", 
        "nosaltres": "pintem", "vosaltres": "pinteu", "ells/elles/vostès": "pinten"
    }
};


let currentQuestion = 0;
let score = 0;
const verbKeys = Object.keys(verbs);
let correctAnswer = '';

function loadQuestion() {
    const verb = verbKeys[currentQuestion];
    const conjugations = verbs[verb];
    const pronouns = Object.keys(conjugations);

    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    questionElement.textContent = `What is the conjugation of "${verb}" for the pronoun "jo"?`;

    answersElement.innerHTML = ''; // Clear previous answers
    correctAnswer = conjugations['jo']; // Store the correct answer
    
    // Create an array of all answers and shuffle
    const allAnswers = [conjugations['jo'], conjugations['tu'], conjugations['ell/ella/vostè'], conjugations['nosaltres']];
    shuffle(allAnswers);

    // Display answer options
    allAnswers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(answer);
        answersElement.appendChild(answerButton);
    });

    document.getElementById("next-button").style.display = 'none'; // Hide next button initially
    document.getElementById("feedback").textContent = ''; // Clear previous feedback
}

function checkAnswer(selectedAnswer) {
    const feedbackElement = document.getElementById("feedback");
    const scoreElement = document.getElementById("score");

    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Wrong! The correct answer is: ' + correctAnswer;
        feedbackElement.style.color = 'red';
    }

    scoreElement.textContent = 'Score: ' + score;
    document.getElementById("next-button").style.display = 'block'; // Show next button
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= verbKeys.length) {
        document.getElementById("feedback").textContent = 'You have completed the quiz! Your final score is: ' + score;
        document.getElementById("feedback").style.color = 'blue';
        currentQuestion = 0; // Reset quiz
        score = 0;
        document.getElementById("score").textContent = 'Score: 0'; // Reset score display
    } else {
        loadQuestion();
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start quiz
loadQuestion();
