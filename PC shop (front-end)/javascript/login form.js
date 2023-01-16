document.querySelector("#pop-up-login").addEventListener("click",function(){
    document.querySelector(".pop-up").classList.add("active");
});
document.querySelector(".pop-up .btn-close").addEventListener("click",function(){
    document.querySelector(".pop-up").classList.remove("active");
});