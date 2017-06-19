var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];


// ----------------------------------------------------



// ----------------------------------------------

function transformArray (employees){
  var employeeBonuses = [];   //creates empty array for employeeBonus arrays

  for(var i = 0; i < employees.length; i++){
    var singleBonus = []; //[name, bonusPercent, adjAnnualIncome, totalBonus]
    var number = employees[i][1];
    var salary = employees[i][2];
    var rating = employees[i][3];

    singleBonus.push(employees[i][0]);  //push name into singleBonus placeholder array

    var bonusPercent = calculateBP(number, salary, rating);   //compute bonus % and save to variable
    singleBonus.push(bonusPercent);   //adds to singleBonus placeholder array

// moved this up here so that adjustedAnnualIncome calculcates in correct order
    var bonus = calculateTotalBonus(bonusPercent, salary);   //computes total bonus amount

    var adjustedAnnualIncome = adjAnnualIncome(bonus, salary);   //compute adjusted annual income
    singleBonus.push(adjustedAnnualIncome);   //adds to singleBonus placeholder array

    singleBonus.push(bonus);    //adds total bonus to singleBonus placeholder array

    employeeBonuses.push(singleBonus);
    }

  return employeeBonuses;   //returns array of individual employee bonus arrays
}

// CALCULATE BONUS PERCENTAGE


function calculateBP(number, salary, rating) {
    var bonusPercentage = 0;

  if(rating <= 2) {
    bonusPercentage = 0;
  }
  else if(rating == 3) {
    bonusPercentage = 0.04;
  }
  else if(rating == 4) {
    bonusPercentage = 0.06;
  }
  else if(rating == 5) {
    bonusPercentage = 0.1;
  }
// console.log("BP on rating:" + bonusPercentage);

  if(number.toString().length === 4) {
    bonusPercentage += 0.05;
  }
// console.log("BP on length:" + bonusPercentage);

  if(salary > 65000) {
    bonusPercentage -= 0.01;
  }
//  console.log("BP on income cap:" + bonusPercentage);


  if(bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }
  else if(bonusPercentage < 0) {
    bonusPercentage = 0;
  }
//  console.log("BP on too high/low:" + bonusPercentage);

    return bonusPercentage;
}

// CALCULATE ADJUST ANNUAL INCOME

function adjAnnualIncome(totalBonus, salary) {
  var adjustedAnnualIncome = Number(totalBonus) + Number(salary);
  return adjustedAnnualIncome;
}


// CALCULATE TOTAL bonus

function calculateTotalBonus(bonusPercent, salary) {
  var totalBonus = Math.round(salary * bonusPercent);
  return totalBonus;
}


// Log the array of arrays
console.log(transformArray(employees));
