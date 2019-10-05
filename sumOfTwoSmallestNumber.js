
function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let num1=numbers[0];
    
    for(let i=0;i<numbers.length;i++){
      if(numbers[i]<num1){
        num1=numbers[i];      
      }
    }
    console.log(`first smallest: ${num1}`);
    
    let num2=numbers[1];
    for(let j=0;j<numbers.length;j++){
      if(numbers[j] != num1){
         if(numbers[j]<num2){
           num2 = numbers[j];
         }
         }
    }
    console.log(`second smallest: ${num2}`);
    console.log(`Sum of two smallest numbers: ${num1+num2}`);
  }
  
  let arr=[32,53,6,7,90,23,2];
  let arr1=[10, 343445353, 3453445, 3453545353453]
  
  sumTwoSmallestNumbers(arr1);