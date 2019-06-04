window.onload=function(){

  let name=document.querySelector('.MeassageName>input');
    // console.log(name.value);
    // let nameValue=name.value;
    let form=document.getElementById("Messageform")
    // console.log(form)
    //获取头像
    let  index=0;
    let  imgs=document.querySelectorAll('.MeassageHead>div>img')
        // console.log(imgs)
    for (let i=0;i<imgs.length;i++){
        imgs[i].onclick=function(){
            imgs[index].style.opacity=0.7;
            imgs[i].style.opacity=1;
            index=i;
        }
    }

    //留言内容
        let spanConent=document.querySelector(".meassageContent>p>span");
        // console.log(spanConent);
        let textarea=document.querySelector("textarea");
        // console.log(textarea);
          let TextValue;
         textarea.onkeyup=function () {
             TextValue=this.value;
                // console.log(TextValue);
            spanConent.innerHTML="已留言"+TextValue.length+"字";
            return TextValue;

    }
        let submit=document.querySelector(".messageButton>input[type=submit]");
        let Ul=document.querySelector(".MeassageUl")


        // console.log(submit)
        submit.onclick=function (e) {
            e.preventDefault();
            let  SubmitName=name.value;
            let  SubmitImg=imgs[index].src;
            let SubmitText= textarea.value;
            let time=new Date().toISOString().substr(0,10);

        let html=`  <ul class="MeassageUl">
              <li class="Meassageli">
                 <span><img src="${SubmitImg}" alt=""></span> 
                 <span> 
                     <span class="meassageSpan">
                         <span>${SubmitName}</span>
                         <span>${time}</span> 
                     </span>
                     <span class="meassagebottom">${SubmitText}</span> 
                   </span>
              </li>     
               <li class="repaly">博主：谢谢留言</li> 
       </ul>`
        Ul.innerHTML=html+Ul.innerHTML;
            form.reset();
            spanConent.innerHTML="已留言0字"
        }

    function Messreset() {




    }
}