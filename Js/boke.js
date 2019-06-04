window.onload=function () {
    // 轮播图
    //获取到图片的点的对象
        var MBGbot=document.getElementById("MBGbot");
        var MBGli=MBGbot.getElementsByTagName("li");

        //获取到轮播图的图片
        var Mleft=document.getElementById("Mleft");
        var Mli=Mleft.getElementsByTagName("li");

        //获取到左右箭头的对象
        var MBGleft=document.getElementById("MBGleft");
        var MBGright=document.getElementById("MBGright");

            MBGleft.style.opacity="1";
            MBGright.style.opacity="1";


    // console.log(Mli);
    let z=0
    Mli[z].style.left=0;
    let w=Mli[0].offsetWidth;
    // for (let i=0 ;i<MBGli.length;i++){
    //
    //     MBGli[i].onmouseenter=function () {
    //
    //         fn1(MBGli)
    //         this.style.backgroundColor= "rgba(135,206,235,0.6)"
    //
    //     }
    //     MBGli[i].onclick=function () {
    //         fn(Mli);
    //         animate(Mli[i],{opacity:1},1000);
    //         // Mli[i].style.opacity=1;
    //         z=i;
    //         console.log(z)
    //         return z;
    //     }
    //     z=MBGli[i].onclick();
    //     // fn(Mli);
    //     // Mli[z].style.display="block";
    //     // console.log(z);
    // }
    // console.log(z)
    MBGli[z].style.backgroundColor="rgba(135,206,235,0.6)";
        //  MBGright.onclick=function(){
        //      fn(Mli);
        //      fn1(MBGli);
        //      // console.log(z);
        //
        //
        //      if (z>=Mli.length-1){
        //          // Mli[z].style.display="block";
        //          z=0;
        //      } else {
        //          z++;
        //      }
        //      animate(Mli[z],{opacity:1},2000);
        //      // Mli[z].style.opacity=1;
        //      MBGli[z].style.backgroundColor="rgba(135,206,235,0.6)";
        //     // console.log(z);
        //     // return z;
        //
        //  }
        // MBGleft.onclick=function(){
        //     fn(Mli);
        //     fn1(MBGli);
        //     animate(Mli[z],{opacity:1},1000);
        //
        //     // Mli[z].style.opacity=1;
        //
        //     if (z==0){
        //         // Mli[z].style.display="block";
        //         z=Mli.length-1;
        //     } else {
        //         z--;
        //     }
        //     MBGli[z].style.backgroundColor="rgba(135,206,235,0.6)";
        //     console.log(z)
        //
        // }

// 第二种轮播图的方式

        MBGright.onclick=function () {
            let next=z+1;
            if (next==Mli.length){
                next=0;
            }
            // console.log(z);
            Mli[next].style.left=w+"px";
            animate(Mli[z],{left:-w})
            animate(Mli[next],{left:0})
            fn1(MBGli);
            MBGli[next].style.backgroundColor="rgba(135,206,235,0.6)";
            z=next;
            // clearInterval(t);


             // console.log(z)
        }
        MBGleft.onclick=function () {
            let next=z-1;
            if (next<0){
                next=Mli.length-1;
            }
            // console.log(next)
            Mli[next].style.left=-w+"px";
            animate(Mli[z],{left:w})
            animate(Mli[next],{left:0})
            z=next;
            // console.log(z)
            fn1(MBGli);
            MBGli[next].style.backgroundColor="rgba(135,206,235,0.6)";
            clearInterval(t);
        }

        for (let i=0;i<MBGli.length;i++){
                MBGli[i].onclick=function(){

                    if (z===i){
                        return;
                    }


                    let next=i;

                    Mli[next].style.left=w+"px";
                    animate(Mli[z],{left:-w})
                    animate(Mli[next],{left:0})
                    fn1(MBGli);
                    MBGli[next].style.backgroundColor="rgba(135,206,235,0.6)";
                    z=next;
                    clearInterval(t);
                    // console.log(z) ;
                }
        }


    //
        // //清空圆点的样式
        function fn1(arr) {
            for (let i=0;i<arr.length;i++){
                arr[i].style.backgroundColor="#ffffff"

            }
        }
        // //清空图片的样式
        // function fn(arr) {
        // for (let i=0;i<arr.length;i++){
        //     // arr[i].style.opacity=0;
        //     animate(Mli[i],{opacity:0},2000);
        //
        //   }
        //  }

        // // 自动播放
        //
        let t= setInterval( MBGright.onclick,2000);

        Mleft.onmouseenter=function () {
            // setInterval( MBGright.onclick,1000);
            clearInterval(t);
        }
        Mleft.onmouseleave=function () {

            t=setInterval( MBGright.onclick,2000);

            // clearInterval(t);
        }









        //出下边框
        var SMTone=document.getElementById("SMTone");
        var SMTli=SMTone.getElementsByTagName("li");
        // console.log(SMTli);

        for (let j=0;j<SMTli.length;j++){

            SMTli[j].onclick=function () {
                for (var i=0;i<SMTli.length;i++){
                    SMTli[i].style.borderBottom="none";
                }
                this.style.borderBottom="1px solid black";
            }
        }


        //动态显示栏的设置
            var SMLactiveli=document.querySelectorAll(".SMLTright>ul>li");


            // console.log(SMLactiveli);

                SMLactiveli.forEach(function (value,index) {

                    value.onmouseenter=function () {
                        // console.log("123123")
                        // console.log(value)
                        for (var j=0;j<SMLactiveli.length;j++){
                            SMLactiveli[j].classList.remove("activeli");
                        }
                        this.classList.add("activeli")
                    }

                })





        //按需加载
        var WindowH=window.innerHeight;
                // console.log(WindowH);
        var  SMBleftimg=document.querySelectorAll(".SMBleftimg");
        // console.log(SMBleftimg);
        let postionArr=[];
            SMBleftimg.forEach(function (elem) {
                let parent=elem.offsetParent;
                // console.log(parent);
                postionArr.push(parent.offsetTop+elem.offsetTop);

            })
        // console.log(postionArr);
        window.onscroll=function () {
            let scrolltop=document.documentElement.scrollTop||document.body.offsetTop;
            // console.log(scrolltop)
            for (let i=0;i<postionArr.length;i++){
                if (WindowH+scrolltop>postionArr[i]){
                        // if (!SMBleftimg[i].src){
                        //     console.log("111");
                            console.log(SMBleftimg[i].src)
                            console.log(!SMBleftimg[i].src)
                            if (!SMBleftimg[i].src){
                                SMBleftimg[i].src=SMBleftimg[i].getAttribute("aa");
                            }

                        // }


                }
            }
        }


}