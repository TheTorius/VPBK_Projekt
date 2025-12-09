// JavaScript Document

/*!
 * Project Name: MinitCSS
 * Author: Lukáš Horák <horak.lucas@seznam.cz>
 * License: MIT
 * Copyright (c) 2025 Lukáš Horák
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function gitlab_redirect() {
    const gitlab = document.createElement("div");
    gitlab.classList.add("footer-redirect-float");
    gitlab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gitlab" viewBox="0 0 16 16">
                <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/>
              </svg>`;
    document.body.appendChild(gitlab);
    
    const footer_btn = document.getElementById("footer-redirect-btn");
    footer_btn.style.display = "none";
    
    setTimeout(() => {
        window.location.href = "https://gitlab.com/torius-v-uka/minitcss";
    },1500);
}

const createModalOverlay = document.createElement("div");
createModalOverlay.classList.add("modal-overlay");
document.body.appendChild(createModalOverlay);

var alertExists = false;

function alertFun(info) {
    if(!alertExists) {
        const alertElement = document.createElement("div");
        alertElement.textContent = info;
        alertElement.classList.add("alert-class");
        document.body.appendChild(alertElement);
        
        const alertElementTimer = document.createElement("div");
        alertElementTimer.classList.add("alert-class-timer");
        alertElement.appendChild(alertElementTimer);
        
        alertExists = true;
        
        setTimeout(() => {
            alertElement.style.animation = "alert-class-frames linear 300ms forwards";        
        }, 5000);
        
        setTimeout(() => {
            alertElement.style.display = "none";
            alertExists = false;
        }, 5600);
    }
}

const allDismissNotesButtons = document.querySelectorAll("div.noteblock.noteblock-btn");

allDismissNotesButtons.forEach(note => {
    const btnDiv = document.createElement("div");
    const btn = document.createElement("button");
    
    btnDiv.classList.add("noteblock-dismiss");
    btn.classList.add("noteblock-button");
    
    btn.setAttribute("onClick", "dismiss_note(this)");
    btn.innerHTML = "&oplus;";
    
    btnDiv.appendChild(btn);
    note.appendChild(btnDiv);
});

function dismiss_note(button) {
    const noteblock = button.parentElement.parentElement;
    noteblock.style.display = "none";
}

const emailConst = document.getElementById("emailInput");
const emailFloatConst = document.getElementById("emailFloat");
const pswdConst = document.getElementById("pswd");
const pswdFloatConst = document.getElementById("pswdFloat");

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z-]+(\.[a-z]+)+$/;
const regexPswd = /^[a-zA-Z0-9.-?!_*]+$/;

if(emailConst) {
    emailConst.addEventListener("input",() => {
        if(emailConst.value.length > 40) {
            emailConst.classList.add("dropInput");
            emailFloatConst.style.display = "none";
            setTimeout(() => {
              if (emailConst) {
                emailFloatConst.style.display = "none";
              }
            }, 1500);
        }
    });
}

const regexEmailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z-._]$/;

document.querySelectorAll("div.form-wrap").forEach(div => {
      const inputType = Array.from(div.children).filter(child => 
          child.classList.contains("form-control")
      )[0];
      
      if(inputType != undefined) {
        inputType.addEventListener("input",() => {
          if(inputType.validity.valid) {
              div.querySelectorAll("span").forEach(span => {
                  span.style.display = "none";
              })
          } else {
              div.querySelectorAll("span").forEach(span => {
                  span.style.display = "block";
              })
          }
        });
      } else {
        const div0 = Array.from(div.children).filter(child => 
            child.classList.contains("form-with-icon")
        )[0];
        
        const inputType0 = Array.from(div0.children).filter(child => 
            child.classList.contains("form-control")
        )[0];
        
        div.querySelectorAll("span").forEach(span => {
            if(!span.classList.contains("form-span-invalid")) {
                span.classList.add("form-span-invalid");
            }
        });
        
        if(inputType0 != undefined) {
            inputType0.addEventListener("input",() => {
              if(inputType0.validity.valid) {
                  div.querySelectorAll("span").forEach(span => {
                      span.classList.remove("form-span-invalid");
                      span.classList.add("form-span-valid");
                  })
              } else {
                  div.querySelectorAll("span").forEach(span => {
                      span.classList.add("form-span-invalid");
                      span.classList.remove("form-span-valid");
                  })
              }
            });
        }
      }
})

var navHidden = document.getElementsByClassName("nav-hidden");
var navHiddenSide = document.getElementsByClassName("nav-hidden-side");

function navHiddenBar() {
    const navigation = document.getElementsByClassName("nav-shown")[0];
    const btn = document.getElementsByClassName("nav-hidden-btn")[0];
    if(navigation == undefined) {
        const div = document.createElement("div");
        const nav = document.createElement("nav");
        div.classList.add("nav-shown");
        document.body.appendChild(div);
        div.appendChild(nav);
        nav.innerHTML = navHidden[0].innerHTML;
        btn.classList.add("nav-shown-btn");
        const overlay = document.createElement("div");
        overlay.classList.add("nav-shown-overlay-top");
        document.body.appendChild(overlay);
    } else if(navigation.style.display == "none") {
        navigation.style.display = "flex";
        btn.classList.add("nav-shown-btn");
        document.getElementsByClassName("nav-shown-overlay-top")[0].style.display = "block";
    } else {
        navigation.style.display = "none";
        btn.classList.remove("nav-shown-btn");
        document.getElementsByClassName("nav-shown-overlay-top")[0].style.display = "none";
    }
}

function navHiddenBarSide() {
    const navigation = document.getElementsByClassName("nav-side-body")[0];
    const btn = document.getElementsByClassName("nav-hidden-btn")[0];
    if(navigation == undefined) {
        const navbarWin = document.createElement("div");
        const divHeader = document.createElement("div");
        const divArticle = document.createElement("div");
        const divFooter = document.createElement("div");
    
        navbarWin.classList.add("nav-side-body");
        divHeader.classList.add("nav-side-header");
        divArticle.classList.add("nav-side-article");
        divFooter.classList.add("nav-side-footer");
        
        navbarWin.appendChild(divHeader);
        navbarWin.appendChild(divArticle);
        navbarWin.appendChild(divFooter);
        
        divHeader.textContent = "Navigační bar";
        divArticle.innerHTML = navHiddenSide[0].innerHTML;
        divFooter.innerHTML = `&copy Bc. Lukáš Horák&nbsp&nbsp`;
    
        const overlay = document.createElement("div");
        overlay.classList.add("nav-shown-overlay-side");
        document.body.appendChild(navbarWin);
        document.body.appendChild(overlay);
        
        overlay.addEventListener("click", function (e) {
          if (e.target === this) {
            navHiddenBarSide();
          }
        });
    } else if(navigation.style.display == "none") {
        navigation.style.display = "block";
        btn.classList.add("nav-shown-btn");
        document.getElementsByClassName("nav-shown-overlay-side")[0].style.display = "block";
    } else {
        navigation.style.display = "none";
        btn.classList.remove("nav-shown-btn");
        document.getElementsByClassName("nav-shown-overlay-side")[0].style.display = "none";
    }
}

var headerLeft = document.getElementsByClassName("header-left");

setupNavBar();

var draggingDocumentSideBar = false;

function setupNavBar() {
    if(headerLeft[0] != undefined && navHidden[0] != undefined) {
        const div = document.createElement("div");
        const btn = document.createElement("button");
        btn.classList.add("nav-hidden-btn");
        const img = document.createElement("i");
        img.classList.add("bi");
        img.classList.add("bi-list");
        div.style.display = "flex";
        headerLeft[0].appendChild(div);
        div.appendChild(btn);
        btn.appendChild(img);
        btn.onclick = navHiddenBar;
    } else if(headerLeft[0] != undefined && navHiddenSide[0] != undefined) {
        const div = document.createElement("div");
        const btn = document.createElement("button");
        btn.classList.add("nav-hidden-btn");
        const img = document.createElement("i");
        img.classList.add("bi");
        img.classList.add("bi-list");
        div.style.display = "flex";
        headerLeft[0].appendChild(div);
        div.appendChild(btn);
        btn.appendChild(img);
        btn.onclick = navHiddenBarSide;
        
        const navigation = document.getElementsByClassName("nav-side-body")[0];
        
        document.addEventListener("mousedown",(e) => {
            if(e.clientX < 15) {
                draggingDocumentSideBar = true;
            }
        });
        
        document.addEventListener("mousemove",(e) => {
            if(draggingDocumentSideBar && e.clientX > 130) {
                navHiddenBarSide();
                draggingDocumentSideBar = false;
            }
        });
        
        document.addEventListener("mouseup", (e) => {
            draggingDocumentSideBar = false;
        })
        
    } else if(headerLeft[0] == undefined && (navHidden[0] != undefined || navHiddenSide[0] != undefined)) {
        const headerL = document.createElement("div");
        headerL.classList.add("header-left");
        const header = document.querySelector("header");
        header.appendChild(headerL);
        headerLeft[0] = headerL;
        setupNavBar();
    }
}

var modalCloseBtn = document.querySelectorAll("button.modal-close-btn");

modalCloseBtn.forEach(btn => {
    btn.addEventListener("click",() => {
        const parentEl = btn.parentElement.parentElement;
        if(parentEl.classList.contains("modal") && btn.parentElement.classList.contains("modal-footer")) {
            parentEl.style.display = "none";
            document.getElementsByClassName("modal-overlay")[0].style.display = "none";
        }
    });
});

var modalOpenBtn = document.querySelectorAll("button.modal-open-btn");

var isDragging = false;
var offsetX;
var offsetY;

modalOpenBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const modals = document.querySelectorAll("div[data-m-name]");
        modals.forEach(modal => {
            if(modal.dataset.mName == btn.dataset.mName) {
                modal.style.display = "flex";
                const overlay = document.querySelector("div.modal-overlay");     
                overlay.style.display = "flex";
                
                if(modal.classList.contains("modal-draggable")) {
                    modal.addEventListener("mousedown", (e) => {
                        isDragging = true;
                        const rect = modal.getBoundingClientRect();
                        offsetX = e.clientX - rect.left;
                        offsetY = e.clientY - rect.top;
                        modal.style.cursor = "grabbing";
                    });
                    
                    modal.addEventListener("animationend", () => {
                        modal.style.animation = "none";
                    });
                    
                    document.addEventListener("mousemove", (e) => {
                        if(isDragging == true) {
                            modal.style.top = (e.clientY - offsetY) + "px";
                            modal.style.left = (e.clientX - offsetX) + "px";
                        }
                    });
                }
            }
        });
    });
});

document.addEventListener("mouseup", () => {
   isDragging = false; 
});

const ModalOverlay = document.querySelector("div.modal-overlay");

if(ModalOverlay) {
    ModalOverlay.addEventListener("click", () => {
    document.querySelectorAll("div.overlay-close").forEach(modal => {
        modal.style.display = "none";
        ModalOverlay.style.display = "none";
    });
});
}

const colorSwitcher = document.querySelector("input.color-switcher")

if(colorSwitcher) {
    colorSwitcher.addEventListener("click",() => {
    if(document.body.dataset.color == "dark") {
        document.body.setAttribute("data-color","light");
    } else document.body.setAttribute("data-color","dark");
    setTransparentBackground();
});
}

const cardFormFocus = document.querySelectorAll("div.card.card-form-focus");
const article = document.querySelector("article");

cardFormFocus.forEach(card => {
    card.addEventListener("focusin", () => {
        var overlay = document.querySelector("div.card-form-focus-overlay");
        if(overlay) {
            overlay.style.display = "flex";
        } else {
            overlay = document.createElement("div");
            overlay.classList.add("card-form-focus-overlay");
            document.body.appendChild(overlay);
            overlay.style.display = "flex";
        }
    });
    
    card.addEventListener("focusout", () => {
        setTimeout(() => {
            if (!card.contains(document.activeElement)) {
                const overlay = document.querySelector("div.card-form-focus-overlay");
                if (overlay) overlay.style.display = "none";
            }
        }, 20);
    });  
});

const allCarouselCards = document.querySelectorAll("div.carousel-cards");

allCarouselCards.forEach(carouselCard => {
    const leftArrow = document.createElement("div");
    const rightArrow = document.createElement("div");
    
    leftArrow.classList.add("carousel-left");
    rightArrow.classList.add("carousel-right");
    
    leftArrow.innerHTML = "&lArr;"
    rightArrow.innerHTML = "&rArr;";
    
    const numPerSlide = carouselCard.dataset.ccardNum;
    
    allCards = carouselCard.querySelectorAll("div.carousel-card");
    
    if(allCards.length >= numPerSlide) {
        allCards.forEach(card => {
            card.style.flex = `0 0 calc(100% / ${numPerSlide} - 4px)`;
        });
        
        carouselCard.appendChild(leftArrow);
        carouselCard.appendChild(rightArrow);
        
        const wrapper = document.createElement("div");
        
        wrapper.classList.add("carousel-wrapper");
        
        wrapper.innerHTML = carouselCard.innerHTML;
        carouselCard.innerHTML = "";
        
        carouselCard.appendChild(wrapper);
        
        const leftArrowW = wrapper.querySelector("div.carousel-left");
        const rightArrowW = wrapper.querySelector("div.carousel-right");
        
        carouselCard.appendChild(leftArrowW);
        carouselCard.appendChild(rightArrowW);
        
        let currentIndex = 0;
        const maxIndex = allCards.length - numPerSlide;
        
        leftArrowW.addEventListener("click",() => {
            if (currentIndex > 0) {
              currentIndex--;
            } else {
              currentIndex = maxIndex;
            }
            wrapper.style.transform = `translateX(-${(100 / numPerSlide) * currentIndex}%)`;
        });
        
        rightArrowW.addEventListener("click",() => {
            if (currentIndex < maxIndex) {
              currentIndex++;
            } else {
              currentIndex = 0;
            }
            wrapper.style.transform = `translateX(-${(100 / numPerSlide) * currentIndex}%)`;
        });
    
        if(carouselCard.dataset.ccardSpeed > 0) {
            setInterval(() => {
                if (currentIndex < maxIndex) {
                  currentIndex++;
                } else {
                  currentIndex = 0;
                }
                wrapper.style.transform = `translateX(-${(100 / numPerSlide) * currentIndex}%)`;
            }, carouselCard.dataset.ccardSpeed);
        } 
    } else {
        carouselCard.style.justifyContent = "center";
    }
});

const cardTables = document.querySelectorAll("div.card-table-h, div.card-table-v");

function tabSelector(card) {
    const c = card.querySelector("div.card-table-tabs");
    const ul = card.querySelector("nav").querySelector("ul");
    
    const activeCard = Array.from(ul.children).filter(child =>
        child.classList.contains("active")
    );
    
    const divs = c.querySelectorAll("div");
        divs.forEach(div => {
            if(div.classList.contains("active")) {
                div.classList.remove("active");
            }
    })
    
    if(activeCard.length == 1) {
        if(activeCard[0].dataset.tabNum >= 0) {
            const setActiveCard = Array.from(c.children).filter(child => 
                child.dataset.tabNum == activeCard[0].dataset.tabNum
            );
            
            setActiveCard[0].classList.add("active");
        }
    } else if(activeCard.length > 1) {
        const lis = ul.querySelectorAll("li");
        lis.forEach(li => {
            if(li.classList.contains("active")) {
                li.classList.remove("active");
            }
        });
        ul.querySelector("li").classList.add("active");
        c.querySelector("div").classList.add("active");
    } else {
        ul.querySelector("li").classList.add("active");
        c.querySelector("div").classList.add("active");
    }
}

cardTables.forEach(card => {
    const ul = card.querySelector("nav").querySelector("ul");
    
    const liOfUl = ul.querySelectorAll("li");
    liOfUl.forEach(li => {
        li.addEventListener("click", () => {
            liOfUl.forEach(li0 => {
                if(li0.classList.contains("active")) {
                    li0.classList.remove("active");
                }
            })
            li.classList.add("active");
            tabSelector(card);
        });
    });
    
    tabSelector(card);
});

const colorSwitcherButton = document.querySelector("input.color-switcher");

function setTransparentBackground() {
    const transparentBackgrounds = document.querySelectorAll(".transparent");

    transparentBackgrounds.forEach(bg => {
       bg.style.removeProperty('background-color');
       const bg_color = getComputedStyle(bg).backgroundColor; 
       if(bg.dataset.transparent) {
            const opacity =  bg.dataset.transparent;
            var inner = bg_color.slice(
              bg_color.indexOf("(") + 1, 
              bg_color.indexOf(")")
            );
            inner = inner.split(",");
            bg.style.backgroundColor = `rgba(${inner[0]},${inner[1]},${inner[2]},${opacity})`;
            
            Array.from(bg.children).forEach(child => {
                setRecursiveTransparentBackground(child, opacity);
            });
       }
    });
}

function setRecursiveTransparentBackground(component, opacity) {
    component.style.removeProperty('background-color');
    const bg_color = getComputedStyle(component).backgroundColor; 

    if(bg_color != "rgba(0, 0, 0, 0)") {
        var inner = bg_color.slice(
          bg_color.indexOf("(") + 1, 
          bg_color.indexOf(")")
        );
        inner = inner.split(",");
        component.style.backgroundColor = `rgba(${inner[0]},${inner[1]},${inner[2]},${opacity})`;
    }
    Array.from(component.children).forEach(child => {
        setRecursiveTransparentBackground(child, opacity);
    });
}

function setGlassEffectBackground() {
    const glassBackgrounds = document.querySelectorAll(".glass");
    
    glassBackgrounds.forEach(bg => {
       bg.style.removeProperty('background-color');
       const bg_color = getComputedStyle(bg).backgroundColor; 
       
       var inner = bg_color.slice(
          bg_color.indexOf("(") + 1, 
          bg_color.indexOf(")")
       );
       inner = inner.split(",");
       bg.style.backgroundColor = `rgba(${inner[0]},${inner[1]},${inner[2]},0.2)`;
       
       Array.from(bg.children).forEach(child => {
            setRecursiveGlassEffectBackground(child);
       });
    });
}

function setRecursiveGlassEffectBackground(component) {
    component.style.removeProperty('background-color');
    const bg_color = getComputedStyle(component).backgroundColor; 

    if(bg_color != "rgba(0, 0, 0, 0)") {
        var inner = bg_color.slice(
          bg_color.indexOf("(") + 1, 
          bg_color.indexOf(")")
        );
        inner = inner.split(",");
        component.style.backgroundColor = `rgba(${inner[0]},${inner[1]},${inner[2]},0.7)`;
    }

    Array.from(component.children).forEach(child => {
        setRecursiveGlassEffectBackground(child);
    });
}

setTransparentBackground();
setGlassEffectBackground();

if(colorSwitcherButton) {
    const dateTime = new Date();

    if(dateTime.getHours() >= 17 || dateTime.getHours() <= 5) {
        colorSwitcherButton.checked = true;
        document.body.setAttribute("data-color","dark");
    }
} 

const sidebarFloating = document.querySelector(".sidebar.floating.draggable");

if(sidebarFloating) {
    var sidebarFloats = false;
    var offsetX;
    var offsetY;

    sidebarFloating.addEventListener("mousedown", (e) => {
        const rect = sidebarFloating.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        sidebarFloats = true;
    });
    
    document.addEventListener("mousemove",(e) => {
        if(sidebarFloats) {
            sidebarFloating.style.top = (e.clientY - offsetY) + "px";
            sidebarFloating.style.left = (e.clientX - offsetX) + "px";
        }
    });
    
    sidebarFloating.addEventListener("mouseup",() => {
        const widthWin = window.innerWidth;
        const leftPos = sidebarFloating.offsetLeft;
        sidebarFloats = false;
        if(leftPos > (widthWin/2)) {
            sidebarFloating.style.left = "calc(98% - " + sidebarFloating.offsetWidth + "px)";
        } else {
            sidebarFloating.style.left = "1%";
        }
    });
}

function modPow(base, exp, mod) {
    let result = 1n;
    base %= mod;
    while (exp > 0n) {
        if (exp & 1n) result = (result * base) % mod;
        base = (base * base) % mod;
        exp >>= 1n;
    }
    return result;
}

function discreteLog(g, h, p) {
    const n = p - 1n;                    // řád grupy
    let m = sqrtBigInt(n);
    if (m * m < n) m += 1n;              // zaokrouhlení nahoru

    const baby = new Map();
    let current = 1n;

    // Baby steps
    for (let j = 0n; j < m; j++) {
        baby.set(current.toString(), j);
        current = (current * g) % p;
    }

    // g^(-m) mod p
    const factor = modPow(g, n - m, p);

    let giant = h % p;
    for (let i = 0n; i < m; i++) {
        const key = giant.toString();
        if (baby.has(key)) {
            return i * m + baby.get(key);   // nalezený exponent
        }
        giant = (giant * factor) % p;
    }
    return null;
}

// Jednoduchý sqrt pro BigInt (Newtonova metoda)
function sqrtBigInt(x) {
    if (x < 0n) throw "negativní";
    if (x === 0n || x === 1n) return x;
    let a = 1n;
    let b = x;
    while (b - a > 1n) {
        const mid = (a + b) >> 1n;
        if (mid * mid <= x) {
            a = mid;
        } else {
            b = mid;
        }
    }
    return a;
}

function randomBigInt(bits) {
    const bytes = Math.ceil(bits / 8);
    const array = new Uint8Array(bytes);
    crypto.getRandomValues(array);
    // vynulujeme přebytečné bity nahoře
    array[0] &= (1 << (bits % 8)) - 1 || 255;
    let result = 0n;
    for (const b of array) result = (result << 8n) + BigInt(b);
    return result;
}


const P_215BIT = 13844819492817931310226993678783369503813450183784349923411712345678912345678912345678912345678912345678912347n;
const P_64BIT = 18446744073709551557n;
const P_32BIT = 4294967291n;
const P_16BIT = 65521n;
const G = 3n;

selectedPbit=P_16BIT;

pVariable = -1
gVariable = -1
a_Variable = -1
AVariable = -1
BVariable = -1
KAliceVariable = -1
KBobVariable = -1
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

async function showExample(){

    log = document.getElementById("Desifrace").innerHTML="";
    log1 = document.getElementById("Desifrace1").innerHTML="";
    log2 = document.getElementById("Desifrace2").innerHTML="";
    log3 = document.getElementById("Desifrace3").innerHTML="";
    log4 = document.getElementById("Desifrace4").innerHTML="";
    log5 = document.getElementById("Desifrace5").innerHTML="";
    log6 = document.getElementById("Desifrace6").innerHTML="";

    SelectedTable = document.getElementById("ShowTable")

    SelectedTable.innerHTML =`<thead>
                                        <tr>
                                            <th>Krok</th>
                                            <th>Alice</th>
                                            <th>Přesun po síti</th>
                                            <th>Bob</th>
                                            <th>Zachyceno útočníkem (Mallory)</th>
                                        </tr>
                                    </thead>`

    await delay(500)

    pVariable = selectedPbit;
    gVariable = G;
    //gVariable = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

    SelectedTable.innerHTML += "<tr>"+
                                "<td>1.</td>"+
                                "<td>Dohodne se na veřejných parametrech<br>"+
                                    `<strong>p = ${pVariable}</strong> (prvočíslo)<br>`+
                                    `<strong>g = ${gVariable}</strong> (generátor)`+
                                 "</td>"+
                                `<td>→→→ p = ${pVariable}, g = ${gVariable} →→→</td>`+
                                `<td>Přijme a souhlasí s p = ${pVariable}, g = ${gVariable}</td>`+
                                `<td class='table-danger'><strong>p = ${pVariable}, g = ${gVariable}</strong><br>`+
                                    "(veřejné – vidí je každý)</td>"+
                             "</tr>"

    await delay(4000)
    a_Variable = randomBigInt(214) % (pVariable - 1n);
    //a_Variable = Math.floor(Math.random() * (8 - 2 + 1)) + 2;

    AVariable = modPow(gVariable, a_Variable, pVariable);

    SelectedTable.innerHTML +=  `<tr>
                                <td>2.</td>
                                <td>Vybere si svoje tajné číslo<br>
                                <strong>a = ${a_Variable}</strong> (tajné!)<br>
                                Vypočítá: A = g<sup>a</sup> mod p<br>
                                A = ${gVariable}<sup>${a_Variable}</sup> =  mod ${pVariable} = <strong>${AVariable}</strong>
                                </td>
                                <td>→→→ A = ${AVariable} →→→</td>
                                <td></td>
                                <td class='table-danger'><strong>A = ${AVariable}</strong><br>
                                (veřejná hodnota, útočník ji vidí)</td>
                                </tr>`

    await delay(4000)

    b_Variable = randomBigInt(214) % (pVariable - 1n)
    //b_Variable = Math.floor(Math.random() * (8 - 2 + 1)) + 2;

    BVariable = modPow(gVariable, b_Variable, pVariable);
    
    SelectedTable.innerHTML +=  `<tr>
                                <td>3.</td>
                                <td></td>
                                <td>←←← B = ${BVariable} ←←←</td>
                                <td>Vybere si svoje tajné číslo<br>
                                <strong>b = ${b_Variable}</strong> (tajné!)<br>
                                Vypočítá: B = g<sup>b</sup> mod p<br>
                                B = ${gVariable}<sup>${b_Variable}</sup> = <strong>${BVariable}</strong>
                                </td>
                                <td class='table-danger'><strong>B = ${BVariable}</strong><br>
                                (veřejná hodnota, útočník ji vidí)</td>
                                </tr>`

    await delay(4000)

    KAliceVariable = modPow(BVariable, a_Variable, pVariable);
    KBobVariable = modPow(AVariable, b_Variable, pVariable);

    SelectedTable.innerHTML +=  `<tr>
                                <td>4.</td>
                                <td>Vypočítá sdílený sekret:<br>
                                K = B<sup>a</sup> mod p<br>
                                K = ${BVariable}<sup>${a_Variable}</sup> mod ${pVariable} = <strong>${KAliceVariable}</strong></td>
                                <td>(žádný přenos)</td>
                                <td>Vypočítá sdílený sekret:<br>
                                K = A<sup>b</sup> mod p<br>
                                K = ${AVariable}<sup>${b_Variable}</sup> mod ${pVariable} = <strong>${KBobVariable}</strong></td>
                                <td class='table-warning'></td>
                                </tr>`

    await delay(4000)
    
    SelectedTable.innerHTML +=  `<tr class='table-success'>
                                <td>5.</td>
                                <td colspan='3' class='text-center'><strong>Alice i Bob teď mají společný
                                tajný klíč K = ${KBobVariable}</strong><br>
                                Mohou začít šifrovanou komunikaci (např. AES s klíčem odvozeným z ${KBobVariable})
                                </td>
                                <td><strong>Útočník viděl jen:</strong><br>
                                p=${pVariable}, g=${gVariable}, A=${AVariable}, B=${BVariable}<br>
                                </td>
                                </tr>`

    await delay(4000)
    
    decipher()
}

async function decipher() {
    log = document.getElementById("Desifrace");
    log1 = document.getElementById("Desifrace1");
    log2 = document.getElementById("Desifrace2");
    log3 = document.getElementById("Desifrace3");
    log4 = document.getElementById("Desifrace4");
    log5 = document.getElementById("Desifrace5");
    log6 = document.getElementById("Desifrace6");

    log.innerHTML = "Útočník zachytil: p, g, A, B\nSpouštím Baby-step Giant-step algoritmus...</div><br><br>";
    log.classList.add("typing-container");
    //log.classList.add("typing-container-border");


    await delay(4000);
    log1.innerHTML = `Zkouším najít tajné 'a' tak, že g^a ≡ ${AVariable} mod ${pVariable}...<br>`;
    //log.classList.remove("typing-container-border");
    log1.classList.add("typing-container");
    //log1.classList.add("typing-container-border");
    await delay(4000);

    const start = performance.now();
    const foundA = discreteLog(gVariable, AVariable, pVariable);
    const timeA = ((performance.now() - start)/1000).toFixed(3);

    log2.innerHTML = `Nalezeno! a = ${foundA} (za ${timeA}s)<br><br>`;
    //log1.classList.remove("typing-container-border");
    log2.classList.add("typing-container");
    //log2.classList.add("typing-container-border");
    await delay(4000);

    log3.innerHTML = `Nyní hledám b: g^b ≡ ${BVariable} mod ${pVariable}...<br>`;
    //log2.classList.remove("typing-container-border");
    log3.classList.add("typing-container");
    //log3.classList.add("typing-container-border");
    await delay(4000);

    const start2 = performance.now();
    const foundB = discreteLog(gVariable, BVariable, pVariable);
    const timeB = ((performance.now() - start2)/1000).toFixed(3);

    log4.innerHTML = `Nalezeno! b = ${foundB} (za ${timeB}s)<br><br>`;
    //log3.classList.remove("typing-container-border");
    log4.classList.add("typing-container");
    //log4.classList.add("typing-container-border");
    await delay(4000);

    const crackedK = modPow(BVariable, foundA, pVariable);

    log5.innerHTML = `Útočník spočítal sdílený klíč:\nK = ${BVariable}^${foundA} mod ${pVariable} = ${crackedK}<br><br>`;
    //log4.classList.remove("typing-container-border");
    log5.classList.add("typing-container");
    //log5.classList.add("typing-container-border");

    await delay(4000);

    if (crackedK === KBobVariable) {
        log6.innerHTML = `<span class="text-danger fs-4">ÚTOK ÚSPĚŠNÝ! Útočník má stejný klíč jako Alice a Bob!</span>`;
        log5.classList.remove("typing-container-border");
        log6.classList.add("typing-container");
        //log6.classList.add("typing-container-border");

        await delay(4000);
        //log6.classList.remove("typing-container-border");
    }
}


function changeExample(){
    selelectValue = document.getElementById("ExampleSelect").value;
    switch (selelectValue) {
        case "0":
            break;
        case "16":
            selectedPbit = P_16BIT;
            break;
        case "32":
            selectedPbit = P_32BIT;
            break;
        case "64":
            selectedPbit = P_64BIT;
            break;
        case "215":
            selectedPbit = P_215BIT;
            break;
    }
}