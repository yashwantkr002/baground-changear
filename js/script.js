function fun(cal){
    let body=document.querySelector(".main");
    body.style.backgroundColor=cal;
    let text=document.querySelectorAll(".text");
    if(cal=="#000000"){
        for(let ele of text){
            ele.style.color="#ffffff";
        
        }
    }
        else{
            for(let ele of text){
                ele.style.color="#000000";
        }
    }
}
