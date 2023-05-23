// ********************************************************
// correction
// ********************************************************
let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];


function countActiveUsers(users)
{
        let count = 0;
        for(user of users)
        {
            if(user.isActive === true)
        count++;
    }
    
    return count;
}

console.log(`ETAPE 1 : We currently have ${ countActiveUsers(users) } active users.`);

function getActiveUsers(users) {
    let activeUsers = [];
  
  for(user of users)
        {
            if(user.isActive === true)
        activeUsers.push(user);
    }
  
      return activeUsers;
}

let activeUsers = getActiveUsers(users);

function getUsersByEyeColor(users, color)
{
    let list = [];
  
  for(user of users)
    {
            if(user.eyeColor === color)
        {
            list.push(user);
        }
    }
    
    return list;
}

console.log(`ETAPE 2 : Out of our currently ${activeUsers.length} active users, ${getUsersByEyeColor(activeUsers, "blue").length} have blue eyes.`);


function getActiveUsersAges(users) {
    let ages = [];
  
  for (user of users)
  {
      ages.push(user.age);
  }
  
  return ages;
}

let activeUsersAges = getActiveUsersAges(activeUsers);

function computeAverage(values)
{
    let average = 0;
    let sum = 0;

    for(value of values)
    {
        sum = sum + value;
    }

    average = sum / values.length;

    return average;
}

console.log(`ÉTAPE 3 : Out of our currently ${activeUsers.length} active users, the average age is ${computeAverage(activeUsersAges)}.`);


function getMultronUsers(users) {
        let multronUsers = [];
    
    for(user of users)
    {
        if (user.company === "MULTRON")
      {
          multronUsers.push(user);
      }
    }
    
    return multronUsers;
}

let multronUsers = getMultronUsers(users);

function setMultronToCenturia(users) {
    for (user of users)
  {
      if(user.company === "MULTRON")
    {
            user.company = "CENTURIA";
    }
  }
}

setMultronToCenturia(multronUsers);

console.log(`ÉTAPE 4 : ${multronUsers.length} user companies have been changed from MULTRON to CENTURIA.`);


function excludeCenturiaWorkers(users) {
        let list = [];
  
      for(user of users)
    {
            if(user.company !== "CENTURIA")
          {
              list.push(user);
          }
    }
    
    return list;
}

let brownEyeUsers = getUsersByEyeColor(users, "brown");
setMultronToCenturia(brownEyeUsers);

console.log(`ÉTAPE 5 : ${excludeCenturiaWorkers(brownEyeUsers).length} users with brown eyes do not work at CENTURIA`);

function countUsersByStatusAndEyeColor(users, status, color)
{
    let list = [];
  
  for(user of users)
  {
      if(user.isActive === status && user.eyeColor === color)
    {
            list.push(user);
    }
  }
  
  return list.length;
}





// let users = [
//     {
//         id: 0,
//         isActive: false,
//         age: 24,
//         eyeColor: "green",
//         name: "Marsh Obrien",
//         company: "CENTURIA"
//     },
//     {
//         id: 1,
//         isActive: false,
//         age: 21,
//         eyeColor: "green",
//         name: "Rios Gibson",
//         company: "MULTRON"
//     },
//     {
//         id: 2,
//         isActive: false,
//         age: 29,
//         eyeColor: "brown",
//         name: "Morgan Buchanan",
//         company: "CENTURIA"
//     },
//     {
//         id: 3,
//         isActive: true,
//         age: 25,
//         eyeColor: "brown",
//         name: "Franklin Dyer",
//         company: null
//     },
//     {
//         id: 4,
//         isActive: false,
//         age: 30,
//         eyeColor: "blue",
//         name: "Keller Pitts",
//         company: "CENTURIA"
//     },
//     {
//         id: 5,
//         isActive: false,
//         age: 25,
//         eyeColor: "brown",
//         name: "Davenport Maddox",
//         company: "MULTRON"
//     },
//     {
//         id: 6,
//         isActive: true,
//         age: 31,
//         eyeColor: "brown",
//         name: "Judith Graves",
//         company: null
//     },
//     {
//         id: 7,
//         isActive: true,
//         age: 26,
//         eyeColor: "blue",
//         name: "Hoffman Hess",
//         company: "CENTURIA"
//     },
//     {
//         id: 8,
//         isActive: true,
//         age: 22,
//         eyeColor: "blue",
//         name: "Sheena Goff",
//         company: "MULTRON"
//     },
//     {
//         id: 9,
//         isActive: false,
//         age: 39,
//         eyeColor: "brown",
//         name: "Rose Lawrence",
//         company: "EVENTIX"
//     },
//     {
//         id: 10,
//         isActive: false,
//         age: 35,
//         eyeColor: "blue",
//         name: "Alston Goodman",
//         company: "CENTURIA"
//     },
//     {
//         id: 11,
//         isActive: true,
//         age: 28,
//         eyeColor: "brown",
//         name: "Nannie Berry",
//         company: null
//     },
//     {
//         id: 12,
//         isActive: true,
//         age: 27,
//         eyeColor: "blue",
//         name: "Lynette Jackson",
//         company: "CENTURIA"
//     },
//     {
//         id: 13,
//         isActive: false,
//         age: 23,
//         eyeColor: "blue",
//         name: "Samantha Garrett",
//         company: "EVENTIX"
//     },
//     {
//         id: 14,
//         isActive: false,
//         age: 30,
//         eyeColor: "blue",
//         name: "Grimes Savage",
//         company: "CENTURIA"
//     },
//     {
//         id: 15,
//         isActive: false,
//         age: 31,
//         eyeColor: "green",
//         name: "Atkinson Kirby",
//         company: null
//     },
//     {
//         id: 16,
//         isActive: false,
//         age: 38,
//         eyeColor: "green",
//         name: "Jami Burgess",
//         company: "CENTURIA"
//     },
//     {
//         id: 17,
//         isActive: true,
//         age: 31,
//         eyeColor: "blue",
//         name: "Sallie Albert",
//         company: "CENTURIA"
//     },
//     {
//         id: 18,
//         isActive: false,
//         age: 26,
//         eyeColor: "blue",
//         name: "Ora Hobbs",
//         company: "EVENTIX"
//     },
//     {
//         id: 19,
//         isActive: true,
//         age: 30,
//         eyeColor: "blue",
//         name: "Pruitt Sellers",
//         company: "CENTURIA"
//     }
// ];




// let cpt=0;
// function countActiveUsers(users) {
//     for(let user of users){
//         if(user.isActive){
//      console.log(user.isActive)

//             cpt++
//         }
//     }
//         return cpt;
// }


// console.log(`We currently have ${ countActiveUsers(users) } active users.`);

// // ******************************************************************************
// let cpt2=0;
// function hasBlueEyes(countActiveUsers) {
//     if(countActiveUsers(users).eyeColor==="blue"){
//         cpt2++
//     }
//         return cpt2;

// }


// // console.log(`Out of our currently ${hasBlueEyes(countActiveUsers)} active users, ${} have blue eyes.`);
