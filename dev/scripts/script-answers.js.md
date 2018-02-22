$(function() {
	$.getJSON('petfinder_date.json')
		.then((res) => {
			const pets = res.petfinder.pets.pet;
			console.log(pets);
			//Exercise #1 
			//Create an array of objects like 
			/*
			{
				name: 'Animal Name',
				age: 'Animal Age',
				size: 'Animal Size',
				type: 'Animal Type'
			}
			*/
			const animalArray = pets.map((animal) => {
				return {
					name: animal.name.$t,
					age: animal.age.$t,
					size: animal.size.$t,
					type: animal.animal.$t
				}
			});
			console.log(animalArray);
			//Exercise #2
			//Filter out the Dogs and map an array of just their names
			const dogNames = pets
				.filter( animal => animal.animal.$t === 'Dog' )
				.map( animal => animal.name.$t );
			
			console.log(dogNames);
			
			//Exercise #3
			//Filter out only animals that are a dog and are a mix
			//And output an object that looks like 
			/*
			{
				name: 'Dog Name'
				breed: 'Dog Breed'
			}
			*/
			const mixedDogs = pets
				.filter(dog => dog.animal.$t === 'Dog')
				.filter(dog => dog.mix.$t === 'yes')
				.map(dog => {
					return {
						name: dog.name.$t,
						breed: dog.breeds.breed.$t
					}
				});

			console.log(mixedDogs);

			//Exercise #4
			//Using the Reduce method to group animal type in an array of objects
			/*
			{
				'Dog': [],
				...
			}
			*/
			const types = pets
				.reduce((prev,curr) => {
					const key = curr.animal.$t;
					if(prev[key] === undefined) {
						prev[key] = [];
					}
					prev[key].push(curr)
					return prev;
				}, {});

			console.log(types)

			//Exercise #5
			//Collect and count the number of different sexes
			/*
			{
				Dog: 25,
				Rabbit: 100,
				...
			}
			*/
			const sexCount = pets
				.reduce((prev,curr) => {
					const key = curr.sex.$t;
					if(prev[key] === undefined) {
						prev[key] = 0;
					}
					prev[key]++;
					return prev
				},{});

			console.log(sexCount);

		});
});