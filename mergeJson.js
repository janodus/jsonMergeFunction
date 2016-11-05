//=====================
// SETUP 
//=====================

//paste your long object array into the datatest variable below
var datatest = [
  {
    "objectID": 116272,
    "food_type": "Steak",
    "stars_count": 4.2,
    "reviews_count": 204,
    "neighborhood": "Pepper Pike",
    "phone_number": "(216) 378-8988",
    "price_range": "$31 to $50",
    "dining_style": "Fine Dining"
  },
  {
    "objectID": 108532,
    "food_type": "Sushi",
    "stars_count": 4.3,
    "reviews_count": 75,
    "neighborhood": "Medina",
    "phone_number": "(330) 661-0606",
    "price_range": "$30 and under",
    "dining_style": "Casual Dining"
  },
  {
    "objectID": 96892,
    "food_type": "Italian",
    "stars_count": 4.3,
    "reviews_count": 161,
    "neighborhood": "Bath",
    "phone_number": "(330) 666-9990",
    "price_range": "$30 and under",
    "dining_style": "Casual Dining"
  },
  {
    "objectID": 108532,
    "addition" : "new Data",
    "more_addition" : "more new Data!"
  }];

//=====================
// VARIABLES
//=====================

//this is where I'm pushing the created objects to... 
var newHash = []; // will be stringify'd and logged at end of run
var idIndex = []; // index of objectID's for quick referencing

//=====================
// FUNCTIONS
//=====================

// creates new object based on the current object being iterated over. Called once the current Object
// is confirmed to not be a duplicate case
function addToHash(obj) {
	var venue = new Object;
		for(var props in obj){
			venue[props] = obj[props];  
		}
	//push results to newHash and idIndex respectively	
	newHash.push(venue);
	idIndex.push(venue.objectID);
}



// entry point. Iterates over the array to create another object within the newHash and add an objectID to the idIndex, or catch a duplicate ID and append all props from the duplicate entry to the original
function addFullSet(array) {
	for(var i = 0; i < array.length; i++) {
		// checks to see if the current object in the array's objectID is already in idIndex.
		if (idIndex.includes(array[i].objectID)) {  
			var addToIndex = idIndex.indexOf(array[i].objectID);
			for(var props in array[i]) {
				newHash[addToIndex][props] = array[i][props]; // adds all remaining props to the original
			}
		} else 
		{
			addToHash(array[i]);}	 // adds the current object to newHash as a new object. 
	}
}

//=====================
// RUN AND OUTPUT 
//=====================


addFullSet(datatest); // runs 
console.log("Here's the new data set:")
console.log(JSON.stringify(newHash));





