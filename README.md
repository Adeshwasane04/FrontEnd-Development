  # Front-End-Domination-Create-Anything-with-Code

Start with Front-End Journey with Sheryians Coding School (Front-End Domination: Create-Anything-with-Code)

### Essentials - So you don;t fail

Embark on an insightful journey as we unravel the intricacies of our learning platform. Navigate uncertainties with proven techniques, ensuring a smooth learning experience. This video serves as your guide, equipping you to confidently resolve doubts and make the most of your educational adventure.

### Getting Started With Basics | Installation Guides

Dive into the essentials! This video serves as your gateway to the world of programming. From laying the foundation with basics to providing a step-by-step installation guide, it's your go-to resource for a smooth start on your coding journey.

### HTML - Making Architecture

Embark on the HTML adventure! This video introduces you to the building blocks of web development. Uncover the power of HTML as we demystify its essentials, setting the stage for your journey into the fascinating world of coding.

- HTMl level 1
  Craft a robust coding foundation with HTML! This video guides you through the essentials, ensuring you build a sturdy base for your web development journey. From tags to structure, master the art of creating solid HTML structures.
- HTML Level 2
  Dive into HTML mastery! This video breaks down the magic of HTML tags. Unlock the power of these building blocks, understanding how each tag contributes to the creation of dynamic and structured web content.

### HTML-5: Semantic

Demystifying HTML5 Semantic Elements! Learn what they are and how to wield them effectively. This video offers insights into utilizing HTML5 Semantic Elements to enhance website  
 structure and accessibility.

### CSS Basics - Styling things UP

CSS, or Cascading Style Sheets, is the language used to control the presentation and layout of web pages. It allows you to define the visual style of HTML elements, including fonts, colors, spacing, and more.

### CSS Grid Layout

Uncover the power of layout design! Dive into 'CSS Grid: A Complete Guide to CSS Grid' and master the art of creating dynamic, responsive layouts. Explore the versatility of CSS Grid for modern web design.



Block Create Using Grid:

html code :

       <div class="main">
          <div class="elem elem1"></div>
          <div class="elem elem2"></div>
          <div class="elem"></div>
          <div class="elem"></div>
          <div class="elem"></div>
          <div class="elem"></div>
          <!-- <div class="left"></div>

          <div class="right"></div> -->
        </div>

CSS Code:

    .main {
      width: 100%;
      height: 100%;
      background-color: #ededed;
      display: grid;
      grid-template-columns: 20% 20% 20% 20% 20% 20%;
      grid-template-rows: 20% 20% 20% 20% 20% 20%;
    }
    .elem {
      border: 3px solid #000;
      background-color: crimson;
    }
    .elem1 {
      background-color: violet;
      /* grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3; */
      grid-column: 1/4;
      grid-row: 1/3;
    }


### CSS Projects: Elevate Your Design Skills

This section introduces you to practical CSS projects. You'll apply your CSS skills to create real-world designs and layouts. These projects will put your knowledge to the test and help you gain hands-on experience in using CSS for web development.

-Project 1 Design link : https://pin.it/5QrO8cz



-Project 2 Design link : https://pin.it/5jlUvw1


-Project 3 Design link : https://pin.it/6tU5NgO



### Responsive Web Development

Responsive web development is all about creating websites that adapt to various screen sizes and devices. In this topic, you'll get a fundamental introduction to the principles and techniques behind building web pages that look great on everything from large desktop monitors to tiny mobile screens.

Responsive website using HTML and CSS

--> Understanding Units - px - % - vw,vh - vmax,vmin - em,rem

--> Layout of website - absolute vs flex

--> flexbox - Display flex - aligning items in x and y axis - flex direction - flex wrap

--> CSS Media Queries - min height, min width - min width, max width

--> Key points to keep in mind to make website responsive

1. CSS flexbox
2. CSS Units
3. Responsive Typography
4. Mobile-First Approach
5. Flexible Images and Media

Practice! Practice! Practice!

### CSS Animations : Styling things Up

Unlock the world of captivating web design! Dive into 'Introduction to CSS Animations' and discover the magic of breathing life into your websites. Learn the basics of CSS animations, from transitions to keyframes, and embark on a journey to create visually stunning and dynamic web experiences!


-Before & After psuedo Selector

Master the art of CSS wizardry! Delve into 'CSS Animations: Enhancing Design with ::before and ::after' to wield the power of pseudo-elements. Learn to craft captivating designs and elevate your web creations using these versatile tools in CSS animation.


### CSS Responsive Project

The CSS Responsive Project is a hands-on exploration of creating a responsive web project. In this introduction, you'll get an overview of what to expect in this project and the importance of making web content adaptable to various screen sizes.

Use Marquee Tag for Scrolling images in horizontal or vertical direction

Another way to scroll images in vertical direction : use animation for scrolling :

      @keyframes anime {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-100%);
          }
      }



-Project Design link : https://www.pinterest.ca/pin/650559108696368140/

### CSS Bonus Project

Unlock creativity in action! Discover 'Introduction to CSS Bonus Project' and embark on a hands-on journey. Elevate your skills by diving into this project, applying foundational CSS knowledge to create a captivating web masterpiece.

-Project : https://dribbble.com/

### JavaScript: Every about JavaScript

JavaScript is a versatile and essential programming language for web development. This topic serves as your entry point into the world of JavaScript, providing an overview of its role in web development and its significance in creating interactive web pages also javascript is a interpreted language   

-JS the language

-JS Developer - breiden eich

-Managed by ECMAScript community which helps to create and update various features within
 the javascript

-JS the DOM - creating

-Basics

-Error check in console  

-console / alert/ prompt are the part of browser but we can use with the help of javascript

-Inbult features

-variables constants

-window: window is not is a part of javascript but javascipt allow to run in the browser

-compilers & interpreters
  compiler : compiler execute the program line by line and render it to the screen at 
  a single time. compiler convert the source code into machine code

  interpreters: interpreter execute the program at a time and render it to the screen line by line.  interpreter convert the source code into byte code 
  

-window in javascript: there are many feature which are frequently used in javascript but they are not the part of it but they are avilable in the browser, and when we used them in js we called them from the browser and not js. ex:alert,console,prompt etc .

