





export function slides() {
    const img = document.getElementById("slide-img");

    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];

    let currentIndexImg = 0;
    setInterval(() => {
        img.src = images[currentIndexImg];
        currentIndexImg = (currentIndexImg + 1) % images.length;
    }, 1000)
 

    document.getElementById("left").addEventListener("click",
        function(){
            currentIndexImg=(currentIndexImg-1+images.length)%images.length;
            img.src=images[currentIndexImg];
        }
    )

    document.getElementById("right").addEventListener("click",
        function(){
            currentIndexImg=(currentIndexImg+1)%images.length;
            img.src=images[currentIndexImg];
        }
    )

}