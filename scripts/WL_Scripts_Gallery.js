//Gallery Javascript
var WL_Gallery_Setup = [
    ['Tables','TB',10],
    ['Lighting','LGT',10],
    ['Furniture','FUR',5],
    ['Mantles','MNT',7],
    ['Barn doors','BD',21]
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

//Call the first gallery list, and load the controls....
listener(0);

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
        document.querySelector(".galleryImgContainer div").innerHTML += '<a title="'+imgTitle+' img #'+WLGI+'" href="#" class="WL_GAL_Tmb" data-TMB-name="'+imgLst+'" data-Tmb-num="'+WLGI+'"><img src="images/WL_IMGGAL_'+imgLst+'/thumbs/WLC_Gal_Tmb_'+imgLst+'_'+WLGI+'.png" width="200px" class="img-fluid d-block mx-auto" alt="WoodLocked Trust"></a>'; 
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
            
            let WL_TMB_Category = this.getAttribute("data-TMB-name"),     
                WL_TMB_Iteration = this.getAttribute("data-TMB-num"),
                WL_GAL_Image_URL = "images/WL_IMGGAL_"+WL_TMB_Category+"/WLC_Gal_"+WL_TMB_Category+"_"+WL_TMB_Iteration+".png";     
            
            // "images/WL_IMGGAL_'+imgLst+'/thumbs/WLC_Gal_Tmb_'+imgLst+'_'+WLGI+'.png"
            console.log(WL_GAL_Image_URL+" chosen"); 
            document.querySelector("#galleryModalWindow img").src = WL_GAL_Image_URL;
            // document.querySelector("#galleryModalWindow p").innerHTML = WL_GAL_Image_URL;
            document.querySelector("#galleryModalWindow").style.display = "block";
            
        });
    }
}

//Listener for the Gallery thumbnails... will open the appropriate Image.
function showGalImageDirect(gal_DD_Num){
        // let imgNum = WL_Gallery_Setup[index][2],
        //     imgLst = WL_Gallery_Setup[index][1],
        //     imgTitle = WL_Gallery_Setup[index][0]
            
            let WL_TMB_Category = WL_Gallery_Setup[gal_DD_Num][1],     
                WL_TMB_Iteration = gal_DD_Num,
                WL_GAL_Image_URL = "images/WL_IMGGAL_"+WL_TMB_Category+"/WLC_Gal_"+WL_TMB_Category+"_"+WL_TMB_Iteration+".png";     
            
            // "images/WL_IMGGAL_'+imgLst+'/thumbs/WLC_Gal_Tmb_'+imgLst+'_'+WLGI+'.png"
            console.log(WL_GAL_Image_URL+" chosen"); 
            document.querySelector("#galleryModalWindow img").src = WL_GAL_Image_URL;
            // document.querySelector("#galleryModalWindow p").innerHTML = WL_GAL_Image_URL;
            document.querySelector("#galleryModalWindow").style.display = "block";
            
}

// Close the gallery
document.querySelector(".gal-close").addEventListener('click', function actBtn(e){
            e.preventDefault();                                  
            console.log("Gallery closed"); 
            document.querySelector("#galleryModalWindow").style.display = "none";
            
});