- types: primitive datatype  || refrence datatype ()[]{}
if we refer any variable value the change in refer variable can change the value in the main variable
and for avoid this change we use spread operator

-spread 
 ex: var arr=[1,24,5,7,8,9];
     var b=[...arr]; //spread operater here copy all the individual value from the arr to the b variable 
     b.pop();  and if any changes get happen in b it does not reflect on the arr variable.



-conditionals
loops:repreat

-functions : In javascript for the use of function we do not need to give a datatype to the function.

syntax: 
function abcd(parameter){


}
abcd(); //this is used for calling  the function 


what is function?
answer: a block of code that perform a specific task also a function is a reusable unit of code that can be called multiple time.

why we need function?
answer: to reuse the code and to wrap the code which we want to use in future at some point of time.

in the function we can send both parameter and argument 

function abcd(val){      //val: this is the parameter we pass in the function 

}
abcd(12.3); //12.3 is the argument

## differnt type of functions:

1. function statement:
function abcd(){
  //function statement

  return;
}

2.function expression:
let abc=function (){ //dont give a name to the function
   //function expression

   return;
}

3.anonymous function:
function () //here the function dont have name 
{
  //anonomus function

  return; 
}

4.fat arrow function:
var a=()=>{
  //basic arrow function
}

var a= val=>{
  //single parameter fat arrow function
}
a(2);

5.Implict return function:
var a=()=>true/12/12.3/null/"adesh";


-when we not returing anything in function javascript have ground rule that it return undefined value. 

-arrays

what is arrays?
arrays is the collection of element that can be store in the contigious memory  location and which can be accessible 
by thie indexes.

ex: var abc=["adesh","yash","sarthak","hello"];
console.log(abc[3]);

## forEach loop the type of loop and that can be only used with the array

ex:
var ans=4;
var arr=[1,2,3,4,5];
arr.forEach(function(val)
{
  if(val===ans)
  {
    return 1;
  }
  else return 0;
})

-objects:an object is a fundamental data structure that stores key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects

var obj={
   name:"fiat",
   model="21";
}

var obj=new Object();


-prototypes
prototypal inheritance

-asynchronous synchronous js

synchronous
In synchronous execution, operations are performed sequentially, one after the other. Each operation must complete before the next one can start. This means that if a task takes a long time to execute, it will block the execution of subsequent tasks until it finishes. 


Asynchronous Execution
Asynchronous execution allows the program to continue running other tasks while waiting for a long-running task to complete. This is achieved using callbacks, promises, or async/await. When an asynchronous operation is initiated, the program doesn't wait for it to finish but instead moves on to the next task. Once the asynchronous operation is complete, a callback function is executed, or a promise is resolved, or the async function continues after the await.


-this is the keyword in the javascript and the value of this can be change according to the condition 

value of this keyword and its scope 
//scope           //value  
1.global scope- window
ex: console.log(this);

2.function scope-window
ex:
``` function abc(val)
{
  console.log(this);
}
abc();
```
3.method scope - object
ex:``` var obj={
  name:function()
  {
    console.log(this);
  },
  age:23,
  date:221,
  year:2003;
}
obj.name();
```

4. function inside method (es5)  - window
ex: ```var obj={
  name:function (){
    console.log(this)    //here it return the value as a object because it represent as a method 
   
      function childfunc(){
        console.log(this)   //here it return the value of window
      },
      childfunc();

    age:23,
    year:23;
  }
  obj.name();
}
```
5. function inside method (es-6) -object   //in es6 we use arrow function 
ex: ```var obj{
  name:function (){                arrow fuction take a value form the parents
    var abc=()=>{
       console.log(this);
    }
    abc();
  }
  obj.function();
}
```

-questions

-miscellaneous switch case and ternary do-while forin forof

-interview prep
what is differnce between method and function?
answer: method is a function that is associated with the object or a class  while function is a
standalone block of code that perform a specific task.

inshort agar function object ke andar hoto we can call it as a method.



-call apply bind: ye teen tarike hai function ko call karne ke kisi object ko this mankar 
 
 call
ex:  ```const obj={name:"adesh"};
      function abcd(){
        console.log(this);
      }
      aabcd.call(obj);
```
 apply : use first value this and second value array
  
 ``` const obj={name:"adesh"};
      function abcd(a,b,c){
        console.log(this,a,b,c);
      }
      aabcd.apply(obj,[1,2,3]);
```
 bind: bind ek function deta hai jo apan baad mai bhi use kar sakte hai and it is similar like a call 
ex: 
  ```  const obj={name:"adesh"};
      function abcd(){
        console.log(this);    //here the value of the function is window but we use bind to pass the obj and now its  value is object
      }
      var baadmaiusekarege=aabcd.bind(obj);

      baadmaiusekarege();


```

### Advance JavaScript : God Level JavaScript

Master advanced JavaScript concepts in a single session! Dive into an intensive guide covering the breadth of advanced JavaScript topics. Elevate your skills and deepen your understanding of complex JavaScript functionalities.

#### Prototypal Inheritance


before starting about prototype inheritance first we understand about the blank constructor value that we are 
going to pass to the constructor

``` function HumanDetail(name,age,dob)
  {
    this.name=name;   //when we pass the value from the constructor it has new keyword which means we are 
    this.age=age;     //taking the blank value and running a function in the function this keyword is black here 
    this.bob=dob;     //and it create a new object called name or anything
  }
var ans=new HumanDetail("adesh",22,23);   //new is create a new contructor and which is blank
```
prototype inheritance is used when their is a commom object in both of the different function to save the 
memory space we use prototype inheritance



-example:
 ``` function vechile(name,model,wheels)
{
  this.name=name;
  this.model=model;
  this.wheels=wheels;

}
vechile.prototype.car=function(){   //this is the common this both vechile1 and vechile2
  console.log(this.name);
}
var vechile1=new vechile(name,model,wheels);  
var vechile2=new vechile(name,model,wheels);

```
-Closures

Defination: closure is  a function who return another function and uses the any variable of the parent function.

ex:
``` 

function abc()
{
  let count=0;
   return function (){
     count++;
    cosole.log(count);
   }
}
 var func=counter();
 func();

```
-Event Delegation

Defination: jab aap event listener se kai saare different elements ke event ko handle kar sake 
//event listner ko parent par lagao and unki id , class ya fir tag ke basis par differnetiate karke differnet task karao

