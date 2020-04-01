// array of objects
let data = [{
    principal: 2500,
    time: 1.8
},
{
    principal: 1000,
    time: 5
},
{
    principal: 3000,
    time: 1
},
{
    principal: 2000,
    time: 3
}];


// function takes in array as argument

function interestCalculator(array) {
    // to determine the rate 
    array.forEach(function(arr) {
        if (arr.principal >= 2500 && 1 < arr.time < 3) {
            arr.rate = 3;
        } else if (arr.principal >= 2500 && arr.time >= 3){
            arr.rate = 4;
        } else if (arr.principal < 2500 && arr.time <= 3){
            arr.rate = 2;
        } else {
            arr.rate = 1;
        }
    });

    
    // calculate interest
    array.forEach(function(arr) {
        arr.interest = (arr.principal * arr.rate * arr.time)/100
    });

    // interestData 
    let interestData = array;

    //log before returning
    console.log(interestData);
    return interestData;

};

// call the function
interestCalculator(data);