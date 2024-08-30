
let a;
console.log(a)
a="40";
b=20;
// arithmetic operator
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%b)
console.log(a++)
console.log(a)
console.log(a--)
console.log(a)
 
// comparison operator
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a===b) // strictly use
console.log(a>=b)

// logical operator
c=39;
console.log(a>b&& a>c)
console.log(a<b|| a>c)
console.log(!a)

//asssignment operator
let f;
f=50;
console.log(f)
f+=20;
console.log(f)
f-=30;
console.log(f)
f/=5;
console.log(f)
f*=3;
console.log(f)
f%=7;
console.log(f)

// math in js
console.log(Math.random())
console.log(Math.PI)

// Rounding number
console.log(Math.ceil(45.5))
console.log(Math.round(45.5))
console.log(Math.floor(45.5))
console.log(Math.pow(21,2))
console.log(Math.ceil(45.5))
console.log(Math.sqrt(49))

// date
let now= new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())
console.log(now.getSeconds())
console.log(now.toDateString())
console.log(now.toLocaleDateString())

let h=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
let i=now.getDay();
console.log("today is" + h[i]);

// Js loops(if,else,elseif)
let age=5;
if(age>18){
  console.log("you are above 18");
}
else if(age==5){
  console.log("your age is 5");
}
else{
  console.log("your age is below 18");
}

// day example
let day =['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
if(day[2]=='tuesday'){
  console.log("today is tuesday");
}
else{
  console.log("today is another day");
}


// example grading system
let result=79 ;
if(result>90){
  console.log("it is A plus");
}
else if(result==79){
console.log("it is B plus");
}
else{
  console.log("it is nq");
}


// examples
let marks=89;
if(marks>=90)
{
  console.log("it is A plus");
}
else if(marks>=80 && marks<90 ){
  console.log("it is A grade");
}
else{
  console.log("it is B plus");
}

//switch operation
let days=7;
switch(days){
  case 1:
    console.log("sunday");
    break;
    case 2:
    console.log("monday");
    break;
    case 3:
    console.log("tuesday");
    break;
    case 4:
    console.log("wednesday");
    break;
    default:
      console.log("none of the above")
}

//loops in js
//for loop
for(let i=0;i<=10;i++)
{
  console.log(i);
}


//while loop
let x =0;
while(x<=10){
  console.log(x)
  x++;
  console.log(x)
}

//do while loop
do{
console.log(x);
x++;
}
while(x<=20)



//even
for (let w=0;w<=10;w++){
  if( w %2==0){
    console.log(w);
  } 
}
 

// program to find a multiple of 3
for (let z=0;z<=30;z++){
  if( z%3== 0){
    console.log(z);
  }
}


//
for(i=0;i<=10;i++){
  console.log("multiple of i:+i");
  for(j=0;j<=10;j++){
    console.log(i+"*"+j+"="+i*j)
  }
}





