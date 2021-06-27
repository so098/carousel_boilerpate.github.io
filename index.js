console.log("hello, vanilla.");

const $imageArea = document.querySelector('.image__area');
const $prevBtn = document.querySelector('.chevron_left');
const $nextBtn = document.querySelector('.navigate_next');
const $images = document.querySelectorAll('.image__area img');
const $dotArea = document.querySelector('.dot__area');


let imageSize = 600;
let slideCount = $images.length;
let count = 0;

console.log(slideCount);
//node 복사하기
function cloneNode(){
    for(let i =0; i<slideCount;i++){
        let cloneSlide = $images[i].cloneNode(true);//true추가 시 자식 노드도 추가됨
        cloneSlide.classList.add('clone');
        $imageArea.append(cloneSlide)
    }
    for(let i =slideCount-1; i>=0;i--){
        let cloneSlide = $images[i].cloneNode(true);//true추가 시 자식 노드도 추가됨
        cloneSlide.classList.add('clone');
        $imageArea.prepend(cloneSlide);
    }
    console.log($images.length);



}
cloneNode();



let newImagesSize = $imageArea.offsetWidth;
console.log(newImagesSize);
let imagesSize = imageSize*slideCount;
$imageArea.style.transform = `translateX(-${imagesSize}px)`;

function slideGo(num){
    let letGo = -num*imageSize;
    count =num;

    $imageArea.classList.add('animated');
        $imageArea.style.left =`${letGo}px`;
        console.log(count,slideCount);
     if(count%slideCount===0){
        console.log('len');
         $imageArea.style.left =`0px`;
         count =0;
            $imageArea.classList.remove('animated');
         return;
     }
     setTimeout(()=>{
        $imageArea.classList.add('animated');
     },100);

}
function createDot(){
    for(let i = 0; i<slideCount; i++){
        $dotArea.innerHTML += `
        <span class="material-icons" data-id=${i}>circle</span>
        `
    }
    $dotArea.addEventListener('click',(event)=>{
        let target = event.target.dataset.id;
        if(target){
            slideGo(target)
        }
    });

}
createDot();
$prevBtn.addEventListener('click',()=>{

    slideGo(count-1);
});

$nextBtn.addEventListener('click',()=>{
    slideGo(count+1);
});