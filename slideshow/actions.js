var slides_list=[
   'http://pic.ziroom.com/house_images/g2m1/M00/4B/5A/v180x135_ChAFBlt8CbSAaywoABIHyacC5WQ364.JPG',
   'http://pic.ziroom.com/house_images/g2m1/M00/4A/2E/v180x135_ChAFB1t8CaqAJgX1ABDuCUrfstw352.JPG',
'http://pic.ziroom.com/house_images/g2m1/M00/4A/2F/v180x135_ChAFB1t8CceAOZW8AA5fH0fZYiQ644.JPG',
'http://pic.ziroom.com/house_images/g2m1/M00/4B/5B/v180x135_ChAFBlt8CcqAJzjvAA5oOX3RkGY489.JPG',
'http://pic.ziroom.com/house_images/g2m1/M00/4B/5B/v180x135_ChAFBlt8CcqAJzjvAA5oOX3RkGY489.JPG',

]
var display_list=[
    'http://pic.ziroom.com/house_images/g2m1/M00/4B/5A/v800x600_ChAFBlt8CbSAaywoABIHyacC5WQ364.JPG',
    'http://pic.ziroom.com/house_images/g2m1/M00/4A/2E/v800x600_ChAFB1t8CaqAJgX1ABDuCUrfstw352.JPG',
    'http://pic.ziroom.com/house_images/g2m1/M00/4A/2F/v800x600_ChAFB1t8CceAOZW8AA5fH0fZYiQ644.JPG',
    'http://pic.ziroom.com/house_images/g2m1/M00/4B/5B/v800x600_ChAFBlt8CcqAJzjvAA5oOX3RkGY489.JPG',
   'http://pic.ziroom.com/house_images/g2m1/M00/4A/2F/v800x600_ChAFB1t8CceAOZW8AA5fH0fZYiQ644.JPG'
]


window.onload=function(){
    var active_index=0
    //保存ul对象，其中直接包含有li
    var slides_list_element=document.getElementById("slides_list");
    //高清图片标签img
    var displayer=this.document.getElementById("displayer").getElementsByTagName('img')[0]
    displayer.setAttribute("src", display_list[0])
    //激活窗格移动控制
    function active_step(count){

        var slides=slides_list_element.getElementsByTagName("li");
  
        if(count>0&&active_index<slides.length-1){
        slides[active_index].setAttribute("class","slide")
        active_index++;
        slides[active_index].setAttribute("class","slide active")
        update_display_img( display_list[active_index])
    

        }else if(count<0&&active_index>0){
            slides[active_index].setAttribute("class","slide")
            active_index--;
            slides[active_index].setAttribute("class","slide active")
            update_display_img( display_list[active_index])
        }
   
            window_step(active_index)
   
    
    
    }
    //整体窗格移动控制
    function window_step(count){

        var slides=slides_list_element.getElementsByTagName("li");
        if(slides.length<=3)return;
        let step_px=null;
        
        if(count<=1){step_px=0}
        else if(count >slides.length-3){step_px=(slides.length-3)*-135}
        else{
            step_px= (count-1)*-135;
        }
        //if(!slides_list.style.top)slides_list.style.top=0;
        
        slides_list_element.style.top=step_px+'px';
       }
    function update_display_img(img){
        displayer.setAttribute("src", img)
        displayer.setAttribute("class","in")
        displayer.addEventListener('animationend',function(){
            this.classList.remove('in');
        });
    }
    //处理鼠标点击缩略图
    function handleSelect(i){
   
        let slides=slides_list_element.getElementsByTagName('li')
        slides[active_index].setAttribute("class","slide")
        active_index=i;
        slides[active_index].setAttribute("class","slide active")
       update_display_img(display_list[i])

        window_step(active_index)
     
}
    //为每个缩略图添加点击事件
    for(let i=0;i<slides_list.length;i++){
        var one_slide=this.document.createElement("li");
        if(i===active_index){one_slide.setAttribute("class","slide active")}
        else{
        one_slide.setAttribute("class","slide")
    }
        var one_slide_img=this.document.createElement("img");
        one_slide_img.setAttribute("src",slides_list[i])
      //  one_slide_img.setAttribute("onselectstart","return false")
        one_slide.appendChild(one_slide_img)
        one_slide.onclick=()=>{handleSelect(i)};
        slides_list_element.appendChild(one_slide);
    }

  //  图片按钮绑定事件
    document.getElementsByClassName("slide_controller forward")[0].onclick=()=>{active_step(1)};
    document.getElementsByClassName("slide_controller backward")[0].onclick=()=>{active_step(-1)};

}





