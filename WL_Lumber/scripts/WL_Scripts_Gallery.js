//Gallery Javascript
var WL_Gallery_Setup = [
    ['Tables','TB',10],
    ['Lighting','LGT',8],
    ['Furniture','FUR',5],
    ['Mantles','MNT',8],
    ['Barn doors','BD',4],
    ['Wholesale','WS',4]
];

for(var WLSI=0;WLSI<WL_Gallery_Setup.length;WLSI++){
    // console.log(WL_Gallery_Setup[WLSI][0]+"|"+WL_Gallery_Setup[WLSI][1]+"|"+WL_Gallery_Setup[WLSI][2])
    // W1M_Seg_balance[WLSI].style.display = "block";
    // W1M_Seg_balance[WLSI].classList.add("Current");   
    
    // create a new div element
    const WL_Gal_Nav_a = document.createElement("a");

    // and give it some content
    const WL_Gal_NewContent = document.createTextNode(WL_Gallery_Setup[WLSI][0]);

    // add the text node to the newly created div
    WL_Gal_Nav_a.appendChild(WL_Gal_NewContent);
    WL_Gal_Nav_a.title = WL_Gallery_Setup[WLSI][0];
    WL_Gal_Nav_a.href = "#";
    WL_Gal_Nav_a.classList.add("WL_Hdr_Main");
    WL_Gal_Nav_a.setAttribute('data-wl-Name', WL_Gallery_Setup[WLSI][1]);
    
    // add the newly created element and its content into the DOM
    document.querySelector(".galleryNavContainer div:nth-of-type("+(WLSI+1)+") .WL_Hdr_Lst").appendChild(WL_Gal_Nav_a);
}

let WL_Gal_Links = document.querySelectorAll(".galleryNavContainer div .WL_Hdr_Lst .WL_Hdr_Main"),
    WL_Gal_hdr_Img = document.querySelectorAll(".galleryNavContainer div .navListing .WL_FeatSubImg");

//Use the URL Paramater Call the first gallery list, and load the controls....
const WL_queryString = window.location.search;    
const WL_GalParams = new URLSearchParams(WL_queryString);
let WL_GalCode = WL_GalParams.get('gal');
// console.log("QS Gal para:"+WL_GalParams.get('gal'));
if(WL_GalCode){
    switch(WL_GalCode.toString()){        
        case 'LGT':
            console.log("Lighting");  
            generateTmbList(1)
        break;                     
        case "FUR":
            console.log("Furniture");        
            generateTmbList(2)                      
        break;  
        case "MNT":
            console.log("Mantles");        
            generateTmbList(3)       
        break;         
        case "BD":
            console.log("BarnDoors");        
            generateTmbList(4)          
        break;         
        case "WS":
            console.log("Wholesale");        
            generateTmbList(5)            
        break;                                                                                
        default:
            console.log("Tables");
            generateTmbList(0)
        break;
    }
}else{
    generateTmbList(0)
}
  
// listener(0);


//Listener for the gallery header links....
for(var WLLC=0;WLLC<WL_Gal_Links.length;WLLC++){
    // WL_Gal_hdr_Img[WLLC].style.opacity = "0";        
    WL_Gal_Links[WLLC].addEventListener('click', listener.bind(null,WLLC));
}
//Erases thumbnails and generates a new list of thumbnails based on which header link you clicked....
function listener(index){
    // console.log(WL_Gallery_Setup[index][1]+"|"+WL_Gallery_Setup[index][2])
    // console.log(WL_Gallery_Setup[WLSI][0]+"|"+WL_Gallery_Setup[WLSI][1]+"|"+WL_Gallery_Setup[WLSI][2])

    // Hide all of the galler nav images....
    generateTmbList(index);
}

function generateTmbList(index){


    // window.localStorage.setItem('WLImgGalCat', index);
    // let WL_GalCat = window.localStorage.getItem('WLImgGalCat');

    // console.log("Local Storage: "+WL_GalCat);

    for(var WLGTNC=0;WLGTNC<WL_Gal_hdr_Img.length;WLGTNC++){
        WL_Gal_hdr_Img[WLGTNC].style.opacity = "0";
    }
    // Show the chosen gallery nav image....
    WL_Gal_hdr_Img[index].style.opacity = "1";

    //Image number, and the listing from the array...
    let imgNum = WL_Gallery_Setup[index][2],
        imgLst = WL_Gallery_Setup[index][1],
        imgTitle = WL_Gallery_Setup[index][0]
    //Clear out the image thumbnails...
    document.querySelector(".galleryImgContainer div").innerHTML = '';
    
    //Generate and write new thumbnails...
    for(var WLGI=0;WLGI<imgNum;WLGI++){
        // console.log("Image #"+WLGI)
        document.querySelector(".galleryImgContainer div").innerHTML += '<a title="'+imgTitle+' img #'+WLGI+'" href="#" class="WL_GAL_Tmb" data-TMB-name="'+imgLst+'" data-Tmb-num="'+WLGI+'"><img src="images/WL_IMGGAL_'+imgLst+'/thumbs/WLC_Gal_Tmb_'+imgLst+'_'+WLGI+'.png" class="img-fluid d-block mx-auto" alt="WoodLocked Trust"></a>'; 
    }
    showGalImage();
}

