const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];

let sumAge = 0;
let countActors = 0;
let averageAge = 0;
let sumBudget = 0;
let actors = [];
let actorsWithTomHanks = [];
let actorsWithTomHanksNames = [];
let filmsWithDirWithoutOsc = [];
let filmsAfter1995 = [];
let filmsWithDirUnder70 = [];
let filmsWithDirUnder70WithoutTomHanks = [];

filmsWithDirWithoutOsc = getFilmsWithDirWithoutOsc(films);
averageAge = getAverageAge(filmsWithDirWithoutOsc);

alert("Средний возраст актеров, которые снимались в фильмах режиссера, которые не получили оскар, составляет " + averageAge + " года.");

filmsAfter1995 = getFilmsAfter1995(films);
actorsWithTomHanks = getActorsWithTomHanks(filmsAfter1995);
actorsWithTomHanksNames = getActorsWithTomHanksNames(actorsWithTomHanks);

alert("Имена актеров, которые играли с Томом Хэнксом, в фильмах после 1995 года: " + actorsWithTomHanksNames);

filmsWithDirUnder70 = getFilmsWithDirUnder70(films);
filmsWithDirUnder70WithoutTomHanks = getFilmsWithDirUnder70WithoutTomHanks(filmsWithDirUnder70);
sumBudget = getSumBudget(filmsWithDirUnder70WithoutTomHanks);

alert("Общий бюджет фильмов, с режиссерами младше 70 лет и в которых не играл Том Хэнкс: $" + sumBudget);

function getFilmsWithDirWithoutOsc(films) {
	filmsWithDirWithoutOsc = films.filter(function(item, i, arr) {
		director = item.director;
		return director.oscarsCount === 0;
	});
	return filmsWithDirWithoutOsc;
}

function getAverageAge(filmsWithDirWithoutOsc) {
	for (let i = 0; i < filmsWithDirWithoutOsc.length; i++) {
		actors = filmsWithDirWithoutOsc[i].actors;
		for (let j = 0; j < actors.length; j++) {
			sumAge += actors[j].age;
			countActors++;
		}
	}
	return (Math.ceil((sumAge / countActors) * 100) / 100);
}

function getFilmsAfter1995(films) {
	filmsAfter1995 = films.filter(function(item, i, arr) {
		return item.creationYear > 1995;
	});
	return filmsAfter1995;
}

function getActorsWithTomHanks(filmsAfter1995) {
	for (let i = 0; i < filmsAfter1995.length; i++) {
		let flag = false;
		actors = filmsAfter1995[i].actors;
		for (let j = 0; j < actors.length; j++) {
			if (actors[j].name === 'Tom Hanks') {
				flag = true;
			}
		}
		if (flag) {
			actorsWithTomHanks.push(actors);
		}
		flag = false;
	}
	return actorsWithTomHanks;
}

function getActorsWithTomHanksNames(actorsWithTomHanks) {
	for (let i = 0; i < actorsWithTomHanks.length; i++) {
		for (let j = 0; j < actorsWithTomHanks[i].length; j++) {
			if (actorsWithTomHanks[i][j].name != 'Tom Hanks') {
				actorsWithTomHanksNames.push(actorsWithTomHanks[i][j].name);
			}
		}
	}
	return actorsWithTomHanksNames;
}

function getFilmsWithDirUnder70(films) {
	for (let i = 0; i < films.length; i++) {
		director = films[i].director;
		if (director.age < 70) {
			filmsWithDirUnder70.push(films[i]);
		}
	}
	return filmsWithDirUnder70;
}

function getFilmsWithDirUnder70WithoutTomHanks(filmsWithDirUnder70) {
	let flag = true;
	for (let i = 0; i < filmsWithDirUnder70.length; i++) {
		actors = filmsWithDirUnder70[i].actors;
		for (let j = 0; j < actors.length; j++) {
			if (actors[j].name === 'Tom Hanks') {
				flag = false;
			}
		}
		if (flag) {
			filmsWithDirUnder70WithoutTomHanks.push(filmsWithDirUnder70[i]);
		}
		flag = true;
	}
	return filmsWithDirUnder70WithoutTomHanks;
}

function getSumBudget(films) {
	for (let i = 0; i < films.length; i++) {
		sumBudget += parseInt(films[i].budget.substr(1).replace(/\s/g,''));
	}
	return sumBudget;
}