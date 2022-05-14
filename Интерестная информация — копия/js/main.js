var box1 = document.getElementById("img")

box1.addEventListener("mouseenter", function(){
     box1.classList.add('box1')
})
box1.addEventListener("mouseleave", function(){
    box1.classList.remove('box1')
})

var button1 = document.querySelector("#button1iy")
var button2 = document.querySelector("#button2iy")
var boxt1 = document.querySelector("#yutu1")
var boxt2 = document.querySelector("#yutu2")

var buttonGmail1 = document.querySelector("#button1gmail")
var buttonGmail2 = document.querySelector("#button2gmail")
var boxGmail1 = document.querySelector("#gmail2")
var boxGmail2 = document.querySelector("#gmail")

var buttonStep1 = document.querySelector("#button1step8")
var buttonStep2 = document.querySelector("#button2step8")
var boxstep1 = document.querySelector("#step1")
var boxstep2 = document.querySelector("#step2")

var buttonfl1 = document.querySelector("#button1fl")
var buttonfl2 = document.querySelector("#button2fl")
var boxfl1 = document.querySelector("#fl1")
var boxfl2 = document.querySelector("#fl2")

var buttonhtml1 = document.querySelector("#button1html")
var buttonhtml2 = document.querySelector("#button2html")
var boxhtml1 = document.querySelector("#html1")
var boxhtml2 = document.querySelector("#html2")

var buttonbost1 = document.querySelector("#button1bost")
var buttonbost2 = document.querySelector("#button2bost")
var boxbost1 = document.querySelector("#bostrap1")
var boxbost2 = document.querySelector("#bostrap2")

var buttonw31 = document.querySelector("#button1w3")
var buttonw32 = document.querySelector("#button2w3")
var boxw31 = document.querySelector("#w31")
var boxw32 = document.querySelector("#w32")

var buttonbeon1 = document.querySelector("#button1beon")
var buttonbeon2 = document.querySelector("#button2beon")
var boxbeon1 = document.querySelector("#beonmax1")
var boxbeon2 = document.querySelector("#beonmax2")

var buttonmdn1 = document.querySelector("#button2mdn")
var buttonmdn2 = document.querySelector("#button1mdn")
var boxmdn1 = document.querySelector("#mdn1")
var boxmdn2 = document.querySelector("#mdn2")


var buttonicon81 = document.querySelector("#button1icon8")
var buttonicon82 = document.querySelector("#button2icon8")
var boxicon1 = document.querySelector("#icon81")
var boxicon2 = document.querySelector("#icon82")

var buttonNetlify1 = document.querySelector("#button1Netlify")
var buttonNetlify2 = document.querySelector("#button2Netlify")
var boxNetlify1 = document.querySelector("#Netlify1")
var boxNetlify2 = document.querySelector("#Netlify2")

var buttoncolorscheme1 = document.querySelector("#button2colorscheme")
var buttoncolorscheme2 = document.querySelector("#button1colorscheme")
var boxcolorscheme1 = document.querySelector("#colorscheme1")
var boxcolorscheme2 = document.querySelector("#colorscheme2")

var buttoncssmatic1 = document.querySelector("#button1cssmatic")
var buttoncssmatic2 = document.querySelector("#button2cssmatic")
var boxcssmatic1 = document.querySelector("#cssmatic1")
var boxcssmatic2 = document.querySelector("#cssmatic2")

var buttononlinefotoshop1 = document.querySelector("#button1onlinefotoshop")
var buttononlinefotoshop2 = document.querySelector("#button2onlinefotoshop")
var boxonlinefotoshop1 = document.querySelector("#onlinefotoshop1")
var boxonlinefotoshop2 = document.querySelector("#onlinefotoshop2")

var buttoncodepen1 = document.querySelector("#button1codepen")
var buttoncodepen2 = document.querySelector("#button2codepen")
var boxcodepen1 = document.querySelector("#codepen1")
var boxcodepen2 = document.querySelector("#codepen2")

var buttonGithub1 = document.querySelector("#button1Github")
var buttonGithub2 = document.querySelector("#button2Github")
var boxGithub1 = document.querySelector("#Github1")
var boxGithub2 = document.querySelector("#Github2")

var buttonGooglefonts1 = document.querySelector("#button1Googlefonts")
var buttonGooglefonts2 = document.querySelector("#button2Googlefonts")
var boxGooglefonts1 = document.querySelector("#Googlefonts1")
var boxGooglefonts2 = document.querySelector("#Googlefonts2")

var buttonfast = document.querySelector("#buttonfast")
var boxfast = document.querySelector("#fast")

var buttonsite = document.querySelector("#buttonsite")
var boxsite = document.querySelector("#sitee")

var buttoninfo = document.querySelector("#buttoninfo")
var boxinfo = document.querySelector("#info")

function popi(hok, nok){
    hok.addEventListener("click", function(){
        var div = nok
        div.style.display = div.style.display === "none"
        ? "flex"
        : "none"
    })
}
function pop(hok, nok){
    hok.addEventListener("click", function(){
        var div = nok
        div.style.display = div.style.display === "none"
        ? "block"
        : "none"
    })
}


pop(buttoninfo, boxinfo)
pop(buttonsite, boxsite)
pop(buttonfast, boxfast)

popi(buttonfl2, boxfl2)
popi(buttonfl1, boxfl1)

popi(buttonStep2, boxstep2)
popi(buttonStep1, boxstep1)

popi(buttonGmail2, boxGmail2)
popi(buttonGmail1, boxGmail1)

popi(button2, boxt2) 
popi(button1, boxt1)

popi(buttonhtml2, boxhtml2)
popi(buttonhtml1, boxhtml1)

popi(buttonbost1,boxbost1)
popi(buttonbost2,boxbost2)

popi(buttonw31,boxw31)
popi(buttonw32,boxw32)

popi(buttonmdn2, boxmdn1)
popi(buttonmdn1, boxmdn2)

popi(buttonbeon1, boxbeon1)
popi(buttonbeon2, boxbeon2)

popi(buttonmdn2, boxmdn1)
popi(buttonmdn1, boxmdn2)

popi(buttonicon81, boxicon1)
popi(buttonicon82, boxicon2)

popi(buttonNetlify1, boxNetlify1)
popi(buttonNetlify2, boxNetlify2)

popi(buttoncolorscheme1, boxcolorscheme1)
popi(buttoncolorscheme2, boxcolorscheme2)

popi(buttoncssmatic1, boxcssmatic1)
popi(buttoncssmatic2, boxcssmatic2)

popi(buttononlinefotoshop1, boxonlinefotoshop1)
popi(buttononlinefotoshop2, boxonlinefotoshop2)

popi(buttoncodepen1, boxcodepen1)
popi(buttoncodepen2, boxcodepen2)

popi(buttonGooglefonts1, boxGooglefonts1)
popi(buttonGooglefonts2, boxGooglefonts2)

popi(buttonGithub1, Github1)
popi(buttonGithub2, Github2)