create a two buttons

```
var parent = document.querySelector("#parent");
parent.addEventListener("click", function(details){
   if(details.target.id==="play")
   {
    console.log("play song");
   }
   else if(details.target.id==="pause")
   {
    console.log("pause song");
   }
})
```
-Higher-Order Functions
Defination: ek aisa function jo ki ek function ko parameter mein accept karle or ek function ko return karde .


-Error Handling (try...catch blocks)

-Custom Events
the event which are made by overself to make the code eaasier

ex:
``` const yourEvent=new Event("Ghar jao");   //make event
   
    document.querySelector("button")
    .addEventListner("Ghar jao",function(){
      alert("ja raha hu");
    })
    document.querySelctor("button").dispatchEvent(yourEvent);

```


### Asynchronous JavaScript

Unlocking Asynchronous JavaScript: Navigate the world of async programming. Understand promises, async/await, and callbacks, mastering the art of handling asynchronous tasks in JavaScript.

- ASYNC JS
- setTimeout

      setTimeout(() => {
      console.log("Timeout runs !!!");

  }, 1000);

- setInterval

      setInterval(() => {
      console.log("Interval runs !!!");

  }, 1000);

- Fetch API (AJAX API request)

      fetch("https://randomuser.me/api")
      .then((data) => data.json())
      .then((res) => console.log(res));

- Axios (or other HTTP libraries)

  - use CDN for using axios

        axios
        .get("https://randomuser.me/api")
        .then((res) => console.log(res.data.results[0]));

- callbacks

      function abcd(a, b) {
        b();
      }

      abcd(1, function () {
        console.log("abcd runs");
      });

- Promises

      const promise1 = new Promise(function (resolve, reject) {
        let a = 10;

        if (a == 10) {
          resolve("value match");
        } else {
          reject("value does not match");
        }
      });

      promise1
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

- Async/Await

      async function abcd() {
        const data = await fetch(`https://randomuser.me/api`);

        const result = await data.json();

        console.log(result.results[0]);

        console.log(result.results[0].name.first);
      }

      abcd();

- Event Loop : It checks whether main stack is empty or not and perform asynchronous tasks according to it

  #### These terms store aysnc task

  - callback Queue
  - Microtask Queue
  - Web APIs

- Callbacks vs Promises vs Async/Await

  #### Question: https://randomuser.me/api is url se data lekar aao and usey console par show karo

  - using callback

        function dataFetch(url, callback) {
          fetch(url)
            .then((res) => res.json())
            .then((result) => {
              callback(result);
            });
        }

        dataFetch(`https://randomuser.me/api`, function (data) {
          console.log(data);
        });

  - using promises

        function dataFetch(url) {
          const data = new Promise((resolve, reject) => {
            fetch(url)
              .then((raw) => raw.json())
              .then((res) => resolve(res));
          });
          return data;
        }

        dataFetch(`https://randomuser.me/api`).then((res) => console.log(res));

  - using async await

        async function dataFetch(url) {
          const data = await fetch(url);

          const result = await data.json();

          return result;
        }

        async function dataPrint(url) {
          const data = await dataFetch(url);

          console.log(data);
        }

        dataPrint(`https://randomuser.me/api`);

- Generators

      // aap program ke flow ko pause kr skte ho (execution) and bol sakte ab agla step karo

      // function* printNum() {
      //   console.log("started");
      //   yield 1;
      //   console.log("pehle chl chuka hai");
      //   yield 2;
      //   console.log("dusra chl chuka");
      //   yield 3;
      //   console.log("chotha chl chuka");
      //   yield 4;
      // }

      // const ans = printNum();

      // console.log(ans.next().value);
      // console.log(ans.next().value);
      // console.log(ans.next().value);

  - question - 10print

        function* allNums() {
          for (let i = 1; i < 11; i++) {
            yield i;
          }
        }

        // allNums().next();
        // console.log(allNums().next().value);

        const gen = allNums();

        console.log(gen.next());
        console.log(gen.next());

- Error Handling in Asynchronous Code (try,catch,finally)

- Web Workers

  - usually humara code single thead par chlta hai par kai baar kuchh bade calculations perform karne pad jate hai jiski wajah se aapka main thread busy ho jaata hai yaa fir wo kaafi jaada loaded ho jaata hai aur aapke baki tasks ki performance kam ho jaati hai

  - ap chaaho to apna koi task web worker ko bhej sakte ho jo ki doosre thread mein usko perform karega and aapka main thread efficiently baaki cheejo ko handle kar paayega

  - aap apni main js file se data send kr skte ho and aap worker file data accept karoge and jo perform karna hai karoge and waha se data waapis main file bhejoge and main file main waapis accept kroge

        // add numbers

        const nums = Array.from({ length: 10000 }, (_, b) => b + 1);

        const worker = new Worker("worker.js");

        // data send

        worker.postMessage(nums);

        worker.onmessage = function (data) {
          console.log(data.data);
        };

  - worker.js file

        onmessage = function (data) {
        // console.log(data.data);

        const sum = data.data.reduce((acc, item) => item + acc, 0);

        // console.log(sum);

        postMessage(sum);

    };

### JS Animations - DOM Functionality Adding Interactivity

JavaScript animations are a dynamic way to bring life and interactivity to your web projects. This topic serves as your introduction to the world of JavaScript animations, explaining their importance and how they can enhance user experiences on your website.

-content

-DOM

-DOM Manipulation

-Accessing Elements:

     document.querySelector()

-Modifying Elements:

     innerHTMl, textContent

-Manipulating Styles and Classes:

      style
      classList

-Creating and Deleting Elements:

    createElement()
    appendChild()
    removeChild()

-Event Handling:

    addEventListener()

-Event Object


### Real Life Developer Problems

- Developer Problems: Problem 1

  - DEVELOPER PROBLEMS

  - Debugging a TypeError: Cannot read property 'X' of undefined:

        let obj = {};

        obj.name; // no error
        obj.name.age;  // error

        // Uncaught TypeError: Cannot read properties of undefined (reading 'age')

  - Use optional chaining

        obj?.name;
        obj?.name?.age;

