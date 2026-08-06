`use strict`
const impressum = document.getElementById("impressum");
const datenschutz = document.getElementById("datenschutz");
const closeBtn = document.querySelectorAll(".close-button");


    impressum.addEventListener("click", ()=>{
        document.getElementById("impressumModal").style.display = "flex";
        document.querySelector(".modal-overlay").style.display = "flex";
    })

    
    datenschutz.addEventListener("click", ()=>{
        document.getElementById("datenschutzModal").style.display = "flex";
        document.querySelector(".modal-overlay").style.display = "flex";
    })
    
    
    closeBtn.forEach((closeBtn) => {
        closeBtn.addEventListener("click", ()=>{
            document.getElementById("datenschutzModal").style.display = "none";
            document.querySelector(".modal-overlay").style.display = "none";
        })
        closeBtn.addEventListener("click", ()=>{
            document.getElementById("impressumModal").style.display = "none";
            document.querySelector(".modal-overlay").style.display = "none";
        })
        
    });