var images1=[
    "images/8].jpg",
    "images/2].jpg",
    "images/citytoyota.jpg",
    "images/3].jpg",
    "images/وكالة_الفطيم.jpg",
    "images/9].jpg",
    "images/اسعار-سيارات-تويوتا.webp",
    "images/13].jpg",
    "images/w1.jpg",
    "images/14].jpg",
    "images/2020_8_26_17_40_27_932.jpg",
    "images/16].jpg",
    "images/images (3).jpeg",
    "images/toy.jpg"
]
    
    var index1=0;
    function changeImages1(){
        
        // imageslideshow.s1rc="images/5.png";
       document.imageSlideShow.src=images1[index1];
       index1 ++;
       if(index1 >= images1.length){
        index1 =0;
       }
       setTimeout("changeImages1()",2000);
    }
    
    
    changeImages1();




    var images2=[
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpeg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg",
        "images/10.jpg",
        "images/11.jpg",
        "images/12.jpg",
        "images/13.jpg",
        "images/14.jpg"
    ]
        
        var index=0;
        function changeImages2(){
            
            // imageslideshow.src="images/5.png";
           document.imageSlideShow44.src=images2[index];
           index ++;
           if(index >= images2.length){
            index =0;
           }
           setTimeout("changeImages2()",2000);
        }
        
        changeImages2();


        