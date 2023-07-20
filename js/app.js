// let para = document.getElementById('text');
// console.log(para);
// let bluBtn = document.getElementById('blue');
// console.log(bluBtn);
// let redBtn = document.getElementById('red');
// console.log(redBtn);

// bluBtn.addEventListener('click', function(){
//     para.style.color = 'blue';
// })

// redBtn.addEventListener('click',function(){

//     para.style.color = 'red';

// })

// const img=document.getElementById('images');
// let toggle = true;
// img.addEventListener('click', function(){
//     toggle =!toggle;
//     if(toggle){
//         img.src = 'img\\one.jpg';
// }
// else{
//     img.src ='img\\two.jpg';
// }
//     //img.src='img\\two.jpg';
// })
document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});