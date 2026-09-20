
 let name= prompt ("Enter your name:")
  let age= prompt ("Enter your age:")
  let gender= prompt ("Enter your gender:")


      if (gender==="male"){
        alert("Welcome Mr."+name);
      

       }



       else if (gender==="female"){
        alert("Welcome Ms."+name);
      

      }



      else {
      alert("Welcome"+name);
    
     }



    if (age<16){
      orderStuts= "you are not eligible to place an order";

        alert ("you are not eligible to place an order");
    
     }

      else if(age>=16){
      orderStuts= "you can continue with the order";
        alert("you can continue with the order");
      }




      
     

   let order= prompt ("Enter your order:\nBurger\nShawarma\nZinger");

   let validOrder=true;

      if (order==="Burger" || order==="Shawarma" || order==="Zinger"){
           orderStuts= "your order is beign prepared";

     alert ("your order is beign prepared");


     }

     else{
     orderStuts= "Invalid Order.pleade try again";


     alert (Invalid Order.pleade try again);

    }



        

        if(age >=18 && validOrder){
            orderStuts= "Order confirmed";

            alert(Order confirmed);
        }



         else if(age <18 || vaildOrder){

            orderStuts= " Order requires verification";

            alert(Order requires verification);
        }




   console.log("name:"+name);
   console.log("age:"+age);
   console.log("gender:"+gender);
   console.log("order:"+order);
   console.log("order-status:"+order-status);



   document.write("<h1> order summary </h1>" );
   document.write("customer name:"+name+"<br>");
   document.write("age:"+age+"<br>");
   document.write("gender:"+gender+"<br>");
   document.write("order:"+order+"<br>");
   document.write("order-status:"+order-status+"<br>");







