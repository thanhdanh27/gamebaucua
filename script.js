// Đặt các biến
var btnXoc = document.querySelector('.xoc');
var btnChot = document.querySelector('.chot');
var btnStop = document.querySelector('.dung');
var btnNew = document.querySelector('.fresh');
var anh1 = document.querySelector('.anh1')
var anh2 = document.querySelector('.anh2')
var anh3 = document.querySelector('.anh3')
var mangImg = document.querySelectorAll('.mangImg');
var mangTong;
var tongBau = 0; var tongCua = 0; var tongTom = 0; 
var tongCa = 0; var tongNai = 0; var tongGa = 0;
var bd; 
var check1, check2, check3, check4, check5, check6;
var mangCheck = [check1,check2,check3,check4,check5,check6];
var total = document.querySelector('.total')
var totalWin = 0; var totalLose = 0;
var inputBau = document.querySelector('#bau')
var inputCua = document.querySelector('#cua')
var inputCa = document.querySelector('#ca')
var inputTom = document.querySelector('#tom')
var inputNai = document.querySelector('#nai')
var inputGa = document.querySelector('#ga')
var mangInput = [inputBau,inputCua,inputCa,inputTom,inputNai,inputGa];
var toast =document.querySelector('.toast');
var toastIcon = document.querySelector('.toast__icon');
var toastTitle = document.querySelector('.toast__title');
var toastContent = document.querySelector('.toast__content');
var closeToast = document.querySelector('.toast__close')

if(localStorage.getItem('total') == null)
{
    localStorage.setItem('total',50000);
}

total.innerText  = localStorage.getItem('total');

// Kiểm tra có nhập tiền cọc chưa
inputBau.oninput = function(e){
    if(e.target.value == '')
    check1 = false;
    else check1 = true;
}
inputCua.oninput = function(e){
    if(e.target.value == '')
    check2 = false;
    else check2 = true;
}
inputTom.oninput = function(e){
    if(e.target.value == '')
    check3 = false;
    else check3 = true;
}
inputCa.oninput = function(e){
    if(e.target.value == '')
    check4 = false;
    else check4 = true;
}
inputNai.oninput = function(e){
    if(e.target.value == '')
    check5 = false;
    else check5 = true;
}
inputGa.oninput = function(e){
    if(e.target.value == '')
    check6 = false;
    else check6 = true;
}
// Hàm làm mới game
btnNew.onclick = function(){
    btnXoc.disabled = true;
    btnChot.disabled = false;
    mangInput.forEach(function(item){
        item.disabled = false;
    })
    allin.forEach(function(i){
        i.style.display = 'block';
    })
    tongBau = 0; tongCa = 0; tongCua = 0;
    tongTom = 0; tongNai = 0; tongGa = 0;
    totalWin = 0;
    totalLose = 0;
    check1 = false;
    check2 = false;
    check3 = false;
    check4 = false;
    check5 = false;
    check6 = false;
    mangTong = [tongBau, tongCua, tongTom, tongCa, tongNai, tongGa];
    mangCheck = [check1,check2,check3,check4,check5,check6];
    mangImg.forEach(function(item){
        item.src = './img/giphy.gif';
    })
    mangInput.forEach(function(item){
       item.value = '';
    })
    location.reload();
 }

// Hàm chốt
btnChot.onclick = function(){
        var dem1 = 0; var dem2 = 0; var dem3 = 0;
        var sum = 0;
        mangInput.forEach(function(item){
            if(item.value != '')
            {
                sum += parseInt(item.value);
            }
        })
        mangInput.forEach(function(item){
        var betMoney = parseInt(item.value);
        var currMoney = parseInt(total.innerText);  
        if((betMoney > currMoney && dem2 < 1)  || (sum > currMoney && dem2 < 1))
        {
            dem2++;
            toastIcon.innerHTML = ' <i class="fa-solid fa-triangle-exclamation"></i>';
            toast.style.borderColor = '#ffc021';
            toastTitle.style.color ='#ffc021';
            toastTitle.innerText = 'Cảnh báo';
            toastIcon.style.color = '#ffc021';
            toastContent.style.color = '#ffc021';
            toastContent.innerText = "Vượt quá số tiền hiện có !";
            toast.style.display = 'flex';
            setTimeout(function(){
                toast.style.display = 'none';
            },4000)

            mangInput.forEach(function(item){
                item.value = '';
             })
            check1 = false;
            check2 = false;
            check3 = false;
            check4 = false;
            check5 = false;
            check6 = false;
            
        }
        else if(betMoney < 0 && dem1 < 1)
        {
            dem1++;
            toastIcon.innerHTML = ' <i class="fa-solid fa-triangle-exclamation"></i>';
            toast.style.borderColor = '#ffc021';
            toastTitle.style.color ='#ffc021';
            toastTitle.innerText = 'Cảnh báo';
            toastIcon.style.color = '#ffc021';
            toastContent.style.color = '#ffc021';
            toastContent.innerText = "Sai giá trị cược !";
            toast.style.display = 'flex';
            setTimeout(function(){
                toast.style.display = 'none';
            },4000)
            mangInput.forEach(function(item){
                item.value = '';
             })
                check1 = false;
                check2 = false;
                check3 = false;
                check4 = false;
                check5 = false;
                check6 = false;
        }
        else if((betMoney == 0 && dem3 < 1) || sum == 0)
        {
            dem3++;
            toastIcon.innerHTML = ' <i class="fa-solid fa-triangle-exclamation"></i>';
            toast.style.borderColor = '#ffc021';
            toastTitle.style.color ='#ffc021';
            toastTitle.innerText = 'Cảnh báo';
            toastIcon.style.color = '#ffc021';
            toastContent.style.color = '#ffc021';
            toastContent.innerText = "Chưa đặt cược !";
            toast.style.display = 'flex';
            setTimeout(function(){
                toast.style.display = 'none';
            },4000)

            mangInput.forEach(function(item){
                item.value = '';
             })
                check1 = false;
                check2 = false;
                check3 = false;
                check4 = false;
                check5 = false;
                check6 = false;
        }
        else if(betMoney <= currMoney ){
        btnXoc.disabled = false;
        btnChot.disabled = true;
        mangInput.forEach(function(item){
            item.disabled = true;
        })
        mangCheck = [check1,check2,check3,check4,check5,check6];
        }
    }) 
}
   
