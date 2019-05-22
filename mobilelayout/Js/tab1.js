
window.onload=function() {
    var oCard = document.getElementById('shopComm');
    var aLi = oCard.getElementsByTagName("p");

// var aDiv=oCard.getElementsByTagName('div');
    var aDiv = oCard.getElementsByTagName("b");

console.log(aLi.length);
    console.log(aDiv.length);
    for (var i = 0; i < aLi.length; i++) {
        //alert(i); //0 1 2

        aLi[i].index = i;//循环为每一个标题li元素添加一个index属性并赋值

        aLi[i].onclick = function () {

            for (var j = 0; j < aLi.length; j++) {
                //将所有的标题li元素全部不激活
                aLi[j].className = "";

                //将所有的内容div元素全部不激活（即全部隐藏）
                aDiv[j].style.display = "none";
            }

            //设置当前的标题li元素激活
            console.log(i);
            this.className = "active";

            //设置当前的内容div元素激活
            // 当前的内容.style.display = "block";
            // alert(this.index);
            aDiv[this.index].style.display = "block";
        }
    }
}