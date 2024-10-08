// Put your application javascript here
let drinkFocus = ['Basic'];

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementsByClassName('product_Img 2')[0].classList.add('focusImg2', 'focusTitle', 'focusPrice');
    document.getElementsByClassName("product_title 2")[0].style["display"] = "inline-block";
    document.getElementsByClassName("product_price 2")[0].style["display"] = "inline-block";
});

function CourseOnFocus(HoverOutput){
    switch(drinkFocus[drinkFocus.length - 1]) {
        case 'Basic':
            document.getElementsByClassName('product_Img 2')[0].classList.remove('focusImg2', 'focusTitle', 'focusPrice');
            document.getElementsByClassName("product_title 2")[0].style["display"] = "none";
            document.getElementsByClassName("product_price 2")[0].style["display"] = "none";
          break;
        case '@Home':
            document.getElementsByClassName('product_Img 1')[0].classList.remove('focusImg1', 'focusTitle', 'focusPrice');
            document.getElementsByClassName("product_title 1")[0].style["display"] = "none";
            document.getElementsByClassName("product_price 1")[0].style["display"] = "none";
          break;
        default:
            document.getElementsByClassName('product_Img 3')[0].classList.remove('focusImg3', 'focusTitle', 'focusPrice');
            document.getElementsByClassName("product_title 3")[0].style["display"] = "none";
            document.getElementsByClassName("product_price 3")[0].style["display"] = "none";
    }
    if(drinkFocus[drinkFocus.length - 1] == HoverOutput){
        switch(drinkFocus[drinkFocus.length - 1]) {
            case 'Basic':
                document.getElementsByClassName('product_Img 2')[0].classList.add('focusImg2', 'focusTitle', 'focusPrice');
                document.getElementsByClassName("product_title 2")[0].style["display"] = "inline-block";
                document.getElementsByClassName("product_price 2")[0].style["display"] = "inline-block";
              break;
            case '@Home':
                document.getElementsByClassName('product_Img 1')[0].classList.add('focusImg1', 'focusTitle', 'focusPrice');
                document.getElementsByClassName("product_title 1")[0].style["display"] = "inline-block";
                document.getElementsByClassName("product_price 1")[0].style["display"] = "inline-block";
              break;
            default:
                document.getElementsByClassName('product_Img 3')[0].classList.add('focusImg3', 'focusTitle', 'focusPrice');
                document.getElementsByClassName("product_title 3")[0].style["display"] = "inline-block";
                document.getElementsByClassName("product_price 3")[0].style["display"] = "inline-block";
        }
    }else{
        drinkFocus.push(HoverOutput);
        switch(drinkFocus[drinkFocus.length - 1]) {
            case 'Basic':
                document.getElementsByClassName('product_Img 2')[0].classList.add('focusImg2', 'focusTitle', 'focusPrice');
                document.getElementsByClassName("product_title 2")[0].style["display"] = "inline-block";
                document.getElementsByClassName("product_price 2")[0].style["display"] = "inline-block";
              break;
            case '@Home':
                document.getElementsByClassName('product_Img 1')[0].classList.add('focusImg1', 'focusTitle', 'focusPrice');
                document.getElementsByClassName("product_title 1")[0].style["display"] = "inline-block";
                document.getElementsByClassName("product_price 1")[0].style["display"] = "inline-block";
              break;
            default:
                document.getElementsByClassName('product_Img 3')[0].classList.add('focusImg3', 'focusTitle', 'focusPrice');
                document.getElementsByClassName("product_title 3")[0].style["display"] = "inline-block";
                document.getElementsByClassName("product_price 3")[0].style["display"] = "inline-block";
        }
    }
    console.log(drinkFocus);
}