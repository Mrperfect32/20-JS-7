let allImages = Array.from(document.querySelectorAll('.single_img'));
let previewSection = document.querySelector('.preview');
let cross = document.querySelector('.cross');
let previewImg = document.querySelector('.preview_img');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let currentIndex = 0;



allImages.map((el, index)=>{
    el.addEventListener('click', function(){
       previewSection.classList.add('preview_active')
       previewImg.src = allImages[index].src
       currentIndex = index
       
       
       right.addEventListener('click', function(){
        currentIndex += 1;
        if(currentIndex >= allImages.length){
            currentIndex = 0;
        }
        previewImg.src = allImages[currentIndex].src
           
       })






       left.addEventListener('click', function(){
        currentIndex -= 1;
        if(currentIndex < 0){
            currentIndex = allImages.length - 1;
        }
        previewImg.src = allImages[currentIndex].src
           
       })

    })
    
    cross.addEventListener('click', function(){
        previewSection.classList.remove('preview_active')
    })
    
    previewSection.addEventListener('click', function(e){
        if(e.target.classList.contains('preview_active')){
           previewSection.classList.remove('preview_active')
       }
    })
})