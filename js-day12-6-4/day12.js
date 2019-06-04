window.addEventListener('load',function () {
        var Topli=document.querySelectorAll(".top>li");
        var Botli=document.querySelector(".bot")

        var arr=[
            {id:1,content:"涛哥背着我去学习",time:"2019/6/4",status:false},
            {id:2,content:"涛哥背着我去学习",time:"2019/6/8",status:false},
            {id:3,content:"涛哥去买零食",time:"2019/6/15",status:true},
            {id:4,content:"涛哥背着我去学习",time:"2019/5/20",status:false}
        ]
        // console.log(Botli);
            let number=0;
            Topli.forEach(function (elem,index) {
                Topli[index].onclick=function () {
                    console.log(arr);
                        Topli[number].classList.remove("hot");
                        this.classList.add("hot");
                        number=index;
                        let type=this.getAttribute("type");

                    switch (type) {
                        case 'all':var  newArr=arr ;
                                    break;
                        case  'done':var  newArr=arr.filter(function (elem) {
                                    return elem.status;
                                    });
                                    break;
                        case 'doing':var newArr=arr.filter(function (elem) {
                                    return !elem.status;
                                             })
                                    break;
                          }
                        // console.log(newArr)
                        todolist(newArr);
                        inputsform();
                }
            })
                Topli[0].onclick();
                inputsform();
//进行input框的选中状态的判断
                function inputsform() {
                    var inputs=document.querySelectorAll("input[type=checkbox]")

                    // for (let i=0;i<inputs.length;i++){
                    inputs.forEach(function (elems) {
                        let parentLi=elems.parentNode;
                        let id= parentLi.id;

                        elems.onclick=function () {
                            console.log("111111")
                            let Arr=arr.filter(elems=>elems.id==id)[0];

                            if (Arr.status){
                                Arr.status=false;
                            }else{
                                Arr.status=true;
                            }
                            console.log(Arr);

                            // return arr;
                        }

                        // }
                    })
                 }


            // 渲染方法
            function todolist(arr) {
                let html="";
                arr.forEach(function(elem){

                    if (elem.status) {
                         html += `  <li id="${elem.id}"><input  type="checkbox" checked>${elem.content} <span>时间:${elem.time}</span></li>`
                    }else{
                         html += `  <li id="${elem.id}"><input type="checkbox" >${elem.content} <span>时间:${elem.time}</span></li>`
                    }

                });
                Botli.innerHTML= html;

            }


})