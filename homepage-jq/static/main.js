window.onload=function(){

    var slides_show=document.getElementsByClassName("slides_show")
    var slides_index=0;
    if(slides_show.length>0){
        var slides_list=slides_show[0].getElementsByClassName("slides_list")[0]
        var slides_list_li=slides_list.getElementsByTagName("li");
        var slides_indicator=slides_show[0].getElementsByClassName("slides_indicator")[0];
        var slides_indicator_li=slides_indicator.getElementsByTagName("li")

    }
    for(var i=0;i<slides_indicator_li.length;i++){
        slides_indicator_li[i].setAttribute("key",String(i))
        slides_indicator_li[i].setAttribute("key",String(i))
        slides_indicator_li[i].onclick=handleSlidesClickIndocator;
       
    }
    function handleSlidesClickIndocator(e){
       //置空当前幻灯片
        slides_list_li[slides_index].setAttribute("class","");
        //置空当先指示器
         slides_indicator_li[slides_index].setAttribute("class","");
  
        if(e.target.tagName==="LI")
        {  
            slides_index=parseInt(e.target.getAttribute("key"))
            e.target.setAttribute("class","active");
        }
        else{
            e.target.parentNode.setAttribute("class","active");
            slides_index=parseInt(e.target.parentNode.getAttribute("key"))
            
        }
   
         slides_list_li[slides_index].setAttribute("class","active");
        
        slides_list.classList.add("flash");
        slides_list.addEventListener("animationend",()=>{slides_list.classList.remove("flash");})

    }

}