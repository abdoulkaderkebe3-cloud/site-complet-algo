// Fonctions utilitaires
function toggleSolution(id){
  const el = document.getElementById(id);
  el.classList.toggle('d-none');
}

// Exercice 1 : afficher Bonjour
function corrigerEx1(){
  alert('Solution exécutée : Bonjour');
}

// Exercice 2 : produit de deux nombres
function corrigerEx2(){
  const a = parseFloat(prompt('Saisir le premier nombre (a):'));
  const b = parseFloat(prompt('Saisir le deuxième nombre (b):'));
  if (isNaN(a) || isNaN(b)){
    alert('Entrée non valide. Veuillez saisir des nombres.');
    return;
  }
  const produit = a * b;
  alert('Produit = ' + produit);
}

// Exercice 4 : pair ou impair
function corrigerEx4(){
  const n = parseInt(prompt('Saisir un entier n :'), 10);
  if (isNaN(n)) { alert('Entrée non valide.'); return; }
  const res = (n % 2 === 0) ? 'pair' : 'impair';
  alert('Le nombre ' + n + ' est ' + res + '.');
}

// Exercice 29 : trier un tableau
function corrigerEx29(){
  const s = prompt('Saisir des entiers séparés par des virgules (ex: 5,3,10,1) :');
  if (!s) { alert('Aucune entrée fournie.'); return; }
  const arr = s.split(',').map(x => parseInt(x.trim(), 10));
  if (arr.some(x => isNaN(x))){ alert('Entrée non valide. Tous les éléments doivent être des entiers.'); return; }
  arr.sort((a,b) => a - b);
  alert('Tableau trié : [' + arr.join(', ') + ']');
}

// Exercice 30 : factorielle
function corrigerEx30(){
  const n = parseInt(prompt('Saisir un entier N (>=0) :'), 10);
  if (isNaN(n) || n < 0){ alert('Entrée non valide. N doit être un entier >= 0.'); return; }
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  alert('Factorielle de ' + n + ' = ' + fact);
}

// Exercice 3 : échanger A et B
function corrigerEx3(){
  let a = prompt('Saisir A :');
  let b = prompt('Saisir B :');
  if (a === null || b === null) { alert('Annulé'); return; }
  let t = a;
  a = b;
  b = t;
  alert('Après échange : A = ' + a + ', B = ' + b);
}

// Exercice 5 : plus grand de trois
function corrigerEx5(){
  const a = parseFloat(prompt('Saisir a :'));
  const b = parseFloat(prompt('Saisir b :'));
  const c = parseFloat(prompt('Saisir c :'));
  if ([a,b,c].some(x => isNaN(x))){ alert('Entrée non valide'); return; }
  const m = Math.max(a,b,c);
  alert('Le plus grand est : ' + m);
}

// Exercice 6 : note validée
function corrigerEx6(){
  const note = parseFloat(prompt('Saisir la note (0-20) :'));
  if (isNaN(note) || note < 0 || note > 20){ alert('Note invalide'); return; }
  alert(note > 10 ? 'Validé' : 'Non validé');
}

// Exercice 7 : signe du produit
function corrigerEx7(){
  const m = parseFloat(prompt('Saisir m :'));
  const n = parseFloat(prompt('Saisir n :'));
  if (isNaN(m) || isNaN(n)){ alert('Entrée non valide'); return; }
  const p = m * n;
  const res = p > 0 ? 'positif' : (p < 0 ? 'négatif' : 'nul');
  alert('Produit = ' + p + ' => ' + res);
}

// Exercice 10 : remise et TVA
function corrigerEx10(){
  let prix = parseFloat(prompt('Saisir le prix total HT :'));
  if (isNaN(prix) || prix < 0){ alert('Entrée non valide'); return; }
  if (prix > 200) prix = prix * 0.85;
  const ttc = prix * 1.20;
  alert('Montant TTC = ' + ttc.toFixed(2) + ' (après remise si applicable)');
}

// Exercice 11 : facture photocopies
function corrigerEx11(){
  let n = parseInt(prompt('Nombre de photocopies :'), 10);
  if (isNaN(n) || n < 0){ alert('Entrée non valide'); return; }
  let fact = 0;
  let reste = n;
  const tranche1 = Math.min(reste, 10); fact += tranche1 * 0.25; reste -= tranche1;
  const tranche2 = Math.min(Math.max(reste,0), 20); fact += tranche2 * 0.20; reste -= tranche2;
  if (reste > 0) fact += reste * 0.10;
  alert('Montant à payer : ' + fact.toFixed(2) + ' DH');
}

