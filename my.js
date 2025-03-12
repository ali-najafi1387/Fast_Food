var but1 = true, but2 = false, but3 = false, but4 = false, but5 = false;
let button1 = document.getElementById("but1");
button1.onclick = function tabe1() {
    if (button1.className == "") {
        button1.className = "button_active_category";
        but1 = true;
    }
  
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

let button2 = document.getElementById("but2");
button2.onclick = function tabe2() {
    if (button2.className == "") {
        button2.className = "button_active_category";
        but2 = true;
    
    
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
ezafe.onclick = function my1(){
    let tedad = document.querySelector("#tedad");
    tedad.innerHTML++;
}
let kam = document.getElementById("kam");
kam.onclick = function my1(){
    let tedad = document.querySelector("#tedad");
    tedad.innerHTML--;
}