//Listener for the Gallery thumbnails... will open the appropriate Image.
function showGalImage(){
    let WL_Gal_Thumbnail_Links = document.querySelectorAll(".galleryImgContainer div .WL_GAL_Tmb");
        
    for(var WLGTNC=0;WLGTNC<WL_Gal_Thumbnail_Links.length;WLGTNC++){
        WL_Gal_Thumbnail_Links[WLGTNC].addEventListener('click', function actBtn(e){
            e.preventDefault();                               
            // console.log(WL_Gal_Links[WLGTNC].getAttribute('data-WL-Name'))
            // console.log(this.getAttribute("data-TMB-name")+"|"+this.getAttribute("data-TMB-num"))
            
            let WL_TMB_Category = this.getAttribute("data-TMB-name"),     
                WL_TMB_Iteration = this.getAttribute("data-TMB-num"),
                WL_GAL_Image_URL = "images/WL_IMGGAL_"+WL_TMB_Category+"/WLC_Gal_"+WL_TMB_Iteration+".png";     
            
            // "images/WL_IMGGAL_'+imgLst+'/thumbs/WLC_Gal_Tmb_'+imgLst+'_'+WLGI+'.png"
            // console.log(WL_GAL_Image_URL+" chosen"); 
            document.querySelector("#galleryModalWindow img").src = WL_GAL_Image_URL;
            // document.querySelector("#galleryModalWindow p").innerHTML = WL_GAL_Image_URL;
            

            let WL_chars = WL_GAL_Image_URL.split('/');
            let currGalmatches = WL_GAL_Image_URL.match(/(\d+)/);
            let WL_CurrImgCat = WL_chars[1].replace("WL_IMGGAL_","");

            for(var WLSI=0;WLSI<WL_Gallery_Setup.length;WLSI++){
                let currGalCategory = WL_Gallery_Setup[WLSI][1];
                if(currGalCategory == WL_CurrImgCat){
                    console.log(currGalmatches[0]+" of "+parseInt(WL_Gallery_Setup[WLSI][2]-1))
                    if(currGalmatches[0]==0){
                        document.querySelector('#galleryModalWindow .gal-Prev').style.display = "none";
                    }else{
                        document.querySelector('#galleryModalWindow .gal-Prev').style.display = "block";
                    }
                    if(currGalmatches[0]==parseInt(WL_Gallery_Setup[WLSI][2]-1)){                        
                        document.querySelector('#galleryModalWindow .gal-Next').style.display = "none";
                    }else{
                        document.querySelector('#galleryModalWindow .gal-Next').style.display = "block";
                    }
                    document.querySelector("#galleryModalWindow").style.display = "block";
                }
            }
            
        });
    }
}

// Close the gallery
document.querySelector(".gal-close").addEventListener('click', function actBtn(e){
    e.preventDefault();                                  
    console.log("Gallery closed"); 
    document.querySelector("#galleryModalWindow").style.display = "none";
            
});
// Next image in the gallery
document.querySelector(".gal-Next").addEventListener('click', function actBtn(e){
    e.preventDefault();                                  
    galleryScroller("Nxt");            
});

// Previous image in the gallery
document.querySelector(".gal-Prev").addEventListener('click', function actBtn(e){
    e.preventDefault();        
    galleryScroller("Pre");                                    
});

function galleryScroller(galInd){
    // console.log(galInd)
    let currGalURL = document.querySelector("#galleryModalWindow img").getAttribute("src"),
        currGalmatches = currGalURL.match(/(\d+)/),
        nextGalImgNum;

    if(galInd == "Nxt"){
        nextGalImgNum = parseInt(currGalmatches[0])+1;
    }else{
        nextGalImgNum = parseInt(currGalmatches[0])-1;
    }
    // console.log("Gal #"+nextGalImgNum);
    let nextGalURL = currGalURL.replace(currGalmatches[0], nextGalImgNum);
    // console.log("Img: "+nextGalURL);  
    // imageExists(nextGalURL)

    const WL_chars = currGalURL.split('/');
    const WL_CurrImgCat = WL_chars[1].replace("WL_IMGGAL_","");
    // console.log("Img #"+nextGalImgNum);
    // console.log("Gallery img#"+currGalmatches[0]); 
      
    // if (nextGalImgNum) {
        for(var WLSI=0;WLSI<WL_Gallery_Setup.length;WLSI++){
            let currGalCategory = WL_Gallery_Setup[WLSI][1];
        
            if(currGalCategory == WL_CurrImgCat){
                // console.log(currGalCategory+" | "+WL_CurrImgCat)
                // console.log(WL_Gallery_Setup[WLSI][2])
                console.log(nextGalImgNum+" of "+parseInt(WL_Gallery_Setup[WLSI][2]-1))

                if(parseInt(nextGalImgNum)==0){
                    document.querySelector('#galleryModalWindow .gal-Prev').style.display = "none";
                }else{
                    document.querySelector('#galleryModalWindow .gal-Prev').style.display = "block";
                }
                if(parseInt(nextGalImgNum)==parseInt(WL_Gallery_Setup[WLSI][2]-1)){                        
                    document.querySelector('#galleryModalWindow .gal-Next').style.display = "none";
                }else{
                    document.querySelector('#galleryModalWindow .gal-Next').style.display = "block";
                }
                document.querySelector("#galleryModalWindow").style.display = "block";
            }
        }
        // console.log("Img #"+nextGalImgNum);                
                      
        document.querySelector("#galleryModalWindow img").src = nextGalURL;
    // }
}


function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}