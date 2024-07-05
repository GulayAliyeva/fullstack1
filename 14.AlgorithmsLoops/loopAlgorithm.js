/*1
for(i=10;i<100;i++){
    if(i%10==7){
        console.log(i);
    }
}*/

/*2
for(i=10;i<100;i++){
   let last_digit=i%10;
   let  first_digit=Math.floor(i/10);
    if(last_digit===first_digit)
    console.log(i);
}*/

/*3
let num=parseInt(prompt(""));
let M=0;
 while(num>0){
     let a=num%10;
     if(M<a)
     M=a;
     num=Math.floor(num/10);
     }
     console.log(M);*/
     
/*4
let number=parseInt(prompt(""));
for( i=0;i<number;i++)
{
    console.log("Hello World");
}*/

/*5
let fac=1;
let number=parseInt(prompt(""))
for(i=1;i<=number;i++){
  fac*=i;
}
 alert(fac);*/
 
 /*6
 let num1=parseInt(prompt(""));
 let num2=parseInt(prompt(""));
  while(num1>num2){
       let num2=parseInt(prompt(""));
       if(num2>num1){
       alert(num1+num2);
         break;
       }

  }*/