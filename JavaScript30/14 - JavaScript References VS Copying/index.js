
 // start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let name = "Scott";
let name2 = name
name = "Pelon"
console.log(name, name2)
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team)
    // You might think we can just do something like this:
team[3] = "lux"

// console.log(team, players)

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way
    const team2 = players.slice()


console.log('team2', team2)

    // or create a new array and concat the old one in

    const team3 = [].concat(players)

    console.log('team3', team3)

    // or use the new ES6 Spread

    const team4 = [...players]
    team4[3] = "Jones"
    console.log('team4', team4, players)

    // now when we update it, the original one isn't changed

    const team5 = Array.from(players)

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Scott Silver',
      age: 47
    };

    // and think we make a copy:


    // how do we take a copy instead?
    cap2 = Object.assign({}, person, {number: 99, age: 12})

    console.log('cap2', cap2)


    // We will hopefully soon see the object ...spread

    const cap3 = {...person}

    console.log('cap3',cap3)

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


const scott = {
    name: "scott",
    age: 47,
    social: {
        linkedin: 'linkedin.com/Scott47',
        github: 'github.com/Scott47'
    }
}
console.clear()
console.log(scott)

const dev = Object.assign({}, scott)
dev.name = "pelon"
dev.social.linkedin = "Superfly"
console.log(dev, scott)