const Personne = require('./personModel'); // Importer le modèle

const nouvellePersonne = new Personne({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Burger']
});

nouvellePersonne.save((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Personne enregistrée :', data);
  }
});


const Personne = require('./personModel'); // Importer le modèle

const arrayOfPeople = [
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
  { name: 'Bob', age: 28, favoriteFoods: ['Burger', 'Salad'] }
];

Personne.create(arrayOfPeople, (err, people) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Personnes créées :', people);
  }
});
