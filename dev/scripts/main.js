$(function() {
	$.getJSON('petfinder_date.json')
		.then((res) => {
			console.log(res);
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
			
			//Exercise #2
			//Filter out the Dogs and map an array of just their names
			
			//Exercise #3
			//Filter out only animals that are a dog and are a mix
			//And output an object that looks like 
			/*
			{
				name: 'Dog Name'
				breed: 'Dog Breed'
			}
			*/

			//Exercise #4
			//Using the Reduce method to group animal type in an array of objects
			/*
			{
				'Dog': [],
				...
			}
			*/

			//Exercise #5
			//Collect and count the number of different sexes
			/*
			{
				Dog: 25,
				Rabbit: 100,
				...
			}
			*/

		});
});