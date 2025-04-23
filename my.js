var but1 = true, but2 = false, but3 = false, but4 = false, but5 = false;
let button1 = document.getElementById("but1");
button1.onclick = function tabe1() {
    if (button1.className == "") {
        button1.className = "button_active_category";
        but1 = true;
        let img1 = document.getElementById("img1");
        let h1 = document.getElementById("h1");
        let p1 = document.getElementById("p1");
        img1.src ="img/image_food/2.png"
        h1.innerHTML = "Cheese Beef Hamburger";
        p1.innerHTML = "fried chicken balls, french fries";
        let img2 = document.getElementById("img2");
        let h2 = document.getElementById("h2");
        let p2 = document.getElementById("p2");
        h2.innerHTML = "Combo funny";
        p2.innerHTML = "fried chicken balls, french fries";
        img2.src = "img/image_food/13.png"
        let img3 = document.getElementById("img3");
        let h3 = document.getElementById("h3");
        let p3 = document.getElementById("p3");
        h3.innerHTML = "Chicken with Spicy Sauce";
        p3.innerHTML = "chili garlic sauce, black pepper sauce";
        img3.src = "img/image_food/13 (1).png"
        let img4 = document.getElementById("img4");
        let h4 = document.getElementById("h4");
        let p4 = document.getElementById("p4");
        h4.innerHTML = "Salad mixed vinegar";
        p4.innerHTML = "Salad, vinegar, tomato";
        img4.src = "img/image_food/20220905-113313 1.png"
        let img5 = document.getElementById("img5");
        let h5 = document.getElementById("h5");
        let p5 = document.getElementById("p5");
        h5.innerHTML = "Chicken burger";
        p5.innerHTML = "fried chicken";
        img5.src = "img/image_food/burger_with_fried_chicken_2021_08_29_03_54_46_utc 1.png"
        let img6 = document.getElementById("img6");
        let h6 = document.getElementById("h6");
        let p6 = document.getElementById("p6");
        h6.innerHTML = "Lipton";
        p6.innerHTML = "";
        img6.src = "img/image_food/ice_tea_2021_11_30_16_48_46_utc 1.png"
    
  
        if(but2 == true)
        {
            let button2 = document.getElementById("but2")
            button2.className="";
            but2 = false;
        }

        if(but3 == true)
        {
            let button3 = document.getElementById("but3")
            button3.className="";
            but3 = false;
        }
        if(but4 == true)
        {
            let button4 = document.getElementById("but4")
            button4.className="";
            but4 = false;
        }
        if(but5 == true)
        {
            let button5 = document.getElementById("but5")
            button5.className="";
            but5 = false;
        }
    }
}