// Hàm xốc
 btnXoc.onclick = function (){
    bd = setInterval(function(){
    var random1 = Math.floor(Math.random() * 6);
    var random2 = Math.floor(Math.random() * 6);
    var random3 = Math.floor(Math.random() * 6);
    switch(random1){
       case 0: anh1.src = './img/bau.png'
       break;
       case 1: anh1.src = './img/tom.png'
       break;
       case 2: anh1.src = './img/ga.png'
       break;
       case 3: anh1.src = './img/nai.png'
       break;
       case 4: anh1.src = './img/ca.png'
       break;
       case 5: anh1.src = './img/cua.png'
   }
    switch(random2){
    case 1: anh2.src = './img/bau.png'
    break;
    case 2: anh2.src = './img/cua.png'
  
    break;
    case 3: anh2.src = './img/tom.png'
 
    break;
    case 0: anh2.src = './img/ca.png'
 
    break;
    case 4: anh2.src = './img/ga.png'
   
    break;
    case 5: anh2.src = './img/nai.png'

}
    switch(random3){
    case 5: anh3.src = './img/ca.png'
    break;
    case 4: anh3.src = './img/cua.png'
  
    break;
    case 3: anh3.src = './img/nai.png'
 
    break;
    case 2: anh3.src = './img/ga.png'
 
    break;
    case 1: anh3.src = './img/bau.png'
   
    break;
    case 0: anh3.src = './img/tom.png'

}
    btnXoc.disabled = 'disabled';
},100)
    setTimeout(function(){
        clearInterval(bd);
        //  mangCheck = [check1, check2, check3, check4, check5, check6];
        for(var index of mangImg ){
           
           if(index.src.slice(-7) == 'bau.png')
           tongBau++;
           if(index.src.slice(-7) == 'cua.png')
           tongCua++;
           if(index.src.slice(-7) == 'tom.png')
           tongTom++;
           if(index.src.slice(-6) == 'ca.png')
           tongCa++;
           if(index.src.slice(-7) == 'nai.png')
           tongNai++;
           if(index.src.slice(-6) == 'ga.png')
           tongGa++;
        }
        mangTong = [tongBau, tongCua, tongTom, tongCa, tongNai, tongGa];
        mangCheck.forEach(function(item,index){
            if(item == true)
            {
               mangTong.forEach(function(i,id){
                if(i > 0)
                {
                    if(index == 0 && index == id){
                        totalWin += tongBau * parseInt(inputBau.value);
                        
                    }
                    else if(index == 1 && index == id){
                        totalWin += tongCua * parseInt(inputCua.value);
                       
                    }
                    else if(index == 2 && index == id){
                        totalWin += tongTom * parseInt(inputTom.value);
                      
                    }
                    else if(index == 3 && index == id){
                        totalWin += tongCa * parseInt(inputCa.value);
                        
                    }
                    else if(index == 4 && index == id){
                        totalWin += tongNai * parseInt(inputNai.value);
                       
                    }
                    else if(index == 5 && index == id){
                        totalWin += tongGa * parseInt(inputGa.value);
                        
                    }
                }
                else if(i == 0){
                    if(index == 0 && index == id){
                        totalLose += parseInt(inputBau.value);
                       
                    }
                    else if(index == 1 && index == id){
                        totalLose += parseInt(inputCua.value);
                       
                    }
                    else if(index == 2 && index == id){
                        totalLose += parseInt(inputTom.value);
                       
                    }
                    else if(index == 3 && index == id){
                        totalLose += parseInt(inputCa.value);
                       
                    }
                    else if(index == 4 && index == id){
                        totalLose += parseInt(inputNai.value);
                       
                    }
                    else if(index == 5 && index == id){
                        totalLose += parseInt(inputGa.value);
                        
                    }
                }
               })
            }
            
        })
        var result = totalWin - totalLose;
        localStorage.setItem('total', parseInt(total.innerText) + totalWin - totalLose);
        total.innerText = localStorage.getItem('total');
        if(result == 0)
        {
            toastTitle.innerText = 'Kết quả';
            toastIcon.innerHTML = ' <i class="fa-solid fa-circle-check"></i>';
            toast.style.borderColor = '#1cb0f6';
            toastTitle.style.color = '#1cb0f6';
            toastIcon.style.color = '#1cb0f6';
            toastContent.style.color = '#1cb0f6';
            toastContent.innerText = "Hòa nhé";
            toast.style.display = 'flex';

            setTimeout(function(){
                toast.style.display = 'none';
            },4000)
        }
        else if(result > 0)
        {
            toastTitle.innerText = 'Kết quả';
            toastIcon.innerHTML = ' <i class="fa-solid fa-circle-check"></i>';
            toast.style.borderColor = '#47d864';
            toastTitle.style.color = '#47d864';
            toastIcon.style.color = '#47d864';
            toastContent.style.color = '#47d864';
            toastContent.innerText = `+ ${result}`;
            toast.style.display = 'flex';
            setTimeout(function(){
                toast.style.display = 'none';
            },4000)
        }
        else if(result < 0){
            toastTitle.innerText = 'Kết quả';
            toastIcon.innerHTML = ' <i class="fa-solid fa-circle-check"></i>';
            toast.style.borderColor ='#e74c4c';
            toast.style.borderLeft = '#ff623d';
            toastIcon.style.color = '#ff623d'
            toastTitle.style.color = '#ff623d';
            toastContent.style.color = '#ff623d';
            toastContent.innerText = `${result}`;
            toast.style.display = 'flex';
            setTimeout(function(){
                toast.style.display = 'none';
            },4000)
        }
        
        if(parseInt(total.innerText) == 0)
        {
            getBtn.disabled = false;
            getBtn.style.cursor = 'pointer';
        }
        
    },3000)

}

