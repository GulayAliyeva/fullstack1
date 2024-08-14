/*1
let num=parseInt(prompt(""));
let count=0;
while(num>0){
    let a=num%10;
    count++;
    num=Math.floor(num/10);
}
console.log(count);*/


/*2
const str="apple,peach,banana,kiwi,mango";
const array=str.split(",");
console.log(array.length);*/


/*3
let num=parseInt(prompt());
let pow=parseInt(prompt());
console.log(num**pow);*/


/*4
let arr=[1,2,5,7,2,5,1];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
let avg=sum/arr.length;

console.log(avg);*/


/*5
let arr=[1,85,100,-5,0,5,10];
let max=arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    max=arr[i];
    if(arr[i]<min)
    min=arr[i];
    
}
let ededi_orta=(min+max)/2;
console.log(ededi_orta);*/


/*6
let sade_ededler=0;
let arr=[2,5,7,8,4,21];
for(let i=0;i<arr.length;i++){
    let count=0;
    
    for(let j=2;j<=arr[i]/2;j++){
        if(arr[i]%j==0)
        count++;
    }
    if(count<1 || arr[i]==2)
    sade_ededler++;
}
console.log(sade_ededler);*/

/*7
let num=parseInt(prompt(""));

while(num>0){
    let a=num%10;
    console.log(a);

    num=Math.floor(num/10);
}*/

/*8
let num=parseInt(prompt(""));
let sum=0;
let product=1;
let count=0;
while(num>0){
    let a=num%10;
   sum+=a;
   product*=a;
   count++;
    num=Math.floor(num/10);
}
let avg=sum/count;
console.log(sum,product,avg);*/


/*9
let num=parseInt(prompt(""));

for(let i=1;i<=num;i++){
    if(num%i==0)
  console.log(i);
}*/


/*10
let num=parseInt(prompt(""));
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0)
    count++;
}
console.log(count);*/


/*11
let arr=[2,5,7,8,4,21];
for(let i=0;i<arr.length;i++){
 
    if(i%2==1)
    console.log(i);
  
}*/


/*12
let arr=[2,5,7,8,4,21];
for(let i=0;i<arr.length;i++){
 
    if(i%2==1)
    console.log(arr[i]);
  
}*/


/*13
let arr=[2,5,28,7,8,4,21,20];
let M=0;

for(let i=0;i<arr.length;i++){
 if(arr[i]%2==0 && arr[i]>M){
    M=arr[i];
}
}
console.log(M);*/


/*14
let arr=[1,85,100,-5,0,5,10];
let min=arr[0];
for(let i=0;i<arr.length;i++){
   
    if(arr[i]<min)
    min=arr[i];
  }
  for(let i=0;i<arr.length;i++){
      if(arr[i]==min)
      console.log(i);
  }*/


  /*15
  let arr=[1,85,100,-5,0,5,10];
let max=arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    max=arr[i];
    if(arr[i]<min)
    min=arr[i];
    
}
let temp=max;
max=min;
min=temp;
console.log(max,min);*/


/*16
let arr=[2,5,28,7,8,4,21,20];
let max=0;
let min=0;

for(let i=0;i<arr.length;i++){
 if(arr[i]%2==0 && arr[i]>max){
    max=arr[i];
}
 if(arr[i]%2==1 && arr[i]<min){
    min=arr[i];
}
}
let temp=max;
max=min;
min=temp;*/


/*17
let num=parseInt(prompt(""));
let arr=[2,5,28,7,8,4,21,20];
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
 console.log("yes");
 break;
    }
 else {
 count++;
 }
}
if(count==arr.length)
console.log("no");*/


/*18
  let arr=[1,85,100,-5,0,5,10];
let max=arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    max=arr[i];
    if(arr[i]<min)
    min=arr[i];
    
}
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=min && arr[i]!=max)
    sum+=arr[i];
}
console.log(sum);*/


/*19
let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4]; for(let i=0;i<arr.length;i++){
   if(arr[i]==true)
   console.log(arr[i-1],arr[i+1]);
}*/


/*20
let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
let M=0
for(let i=0;i<arr.length;i++){
    if(arr[i].length>M)
    M=arr[i].length;
}
console.log(M);*/


/*21
let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for(let i=0;i<arr.length;i++){
 if ( typeof arr[i] === 'string' ) {
       let uppercase=true;
       let word=arr[i];
   for(let j=0;j<word.length;j++){
       if(word[j]!=word[j].toUpperCase())
       uppercase=false;
   }
   
     if(uppercase)
     console.log(word,i);
    }
}*/


let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for(let i=0;i<arr.length;i++){
 if ( typeof arr[i] === 'string' ) {
    let count=0;
       let word=arr[i];
   for(let j=0;j<word.length;j++){
       if(word[j]==word[j].toUpperCase())
     count++;
   }
     if(count>2)
     console.log(word);
    }
}

      

    
  
        
    
    
    
  