let button2 = document.getElementById("but2");
button2.onclick = function tabe2() {
    if (button2.className == "") {
        button2.className = "button_active_category";
        but2 = true;
        let img1 = document.getElementById("img1");
        let h1 = document.getElementById("h1");
        let p1 = document.getElementById("p1");
        h1.innerHTML = "Big Mac";
        p1.innerHTML = "When a craving hits for those two all-beef patties";
        img1.src ="img/burger/bigmac.png"
        let img2 = document.getElementById("img2");
        let h2 = document.getElementById("h2");
        let p2 = document.getElementById("p2");
        h2.innerHTML = "Quarter Pounder";
        p2.innerHTML = "Each Quarter Pounder with Cheese burger features";
        img2.src = "img/burger/quarterpounder.png"
        let img3 = document.getElementById("img3");
        let h3 = document.getElementById("h3");
        let p3 = document.getElementById("p3");
        h3.innerHTML = "Double Quarter Pounder";
        p3.innerHTML = "Each Double Quarter Pounder quarter";
        img3.src = "img/burger/doublequarter.png"
        let img4 = document.getElementById("img4");
        let h4 = document.getElementById("h4");
        let p4 = document.getElementById("p4");
        h4.innerHTML = "SQuarter Pounder Deluxe";
        p4.innerHTML = "McDonald's Quarter Pounder";
        img4.src = "img/burger/quarterpounderdeluxe.png"
        let img5 = document.getElementById("img5");
        let h5 = document.getElementById("h5");
        let p5 = document.getElementById("p5");
        h5.innerHTML = "McDouble";
        p5.innerHTML = "The classic McDouble burger stacks";
        img5.src = "img/burger/macdouble.png"
        let img6 = document.getElementById("img6");
        let h6 = document.getElementById("h6");
        let p6 = document.getElementById("p6");
        h6.innerHTML = "Bacon Quarter";
        p6.innerHTML = "Each Bacon Quarter Pounder";
        img6.src = "img/burger/baconquarter.png"
       /* for(var i=0;i<=5;i++)
        {
          var img=document.getElementById(`"img${i}"`)
            img.src=`"img/burger/${i}.png"`;
        }*/
    
        if(but1 == true)
        {
            let button1 = document.getElementById("but1")
            button1.className="";
            but1 = false;
        }

        if(but3 == true)
        {
            let button3 = document.getElementById("but3")
            button3.className="";
            but3 = false;
        }
        if(but4 == true)
        {
            let button4 = document.getElementById("but4")
            button4.className="";
            but4 = false;
        }
        if(but5 == true)
        {
            let button5 = document.getElementById("but5")
            button5.className="";
            but5 = false;
        }
}

}
let button3 = document.getElementById("but3");
button3.onclick = function tabe3() {
    if (button3.className == "") {
        button3.className = "button_active_category";
        but3 = true;
        let img1 = document.getElementById("img1");
        let h1 = document.getElementById("h1");
        let p1 = document.getElementById("p1");
        h1.innerHTML = "Diet Coke ";
        p1.innerHTML = "Diet Coke fixes everything";
        img1.src ="img/drink/diet coke.png"
        let img2 = document.getElementById("img2");
        let h2 = document.getElementById("h2");
        let p2 = document.getElementById("p2");
        h2.innerHTML = "Fanta Orange";
        p2.innerHTML = "Sip on the bubbly";
        img2.src = "img/drink/fanta.png"
        let img3 = document.getElementById("img3");
        let h3 = document.getElementById("h3");
        let p3 = document.getElementById("p3");
        h3.innerHTML = "Dr Pepper";
        p3.innerHTML = "McDonald's serves Dr Pepper";
        img3.src = "img/drink/dr pepper.png"
        let img4 = document.getElementById("img4");
        let h4 = document.getElementById("h4");
        let p4 = document.getElementById("p4");
        h4.innerHTML = "Sprite";
        p4.innerHTML = "Cool off with Sprite";
        img4.src = "img/drink/sprite.png"
        let img5 = document.getElementById("img5");
        let h5 = document.getElementById("h5");
        let p5 = document.getElementById("p5");
        h5.innerHTML = "Coca Cola";
        p5.innerHTML = "Enjoy a cold, refreshing Coca-Cola";
        img5.src = "img/drink/coca-cola.png"
        let img6 = document.getElementById("img6");
        let h6 = document.getElementById("h6");
        let p6 = document.getElementById("p6");
        h6.innerHTML = "Hot Tea";
        p6.innerHTML = "Refresh your mornings with the best Hot Tea";
        img6.src = "img/drink/hot tea.png"
        if(but1 == true)
        {
            let button1 = document.getElementById("but1")
            button1.className="";
            but1 = false;
        }

        if(but2 == true)
        {
            let button2 = document.getElementById("but2")
            button2.className="";
            but2 = false;
        }
        if(but4 == true)
        {
            let button4 = document.getElementById("but4")
            button4.className="";
            but4 = false;
        }
        if(but5 == true)
        {
            let button5 = document.getElementById("but5")
            button5.className="";
            but5 = false;
        }
}

}
let button4 = document.getElementById("but4");
button4.onclick = function tabe4() {
    if (button4.className == "") {
        button4.className = "button_active_category";
        but4 = true;
        let img1 = document.getElementById("img1");
        let h1 = document.getElementById("h1");
        let p1 = document.getElementById("p1");
        h1.innerHTML = "Shamrock McFlurry";
        p1.innerHTML = "For a limited time only";
        img1.src ="img/dessert/McFlurry M&M'S.png"
        let img2 = document.getElementById("img2");
        let h2 = document.getElementById("h2");
        let p2 = document.getElementById("p2");
        h2.innerHTML = "McFlurry";
        p2.innerHTML = "The McDonald’s McFlurry";
        img2.src = "img/dessert/McFlurry.png"
        let img3 = document.getElementById("img3");
        let h3 = document.getElementById("h3");
        let p3 = document.getElementById("p3");
        h3.innerHTML = "Vanilla Cone";
        p3.innerHTML = "Treat yourself to a delicious Vanilla Cone";
        img3.src = "img/dessert/vanila cone.png"
        let img4 = document.getElementById("img4");
        let h4 = document.getElementById("h4");
        let p4 = document.getElementById("p4");
        h4.innerHTML = "Chocolate Shake";
        p4.innerHTML = "Looking sweet treat for any time of days";
        img4.src = "img/dessert/chocolateshake.png"
        let img5 = document.getElementById("img5");
        let h5 = document.getElementById("h5");
        let p5 = document.getElementById("p5");
        h5.innerHTML = "Strawberry Shake";
        p5.innerHTML = "Looking sweet treat for any time of day";
        img5.src = "img/dessert/strawberryshake.png"
        let img6 = document.getElementById("img6");
        let h6 = document.getElementById("h6");
        let p6 = document.getElementById("p6");
        h6.innerHTML = "Hot Fudge Sundae";
        p6.innerHTML = "Treat yourself to a delicious Hot Fudge Sundae";
        img6.src = "img/dessert/hot_fudge_sundas.png"

 
        if(but1 == true)
        {
            let button1 = document.getElementById("but1")
            button1.className="";
            but1 = false;
        }

        if(but3 == true)
        {
            let button3 = document.getElementById("but3")
            button3.className="";
            but3 = false;
        }
        if(but2 == true)
        {
            let button2 = document.getElementById("but2")
            button2.className="";
            but2 = false;
        }
        if(but5 == true)
        {
            let button5 = document.getElementById("but5")
            button5.className="";
            but5 = false;
        }
}

}

