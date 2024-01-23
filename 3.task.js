const clients = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    married: true,
    age: 72,
    isMember: true,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book", "Hand creme"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    married: true,
    age: 65,
    isMember: false,
    expense: 100,
    purchased: ["Stick", "Blade", "Shampoo"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    married: true,
    age: 22,
    isMember: true,
    expense: 1500,
    purchased: [
      "Lipstick",
      "Sunblock",
      "Nail Polish",
      "Bag",
      "Airtight container",
    ],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    married: true,
    isMember: false,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    married: false,
    isMember: true,
    age: 18,
    expense: 300,
    purchased: ["Toys", "Book", "Aftershave"],
  },
];

//? 1-1. list the first names of clients from A to Z (e.g Abbey, Dev ...)

// const sortedClients = clients.sort((a, b) => a.f_name.localeCompare(b.f_name));
// const sortedFirstNames = sortedClients.map((client) => client.f_name);

// console.log(sortedFirstNames); Or:

const chronologicallyListedClients = clients.sort((a, b) => {
  const nameA = a.f_name.toUpperCase();
  const nameB = b.f_name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

const chronologicallyListedFirstNames = chronologicallyListedClients.map((client) => client.f_name);

console.log(chronologicallyListedFirstNames);

//? 1-2. list the last names of clients who are member of service

const memberLastNames = clients
  .filter(client => client.isMember)
  .map(member => member.l_name);

console.log(memberLastNames);

//? 2-1. get the sum of expenses from all clients

const sumOfAllExpenses = clients.reduce((sum, client) => sum + client.expense, 0);

console.log(sumOfAllExpenses);

//? 2-2. get the youngest client's name

const youngestClient = clients.reduce((youngest, client) => {
  // return (youngest.age < client.age) ? youngest : client;
  return youngest.age < client.age ? youngest : client;
}, clients[0]);

const youngestClientName = `${youngestClient.f_name} ${youngestClient.l_name}`;

console.log(youngestClientName);

//? 3-1. say, the age of retirement is 65. Calculate how many years are left for each client in an array.
/*   [
    '7 years ago',
    'this year',
    '43 years left',
    '17 years ago',
    '47 years left'
  ]  */

const retirementAge = 65;

const yearsLeftArray = clients.map(client => {
  const yearsLeft = retirementAge - client.age;

  if (yearsLeft < 0) {
    return `${Math.abs(yearsLeft)} years ago`;
  } else if (yearsLeft === 0) {
    return "this year";
  } else {
    return `${yearsLeft} years left`;
  }
});

console.log(yearsLeftArray);

//? 3-2. this time, write a function `yearsToRetire()`
// takes a number(id) and an array(clients) as inputs
// checks the client's age and calculate the years till retirement
// returns a message  'xx years ago', 'xx years left', or 'this year'

function yearsToRetire(id, clients) {
  const retirementAge = 65;

  const client = clients.find(client => client.id === id);

  // Important to add this check, otherwise it will return undefined (in case of no client with the given id)...
  if (!client) {
    return "Not a client";
  }

  const yearsLeft = retirementAge - client.age;

  if (yearsLeft < 0) {
    return `${Math.abs(yearsLeft)} years ago`;
  } else if (yearsLeft === 0) {
    return "this year";
  } else {
    return `${yearsLeft} years left`;
  }
}

// Testing...
const clientId = 1;
// const clientId = 2;
// const clientId = 3;
// const clientId = 4;
// ...

const result = yearsToRetire(clientId, clients); // --> 7 years ago
// const result2 = yearsToRetire(clientId, clients); --> this year
// const result3 = yearsToRetire(clientId, clients); --> 43 years left
// const result4 = yearsToRetire(clientId, clients); --> 17 years ago
// and so on... it definitely works!
console.log(result);

//? 4. sort by age (from youngest to oldest)

const sortedByAge = clients.sort((a, b) => a.age - b.age);
console.log(sortedByAge);

// The other way around - just for fun:
// const sortedByAgeDescending = clients.sort((a, b) => b.age - a.age);
// console.log(sortedByAgeDescending);

//? 5. sort the married ones first

const sortedByMaritalStatus = clients.sort((a, b) => {

  if (a.married && !b.married) {
    return -1;

  } else if (!a.married && b.married) {
    return 1;

  } else {
    return 0;
  }

});

console.log(sortedByMaritalStatus);

//? 6. search for the client whose fist name is "Dianna", get the array of purchased items, sort them from Z to A

const clientsNameIsDianna = clients.find(client => client.f_name === "Dianna");

if (clientsNameIsDianna) {
  const reverseChronoPurchasedItems = clientsNameIsDianna.purchased.sort((a, b) =>
    b.localeCompare(a)
  );

  console.log(reverseChronoPurchasedItems);
} 

// else {
//   console.log("Client with first name 'Dianna' not found");
// }
// --> Just another possible check... not necessary here, because we know that there is a client with the name "Dianna" in the array

// ! Side note: Since we did not receive a github repo link this time, I created one myself and pushed the code there. Gonna provide the link via Slack DM. ;)