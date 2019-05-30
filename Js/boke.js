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
    // Mli[z].style.display="block";

    for (let i=0 ;i<MBGli.length;i++){

        MBGli[i].onmouseenter=function () {

            fn1(MBGli)
            this.style.backgroundColor= "rgba(135,206,235,0.6)"

        }
        MBGli[i].onclick=function () {
            fn(Mli);

            Mli[i].style.display="block";
            z=i;
            console.log(z)
            return z;
        }
        z=MBGli[i].onclick();
        // fn(Mli);
        // Mli[z].style.display="block";
        // console.log(z);
    }
    // console.log(z)
    MBGli[z].style.backgroundColor="rgba(135,206,235,0.6)";
         MBGright.onclick=function(){
             fn(Mli);
             fn1(MBGli);
             // console.log(z);


             if (z>=Mli.length-1){
                 // Mli[z].style.display="block";
                 z=0;
             } else {
                 z++;
             }
             Mli[z].style.display="block";
             MBGli[z].style.backgroundColor="rgba(135,206,235,0.6)";
            // console.log(z);
            // return z;

         }
        MBGleft.onclick=function(){
            fn(Mli);
            fn1(MBGli);
                Mli[z].style.display="block";

            if (z==0){
                // Mli[z].style.display="block";
                z=Mli.length-1;
            } else {
                z--;
            }
            MBGli[z].style.backgroundColor="rgba(135,206,235,0.6)";
            console.log(z)

        }










        //清空圆点的样式
        function fn1(arr) {
            for (let i=0;i<arr.length;i++){
                arr[i].style.backgroundColor="#ffffff"
            }
        }
        //清空图片的样式
        function fn(arr) {
        for (let i=0;i<arr.length;i++){
            arr[i].style.display="none";
        }
    }

        // 自动播放

        let t= setInterval( MBGright.onclick,5000);
        Mleft.onmouseenter=function () {
            // setInterval( MBGright.onclick,1000);
            clearInterval(t);
        }
        Mleft.onmouseleave=function () {

            t=setInterval( MBGright.onclick,5000);

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

}