// Exercice 12 : catégorie par âge
function corrigerEx12(){
  const age = parseInt(prompt('Saisir l\'âge :'), 10);
  if (isNaN(age) || age < 0){ alert('Entrée non valide'); return; }
  let cat = 'Catégorie non définie';
  if (age >= 6 && age <= 7) cat = 'poussin';
  else if (age >= 8 && age <= 9) cat = 'pupille';
  else if (age >= 10 && age <= 11) cat = 'minime';
  else if (age >= 12) cat = 'cadet';
  alert('Catégorie : ' + cat);
}

// Exercice 14 : "Bonsoir" 10 fois (Tant Que)
function corrigerEx14(){
  let out = '';
  let i = 1;
  while (i <= 10){ out += 'Bonsoir\n'; i++; }
  alert(out);
}

// Exercice 15 : somme 1..10 (Tant Que)
function corrigerEx15(){
  let s = 0; let i = 1;
  while (i <= 10){ s += i; i++; }
  alert('S = ' + s);
}

// Exercice 16 : somme 1..N (Tant Que)
function corrigerEx16(){
  const N = parseInt(prompt('Saisir N (>=0) :'), 10);
  if (isNaN(N) || N < 0){ alert('Entrée non valide'); return; }
  let s = 0; let i = 1;
  while (i <= N){ s += i; i++; }
  alert('S = ' + s);
}

// Exercice 17 : "Bonjour" 10 fois (Pour)
function corrigerEx17(){
  let out = '';
  for (let i = 1; i <= 10; i++) out += 'Bonjour\n';
  alert(out);
}

// Exercice 20 : table de 5
function corrigerEx20(){
  let out = '';
  for (let i = 1; i <= 10; i++) out += `5 x ${i} = ${5*i}\n`;
  alert(out);
}

// Exercice 25 : saisir 10 entiers
function corrigerEx25(){
  const s = prompt('Saisir 10 entiers séparés par des virgules :');
  if (!s) { alert('Aucune entrée fournie'); return; }
  const arr = s.split(',').map(x => parseInt(x.trim(), 10));
  if (arr.length !== 10 || arr.some(x => isNaN(x))){ alert('Veuillez saisir exactement 10 entiers valides.'); return; }
  alert('Tableau : [' + arr.join(', ') + ']');
}

// Exercice 26 : moyenne de 10 notes
function corrigerEx26(){
  const s = prompt('Saisir 10 notes séparées par des virgules (0-20) :');
  if (!s) { alert('Aucune entrée fournie'); return; }
  const arr = s.split(',').map(x => parseFloat(x.trim()));
  if (arr.length !== 10 || arr.some(x => isNaN(x) || x < 0 || x > 20)){ alert('Entrez 10 notes valides (0-20).'); return; }
  const moy = arr.reduce((a,b)=>a+b,0)/10;
  alert('Moyenne = ' + moy.toFixed(2));
}

// Exercice 27 : max de 10 entiers
function corrigerEx27(){
  const s = prompt('Saisir 10 entiers séparés par des virgules :');
  if (!s) { alert('Aucune entrée fournie'); return; }
  const arr = s.split(',').map(x => parseFloat(x.trim()));
  if (arr.length !==10 || arr.some(x=>isNaN(x))){ alert('Veuillez saisir 10 entiers valides.'); return; }
  const m = Math.max(...arr);
  alert('Maximum = ' + m);
}

// Exercice 28 : occurrences d'un élément
function corrigerEx28(){
  const s = prompt('Saisir 10 entiers séparés par des virgules :');
  if (!s){ alert('Aucune entrée'); return; }
  const arr = s.split(',').map(x => parseInt(x.trim(),10));
  if (arr.length !== 10 || arr.some(x => isNaN(x))){ alert('Veuillez saisir 10 entiers valides.'); return; }
  const N = parseInt(prompt('Saisir l\'élément N à rechercher :'),10);
  if (isNaN(N)){ alert('Entrée non valide'); return; }
  const count = arr.reduce((c,v)=>c + (v===N?1:0), 0);
  alert('Occurrences de ' + N + ' = ' + count);
}

// Exercice 52 : prix TTC
function corrigerEx52(){
  const prixHT = parseFloat(prompt('Saisir prix HT :'));
  const tva = parseFloat(prompt('Saisir taux de TVA (%) :'));
  if (isNaN(prixHT) || isNaN(tva)){ alert('Entrée non valide'); return; }
  const ttc = prixHT * (1 + tva/100);
  alert('Prix TTC = ' + ttc.toFixed(2));
}

