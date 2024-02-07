//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


var customer =
{
    lastName : "Syed",
    branchNumber : 12345,
    accountBalance : 500.25, 
    interestRate : 1.03, 
    multipleAccounts : true,
}
//creating a method to add the amount 
customer.makedeposit = function(amount){
    customer.accountBalance = customer.accountBalance + amount;
    // return "Thank you, your balance after deposit is now $"+ customer.accountBalance;
}

// creating a method to remove the amount
   customer.makewithdrawal =  function(amount){
    customer.accountBalance = customer.accountBalance - amount;
    // return "Thank you, your balance after withdrawal is now $"+ customer.accountBalance;
}

// creating a method to calculate the
console.log("Starting balance: $" + customer.accountBalance);

// Step 7: Deposit $200
customer.makedeposit(200);

// Step 8: Output the new balance to the console
console.log("New balance after deposit: $" + customer.accountBalance);

// Step 9: Withdraw $75
customer.makewithdrawal(75);

// Step 10: Output the new balance to the console
console.log("New balance after withdrawal: $" + customer.accountBalance);


customer.addInterest =  function() {
    let interestRate = customer.interestRate;
    if (customer.multipleAccounts === true) { 
      interestRate = interestRate+0.005;
      customer.accountBalance = customer.accountBalance*interestRate; 
      console.log("Thank you, your current balance is now $" + customer.accountBalance.toFixed(2))
    }
    
   else {
    console.log("Thank you, your current balance is now $" + customer.accountBalance.toFixed(2))
   }
  }

  customer.addInterest()