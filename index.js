const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const object in collection) {
        callback(collection[object])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []
      for (const object in collection) {
        newCollection.push(callback(collection[object]))
      }
      return newCollection
    },

    //the return value of reduce is stored in an accumulator (result/total)
    reduce: function(collection, callback, accumulator) {
      let total = accumulator ? accumulator : collection[0]
      // sets initial total
      let returnedcollection = Object.assign( {}, collection)
      //const returnedTarget = Object.assign(target, source);
      // in this case, makes a copy of the collection
      accumulator ? "" : delete returnedcollection[0]
      // if theres no start total, delete the first index from the copied collection
      for (const object in returnedcollection) {
        total = (callback(total, returnedcollection[object], returnedcollection))
      }
      return total
    },

    find: function(collection, predicate){
      for (const index in collection) {
        if (predicate(collection[index]) === true) {
          return collection[index]
          }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = []
      for (const object in collection) {
        if (predicate(collection[object]) === true) {
          newCollection.push(collection[object])
        }
      }
      return newCollection
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length-1]
      } else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array) {
      let newArray = []
      for(let index in array) {
        if (array[index]) {
          newArray.push(array[index])
        }
      }
      return newArray
    },

    sortBy: function(collection, callback) {
      return [...collection].sort((a,b) => callback(a) - callback(b))
    },

    flatten: function flatten(array, arg){
      let newArray = []
      for(const index in array){
        if (arg === true){
          if(Array.isArray(array[index])) {
              newArray = newArray.concat(array[index])
          } else {
              newArray.push(array[index])
          }
        }
        else {
          if(Array.isArray(array[index])) {
              newArray = newArray.concat(flatten(array[index]))
          } else {
              newArray.push(array[index])
          }
        }
      }
      return newArray
    },

    uniq: function(collection, sorted = false, callback = (element => element)) {
      let uniqArray = []
      let last = null
      for(let object of collection) {
        if(!(sorted && object === last)) {
          if(!uniqArray.find(element => element.elementValue === callback(object))){
            uniqArray.push({object, elementValue: callback(object)})
            last = object
          }
        }
      }
      return uniqArray.map(element => element.object)
    },

    keys: function(object) {
      const keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },
    // or:
    // keys: function(object) {
    //   return Object.keys(object)
    // },

    values: function(object) {
      // Using for loop
      const values = []
      for (let key in object){
        values.push(object[key])
      }
      return values
    },
    // or:
    // values: function(obj) {
    //   return Object.values(obj)
    // },

    functions: function(collection) {
      let names = []
      for(let key in collection) {
        if (typeof collection[key] === 'function') {
          names.push(collection[key])
        }
      }
      return names.sort()
    }

  }
})()

fi.libraryMethod()
