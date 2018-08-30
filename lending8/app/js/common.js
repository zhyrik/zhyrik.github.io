//-------------- maps ----------------
// ------------- карти загружати до віндов.онлоад ---------
function initMap() {
    //------------- marker -------------
    function addMarker (propertis){
        var marker1 = new google.maps.Marker({
            position: propertis.coordinates,
            map: propertis.map,
            icon: propertis.img
        });

        if(propertis.img){
            marker1.setIcon(propertis.img);
        }

        if(propertis.info){
            var infoWindow = new google.maps.InfoWindow({
                content: propertis.info
            });

            marker1.addListener("click", function(){
                infoWindow.open(map, marker1);
            });
        }
    }
    
    // Create a map object and specify the DOM element for display.
    //map1
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.754227, lng: -73.986001},
      zoom: 11,
      styles: styles1
    });

    addMarker({
        map: map,
        coordinates: {lat: 40.754227, lng: -73.986001},
        img: {
                url: "../img/markers/black.png",
                scaledSize: new google.maps.Size(24, 40)
                },
        info: "<h2>Lorem ipsum</h2>"
    });

    // map2
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      center: {lat: 34.000809, lng: -118.375387},
      zoom: 11,
      styles: styles2,

    }); 
    addMarker({
        map: map2,
        coordinates: {lat: 34.000809, lng: -118.375387},
        img: {
                url: "../img/markers/blue.png",
                scaledSize: new google.maps.Size(24, 40)
                },
        info: "<h2>Lorem ipsum</h2>"
    });
    
    
    // map3
    var map3 = new google.maps.Map(document.getElementById('map3'), {
      center: {lat: 51.520595, lng: -0.124475},
      zoom: 11,
      styles: styles3,
    });
     addMarker({
        map: map3,
        coordinates: {lat: 51.520595, lng: -0.124475},
        img: {
                url: "../img/markers/red.png",
                scaledSize: new google.maps.Size(24, 40)
                },
        info: "<h2>Lorem ipsum</h2>"
    });
    
 }






window.onload = function(){

    //------------- mobile menu ------------------
    
    const menuButton = document.getElementById('mobile-menu'),
          menuBody = document.getElementById('mobile-menu-body'),
          closeMenu = document.getElementById('close-mobile-menu'),
          ul = document.querySelector('.mobile-munu-list'),
          liMenus = document.querySelectorAll('.mobile-menu-item');
          menuOverley = document.querySelector('.mobile-menu-overley');
          

    
    
    menuButton.onclick = function (){
        menuBody.style.right = 0;
        ul.style.right = 0;
        ul.style.opacity = 1; 
        menuOverley.style.display = "block";
    }
    function hideMenu(e){
        menuOverley.style.display = "none";
        menuBody.style.right = "-300px"
        ul.style.right = "-200px";
        ul.style.opacity = 0;
    }
    for(let liMenu of liMenus){
        liMenu.addEventListener("click", hideMenu);
    }
    closeMenu.addEventListener("click", hideMenu);
    menuOverley.addEventListener("click", hideMenu);
    
    //--------------button-----------
    let bubblyButtons = document.getElementsByClassName("bubbly-button");
    let animateButton = function(e) {
      e.preventDefault;
      //reset animation
      e.target.classList.remove('animate');

      e.target.classList.add('animate');
      setTimeout(function(){
        e.target.classList.remove('animate');
      },700);
    };


    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }
    
    // ------------- chart ----------------

new Chart(document.getElementById("myChart"), {
  type: 'line',
  data: {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", ""],
    datasets: [{ 
        data: [10,20,30,33,43, 51],
        label: "Europe",
        borderColor: "#002e5b",
        fill: false
      }, { 
        data: [10,27,32,35,36,29],
        label: "Asia",
        borderColor: "#fde428",
        fill: false
      }
    ]
  },
  options: {
      
    title: {
      display: true,
      text: 'World investment'
    }
  }
});

//----------------- header slide ----------------

let header = document.getElementById("header");
let nextHeader = document.getElementById("next-header");
let prevHeader = document.getElementById("prev-header");
let h1 = document.getElementById("h1");
let arr = ["img/header1.png",
          "img/header2.jpg",
           "img/header3.jpg",
           "img/header4.jpg",
          ];
let arrText = ["Consumer Products Consulting",
               "Lorem Ipsum Dolor1",
               "Lorem Ipsum Dolor2",
               "Lorem Ipsum Dolor3",
    
];
let headerIndex = 0;

function muveNext(){
    headerIndex++;
    if(headerIndex > 3) headerIndex = 0;
    h1.innerText = arrText[headerIndex];
    header.style.backgroundImage = "url(" +  arr[headerIndex] +")";
}

function muvePrev(){
    headerIndex--;
    if(headerIndex < 0) headerIndex = 3;
    h1.innerText = arrText[headerIndex];
    header.style.backgroundImage = "url(" +  arr[headerIndex] +")";
}
    
nextHeader.addEventListener("click", muveNext);
prevHeader.addEventListener("click", muvePrev);
    
//--------------socials ----------------------
    // ------ twiter -------------
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    
//------------ Counter -----------------------
    
    class Count {
        constructor(count, num){
            this.count = count;
            this.num = num;
            this.step = this.num /40;
            this.sum = 0
            this.nWrite = '';
            this.iterator = 0;
        }
        func(){
            let interval = setInterval(()=>{
                this.sum = this.sum + this.step;
                if(this.sum > 999999) this.nWrite = Math.round(this.sum/1000000) + "M";
                else if( this.sum > 9999) this.nWrite = Math.round(this.sum/1000) + "K";
                else this.nWrite = Math.round(this.sum);
                this.iterator ++;
                this.count.innerHTML = this.nWrite;
                if(this.iterator > 39){
                    clearInterval(interval)
                }

            }, 100);
            
        }
    }
    
    let numbers = [2341, 1200000, 1508, 5634]
    let countContainer = document.getElementById("count-container");
    let numbersWrite = document.querySelectorAll(".number-number");
    
    let countFunc1 = new Count(numbersWrite[0], numbers[0]);
    let countFunc2 = new Count(numbersWrite[1], numbers[1]);
    let countFunc3 = new Count(numbersWrite[2], numbers[2]);
    let countFunc4 = new Count(numbersWrite[3], numbers[3]);
    
    function startCount(e){

        if(countContainer.getBoundingClientRect().top < screen.height - 200){
            countFunc1.func();
            countFunc2.func();
            countFunc3.func();
            countFunc4.func();
            window.removeEventListener("scroll", startCount);
        }
    }
    
    window.addEventListener("scroll", startCount);
    
    // --------------- scroll-button ---------------
    let scroll;
    let timer;
    let topButton = document.getElementById("top");
    topButton.onclick = function(){
        scroll = window.pageYOffset;
        scrollTop();
    };
    function scrollTop(){
 
        if(scroll > 100){
            window.scrollTo(0, scroll);
            scroll -= 200;
            timer = setTimeout(scrollTop, 50);
        }
        else{
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
   
    window.addEventListener("scroll", ()=>{
        window.pageYOffset < 100 ? topButton.style.opacity = 0 : topButton.style.opacity = 1 ;
    });
    
    
}















