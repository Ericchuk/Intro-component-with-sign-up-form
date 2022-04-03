let alertText = document.querySelectorAll('h5');
let alertImage = document.querySelectorAll('.error');
let claim = document.querySelector('.claim');

function alert(){
    let inputs = document.querySelectorAll("input")[0].value;
    let inputs1 = document.querySelectorAll("input")[1].value;
    let inputs2 = document.querySelectorAll("input")[2].value;
    let inputs3 = document.querySelectorAll("input")[3].value;
    if( inputs == "" || inputs == null){
        alertText[0].style.display = "block";
        alertImage[0].style.display = "block";
    }else if(inputs1 == "" || inputs1 == null){
        alertText[1].style.display = "block";
        alertImage[1].style.display = "block";
    }else if(email.test(inputs2) != true){
        console.log(inputs2)
        alertText[2].style.display = "block";
        alertImage[2].style.display = "block";
    }else if( inputs3 === ""  && inputs3 <= 8){
        alertText[3].style.display = "block";
        alertImage[3].style.display = "block";
        alert("Password should be greater than 8")
    }else{
        alertText[0].style.display = "none";
        alertImage[0].style.display = "none";
        alertText[1].style.display = "none";
        alertImage[1].style.display = "none";
        alertText[2].style.display = "none";
        alertImage[2].style.display = "none";
        alertText[3].style.display = "none";
        alertImage[3].style.display = "none";
    }
}

// function alert1(){
//     let inputs1 = document.querySelectorAll("input")[1].value;
//     if( inputs1 === ""  ){
//         alertText[1].style.display = "block";
//         alertImage[1].style.display = "block";
//     }else{
//         alert("error")
//     }
// }

// function alert2(){
//     let inputs2 = document.querySelectorAll("input")[2].value;
//     if( inputs2 ===  "" || inputs2 === null){
//         alertText[2].style.display = "block";
//         alertImage[2].style.display = "block";
//     }else{
//         alert("error")
//     }
// }

// function alert3(){
//     let inputs3 = document.querySelectorAll("input")[3].value;
//     if( inputs3 === ""  && inputs3 < 8){
//         alertText[3].style.display = "block";
//         alertImage[3].style.display = "block";
//     }else{
//         alert("error")
//     }
// }

claim.addEventListener("click", alert);
// claim.addEventListener("click", alert1);
// claim.addEventListener("click", alert2);
// claim.addEventListener("click", alert3);

let email = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// let chuksmail = "chukwuanieze@gmail.com";
// let result = chuksmail.match(email);
// console.log(result);