let button5 = document.getElementById("but5");
button5.onclick = function tabe5() {
    if (button5.className == "") {
        button5.className = "button_active_category";
        but5 = true;
        let img1 = document.getElementById("img1");
        let h1 = document.getElementById("h1");
        let p1 = document.getElementById("p1");
        h1.innerHTML = "Shamrock McFlurry";
        p1.innerHTML = "For a limited time only";
        img1.src ="img/dessert/McFlurry M&M'S.png"
        let img2 = document.getElementById("img2");
        let h2 = document.getElementById("h2");
        let p2 = document.getElementById("p2");
        h2.innerHTML = "McFlurry";
        p2.innerHTML = "The McDonald’s McFlurry";
        img2.src = "img/dessert/McFlurry.png"
        let img3 = document.getElementById("img3");
        let h3 = document.getElementById("h3");
        let p3 = document.getElementById("p3");
        h3.innerHTML = "Vanilla Cone";
        p3.innerHTML = "Treat yourself to a delicious Vanilla Cone";
        img3.src = "img/dessert/vanila cone.png"
        let img4 = document.getElementById("img4");
        let h4 = document.getElementById("h4");
        let p4 = document.getElementById("p4");
        h4.innerHTML = "Chocolate Shake";
        p4.innerHTML = "Looking sweet treat for any time of days";
        img4.src = "img/dessert/chocolateshake.png"
        let img5 = document.getElementById("img5");
        let h5 = document.getElementById("h5");
        let p5 = document.getElementById("p5");
        h5.innerHTML = "Strawberry Shake";
        p5.innerHTML = "Looking sweet treat for any time of day";
        img5.src = "img/dessert/strawberryshake.png"
        let img6 = document.getElementById("img6");
        let h6 = document.getElementById("h6");
        let p6 = document.getElementById("p6");
        h6.innerHTML = "Hot Fudge Sundae";
        p6.innerHTML = "Treat yourself to a delicious Hot Fudge Sundae";
        img6.src = "img/dessert/hot_fudge_sundas.png"
        if(but1 == true)
        {
            let button1 = document.getElementById("but1")
            button1.className="";
            but1 = false;
        }

        if(but3 == true)
        {
            let button3 = document.getElementById("but3")
            button3.className="";
            but3 = false;
        }
        if(but4 == true)
        {
            let button4 = document.getElementById("but4")
            button4.className="";
            but4 = false;
        }
        if(but2 == true)
        {
            let button2 = document.getElementById("but2")
            button2.className="";
            but2 = false;
        }
}

}
var total = document.getElementById("total");
let ezafe = document.getElementById("ezafe");
ezafe.onclick = function sum1(){
    window.open("Cart_Shopping.html")
    let tedad = document.querySelector("#tedad");
    tedad.innerHTML++;
    let total = document.getElementById("total");
    total.innerHTML="$"+tedad.innerHTML*1.99
}
let kam = document.getElementById("kam");
kam.onclick = function min1(){
    let tedad = document.querySelector("#tedad");
    if(tedad.innerHTML>=1)
    {
    tedad.innerHTML--;
    let total = document.getElementById("total");
    total.innerHTML="$"+tedad.innerHTML*1.99
    }

}
var ezafe2 = document.getElementById("ezafe2");
let kam2 = document.getElementById("kam2");
ezafe2.onclick = function sum2(){
    let tedad2 = document.getElementById("tedad2");
    tedad2.innerHTML++;
    let tota2 = document.getElementById("total2");
    total2.innerHTML="$"+tedad2.innerHTML*1.99
}
kam2.onclick = function min2(){
    let tedad2 = document.getElementById("tedad2");
    if(tedad2.innerHTML>=1)
    {
    tedad2.innerHTML--;
    let tota2 = document.getElementById("total2");
    total2.innerHTML="$"+tedad2.innerHTML*1.99
    }

}

