const pi = 3.1415
const radius = 5
const area = pi * radius**2
console.log(area)
// had to make sure it worked for the area
const plants = 20
const space = .8
let weeks = 3
const plantsPerWeek = plants * 2**weeks
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