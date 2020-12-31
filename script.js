function calculateLove() {
    let love;
    let reply;
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value
    love = Math.floor(Math.random() * 101);
    if (love <= 49)
    {
        reply = name1 + " and " + name2 + " does not have a reasonable chance of working out, but on the other hand it might just work out";
    }
    else {
        reply = name1 + " and " + name2 + " has a reasonable chance of working out";
    }
    love = String(love);
    love = love+"%";

    return [love, reply];
};

function success() {
    if(document.getElementById("name1").value===" " & document.getElementById("name2").value===" ") { 
           document.getElementById('submit').disabled = true; 
       } else { 
           document.getElementById('submit').disabled = false;
       }
   }