- Developer Problems: Problem 2

  - Working with Local Storage

  - local Storage ek aisa space hai browser ke pass jismein tum data store kardo to data stored hi rehta hai, aap chaahe to browser band krdo, refresh krdo ya kuchh bhi karo aapka data stored rahega jab tak aap khud usey delete naa kar de

  - local storage poore browser ka hota hai ya website ka, ls hota to browser ka part hai par data store ye website ke naam se karta hai

        localStorage.setItem("name", "Lucky Kashyap");

        localStorage.setItem("age", 23);

        localStorage.setItem('block',true);

  - web site open or not if block true or false

  - ek button banao jisse aap user block kardo ab jab bhi wo website khole use screen par blocked dikhey, nahi to website show ho and ek button jisse wo unblock ho

- Developer Problems: Problem 3

  - Handling Asynchronous Operations
  - ek button banao and us button ke click par aapko ek user lekar aana hai random tareeke se and usey add karna hai DOM mein

        call Api
        // random user api


        function getNewCard() {
          fetch(`https://randomuser.me/api`)
            .then((raw) => raw.json())
            .then((result) => {
              // console.log(result.results[0]);
              const { name, email, gender, picture } = result.results[0];

              // console.log(name, email, gender);

              document.querySelector(
                "#parent"
              ).innerHTML += ` <div class="card w-60 p-4 rounded-md bg-zinc-600">
            <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3">
              <img class='w-full h-full fit-cover' src=${picture.large} alt='card-image'/>
            </div>
            <h3 class="font-semibold text-2xl">${name.first}</h3>
            <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
            <h6 class="text-sm opacity-40">${email}</h6>
            <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat voluptates omnis doloribus perferendis?</p>
          </div>`;

              // return result;
            });
        }

        document.querySelector("button").addEventListener("click", () => {
          getNewCard();
        });

- Developer Problems: Problem 4

  - blocking scroll until something happens

        document.querySelector("#hide").addEventListener("click", () => {
          document.body.classList.toggle("overflow-hidden");
        });

- Developer Problems: Problem 5

  - custom tooltip

            document.querySelector("#hide").addEventListener("mouseenter", () => {
          document.querySelector(".tooltip").style.display = "initial";
        });

        document.querySelector("#hide").addEventListener("mouseleave", () => {
          document.querySelector(".tooltip").style.display = "none";
        });

### GSAP, ScrollTrigger, Locomotive - Fun Stuff

This introductory topic sets the stage for an exciting journey into advanced web animation techniques. GSAP (GreenSock Animation Platform), ScrollTrigger, Locomotive, and other tools are introduced as powerful resources for creating dynamic and engaging web animations.


Include GSAP Using CDN link

    gsap.to('selector',{properties})

    gsap.from(".nav h3", {y: -50, opacity: 0,duration: 1,delay: 0.5,stagger: 1,});



### GSAP - Understanding Pin Property in ScrollTrigger

    gsap.to(".page2 img", {
      width: "100%",
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin:true
      },
    });

Project ShowCase :

![ezgif com-optimize](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/a07de365-5e8c-421d-9cf4-5cb715a559aa)

- Text Scroll Effect

      gsap.to(".page2 h1", {
        transform: "translateX(-125%)",
        scrollTrigger: {
          trigger: ".page2",
          scroller: "body",
          scrub: 2,
          pin: true,
          start: "top 0",
          end: "top -100%",
        },
      });

Project ShowCase:

![ezgif com-video-to-gif-converted (2)](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/8d0a1dc2-1241-463a-9b03-827bd7b2aa56)

### Locomotive- All in One Video

- Learning Smooth Scrolling Effects
- Include CDN links to index.html file

      // CSS file

      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"
        />

      // locomotive JS File

      <script
        src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"
        defer
      ></script>

- In script.js file :

      // locomotive scrolling

      import LocomotiveScroll from "locomotive-scroll";

      const scroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });

- It applies smooth scrolling

### GSAP, ScrollTrigger, Locomotive Configure

Include CDN Links :

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"
    />

    <script
      src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"
      defer
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"
      integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
      defer
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"
      integrity="sha512-LQQDtPAueBcmGXKdOBcMkrhrtqM7xR2bVrnMtYZ8ImAZhFlIb5xrMqQ6uZviyeSB+4mYj89ta8niiCIQM1Gj0w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
      defer
    ></script>

- To Apply Locomotive Don't give width & height to wrapper/container



- To use scrolltrigger with locomotive you need include some JS Code

      gsap.registerPlugin(ScrollTrigger);

      // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);

      // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform
          ? "transform"
          : "fixed",
      });

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();

      gsap.from(".page1 .box", {
        scale: 0,
        duration: 1,
        delay: 1,
        opacity: 0,
        rotate: 360,
      });

      gsap.from(".page2 .box", {
        scale: 0,
        duration: 1,
        // delay: 1,
        opacity: 0,
        rotate: 360,
        scrollTrigger: {
          trigger: ".page2 .box",
          scroller: ".main",
          start: "top 50%",
          markers: true,
        },
      });


### GSAP: Bonus Project!!

Unlock GSAP's Potential: Delve into the 'Bonus Project' and explore the extra dimensions of GSAP. Unleash creativity and mastery as you apply advanced techniques to create captivating animations and interactions.

