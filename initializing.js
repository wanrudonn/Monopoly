var s = 1;
var position = 0;
var person = 0;
var text = 0;
var po1 = 0;
var po2 = 0;
var po3 = 0;
var po4 = 0;
var player = 0;
var arr = [];
var v = 300;
var dice = $(".dice");
var spdice = $(".spdice");
var playernum = document.querySelector(".playernum");
var npcnum = document.querySelector(".npcnum");
var choosechr = document.querySelectorAll(".choosechr");
var arrow = document.querySelector(".arrow");
var title = document.querySelector(".control").firstElementChild;
var purchase = document.querySelector(".purchasebox");
var upgrade = document.querySelector(".upgradebox");
var info = document.querySelector(".infobox");
var i1 = document.querySelector("#player1");
var i2 = document.querySelector("#player2");
var i3 = document.querySelector("#player3");
var i4 = document.querySelector("#player4");
var img = [i1, i2, i3, i4];
var construct = document.querySelector(".construct");
var l1 = "<img src='img/l1.png' class='house' alt=''>";
var l2 = "<img src='img/l2.png' class='house' alt=''>";
var l3 = "<img src='img/l3.png' class='house' alt=''>";
var colorscheme = {
    joker: "#5E45AB",
    batman: "#121212",
    superman: "#274D7A",
    cat: "#B04E58",
    pink: "pink",
    red: "#FA2A14",
    green: "#5FAE2E",
}
var myName = "";
var daysLeft = 0;
var casinoMoney = 0;
var randomMoney = 0;
var fateText = 0;
playernum.lastElementChild.children[0].onclick = function () {
    playernum.style.visibility = "hidden";
    npcnum.lastElementChild.children[0].style.pointerEvents = "none";
    npcnum.lastElementChild.children[0].style.background = "grey";
    player = 1;
}
playernum.lastElementChild.children[1].onclick = function () {
    playernum.style.visibility = "hidden";
    npcnum.lastElementChild.children[3].style.pointerEvents = "none";
    npcnum.lastElementChild.children[3].style.background = "grey";
    player = 2;
}
playernum.lastElementChild.children[2].onclick = function () {
    playernum.style.visibility = "hidden";
    npcnum.lastElementChild.children[2].style.pointerEvents = "none";
    npcnum.lastElementChild.children[2].style.background = "grey";
    npcnum.lastElementChild.children[3].style.pointerEvents = "none";
    npcnum.lastElementChild.children[3].style.background = "grey";
    player = 3;
}
playernum.lastElementChild.children[3].onclick = function () {
    playernum.style.visibility = "hidden";
    npcnum.style.visibility = "hidden";
    player = 4;
    npc = 0;
    choosechr[3].style.visibility = "visible";
    choosechr[2].style.visibility = "visible";
    choosechr[1].style.visibility = "visible";
    choosechr[0].style.visibility = "visible";
}
npcnum.lastElementChild.children[0].onclick = function () {
    npcnum.style.visibility = "hidden";
    npc = 0;
    checkplayers();
}
npcnum.lastElementChild.children[1].onclick = function () {
    npcnum.style.visibility = "hidden";
    player += 1;
    if (player == 2) {
        p2.control = 0;
    } else if (player == 3) {
        p3.control = 0;
    } else if (player == 4) {
        p4.control = 0;
    }
    checkplayers();
}
npcnum.lastElementChild.children[2].onclick = function () {
    npcnum.style.visibility = "hidden";
    player += 2;
    if (player == 3) {
        p2.control = 0;
        p3.control = 0;
    } else if (player == 4) {
        p3.control = 0;
        p4.control = 0;
    }
    checkplayers();
}
npcnum.lastElementChild.children[3].onclick = function () {
    npcnum.style.visibility = "hidden";
    player += 3;
    p2.control = 0;
    p3.control = 0;
    p4.control = 0;
    checkplayers();
}

function checkplayers() {
    if (player >= 1) {
        choosechr[3].style.visibility = "visible";
        if (player >= 2) {
            choosechr[2].style.visibility = "visible";
            if (player >= 3) {
                choosechr[1].style.visibility = "visible";
                if (player == 4) {
                    choosechr[0].style.visibility = "visible";
                }
            }
        }
    }
}
var x = 0;
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 7; j++) {
        choosechr[i].lastElementChild.children[j].firstElementChild.onmouseover = function () {
            this.parentElement.appendChild(arrow);
        }
    }
}
for (var j = 0; j < 7; j++) {
    for (var i = 0; i < 4; i++) {
        choosechr[i].lastElementChild.children[j].firstElementChild.onclick = binding;
    }
}

function binding() {
    this.parentElement.parentElement.parentElement.style.visibility = "hidden";
    arr.push(this.nextElementSibling.innerHTML);
    x++;
    if (x == player) {
        clearInterval(lockchr);
        playernum.parentElement.style.visibility = "hidden";
        for (var i = 0; i < arr.length; i++) {
            players[i].name = arr[i];
            players[i].state = "active";
            img[i].src = "img/" + arr[i] + ".png"
        }
        title.style.visibility = "visible";
        title.innerHTML = p1.name;
        checkColor();
        writeinfo();
        setInterval(function () {
            $(".p1info h2").text("$" + p1.money);
            $(".p2info h2").text("$" + p2.money);
            if (player >= 3) {
                $(".p3info h2").text("$" + p3.money);
                if (player == 4) {
                    $(".p4info h2").text("$" + p4.money);
                }
            }
        }, 100);
    }
}
var lockchr = setInterval(function () {
    for (var j = 0; j < 7; j++) {
        for (var i = 0; i < 4; i++) {
            if (choosechr[i].lastElementChild.children[j].firstElementChild.nextElementSibling.innerHTML == arr[0]) {
                choosechr[i].lastElementChild.children[j].firstElementChild.style.pointerEvents = "none";
                choosechr[i].lastElementChild.children[j].firstElementChild.style.boxShadow = "1px 1px 1px inset #42AFE1,1px -1px 1px inset #42AFE1,-1px 1px 1px inset #42AFE1, -1px -1px 1px inset #42AFE1"
            }
            if (choosechr[i].lastElementChild.children[j].firstElementChild.nextElementSibling.innerHTML == arr[1]) {
                choosechr[i].lastElementChild.children[j].firstElementChild.style.pointerEvents = "none";
                choosechr[i].lastElementChild.children[j].firstElementChild.style.boxShadow = "1px 1px 1px inset #42AFE1,1px -1px 1px inset #42AFE1,-1px 1px 1px inset #42AFE1, -1px -1px 1px inset #42AFE1"
            }
            if (choosechr[i].lastElementChild.children[j].firstElementChild.nextElementSibling.innerHTML == arr[2]) {
                choosechr[i].lastElementChild.children[j].firstElementChild.style.pointerEvents = "none";
                choosechr[i].lastElementChild.children[j].firstElementChild.style.boxShadow = "1px 1px 1px inset #42AFE1,1px -1px 1px inset #42AFE1,-1px 1px 1px inset #42AFE1, -1px -1px 1px inset #42AFE1"
            }
        }
    }
}, 100)