// Exercice 53 : procédure pair/impair
function corrigerEx53(){
  const a = parseInt(prompt('Saisir un entier :'),10);
  if (isNaN(a)){ alert('Entrée non valide'); return; }
  alert(a % 2 === 0 ? 'pair' : 'impair');
}

// Exercice 54 : longueur d'une chaîne
function corrigerEx54(){
  const s = prompt('Saisir une chaîne :');
  if (s === null) { alert('Annulé'); return; }
  alert('Longueur = ' + s.length);
}

// Exercice 55 : compter caractère
function corrigerEx55(){
  const s = prompt('Saisir une chaîne :');
  if (s === null){ alert('Annulé'); return; }
  const c = prompt('Saisir le caractère à compter :');
  if (c === null || c.length === 0){ alert('Entrée non valide'); return; }
  const ch = c[0];
  const count = Array.from(s).reduce((acc,cur)=>acc + (cur === ch ? 1 : 0), 0);
  alert('Le caractère "' + ch + '" apparaît ' + count + ' fois.');
}

// Exercice 58 : PGCD (Euclide)
function corrigerEx58(){
  let a = parseInt(prompt('Saisir a (entier > 0) :'),10);
  let b = parseInt(prompt('Saisir b (entier > 0) :'),10);
  if (isNaN(a) || isNaN(b) || a<=0 || b<=0){ alert('Entrée non valide'); return; }
  while (b !== 0){ const r = a % b; a = b; b = r; }
  alert('PGCD = ' + a);
}

// Exercice 63 : factorielle récursive
function factRec(n){ return n <= 1 ? 1 : n * factRec(n-1); }
function corrigerEx63(){
  const n = parseInt(prompt('Saisir n (>=0) :'),10);
  if (isNaN(n) || n < 0){ alert('Entrée non valide'); return; }
  alert('Factorielle = ' + factRec(n));
}

// Exercice 64 : somme récursive
function sommeRec(n){ return n <= 0 ? 0 : n + sommeRec(n-1); }
function corrigerEx64(){
  const n = parseInt(prompt('Saisir n (>=0) :'),10);
  if (isNaN(n) || n < 0){ alert('Entrée non valide'); return; }
  alert('Somme = ' + sommeRec(n));
}

// Exercice 65 : puissance récursive
function powRec(x,n){ return n === 0 ? 1 : x * powRec(x,n-1); }
function corrigerEx65(){
  const x = parseFloat(prompt('Saisir x (réel) :'));
  const n = parseInt(prompt('Saisir n (entier >=0) :'),10);
  if (isNaN(x) || isNaN(n) || n < 0){ alert('Entrée non valide'); return; }
  alert('x^n = ' + powRec(x,n));
}

// Exercice 68 : PGCD récursif
function pgcdRec(a,b){ return b === 0 ? a : pgcdRec(b, a % b); }
function corrigerEx68(){
  let a = parseInt(prompt('Saisir a (entier > 0) :'),10);
  let b = parseInt(prompt('Saisir b (entier > 0) :'),10);
  if (isNaN(a) || isNaN(b) || a<=0 || b<=0){ alert('Entrée non valide'); return; }
  alert('PGCD = ' + pgcdRec(a,b));
}

// Exercice 70 : Fibonacci récursif
function fibRec(n){ return n <= 1 ? 1 : fibRec(n-1) + fibRec(n-2); }
function corrigerEx70(){
  const n = parseInt(prompt('Saisir n (>=0, petit entier recommandé) :'),10);
  if (isNaN(n) || n < 0){ alert('Entrée non valide'); return; }
  const val = fibRec(n);
  alert('F(' + n + ') = ' + val);
}

// Ouvre la fiche de cours (page imprimable)
function openFiche(){ window.location.href = 'fiche.html'; }

