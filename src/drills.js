import _ from 'lodash'
import faker from 'faker'

const data = _.times(10, (n) => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: _.random(20, 99),
}))

////// ignore above //////
console.log(data)

const age = 50

const result = data
  .filter((user) => user.age > age)
  .sort((a, b) => a.age - b.age)
  .map((user) => `${user.firstName} (${user.age}) is > ${age} years old.`)

console.log('-'.repeat(20))
console.log(result)
// [
//   '<firstName> (<age>) is > 80 years old.',
// ]

// "current user: <name>"
// "current user: <name>"
// "current user: <name>"

////// ignore below //////
// console.log(data)