mangInput.forEach(function(item){
    item.onkeydown = function(e){
        if (e.which > 57 && e.which < 91)
        {
            e.preventDefault();
        }
    }
    
})


closeToast.onclick = function(){
    toast.style.display = 'none';
}

var allin = document.querySelectorAll('.all-in');

allin.forEach(function(item){
    item.onmousedown = function(e){
        e.preventDefault();
     }
})

allin.forEach(function(item,index){
    item.onclick = function(e){
        if( parseInt(total.innerText) == 0)
        {
            toastIcon.innerHTML = ' <i class="fa-solid fa-triangle-exclamation"></i>';
            toast.style.borderColor = '#ffc021';
            toastTitle.style.color ='#ffc021';
            toastTitle.innerText = 'Cảnh báo';
            toastIcon.style.color = '#ffc021';
            toastContent.style.color = '#ffc021';
            toastContent.innerText = "Hết tiền rồi nhé !";
            toast.style.display = 'flex';
            setTimeout(function(){
                toast.style.display = 'none';
            },4000)
        }
        else if(index == 0)
        {
            inputBau.value = parseInt(total.innerText);
            check1 = true;
            allin.forEach(function(i){
                i.style.display = 'none';
            })
        }
        else if(index == 1)
        {
            inputCua.value = parseInt(total.innerText);
            check2 = true;
            allin.forEach(function(i){
                i.style.display = 'none';
            })
        }
        else if(index == 2)
        {
            inputTom.value = parseInt(total.innerText);
            check3 = true;
            allin.forEach(function(i){
                i.style.display = 'none';
            })
        }
        else if(index == 3)
        {
            inputCa.value = parseInt(total.innerText);
            check4 = true;
            allin.forEach(function(i){
                i.style.display = 'none';
            })
        }
        else if(index == 4)
        {
            inputNai.value = parseInt(total.innerText);
            check5 = true;
            allin.forEach(function(i){
                i.style.display = 'none';
            })
        }
        else if(index == 5)
        {
            inputGa.value = parseInt(total.innerText);
            check6 = true;
            allin.forEach(function(i){
                i.style.display = 'none';
            })
        }
     }
})

var modal = document.querySelector('.modal');
var btnCloseModal = document.querySelector('.modal__body i');

btnCloseModal.onclick = function(){
    modal.classList.toggle('open');
}

var getBtn = document.querySelector('.getMoney__button');
var resetBtn = document.querySelector('.reMoney__button');
resetBtn.onclick = function(){
    localStorage.removeItem('total');
    location.reload();
}

getBtn.onclick = function(){
    var cur = parseInt(total.innerText);
    localStorage.setItem('total', cur + 50000);
    location.reload()
}

var btnMenuMobile = document.querySelector('.menu-mobile')
btnMenuMobile.onclick = function(){
    modal.classList.toggle('open');
}

var btnMenuPc = document.querySelector('.menu-pc')
btnMenuPc.onclick = function(){
    modal.classList.toggle('open');
}

// if(parseInt(total.innerText) > 0)
// {
//     getBtn.disabled = true;
//     getBtn.style.cursor = 'not-allowed';
// }
