const pi = 3.1415
const radius = 5
const area = pi * radius**2
console.log(area)
// had to make sure it worked for the area
let plants = 20
const space = .8
let weeks = 1
let plantsPerWeek = plants * 2**weeks
console.log(plantsPerWeek)
// this is the first step, you can change weeks to any number to get the plants per week
const maxPlants = area/space
console.log(maxPlants)
// this lets you know the max amount of plants you can have
let prune = maxPlants*.8
let monitor = maxPlants*.5

console.log(prune)
if (plantsPerWeek > prune) {console.log("Please Prune the  plants")}
    else if (plantsPerWeek <= prune && plantsPerWeek > monitor)
    {console.log("Monitor the plants")}
    else {console.log("plant some more")}
//Week 1 you can keep planting
//Week 2 you need to prune
//Week 3 you need to prune
weeks = 10
plants = 100
plantsPerWeek = plants * 2** weeks
console.log(plantsPerWeek)
// total plants if it grew for 10 weeks without pruning and the starting plants are 100
let newAreaNeeded = plantsPerWeek * space
console.log(newAreaNeeded)
// I found new the new area instead of the new radius, need to fix this but it should be helpful
let newRadius = Math.sqrt(newAreaNeeded/pi)  
console.log(newRadius)
// had to use a math func to make the square root work to find the radius  
// last step below using catch and try mnethod
try {
	if (plantsPerWeek * space < maxPlants) {
		console.log("it works");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}