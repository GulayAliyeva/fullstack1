
/*
let arr=[1,-3,5,-9,-0];

let arr2 = arr.map((elem, index, array) => {
   return elem * elem;
 });

 console.log(arr2);*/
/*
let arr=[2,-7,-5,3,-6];
let sum=0;
let arr3=arr.filter((elem)=>{

    if(elem>0){
        sum+=elem;
      
    }
 
});
console.log(sum);
*/
let arr=[2,7,5,3,6];
let sum=0;
 let min=arr[0];
 let max=arr[0];
  arr.forEach((elem)=>{
     if(elem>max){
        max=elem;
     }
       
    if (elem<min){
        min=elem;
    }
        sum+=elem;
  });
 let avg=sum/arr.length;
 let median=(max+min)/2;
 let obj={median:`${median}`,avg:`${avg}`};
 console.log(obj);

/*
let str="JavaScript often abbreviated as JS is a programming language and core technology of the Web alongside HTML and CSS";

let arr=str.split(" ");
  for(let i=0;i<arr.length;i++){
    let count=arr[i].length-2;
    if(arr[i].length>=4){
        console.log(arr[i][0],count,arr[i][arr[i].length-1]);
    }
 else {
console.log(arr[i]);
 }
}*/
  