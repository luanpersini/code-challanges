//ts-node solutions\array-filter-by-condition.ts
const users = [
  {
    name: 'John',
    email: 'johnson@mail.com',
    address: 'USA'
  },
  {
    name: 'John',
    email: 'tom@mail.com',
    address: 'England'
  },
  {
    name: 'Mark',
    email: 'mark@mail.com',
    address: 'England'
  }
]

const filterArrayOfObjects = (arrayToBeFiltered: any[], filterConditions: any) => {
  Object.keys(filterConditions).forEach((key) => {
    if (filterConditions[key] === '') delete filterConditions[key]
  })

  const filteredItems = arrayToBeFiltered.filter((item) => {
    for (const key in filterConditions) {
      if (item[key] === undefined || item[key] != filterConditions[key]) return false
    }

    return true
  })
  return filteredItems
}

const filter = {
  address: 'England',
  name: 'John'
}
const result = filterArrayOfObjects(users, filter)
console.log('result')
console.log(result)
// [ { name: 'John', email: 'tom@mail.com', address: 'England' } ]

const filter2 = {
  address: '',
  name: 'John'
}
const result2 = filterArrayOfObjects(users, filter2)
console.log('result 2')
console.log(result2)
/*
[
  { name: 'John', email: 'johnson@mail.com', address: 'USA' },
  { name: 'John', email: 'tom@mail.com', address: 'England' }
]
*/