// --- Données des 70 exercices (id, titre, description, pseudo) ---
const exercisesData = [
  {id:1, title:'Afficher "Bonjour"', desc:"Afficher 'Bonjour'.", pseudo:'ÉCRIRE "Bonjour"'},
  {id:2, title:'Produit de deux nombres', desc:'Saisir deux nombres et afficher leur produit.', pseudo:'LIRE a, b\nproduit ← a * b\nÉCRIRE produit'},
  {id:3, title:'Échanger A et B', desc:'Échanger le contenu de deux entiers A et B.', pseudo:'T ← A\nA ← B\nB ← T'},
  {id:4, title:'Pair ou impair', desc:'Dire si un entier est pair ou impair.', pseudo:'SI n % 2 = 0 ALORS AFFICHER "Pair" SINON AFFICHER "Impair"'},
  {id:5, title:'Plus grand de trois', desc:'Afficher le plus grand de trois entiers.', pseudo:'max ← a\nSI b > max ALORS max ← b\nSI c > max ALORS max ← c\nÉCRIRE max'},
  {id:6, title:'Note validée', desc:'Vérifier si une note (0-20) est validée (>10).', pseudo:'SI note > 10 ALORS ÉCRIRE "Validé" SINON ÉCRIRE "Non validé"'},
  {id:7, title:'Signe du produit', desc:'Produit de m et n : positif/négatif/nul.', pseudo:'prod ← m*n\nSI prod>0 ALORS...'},
  {id:8, title:'Valeur absolue', desc:'Calculer la valeur absolue d’un entier.', pseudo:'SI n < 0 ALORS n ← -n\nÉCRIRE n'},
  {id:9, title:'Moyenne de trois', desc:'Calculer la moyenne de trois entiers.', pseudo:'moy ← (a+b+c)/3\nÉCRIRE moy'},
  {id:10, title:'Réduction & TVA', desc:'Calculer TTC avec remise si HT > 200 et TVA 20%.', pseudo:'SI prixHT>200 ALORS prixHT*=0.85\nTTC=prixHT*1.2'},
  {id:11, title:'Facturation photocopies', desc:'Calculer facture selon tranches.', pseudo:'Calcul par tranches: 0.25, 0.20, 0.10'},
  {id:12, title:'Catégorie par âge', desc:'Catégoriser enfant selon l’âge.', pseudo:'SELON age AFFICHER categorie'},
  {id:13, title:'Mois en lettre', desc:'Afficher le mois correspondant à un numéro (1-12).', pseudo:'Table des mois ou SWITCH'},
  {id:14, title:'"Bonsoir" 10 fois (Tant Que)', desc:'Afficher "Bonsoir" 10 fois.', pseudo:'i←1 TANTQUE i≤10 FAIRE ÉCRIRE "Bonsoir" i←i+1'},
  {id:15, title:'Somme 1..10 (Tant Que)', desc:'Calculer S=1+...+10.', pseudo:'S←0 i←1 TANTQUE i≤10 S←S+i i←i+1'},
  {id:16, title:'Somme 1..N (Tant Que)', desc:'Calculer S=1+...+N.', pseudo:'LIRE N S←0 i←1 TANTQUE i≤N S←S+i i←i+1'},
  {id:17, title:'"Bonjour" 10 fois (Pour)', desc:'Pour i de 1 à 10 écrire "Bonjour".', pseudo:'POUR i DE 1 A 10 FAIRE ÉCRIRE "Bonjour"'},
  {id:18, title:'Somme 1..10 (Pour)', desc:'S=1+...+10 en utilisant Pour.', pseudo:'POUR i DE 1 A 10 S←S+i FIN POUR'},
  {id:19, title:'Somme 1..N (Pour)', desc:'S=1+...+N en utilisant Pour.', pseudo:'POUR i DE 1 A N S←S+i FIN POUR'},
  {id:20, title:'Table de 5', desc:'Afficher la table de multiplication de 5 (1..10).', pseudo:'POUR i DE 1 A 10 ÉCRIRE 5*i'},
  {id:21, title:'Table (n)', desc:'Afficher la table de multiplication d’un entier saisi.', pseudo:'POUR i DE 1 A 10 ÉCRIRE n*i'},
  {id:22, title:'"Bonjour" (Répt jusqu’à)', desc:'Afficher "Bonjour" 10 fois avec Répéter Jusqu’à.', pseudo:'Répéter ÉCRIRE "Bonjour" i++ Jusquà i>10'},
  {id:23, title:'Somme 1..10 (Répt)', desc:'Somme 1..10 avec Répéter Jusqu’à.', pseudo:'utiliser Répéter Jusquà'},
  {id:24, title:'Table de 8 (Répt)', desc:'Afficher la table de 8 avec Répéter Jusqu’à.', pseudo:'POUR i DE 1 A 10 ÉCRIRE 8*i'},
  {id:25, title:'Saisir 10 entiers', desc:'Saisir 10 entiers et les afficher.', pseudo:'LIRE tableau[1..10]\nÉCRIRE tableau'},
  {id:26, title:'Moyenne de 10 notes', desc:'Saisir 10 notes et afficher leur moyenne.', pseudo:'moy←somme/10'},
  {id:27, title:'Maximum de 10 entiers', desc:'Trouver le maximum parmi 10 entiers.', pseudo:'parcourir et garder max'},
  {id:28, title:'Occurrences d\'un élément', desc:'Compter occurrences de N dans un tableau.', pseudo:'compte++ si égal'},
  {id:29, title:'Trier un tableau', desc:'Trier 10 entiers en ordre croissant.', pseudo:'utiliser sort ou tri à bulles'},
  {id:30, title:'Factorielle', desc:'Calculer N! pour N saisi.', pseudo:'fact←1 POUR i DE 1 A N fact←fact*i'},
  {id:31, title:'Pairs entre 0 et N', desc:'Afficher nombres pairs de 0 à N.', pseudo:'POUR i DE 0 A N SI i%2=0 ÉCRIRE i'},
  {id:32, title:'Somme impaires 1..N', desc:'Somme des impaires jusqu\'à N.', pseudo:'PARCOURIR et accumuler si i%2==1'},
  {id:33, title:'PGCD (itératif)', desc:'Calculer PGCD de deux entiers.', pseudo:'algorithme d\'Euclide'},
  {id:34, title:'Triangle d\'entiers', desc:'Afficher triangle avec répétition du numéro.', pseudo:'double boucle ou pattern'},
  {id:35, title:'Nombre de chiffres', desc:'Calculer le nombre de chiffres d\'un entier.', pseudo:'diviser par 10 jusqu\'à 0'},
  {id:36, title:'Inverser les chiffres', desc:'Inverser les chiffres d\'un entier.', pseudo:'boucle mod10 etc.'},
  {id:37, title:'Triangle d\'étoiles', desc:'Afficher triangle d\'étoiles N niveaux.', pseudo:'gestion d\'espaces et d\'étoiles'},
  {id:38, title:'Nombre pairs/impairs (tableau)', desc:'Compter pairs et impairs dans un tableau.', pseudo:'parcourir et incrémenter'},
  {id:39, title:'Test de primalité', desc:'Dire si N est premier.', pseudo:'tester divisibilité jusqu\'à √N'},
  {id:40, title:'Séparer pairs et impairs', desc:'Mettre pairs dans T1 et impairs dans T2.', pseudo:'parcourir et push'},
  {id:41, title:'Compte occurrences (fin 0)', desc:'Lire suite d\'entiers terminée par 0 et compter 5.', pseudo:'boucle jusqu\'à 0 compteur++'},
  {id:42, title:'Vérifier consécutifs', desc:'Dire si 10 entiers sont consécutifs.', pseudo:'vérifier différence entre max et min et unicité'},
  {id:43, title:'Diff somme pairs/impairs', desc:'(somme pairs) - (somme impairs).', pseudo:'somme séparée puis différence'},
  {id:44, title:'x puissance n (itératif)', desc:'Calculer x^n.', pseudo:'boucle multiplicative ou pow'},
  {id:45, title:'Tester égalité de tableaux', desc:'Comparer deux tableaux élément par élément.', pseudo:'parcourir et comparer'},
  {id:46, title:'Compter doublons', desc:'Compter éléments répétés dans un tableau.', pseudo:'utiliser map/frequence'},
  {id:47, title:'Facturation photocopies (rép)', desc:'Même que Ex11, exemple répété.', pseudo:'par tranches'},
  {id:48, title:'Caractère lettre/minuscule', desc:'Tester si un caractère est lettre et sa casse.', pseudo:'utiliser codes ASCII'},
  {id:49, title:'Décaler zéros', desc:'Décaler les zéros à la fin du tableau en gardant l\'ordre.', pseudo:'filtrer non-nuls puis ajouter zéros'},
  {id:50, title:'Trier 3 entiers (A<B<C)', desc:'Permuter A,B,C pour obtenir A<B<C.', pseudo:'trier 3 valeurs'},
  {id:51, title:'Échanger A et B sans variable', desc:'Permuter A et B sans variable supplémentaire.', pseudo:'A=A+B;B=A-B;A=A-B (ou XOR)'},
  {id:52, title:'Fonction prix TTC', desc:'Fonction qui calcule prix TTC.', pseudo:'prixTTC=prixHT*(1+tva/100)'},
  {id:53, title:'Procédure pair/impair', desc:'Procédure qui affiche pair/impair.', pseudo:'si a%2==0 afficher pair sinon impair'},
  {id:54, title:'Longueur d\'une chaîne', desc:'Retourne nombre de caractères.', pseudo:'return longueur(s)'},
  {id:55, title:'Compter caractère', desc:'Compter occurrences d\'un caractère dans une chaîne.', pseudo:'parcourir et compter'},
  {id:56, title:'Valeur absolue (procédure)', desc:'Procédure qui calcule valeur absolue.', pseudo:'si x<0 return -x else return x'},
  {id:57, title:'Table de multiplication (procédure)', desc:'Afficher la table de x.', pseudo:'POUR i DE 1 A 10 ÉCRIRE x*i'},
  {id:58, title:'PGCD (fonction)', desc:'PGCD de deux entiers strictement positifs.', pseudo:'algorithme d\'Euclide itératif'},
  {id:59, title:'Saisie, somme & produit', desc:'Lire deux nombres, calculs et signes.', pseudo:'lire a,b afficher somme et produit et signes'},
  {id:60, title:'Pairs pourcentage', desc:'Lire liste terminée par -1 ; afficher nombre pairs et %.', pseudo:'compter pairs et calcul pourcentage'},
  {id:61, title:'Liste paires M..N', desc:'Afficher paires entre M et N si M<N.', pseudo:'boucle de M à N si pair afficher'},
  {id:62, title:'Tester nombre premier (procédure)', desc:'Procédure vérifiant primalité.', pseudo:'tester divisibilité'},
  {id:63, title:'Factorielle récursive', desc:'Factorielle via récursion.', pseudo:'fact(n)=1 si n<=1 sinon n*fact(n-1)'},
  {id:64, title:'Somme récursive', desc:'Somme 1..N récursive.', pseudo:'somme(n)=0 si n==0 sinon n + somme(n-1)'},
  {id:65, title:'Puissance récursive', desc:'x^n récursif.', pseudo:'pow(x,n)=1 si n==0 sinon x*pow(x,n-1)'},
  {id:66, title:'Afficher 0..10 récursif', desc:'Fonction récursive qui affiche 0 à 10.', pseudo:'appel récursif incrémental'},
  {id:67, title:'Afficher A..B récursif', desc:'Afficher entiers de A à B récursivement.', pseudo:'si A>B fin sinon afficher et appeler A+1'},
  {id:68, title:'PGCD récursif', desc:'PGCD via algorithme d\'Euclide récursif.', pseudo:'pgcd(a,b)= b==0 ? a : pgcd(b,a%b)'},
  {id:69, title:'Afficher matrice récursive', desc:'Afficher éléments d\'une matrice', pseudo:'récursif sur lignes/colonnes'},
  {id:70, title:'Fibonacci récursif', desc:'Suite de Fibonacci (F(0)=F(1)=1).', pseudo:'F(n)=1 si n<=1 sinon F(n-1)+F(n-2)'}
];