- Text Scrolling Effect From (Hotel Odesej Website) [[https://hotelodisej.com/]]
- Apply Smooth Scrolling

      // function to split text

      let headings = document.querySelectorAll(".page2 h1");

      function textSplitting() {
        headings.forEach((elem) => {
          let clutter = "";
          let h1Text = elem.textContent;

          let splitedText = h1Text.split("");

          splitedText.forEach((e) => {
            clutter += `<span>${e}</span>`;
          });
          // console.log(h1Text);

          elem.innerHTML = clutter;

          // console.log(elem);
        });
      }

- Apply GSAP, ScrollTrigger & Locomotive

      function gsapAnimation() {
        gsap.to(".page2 h1 span", {
          color: "#e3e3c4",
          stagger: 0.1,
          // opacity: 0.5,
          scrollTrigger: {
            trigger: ".page2 h1",
            scroller: ".main",
            markers: true,
            start: "top 50%",
            end: "top -15%",
            scrub: 3,
          },
        });
      }



### Final Project - Obys Agency Clone

Embark on our final project—a polished clone of obys.agency, showcasing everything you've learned in the course. We've poured our hearts into making the website and videos as simple as possible, a testament to our dedication and hard work. This website isn't just visually appealing; it's a showcase of seamless design and captivating animations. Dive into six engaging videos, each offering a glimpse behind the scenes. The introduction video sets the tone, giving you a sneak peek into the inspiration. Join me in celebrating the beauty of simplicity and skill in this front-end development masterpiece! 🚀✨

# Tailwind CSS

### Learn Tailwind CSS in One Video

Master Tailwind CSS in a single session! Dive into a comprehensive guide covering the entire spectrum of Tailwind CSS. Elevate your skills and streamline your workflow with this powerful utility-first framework.



# React JS

- JavaScript Library for creating user interfaces.

### Introduction To React JS

Embark on the React JS journey! Discover the essentials in 'Introduction to React JS'. Uncover the basics and get started with this popular JavaScript library for building user interfaces.

- UI Library
- for solving the real time problem (facebook build this cool library)
- for notification update on real time basically (2013).

### React JS Theory & History

Understanding React JS: Delve into its theory and historical roots. Explore the foundational aspects and historical development of React JS

- react -> lang X
- react -> framework X
- react -> technology X

- react -> library

- facebook - 2013

- 2015 - open source

#### Virtual DOM

- Copy of real DOM

jab websites par khhob sare change hote hai to khoob saara repaint hota hai wo bhi wo elements jo badle bhi nahi, aur ye website ko slow down kar deta hai, is cheej se bhi bachne ke liyein facebook ne react create ki gyi

- likes count, notification count side by side (change/update)

- when ever there is change in UI the DOM repaint or rerender things
- This is not the case with virtual DOM or with React. React solves this problem of not repaint Those part which was not updated or changed only re render things which are updated.

### React JS - Essentials - Everything you need to learn

Core Foundations of React JS: 'Essentials - Everything You Need to Learn'. Delve into essential components, foundational concepts, and crucial skills required to master React JS in this comprehensive guide

- array objects destructuring import and export

- map filter arrow fncs (implicit return) spread operator

- Copy array using spread operator

-In js array can hold the multiple datatype and element within the same array.

        let arr = [1, 2, 3, 4];

        // real copy

        let arr2 = [...arr];

        arr.pop();

        console.log(arr, arr2);


        // object copy

        let state={name : "adesh" , age:21};

        let stateCopy = { ...state };

        state.name = "HArsh";

        console.log(state, stateCopy);

- Object Destructuring

      let obj = { name: "lucky", age: 23 };

      let { name, age } = obj;

      console.log(name);
      console.log(age);

      2nd example:

      let obj={name:"string",social:{
        facebook:{
          user:{
            first:"adesh",
            second:"joe"
          }
        }
      }};

      let{user}=obj.social.facebook;

- Array Destructuring

        let arr = [12, function () {}];

        let [first, sec] = arr;

        console.log(first);
        console.log(sec);

- import export

- hum log component banaate hai, component matlab page ka hissaa

- navbar sidebar cart home landing page second page, ab dikkat yeh aati hai har hissa alag alag component hai aur components ko hum log alag alag files mein rakhte hai, to inko last mein jodna bhi padta hai, jodne ke liyein use hota hai import & export

- navbar - export

- sidebar - export

- cart - import navbar sidebar

- main - import navbar

       function Cart() {}

       export default Cart;

       export function Cart(){

       }

        import Cart from "./script";
        import { Cart } from ".script.js";

- arrow functions

      let sum = (a, b) => a + b;

      console.log(sum(10, 12));

      --fat arrow fuction:if there is only one value then you can write in this way also
      const state=val=>{
        console.log(val);
      };
      state(10);
   
   --note : this one is a tricky one if we have to return a object from the arrow fuction then we return 
               in the below way

             const abcd=()=>({name:"adesh",age:21}); 
             console.log(abcd());

- impicit return

        let value = val=>val+10;

        console.log(value(20));

- map filter

- dono hi array pe chlte hai, aur dono kaa kaam hai array par kuchh perform krna hand "ek naya array return karna"

      let arr = [1, 2, 3, 4, 5];

- map - har element par kuch karo aur naye array mein rakho

      let arr2 = arr.map((item) => item * 10);

      console.log(arr2);

      let arr2=arr.map((val)=>{ 
        return val=val*2;
      })

      let state = [11, 22, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];

      let greaterFive = state.map((elem) => (elem > 5 ? elem + 5 : elem));

      console.log(greaterFive);

- map filter mein ek hi farak hai, map saare bande lautata hai matlab ki count kam nahi hoga, filter bando ko kam kar skta hai

- ek array mein sabhi nums jo ki 5 se bade hai unmein 10 add kro

- jab originl array ka size kam naa hona ho waha map use hota hai

- jab original array ka size kam krna ho toh wha filter use hota hai

- ek array mein se saare wo nums hata do jo ki 5 se chhote hai

- filter

      let arr = [1, 2, 3, 4, 5, 6];

      let filterArr = arr.filter((elem) => elem > 5);

      console.log(filterArr);

### Section 1: System Setup and Basics

Extensions:

- tabnine
- prettier

Download :

- node js
- use vite vs create react app

      npm create vite@latest

      vite project : setup

      cd setup
      npm i
      npm run dev

#### Understanding JSX

- jsx -> jsx is actually a very similar looking structure like HTMl but with super powers

- jsx sirf dikhta hai HTML ki trah par hota nhi

- It converted into React.createElement

- jsx is very similar to HTML but with superpowers

- conversion to javascript

      <h1>{login ? 'profile':'login'}</h1>


      <h1>Hey  {2 + 2}</h1>

      // output Hey 4

#### Making App

- Component

- React "react" when changes occurs

        function App(){

          return (
            <div>
            <h1>App Component</h1>
            </div>
          )
        }

- Component is a reusable code

### Section 2: Building Components

- Header

      import React from "react";

        const Header = () => {
          return (
            <div>
              <h1>Header</h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
          );
        };

        export default Header;

- Configure Tailwind CSS

- Creating Card Component

### Section 3: Reusable Components

- Use Array map method.

        const data = ["ajay", "rahul", "sachin", "udesh"];


        {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

- Showing Card With Data

- Create Array of data

      const data = [
        {
          image:'',
          name:'',
          desc:''
        }
      ]

- and use map method to use different data with card.

#### React Fragments

- unnecessary div creation stop
- Enclosed all elements in one wrapper without creating div or other element use React Fragment

          <>
          </>

        <React.Fragment>

        </React.Fragment>

### Section 4: Conditional Rendering

- Instock Check

      {item.inStock ? "InStock" : "Out Of Stock"}

      suppose we want to style differently across the multiple components then
      we write code in className with the follwing syntax
      className={`mt-2 px-3 py-1 text-sm text-zinc-100 ${elem.InStock?'bg-blue-800 hover:bg-sky-600':'bg-red-700 hover:bg-red-500'}  rounded-md`}

- Handling Events:

        <button
            onClick={() => console.log("download song")}
          >
            Download Now
          </button>



            // seperatae function

           const handleClick = () => {

  console.log("mouse over event");
  };

  //onClick={handleOnClick()} //note :Do not use () these bracket this means run now without clicking

### Section 5: Managing State and Understanding the State Hook

- state variable takes care of react updation

- It will take care of react changes

- state ek data hota hai, react is data ka khayaal rkhta hai, jab bhi ye data change hota hai react page ko update karta hai

- state koi bhi data ho skta hai, jaise ki score = 0

      const [score,setScore] = useState(0);


      // onClick par apply krdo

       const handleScore = () => {

          setScore(score + 1);
       };

- Based on Previous Value

      onClick={() => setVal((prev) => prev + 1)}

- Use object data in useState

        const [data,setData] = useState({name:'Lucky',isBanned:false});


        onClick={() => setData({ name: "Divyanshu", isBanned: true })}

        onClick={() => setData({ ...data, isBanned: !data.isBanned })}

#### Section 6 : Mastering the useState() hook

- useState not update synchronously

- add object property to useState

- useState state ko turant update nahi karta, wo useState state ko update karta hai apne hisaab se function completion ke baad to fix performance issue

      const [val, setVal] = useState({ name: "lucky",age: 23 });

      <h1>Name : {val.name}</h1>
      <h2>Age : {val.age}</h2>
      <h3>Role : {val.gender}</h3>

      <button
        className="px-3 py-1 mt-3 bg-red-500 text-md rounded-full"
        onClick={() => {setVal({ ...val, gender: "Male" })

        console.log(val);
        }

        }
      >
        Click
      </button>

- Use Array in useState

      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

      <button
        onClick={() => setVal(() => val.filter((item, index) => index != 2))}
        // onClick={() =>
        //   setVal(() => {
        //     return val.filter((item, index) => index != val.length - 1);
        //   })
        // }
        className="px-3 py-1 text-md bg-blue-500 rounded-full text-white"
      >
        Change
      </button>

- Remove even values from an Array

      onClick={() =>
          setVal(() => val.filter((item, index) => item % 2 !== 0))
        }

- Arrays Addition

      onClick={() => setVal([...val, 10])}

- Change array of an object

         const [val, setVal] = useState([

            { name: "lucky", age: 23 },
            { name: "Shivam", age: 34 },
            { name: "golu", age: 25 },
        ]);

        onClick={() =>
          setVal(() =>
            val.map((item, index) =>
              item.name === "Shivam" ? { name: "Shivam", age: 55 } : item
            )
          )
        }

#### Section 7 : useState() Hooks

- Solve small-small questions

- print bahar jaao if val is false and print mat jao iv val is true

        <p>{data === false ? "BAHAR JAO" : "MAT JAO"}</p>

- Use React icons

      npm i react-icons --save

- switch Images:

      <div className="w-60 relative h-32 flex bg-zinc-500 rounded-md overflow-hidden">
        <img
          className={`w-full h-full ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform ease-out duration-300 object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />
        <img
          className={`w-full h-full transition-transform ease-out duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1702234867439-bec43ed4e369?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-10 h-10 bg-[#dadada8b] flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRight size={"1em"} />
        </span>
      </div>

#### Section 8 : Passing Data via Props

- Pass Data via prop

- props use hote hai aapke components ko reuable bnane ke liyein consider karo aapke pass ek button hai and aapko us button ko alag alag jagah daalna hai app mein, to aap ek button ek mein baaneyin aur uska data hard coded karne ki jagah parent component se send karde and child component par use kar le

      <Props btn={"Know More"} color="bg-blue-600" />
      <Props btn={"Learn More"} color="bg-red-600" />

      <button
        className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2`}
      >
        {btn}
      </button>

- Array of object change via props functions

       const handleFriendsBtn = (index) => {
          setRealData((prev) => {
            return prev.map((item, ind) => {
              if (ind === index) {
                return { ...item, friends: !item.friends };
              }
              return item;
            });
          });
        };

- Dynamic class change

        <button
          onClick={() => handleFriendsBtn(index)}
          className={`px-3 mt-4 py-1 text-sm text-white ${
            friends ? "bg-green-600" : "bg-blue-500"
          } font-semibold rounded-md`}
        >
          {friends ? "Add Friend" : "Friend"}
          {/* {friends ? "ADD FRIEND" : "Friends"} */}
        </button>

#### Section 9 : Props and State Exercise

- Create card add build feature Add To favourites

         const [song, setSong] = useState(data);
         const [favouritesCount, setFavouritesCount] = useState(0);

          const handleFavourites = (index) => {
            setSong((prev) => {
              return prev.map((item, indx) => {
                if (indx === index) {
                  return { ...item, favourites: !item.favourites };
                }

                return item;
              });
            });

            setFavouritesCount((prev) => prev + 1);
          };

       <div className="p-10">
      <Header
        favouritesCount={favouritesCount}
        setFavouritesCount={setFavouritesCount}
      />
      <div className="w-full h-52 flex gap-20 flex-wrap mt-10 justify-between">
        {song.map((item, indx) => (
          <Card song={item} handleFavourites={handleFavourites} index={indx} />
        ))}
      </div>

    </div>

##### React Styled Componnets

- CSS Modules - jismein aap kabhi kisi website ka code dekhte ho aur wha par aapko css classes ka naam bada aada teda dikhta hai

- UI library- tailwind css, material UI,bootstrap,Chakra UI

- create file style.module.css

        .a{
          color:'red';
        }

#### Section : 10 Form Handling

- Form Handling
- form basic nature or we can say default nature is to get submmitted but react says no page reload
- website submit ho jaati hai form submit krne par.

- How react handle things in Form
- React prevents Form Submission

- use Ref - is trike mein hum har input ko select kar lete hai and unki value tab nikaalte hai jab form submit hota hai

- use ref ke through html input ko select kar skte hai

      const name = useRef(null);

      const password = useRef(null);

      const handleSubmit = (e) => {
          e.preventDefault();
          console.log(name.current.value,
             password.current.value);

      };

- controlled components

          const [username, setName] = useState({ name: "", age: "" });


          const handleSubmit = (e) => {
            e.preventDefault();

            console.log(username);
          };

          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName({ ...username, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="age"
              onChange={(e) => setName({ ...username, age: e.target.value })}
            />
            <input type="submit" />
          </form>

- react hook form

- install react-form-hook package

      npm i react-hook-form

      import React from "react";
      import { useForm } from "react-hook-form";

      const ReactForm = () => {
        const { register, handleSubmit } = useForm();

        // console.log(register());
        return (
          <div>
            <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
              <input
                className="px-3 mt-2 border-2"
                {...register("name")}
                type="text"
                placeholder="name"
              />{" "}
              <br />
              <input
                className="px-3 mt-2 border-2"
                {...register("email")}
                type="email"
                placeholder="email"
              />{" "}
              <br />
              <input
                className="px-3 mt-2 border-2"
                {...register("age")}
                type="text"
                placeholder="name"
              />{" "}
              <br />
              <input
                className="px-3 mt-2 border-2"
                {...register("color")}
                type="color"
                placeholder="email"
              />{" "}
              <br />
              <input
                className="px-3 mt-2 border-2"
                {...register("password")}
                type="password"
                placeholder="name"
              />{" "}
              <br /> <br />
              <textarea
                className="px-3 mt-2 border-2"
                name="comment"
                {...register("comment")}
                placeholder="Write your feedback"
                cols="30"
                rows="10"
              ></textarea>{" "}
              <br /> <br />
              <input type="submit" />
            </form>
          </div>
        );
      };

      export default ReactForm;

#### Section 11 : Form Handling Exercise

- Form Handle Exercise

- App - Cards - Card - Form

- Add form Data into Card component

        const [users, setUsers] = useState([]);

        const addFormData = (data) => {
            setUsers([...users, data]);
        };

- Reset Input Values

        // provided by react-hook-form

        reset()

- Remove Elements From Card

        const handleRemove = (id) => {
          setUsers(() => users.filter((item, index) => index != id));
        };

#### Section 12 : React JS Routing and Beyond

- Configure react router to use react-routing

- React Uses single page approach in application i.e. no page reload after page changes, for this we use react routing.

- To move From one Page to another without reloading the website, so that website is called Web Application (for not reloading whole page).

      npm i react-router-dom

- Wrap Main Container main.jsx

      <BrowserRouter>
            <App/>
      </BrowserRouter>

- Create Navbar

       <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">Home</Link>
        <Link to="/services">services</Link>
      </nav>

      // Implement Routing

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/services" element={<Services />} />
      </Routes>

- Use navigate hook for back to particular route

        const navigate = useNavigate();

        const back = () => {
            navigate("/");
            // console.log("hey");
        };

- Use NavLink to active & de-Activate class

      <NavLink
        style={(e) => {
          console.log(e);
        }}
        to="/"
      >
        Home
      </NavLink>

- Change color three ways :

  - through style

    style={(e) => {
    return { color: e.isActive ? "tomato" : "" };
    }}

  - Through className :

        <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-semibold text-xl" : "",
          ].join(" ");
        }}
        to="/about"

        >

        About

      </NavLink>

- Inside Child Component

      <NavLink to="/user">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-300" : "",
                e.isActive ? "font-semibold text-xl" : "",
              ].join(" ")}
            >
              User
            </span>
          );
        }}
        {/* <span>User</span> */}
      </NavLink>

### Section 14 : How to integrate API in REACT JS

- The concept for connecting frontEnd With Backend is called AJAX (Asynchronous JavaScript XML) & which implements this communication is through fetch/axois.

- API is an communication medium to build relation

- API allow the communication with each other using requests and responses.

- Using FETCH/AXIOS Method we can access third party API.

- Connect frontEnd with Backend through an API

        import axios from "axios";
        import "./App.css";
        import { useState } from "react";

        function App() {
          const [products, setProducts] = useState([]);

          const getProducts = () => {
            const api = "https://fakestoreapi.com/products";

            axios
              .get(api)
              .then((products) => {
                // console.log(products);
                setProducts(products.data);
              })
              .catch((err) => console.log(err.message));
          };

          const addProducts = () => {
            const api = "https://fakestoreapi.com/products";

            axios
              .post(api, {
                title: "test product",
                price: 13.5,
                description: "lorem ipsum set",
                image: "https://i.pravatar.cc",
                category: "electronic",
              })
              .then((products) => {
                console.log(products);
              })
              .catch((err) => console.log(err.message));
          };
          return (
            <div className="p-4">
              <h1>App</h1>

              <button
                onClick={getProducts}
                className="px-3 py-2 bg-orange-500 mt-4 rounded-sm text-white text-sm"
              >
                Get Products
              </button>
              <button
                onClick={addProducts}
                className="px-3 py-2 mx-10 bg-orange-500 mt-4 rounded-sm text-white text-sm"
              >
                Add Products
              </button>

              <hr className="my-10" />
              <ul>
                {products.length > 0
                  ? products.map((item, index) => (
                      <li key={index} className="rounded p-5 mb-2 bg-orange-300">
                        Product Name: {item.title}
                      </li>
                    ))
                  : "Loading....!!"}
              </ul>
            </div>
          );
        }

        export default App;

- LifeCycle Method name useEffect in functional Component:(Three Types of LifeCycle Methods)

      - Component Mounting - creation
      - Component Updating - updation (when useState is Changed or changes in view)
      - Component UnMounting - deletion/destroy

- Component Creation

      useEffect(()=>{
        console.log('Component Creation');

        return ()=>{
          console.log('Component Deletion From DOM');
        }
      })

      useEffect(() => {
        console.log("SErvices Run");

        return () => {
          console.log("SErvice Destroyed");
        };
      });

#### Section 15 : useEffect() on State Change

- Hook - useEffect() on state change

- Refresh : Component Deletion + Component Updation

- Update : Component Deletion + Component Creation

         const [first, setFirst] = useState("This is normal data");
         const [second, setSecond] = useState("This is very Large Data");

          useEffect(() => {
            console.log("SErvices Run");

            return () => {
              console.log("SErvice Destroyed");
            };
          }, [second]);

- Call API When component is loaded using useEffect HOOk we call it.

        useEffect(() => {
          const api = "https://fakestoreapi.com/products";

          axios
            .get(api)
            .then((products) => {
              // console.log(products);
              setProducts(products.data);
            })
            .catch((err) => console.log(err.message));
        }, []);

- OutSourcing the Code

- writing import axois from 'axios' causes sometimes problem & write this line in 10 20 30 40 .. components is lengthy & create issue for Us

- While requesting to the API - the Header information, cookies,authorization,token, many things generated & for this we have to take of this to not to call an API when other component is added

- Login - profile, timeline , chats enabled

- Call one time & reference call everytime (create one time object).

- Not call axios everytime.

        import axios from "axios";

        // export { axios };

        const instance = axios.create({
          baseURL: "https://fakestoreapi.com",
        });

        axios
        .get("/users")
        .then((users) => {
          console.log(users);
          // setProducts(users.address);
        })
        .catch((err) => console.log(err.message));

        export default instance;

#### Section 16 : React Context API

- It solves Prop Drilling Problem

- Prop Drilling means sharing data between one component to another & another to another means parent to child to son

- From Parent to Child Data Pass only .

- Wrap Application via context

- create context & create UserContext

        import React, { createContext, useState } from "react";

        export const UserContext = createContext();

        const Context = (props) => {
          // console.log(props);

          const [users, setUser] = useState([
            {
              id: 0,
              username: "John Doe",
              city: "USA",
            },
            {
              id: 1,
              username: "Lucky",
              city: "Delhi",
            },
            {
              id: 2,
              username: "Harsh",
              city: "Bhopal",
            },
          ]);

          return (
            <>
              <UserContext.Provider value={{ users, setUser }}>
                {props.children}
              </UserContext.Provider>
            </>
          );
        };

        export default Context;

- use data via components

        const { users, setUser } = useContext(UserContext);

- use navigate hook for go back

        const navigate= useNavigate();

        // apply on go back button

        const handleBack =()=>{
          navigate('/user');
        }

#### React JS: Project 1

- Building Basic CRUD with ReactJS: Engage in a project integrating CRUD functionality and Context API. Learn to create, read, update, and delete operations within a ReactJS project using Context API for seamless data management.

#### React JS: Project - Refokus Clone

- Replicating Refokus: Dive into 'ReactJS: Project 2 Refokus Clone' and explore the creation of a Refokus-like project using ReactJS. Apply your skills to build a similar platform, honing your abilities in the process.

##### Component Structure:

- App

  - Navbar
    - button component
  - Work
  - Stripes

    - Stripe

  - Products
    - Product
  - Marquee
  - Blocks
    - Block
  - Footer

  ### Design Navbar :

  ![screencapture-localhost-5173-2024-04-12-23_02_32](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/564c6d0d-fb1c-468e-bf05-ed5c3edffdf0)

  ### Stripes Component :

  ![screencapture-localhost-5173-2024-04-13-22_19_50](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/12accfe6-3eef-4328-836a-cf131ecd945a)

  ### Products Component :

  ![screencapture-localhost-5173-2024-04-14-13_28_12v](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/c1b8bf7f-41dd-416e-9171-694e1a8a1296)

  ### Marquees Component :

  ![Capture](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/f0043705-32c3-46c1-8d46-a4a96160415d)

  ### Cards Component :

  ![screencapture-localhost-5173-2024-04-14-14_55_48](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/c8f4342e-6330-480f-b715-5e08c8ccbf35)

  ### Footer Component :

  ![foo](https://github.com/Adeshwasane04/Front-End-Domination-Create-Anything-with-Code/assets/88204554/c7a44e91-6292-48b6-b9e4-b010f3e87821)



##### Use Locomotive JS

- Handle smoothness via locomotive js

#### Use Framer motion

- Animation of work component
- For Scrolling Work component images appears

#### Redux

##### Everything you Need to Know About Redux

- Essential Redux Insights: Gain a comprehensive understanding of Redux. This guide covers everything you need to know about Redux, offering key insights into state management for robust React applications.

## ExoApe - Let's Build it: [[https://www.exoape.com/]]

- UI project with scrolling animations

#### GSAP X Reactjs

##### Introduction and Setup: GSAP X React.js for Stunning Animations

- Install neccessary packages

      npm i gsap
      npm i @gsap/react

- Two ways to create GSAP Animation

  - useRef()
  - useGSAP(()=>{
    gsap.to(selector,{}) })

- using useRef:

      const boxRef = useRef();

      useGSAP(() => {
          gsap.to(boxRef.current, {
            x: 600,
            y: 200,
          });
      });

      <div ref={boxRef} className="box"></div>
      <div className="box box1"></div>
      <div className="box box2"></div>

- Using normal useGSAP & pass selector

      useGSAP(() => {
        gsap.to(".box", {
          x: 1000,
          delay: 1,
          duration: 2,
          rotate: 360,
          backgroundColor: "blue",
        });
      });



##### GSAP Timeline: Animate Like a Pro

- define timeline

      const tl = gsap.timeline();
      useGSAP(() => {

        tl.to(boxRef.current, {
          x: 1200,
          rotate: 360,
          borderRadius: "50%",
          duration: 2,
          delay: 1,
        });
        tl.to(circleRef.current, {
          x: 1200,
          rotate: 360,
          borderRadius: "10px",
          duration: 2,
        });
      });

        useGSAP(
            () => {
              gsap.to(".box", {
                rotate: 360,
                duration: 1.5,
                delay: 1,
              });
            },
            { scope: ".container1" }
          );


# FrontEnd Domination

Embarking on a journey to become a proficient frontend developer is an exciting and rewarding endeavor.

# Thanks to Sheryians Coding School For bringing this Course

# Mentor : Harsh Sharma

Happy Learning! ✨

Made with by Adesh Wasane
# FrontEnd-Development
