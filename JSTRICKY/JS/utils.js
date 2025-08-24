// create title case  tricky js interview
function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

// Example usage
console.log(toTitleCase("the quick brown fox")); // Output: 'The Quick Brown Fox'

// --------------------------------------------

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


//removeVowels_---------------------------------------------

function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

// ---------------------
const str = "This is a test string with vowels";
console.log(removeVowels(str)); // Output: Ths s  tst strng wth vwls
 str=`Mukesh 15  Bengalore
Vipin 20  Bhatni
Anajli 25  Kolkata
Suraj 25 Ooty
`;

// makeit like ={name:{age,city}}
// { 
// Vipin: {age:20,city:Bhatni},

//
//}


// -----flat object------------------

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));  // Recursive call
    } else {
      result.push(item);
    }
  }
  return result;
}

/// flaten object
function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], fullKey, result); // Recursive call
    } else {
      result[fullKey] = obj[key];
    }
  }

  return result;
}
const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: {
          name: 'USA',
          code: 'US'
        }
      },
      isActive: true
    };
const expected = {
      'id': 1,
      'name': 'John Doe',
      'email': 'john@example.com',
      'address.street': '123 Main St',
      'address.city': 'New York',
      'address.state': 'NY',
      'address.country.name': 'USA',
      'address.country.code': 'US',
      'isActive':true
};

//  clean object
function cleanObject(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(cleanObject)
      .filter(v => v !== null && v !== undefined);
  }

  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const key in obj) {
      const value = cleanObject(obj[key]);
      if (value !== null && value !== undefined) {
        result[key] = value;
      }
    }
    return result;
  }

  return obj;
}

// const messy = {
//   name: 'Mukesh',
//   age: null,
//   location: {
//     city: 'Bangalore',
//     pincode: undefined,
//     coords: {
//       lat: null,
//       long: 77.5
//     }
//   },
//   tags: [null, 'developer', undefined]
// };

// console.log(cleanObject(messy));
// {
//   name: 'Mukesh',
//   location: {
//     city: 'Bangalore',
//     coords: {
//       long: 77.5
//     }
//   },
//   tags: ['developer']
// }


/**
 * Reverse a string ,
 * is palindome,
 * binary search
 * convert to binarys string
 * 
 */