// Render the exercises as cards
function renderExercises(){
  const container = document.getElementById('exercisesList');
  if (!container) return;
  let html = '';
  exercisesData.forEach(ex => {
    const fnName = 'corrigerEx' + ex.id;
    const implemented = typeof window[fnName] === 'function';
    const actionBtn = implemented
      ? `<button class="btn btn-primary btn-exec me-2" onclick="executer(${ex.id})"><i class="bi bi-play-fill me-1"></i> Exécuter</button>`
      : `<button class="btn btn-outline-secondary" disabled>Non implémenté</button>`;

    html += `
      <div class="col-12 col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Exercice ${ex.id} — ${ex.title}</h5>
            <p class="card-text">${ex.desc}</p>
            ${actionBtn}
          </div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

// Generic executer handler: calls specific implemented functions when possible, otherwise shows pseudo-code
function executer(n){
  const fnName = 'corrigerEx' + n;
  const fn = window[fnName];
  // If a specific correction function exists, call it safely
  if (typeof fn === 'function'){
    try{
      return fn();
    }catch(err){
      console.error('Erreur dans ' + fnName + ':', err);
      alert('Erreur lors de l\'exécution de la solution (voir console)');
      return;
    }
  }
  // No pseudo-solutions: inform that the solution is not yet implemented
  alert('Solution non implémentée pour l\'instant.');
}
// Alias for backward compatibility
window.corriger = executer;

// Render on load
document.addEventListener('DOMContentLoaded', renderExercises);

