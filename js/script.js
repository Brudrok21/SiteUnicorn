
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
window.addEventListener(`resize`, event => {
    window.location.reload();
    window.location.hash = "";
}, false);
let svgPC = `
<div class="textcenter"><h3>HOW IT WORKS:</h3></div>

 
                    <div class="step aos-init aos-animate pathRun" data-aos="false" >
                        <div  class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                            <h4>Defining the initial budget</h4>
                            <p>No payments from your side</p>
                        </div>
                        <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 521.7 459.4" xml:space="preserve">
                        <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M62,372.8c0,0-7.1,2.1-7.1,7.4c0,4.6,3.4,6.9,7.9,6.9s7.1-3.4,7.1-7.1c0-3.7-4.2-6.9-6.9-6.9
                        c-0.1-3.4-1.3-234.8-1.3-234.8H3.5l31.5-51h78.7v279c0,1.3,0.7,2.3,1.7,3.2c79.3,66.2,134,87.5,181.6,87.5
                        c51,0,221.5-50.5,221.5-225.5S354.3,3.2,290.7,3.2S179,32.9,179,32.9s-4.8-2.7-8,0.5c-3.2,3.2-2,6.5-0.3,8.2c1.7,1.7,5.6,3,8.3,0.2
                        s0.8-6.9,0.8-6.9"></path>
                        </svg>
                    </div>
                    <div class="step aos-init aos-animate pathRun"  data-aos="false">
                        <div  class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                            <h4>Setting up the tracking</h4>
                            <p>Fully consulted with your team</p>
                            <p>Still no payments from your side</p>
                        </div>
                        <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538.7 460.7" xml:space="preserve">
                        <path stroke-dasharray="2300" stroke-dashoffset="2300" fill="none" stroke="#e9e8e8" stroke-width="8" d="M173.3,328.3c0,0,4.5,6.3,9.2,6.3s9.3-3.8,8.8-9.8s-5.7-7.5-9.5-7.5c-7.7-0.2-10.3,9.2-10.3,9.2H98.2
                        c0,0,30.9-29.7,81.8-95.5c40.2-70.8,3.8-144.5-78.2-144.5s-90,97.3-90,97.3h52c0,0,2.3-40,30-46c35.3-7.7,49,14.3,49,41
                        s-28.7,57.7-28.7,57.7L4.5,348.2v27.3h129.3c0,0,66,80.7,176,80.7c64,0,224.3-46.3,224.3-224.7S363,4.7,307.8,4.5
                        s-102,25.3-102,25.3s-7-4-10.3-1.5s-3.3,5.8-2,9.3s7,3.5,9.7,2.3c2.7-1.2,2.8-8,2.8-8"></path>
                        </svg>
                    </div>
 

 
                    <div class="step aos-init aos-animate pathRun"  data-aos="false">
                        <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                            <h4>Launching ad campaign</h4>
                            <p>Ad campaign starts within 7 days from the date of signing contract</p>
                        </div>
                        <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.9 463.5" xml:space="preserve">
                        <path stroke-dasharray="2070" stroke-dashoffset="2070" fill="none" stroke="#e9e8e8" stroke-width="8" d="M160.6,203.6c0,0-11.8-0.5-11.3,7.6c0.3,4.6,4,8.2,7.7,8.9c3.7,0.7,7.5-0.5,8.8-5.7s-2.5-9-2.5-9
                        s23.2-20.5,21.9-50.7c0-15.2-14.9-71.6-87.3-71.6s-82.1,77.4-82.1,77.4h50.9c0,0,6.2-17,20.5-24c20.3-11,41,4.7,43.7,20.3
                        c2.8,15.6-6.5,27.7-18,32.9c-11.5,5.2-31,7.9-31,7.9v44.9c0,0,43.8-1.9,59,25.9s-2,64-36.2,63.2c-44.8-1.1-47.4-43.7-47.4-43.7H5.1
                        c0,0-2.8,29.3,22.6,61.2s82.3,30.6,82.3,30.6s78.6,81.8,171.9,78.8c41.7,0,226-33.5,226-228.2S320.5,5,281.9,5s-81.3,14.5-81.3,14.5
                        s-5.7-2.9-8.2-1.6c-2.6,1.3-4.7,5.5-2,9s5.5,2.8,7.6,1.3c2.1-1.4,2.4-6.2,2.4-6.2"></path>
                        </svg>
                    </div> 
                    <div class="step aos-init aos-animate pathRun marLeft"  data-aos="false">
                        <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                            <h4>inspecting results, increasing ad volume</h4>
                            <p>In 3-5 days after ad  launch</p>
                            <p>Still no payments from your side</p>
                        </div>
                        <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 529.7 459.4" xml:space="preserve">
                        <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M178.5,268.3c0,0-8.5,2.5-8.5,8s3.8,9.2,8.2,9.2s9.2-3.8,9.2-9.2S178,266,178,266V86.6h-52.7L3.3,267.3v49H126
                        v59.3c0,0,80,88,181.7,80.7c94.3-0.7,224.3-93.3,218-229.3C502,18.9,335.5,2.8,301.5,3.3S241.8,11,241.8,11S235,6.3,232,7
                        s-5.5,3.5-4.2,7.5s4.2,4.8,7.2,4s5.5-5,5.5-5"></path>
                        
                        <polyline data-aos="fade" fill="none" stroke="#e9e8e8" stroke-width="8" points="63.3,267.3 126.2,267.3 126.2,174.8 63.8,265.8 " class="aos-init aos-animate"></polyline>
                        </svg>
                    </div>
 

 
                    <div class="step aos-init aos-animate pathRun"  data-aos="false">
                        <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                            <h4>your first payment</h4>
                            <p>After your first sale only!</p>
                        </div>
                        <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.3 459.7" xml:space="preserve">
                        <path stroke-dasharray="2100" stroke-dashoffset="2100" fill="none" stroke="#e9e8e8" stroke-width="8" d="M144.3,188c0,0,8.3-3.8,12,2.7c1.2,2.7,3,8.2-2.3,11.3c-3.2,1-7.3,2.2-10.8-1.8s-1.5-9.5-1.5-9.5s-9.7-5-23.3-6
                        S89,186.3,89,186.3l11.7-50.3h90.7V86.3H60.7l-34,155.3l42.3,11c0,0,14.7-20.3,36.7-19c33,0,37.3,35.7,37.3,48.7
                        S129.3,325,100.7,325s-41.3-26.3-41.3-26.3H4c0,0,8,38.7,37,59c29,20.3,69,17,69,17s34,42.3,97.3,67.7c89,36,305,9.7,305-211.7
                        S308,4,286.7,4C265.3,4,217,14,217,14s-2.8-4-6.2-2.7c-3.3,1.3-6.2,5-4.2,8.3s3.7,3,7,2.7c3.3-0.3,3.7-5.3,3.7-5.3"></path>
                        </svg>
                    </div>
                    <div class="step aos-init aos-animate pathRun"  data-aos="false">
                        <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                            <h4>Scaling!</h4>
                            <p>We’re increasing leads, you’re expanding your business</p>
                        </div>
                        <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.8 459.4" xml:space="preserve">
                        <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M154.8,225.6c0,0-5.7,5.5-2.5,12.3c3.2,6.8,8.3,6.7,11.7,5c3.3-1.7,6.5-6.5,4.7-13c-2.4-8.7-15-5.7-15-5.7
                        s-7.3-10.3-23.7-17.3s-35.7-7.7-35.7-7.7l48-94.7l-45-22.3L18,237.3c0,0-32.3,57.2-0.7,100.3s82.3,39.7,82.3,39.7s62.3,77,167.3,78
                        s231.7-86.3,229.5-222s-98.8-211-176.8-225S195.2,16,195.2,16s-3.6-6.1-7-4.5s-4.4,3.8-4,6.8s2.8,5.8,6.8,5c4-0.8,3.5-5,3.5-5"></path>
                        <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M91.3,250.6c0,0-27.8-1.3-35.3,34.2s29.5,52,53,38.2c14.3-11.7,23.7-27.7,15.7-49.3c-8-21.7-31-22.9-31-22.9"></path>
                        </svg>
                    </div>
`;
let svgMob = `
<div class="Dsvg1 Dsvg">
<div class="textcenter"><h3>HOW IT WORKS:</h3></div>
<div class="step aos-init aos-animate svg1_2" data-aos="false" >
    <div  class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
        <h4>Defining the initial budget</h4>
        <p>No payments from your side</p>
    </div>
    <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 521.7 459.4" xml:space="preserve">
    <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M62,372.8c0,0-7.1,2.1-7.1,7.4c0,4.6,3.4,6.9,7.9,6.9s7.1-3.4,7.1-7.1c0-3.7-4.2-6.9-6.9-6.9
    c-0.1-3.4-1.3-234.8-1.3-234.8H3.5l31.5-51h78.7v279c0,1.3,0.7,2.3,1.7,3.2c79.3,66.2,134,87.5,181.6,87.5
    c51,0,221.5-50.5,221.5-225.5S354.3,3.2,290.7,3.2S179,32.9,179,32.9s-4.8-2.7-8,0.5c-3.2,3.2-2,6.5-0.3,8.2c1.7,1.7,5.6,3,8.3,0.2
    s0.8-6.9,0.8-6.9"></path>
    </svg>
</div>
<div class="step aos-init aos-animate svg1_2"  data-aos="false">
    <div  class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
        <h4>Setting up the tracking</h4>
        <p>Fully consulted with your team</p>
        <p>Still no payments from your side</p>
    </div>
    <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538.7 460.7" xml:space="preserve">
    <path stroke-dasharray="2300" stroke-dashoffset="2300" fill="none" stroke="#e9e8e8" stroke-width="8" d="M173.3,328.3c0,0,4.5,6.3,9.2,6.3s9.3-3.8,8.8-9.8s-5.7-7.5-9.5-7.5c-7.7-0.2-10.3,9.2-10.3,9.2H98.2
    c0,0,30.9-29.7,81.8-95.5c40.2-70.8,3.8-144.5-78.2-144.5s-90,97.3-90,97.3h52c0,0,2.3-40,30-46c35.3-7.7,49,14.3,49,41
    s-28.7,57.7-28.7,57.7L4.5,348.2v27.3h129.3c0,0,66,80.7,176,80.7c64,0,224.3-46.3,224.3-224.7S363,4.7,307.8,4.5
    s-102,25.3-102,25.3s-7-4-10.3-1.5s-3.3,5.8-2,9.3s7,3.5,9.7,2.3c2.7-1.2,2.8-8,2.8-8"></path>
    </svg>
</div>
</div>

<div class="Dsvg2 Dsvg Dblock" data-anchor="how-it-works_2">
<div class="step aos-init aos-animate svg3_4"  data-aos="false">
    <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
        <h4>Launching ad campaign</h4>
        <p>Ad campaign starts within 7 days from the date of signing contract</p>
    </div>
    <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.9 463.5" xml:space="preserve">
    <path stroke-dasharray="2070" stroke-dashoffset="2070" fill="none" stroke="#e9e8e8" stroke-width="8" d="M160.6,203.6c0,0-11.8-0.5-11.3,7.6c0.3,4.6,4,8.2,7.7,8.9c3.7,0.7,7.5-0.5,8.8-5.7s-2.5-9-2.5-9
    s23.2-20.5,21.9-50.7c0-15.2-14.9-71.6-87.3-71.6s-82.1,77.4-82.1,77.4h50.9c0,0,6.2-17,20.5-24c20.3-11,41,4.7,43.7,20.3
    c2.8,15.6-6.5,27.7-18,32.9c-11.5,5.2-31,7.9-31,7.9v44.9c0,0,43.8-1.9,59,25.9s-2,64-36.2,63.2c-44.8-1.1-47.4-43.7-47.4-43.7H5.1
    c0,0-2.8,29.3,22.6,61.2s82.3,30.6,82.3,30.6s78.6,81.8,171.9,78.8c41.7,0,226-33.5,226-228.2S320.5,5,281.9,5s-81.3,14.5-81.3,14.5
    s-5.7-2.9-8.2-1.6c-2.6,1.3-4.7,5.5-2,9s5.5,2.8,7.6,1.3c2.1-1.4,2.4-6.2,2.4-6.2"></path>
    </svg>
</div>
<div class="step aos-init aos-animate svg3_4 marLeft"  data-aos="false">
    <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
        <h4>inspecting results, increasing ad volume</h4>
        <p>In 3-5 days after ad  launch</p>
        <p>Still no payments from your side</p>
    </div>
    <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 529.7 459.4" xml:space="preserve">
    <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M178.5,268.3c0,0-8.5,2.5-8.5,8s3.8,9.2,8.2,9.2s9.2-3.8,9.2-9.2S178,266,178,266V86.6h-52.7L3.3,267.3v49H126
    v59.3c0,0,80,88,181.7,80.7c94.3-0.7,224.3-93.3,218-229.3C502,18.9,335.5,2.8,301.5,3.3S241.8,11,241.8,11S235,6.3,232,7
    s-5.5,3.5-4.2,7.5s4.2,4.8,7.2,4s5.5-5,5.5-5"></path>
    
    <polyline data-aos="fade" fill="none" stroke="#e9e8e8" stroke-width="8" points="63.3,267.3 126.2,267.3 126.2,174.8 63.8,265.8 " class="aos-init aos-animate"></polyline>
    </svg>
</div>
</div>

<div class="Dsvg3 Dsvg Dblock" data-anchor="how-it-works_3">
<div class="step aos-init aos-animate svg5_6"  data-aos="false">
    <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
        <h4>your first payment</h4>
        <p>After your first sale only!</p>
    </div>
    <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.3 459.7" xml:space="preserve">
    <path stroke-dasharray="2100" stroke-dashoffset="2100" fill="none" stroke="#e9e8e8" stroke-width="8" d="M144.3,188c0,0,8.3-3.8,12,2.7c1.2,2.7,3,8.2-2.3,11.3c-3.2,1-7.3,2.2-10.8-1.8s-1.5-9.5-1.5-9.5s-9.7-5-23.3-6
    S89,186.3,89,186.3l11.7-50.3h90.7V86.3H60.7l-34,155.3l42.3,11c0,0,14.7-20.3,36.7-19c33,0,37.3,35.7,37.3,48.7
    S129.3,325,100.7,325s-41.3-26.3-41.3-26.3H4c0,0,8,38.7,37,59c29,20.3,69,17,69,17s34,42.3,97.3,67.7c89,36,305,9.7,305-211.7
    S308,4,286.7,4C265.3,4,217,14,217,14s-2.8-4-6.2-2.7c-3.3,1.3-6.2,5-4.2,8.3s3.7,3,7,2.7c3.3-0.3,3.7-5.3,3.7-5.3"></path>
    </svg>
</div>
<div class="step aos-init aos-animate svg5_6"  data-aos="false">
    <div class="in aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
        <h4>Scaling!</h4>
        <p>We’re increasing leads, you’re expanding your business</p>
    </div>
    <svg class="b5svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.8 459.4" xml:space="preserve">
    <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M154.8,225.6c0,0-5.7,5.5-2.5,12.3c3.2,6.8,8.3,6.7,11.7,5c3.3-1.7,6.5-6.5,4.7-13c-2.4-8.7-15-5.7-15-5.7
    s-7.3-10.3-23.7-17.3s-35.7-7.7-35.7-7.7l48-94.7l-45-22.3L18,237.3c0,0-32.3,57.2-0.7,100.3s82.3,39.7,82.3,39.7s62.3,77,167.3,78
    s231.7-86.3,229.5-222s-98.8-211-176.8-225S195.2,16,195.2,16s-3.6-6.1-7-4.5s-4.4,3.8-4,6.8s2.8,5.8,6.8,5c4-0.8,3.5-5,3.5-5"></path>
    <path stroke-dasharray="1840" stroke-dashoffset="1840" fill="none" stroke="#e9e8e8" stroke-width="8" d="M91.3,250.6c0,0-27.8-1.3-35.3,34.2s29.5,52,53,38.2c14.3-11.7,23.7-27.7,15.7-49.3c-8-21.7-31-22.9-31-22.9"></path>
    </svg>
</div>
</div>
`;
let steps_wrap = document.querySelector('.steps-wrap');
let works2 = document.querySelector("#works2");
let works3 = document.querySelector("#works3");
 
 
if(innerWidth > 660){
    steps_wrap.innerHTML = svgPC;
    works2.classList.remove("btnAnchor");
    works3.classList.remove("btnAnchor");
 
} else{
    steps_wrap.innerHTML = svgMob;
    works2.classList.add("btnAnchor");
    works3.classList.add("btnAnchor");
}   
 
    
let arrY = Array();

let content = document.querySelectorAll(".Dblock");
let touch = document.getElementById("touch");
let menuBtn = document.querySelectorAll(".btnAnchor");
let IDmainMenu = document.getElementById("mainMenu");
let btndown = document.querySelector(".btn-down a"); 
let btn_down = document.querySelector(".btn-down");
let menu_toggle = document.querySelector(".menu-toggle");
let btn_span1 = document.querySelector("#btn_span1");
let btn_span2 = document.querySelector("#btn_span2");
let btn_span3 = document.querySelector("#btn_span3");
let Contact_us = document.getElementById("ContactUs");
let make = document.querySelector(".make");   
let works = document.getElementById("works"); 
let budgets = document.getElementById("budgets2");  
let budgetsBox2 = document.getElementById("budgetsBox2");
let budgetsBox3 = document.getElementById("budgetsBox3");
let franklin = document.querySelector(".franklin");  
let mainmenu = document.querySelectorAll(".IDmainMenu li"); 
let aLogo = document.querySelector(".aLogo A"); 
let ConRight2 = document.querySelector(".ConRight2");
let box1Animation = document.getElementById("box1Animation"); 
let box2Animation = document.getElementById("box2Animation");
let Crew = document.getElementById("Crew");
let box3_1 = document.querySelector(".box3-1");
let box3_2 = document.querySelector(".box3-2"); 
let box3_3 = document.querySelector(".box3-3");
let sign = document.querySelector(".sign");
let signSpan1 = document.getElementById("signSpan1");
let signSpan2 = document.getElementById("signSpan2"); 
let signSpan3 = document.getElementById("signSpan3"); 
let pAnimationBox4 = document.getElementById("pAnimationBox4");
let h3AnimationBox4 = document.getElementById("h3AnimationBox4"); 
let rightAnimationBox4 = document.getElementById("rightAnimationBox4"); 
let The_Offer = document.getElementById("The_Offer");
let LIimg1 = document.getElementById("LIimg1");
let LIimg2 = document.getElementById("LIimg2"); 
let LIimg3 = document.getElementById("LIimg3"); 
let LIimg4 = document.getElementById("LIimg4");
let Partners = document.getElementById("Partners"); 
let h2contentBox7 = document.getElementById("h2contentBox7");
let formcontentBox7 = document.getElementById("formcontentBox7"); 
let contentBox7 = document.querySelector(".contentBox7");
let btn_estimate = document.querySelectorAll(".btn-estimate");
let Btnlogo = document.querySelector("#Btnlogo");
let pathRun = document.querySelectorAll(".pathRun");
let MobpathRun = document.querySelectorAll(".MobpathRun");
let svg1_2 = document.querySelectorAll(".svg1_2");
let svg3_4 = document.querySelectorAll(".svg3_4");
let svg5_6 = document.querySelectorAll(".svg5_6");
let arrow = document.querySelector(".arrow");
let hiddenMenu = document.querySelector(".hiddenMenu");
let idBudgets = document.getElementById("idBudgets");
let idWorks = document.getElementById("idWorks");
 
 


let menuToggle = document.querySelector(".menu-toggle").onclick = function(){
    IDmainMenu.classList.toggle("showMenu");
 
    if(menu_toggle.classList.value == "menu-toggle rotateSpan2"){
        menu_toggle.classList.add("rotateSpan");
        menu_toggle.classList.remove("rotateSpan2");
    }else{
        menu_toggle.classList.remove("rotateSpan");
        menu_toggle.classList.add("rotateSpan2");
    }
     
}
let corrent = 0;
window.addEventListener("load", () => {
    
    if(innerWidth > 768){ 
        IDmainMenu.classList.remove("showMenu");
        menu_toggle.classList.remove("rotateSpan");
        menu_toggle.classList.add("rotateSpan2");
    } 
 

    for(let i = 0; i < menuBtn.length; i++){
        if(document.location.hash === menuBtn[i].hash){
            menuBtn[i].classList.add("active");
            let btnHash = menuBtn[i].hash.split("#").join("");

                
            content.forEach((divAnchor) =>{
                if(divAnchor.dataset.anchor === btnHash){
                    corrent=0;
                    IDmainMenu.classList.remove("showMenu");
                    menu_toggle.classList.remove("rotateSpan");
                    menu_toggle.classList.add("rotateSpan2");
                    divAnchor.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                    });
                }
            });
        }else{
            corrent++;
            if(corrent === menuBtn.length){
                document.location.hash = "#h";
                corrent=0;
            }
        }
        
    }
    if(document.location.hash == "#h"){
        Btnlogo.classList.add("active");
        document.location.hash = Btnlogo.hash;
    } 
    checkContacktUs();
});

 


function btnEstimate(){
    btn_estimate.forEach((btnE) =>{
        
        btnE.addEventListener("click", ()=>{
            contentBox7.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
            menuBtn.forEach((btnRemove) =>{
                btnRemove.classList.remove("active");
            });
            Contact_us.classList.add("active");
            checkContacktUs();
        });
    });
}btnEstimate();


    function BTN_Down(){
        btn_down.addEventListener("click" ,()=>{
 
            for(let i = 0; i < menuBtn.length ; i++){
                if(menuBtn[i].classList.length === 2){
                menuBtn[i].classList.remove("active");
                if(i <  menuBtn.length -1){
                    menuBtn[i +1].classList.add("active");
                    let btnHash = menuBtn[i +1].hash.split("#").join("");
                        
                    content.forEach((divAnchor) =>{
                        if(divAnchor.dataset.anchor === btnHash){
                            IDmainMenu.classList.remove("showMenu");
                            menu_toggle.classList.remove("rotateSpan");
                            menu_toggle.classList.add("rotateSpan2");
                            divAnchor.scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                                });
                        }
                    });
                    break;
                } 

                }
            }
            checkContacktUs();
        });
    }BTN_Down();


 function AnchorMenu(){
    menuBtn.forEach((btn) =>{
        
        btn.addEventListener("click" ,()=>{
            checkContacktUs();
            let A_active = document.querySelector(".active");
            A_active.classList.remove("active");
            btn.classList.add("active");
            idWorks.classList.remove("activeLi");
            idBudgets.classList.remove("activeLi");
 
            
            let btnHash = btn.hash.split("#").join("");
            content.forEach((divAnchor) =>{
                if(divAnchor.dataset.anchor === btnHash){
                    IDmainMenu.classList.remove("showMenu");
                    menu_toggle.classList.remove("rotateSpan");
                    menu_toggle.classList.add("rotateSpan2");
                    divAnchor.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      });
                }
            });
            checkContacktUs();
        });
    });
 }AnchorMenu();

 function countTouches(event) {
    let y = event.changedTouches[0].screenY;
    arrY.push(y);

 
        if(arrY.length == 2){
            if(arrY[0] > arrY[1]){
 
                for(let i = 0; i < menuBtn.length ; i++){
                    if(menuBtn[i].classList.length === 2){
                    menuBtn[i].classList.remove("active");
                    if(i <  menuBtn.length -1){
                        menuBtn[i +1].classList.add("active");
                        let btnHash = menuBtn[i +1].hash.split("#").join("");
                            
                        content.forEach((divAnchor) =>{
                            if(divAnchor.dataset.anchor === btnHash){
                                IDmainMenu.classList.remove("showMenu");
                                menu_toggle.classList.remove("rotateSpan");
                                menu_toggle.classList.add("rotateSpan2");
                                divAnchor.scrollIntoView({
                                    block: "start",
                                    behavior: "smooth",
                                    });
                            }
                        });
                        break;
                    }else{
                        menuBtn[menuBtn.length -1].classList.add("active");
                        let btnHash = menuBtn[menuBtn.length -1].hash.split("#").join("");
                            
                        content.forEach((divAnchor) =>{
                            if(divAnchor.dataset.anchor === btnHash){
                                IDmainMenu.classList.remove("showMenu");
                                menu_toggle.classList.remove("rotateSpan");
                                menu_toggle.classList.add("rotateSpan2");
                                divAnchor.scrollIntoView({
                                    block: "start",
                                    behavior: "smooth",
                                    });
                            }
                        });
                        break;
                    }

                    }
                }
                checkContacktUs();
            }else if(arrY[0] < arrY[1]){
 
                for(let i = 0; i < menuBtn.length ; i++){
                    if(menuBtn[i].classList.length === 2){
                    menuBtn[i].classList.remove("active");
                    if(i >  0){
                        menuBtn[i -1].classList.add("active");
                        let btnHash = menuBtn[i -1].hash.split("#").join("");
                            
                        content.forEach((divAnchor) =>{
                            if(divAnchor.dataset.anchor === btnHash){
                                IDmainMenu.classList.remove("showMenu");
                                menu_toggle.classList.remove("rotateSpan");
                                menu_toggle.classList.add("rotateSpan2");
                                divAnchor.scrollIntoView({
                                    block: "start",
                                    behavior: "smooth",
                                    });
                            }
                        });
                        break;
                        }else{
                            menuBtn[0].classList.add("active");
                            let btnHash = menuBtn[0].hash.split("#").join("");
                            content.forEach((divAnchor) =>{
                                if(divAnchor.dataset.anchor === btnHash){
                                    IDmainMenu.classList.remove("showMenu");
                                    menu_toggle.classList.remove("rotateSpan");
                                    menu_toggle.classList.add("rotateSpan2");
                                    divAnchor.scrollIntoView({
                                        block: "start",
                                        behavior: "smooth",
                                        });
                                }
                            });
                            break;
                        }
                    }
                }
                checkContacktUs();
            } 
        
            arrY.length = 0;
        }
  
}

 
 
function myFunction(event) {
    let y = event.deltaY;
    if(y > 0){
 
        for(let i = 0; i < menuBtn.length ; i++){
             
             if(menuBtn[i].classList.length === 2){
                menuBtn[i].classList.remove("active");
 
                
                if(i <  menuBtn.length -1){
                     
                    menuBtn[i +1].classList.add("active");
                    let btnHash = menuBtn[i +1].hash.split("#").join("");
                     
                    content.forEach((divAnchor) =>{
                        if(divAnchor.dataset.anchor === btnHash){
                            IDmainMenu.classList.remove("showMenu");
                            menu_toggle.classList.remove("rotateSpan");
                            menu_toggle.classList.add("rotateSpan2");
                            divAnchor.scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                              });
                        }
                    });
                    break;
                }else{
                    menuBtn[menuBtn.length -1].classList.add("active");
                    let btnHash = menuBtn[menuBtn.length -1].hash.split("#").join("");
                     
                    content.forEach((divAnchor) =>{
                        if(divAnchor.dataset.anchor === btnHash){
                            IDmainMenu.classList.remove("showMenu");
                            menu_toggle.classList.remove("rotateSpan");
                            menu_toggle.classList.add("rotateSpan2");
                            divAnchor.scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                              });
                        }
                    });
                    break;
                }
 
             }
        }
        checkContacktUs();
    }else{
 
        for(let i = 0; i < menuBtn.length ; i++){
             
            if(menuBtn[i].classList.length === 2){
               menuBtn[i].classList.remove("active");
                
               if(i >  0){
                menuBtn[i -1].classList.add("active");
                let btnHash = menuBtn[i -1].hash.split("#").join("");
                    
                content.forEach((divAnchor) =>{
                    if(divAnchor.dataset.anchor === btnHash){
                        IDmainMenu.classList.remove("showMenu");
                        menu_toggle.classList.remove("rotateSpan");
                        menu_toggle.classList.add("rotateSpan2");
                        divAnchor.scrollIntoView({
                            block: "start",
                            behavior: "smooth",
                            });
                    }
                });
                break;
                }else{
                    menuBtn[0].classList.add("active");
                    let btnHash = menuBtn[0].hash.split("#").join("");
                        
                    content.forEach((divAnchor) =>{
                        if(divAnchor.dataset.anchor === btnHash){
                            IDmainMenu.classList.remove("showMenu");
                            menu_toggle.classList.remove("rotateSpan");
                            menu_toggle.classList.add("rotateSpan2");
                            divAnchor.scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                                });
                        }
                    });
                    break;
                }
            }
       }
       checkContacktUs()
    }
     
}
 
function refresh(){
    Btnlogo.addEventListener("click" , ()=>{
        h2contentBox7.classList.remove("h2contentBox7A");
        formcontentBox7.classList.remove("formcontentBox7A");
        franklin.classList.remove("smile");
        box1Animation.classList.remove("box1Animation");
        ConRight2.classList.remove("box1Animation2");
        box2Animation.classList.remove("box2Animation");
        box3_1.classList.remove("box3Animation");
        box3_2.classList.remove("box3Animation");
        box3_3.classList.remove("box3Animation");
        sign.classList.remove("signA");
        signSpan1.classList.remove("signSpan1A");
        signSpan2.classList.remove("signSpan2A");
        signSpan3.classList.remove("signSpan3A");
        pAnimationBox4.classList.remove("pAnimationBox4A");
        h3AnimationBox4.classList.remove("h3AnimationBox4A");
        rightAnimationBox4.classList.remove("rightAnimationBox4A");
        LIimg1.classList.remove("LIimg1A");
        LIimg2.classList.remove("LIimg2A");
        LIimg3.classList.remove("LIimg3A");
        LIimg4.classList.remove("LIimg4A");
        pathRun.forEach((path)=>{
            path.dataset.aos = "false";
        });
    });
}refresh();
 
function checkContacktUs(){
    if(Contact_us.classList.length === 2){
        btndown.style.display="none";
        h2contentBox7.classList.add("h2contentBox7A");
        formcontentBox7.classList.add("formcontentBox7A");
        box3_1.classList.add("box3Animation");
    }else{
        btndown.style.display="";
    }
    if(innerWidth < 769){ //mob
        if(Contact_us.classList.length === 2){
            make.style.display="none";
        }else{
            make.style.display="";
        } 
    }else{ //pc
        if((budgets.classList.length === 2) || (budgetsBox2.classList.length ===2) || (budgetsBox3.classList.length ===2)){
            franklin.classList.add("smile");
            idBudgets.classList.add("activeLi");

        }else if(aLogo.classList.length ===2 || Contact_us.classList.length === 2){
            franklin.classList.remove("smile");
        }
    }
    if(aLogo.classList.length ==2){ 
        box1Animation.classList.add("box1Animation");
        ConRight2.classList.add("box1Animation2");
    }
    if(Crew.classList.length ==2){ 
        box2Animation.classList.add("box2Animation");
    }
    if(budgets.classList.length === 2){
        box3_1.classList.add("box3Animation");
        idBudgets.classList.add("activeLi");
    }
    if(budgetsBox2.classList.length ===2){
        box3_2.classList.add("box3Animation");
        idBudgets.classList.add("activeLi");
    }
    if(budgetsBox3.classList.length ===2){ 
        box3_3.classList.add("box3Animation");
        idBudgets.classList.add("activeLi");
    }
    if(budgets.classList.length !== 2 && budgetsBox2.classList.length !==2 && budgetsBox3.classList.length !==2){
        idBudgets.classList.remove("activeLi");
    }
    if(The_Offer.classList.length ===2){ 
        sign.classList.add("signA");
        signSpan1.classList.add("signSpan1A");
        signSpan2.classList.add("signSpan2A");
        signSpan3.classList.add("signSpan3A");
        pAnimationBox4.classList.add("pAnimationBox4A");
        h3AnimationBox4.classList.add("h3AnimationBox4A");
        rightAnimationBox4.classList.add("rightAnimationBox4A");
    }
    if(Partners.classList.length ===2){ 
        LIimg1.classList.add("LIimg1A");
        LIimg2.classList.add("LIimg2A");
        LIimg3.classList.add("LIimg3A");
        LIimg4.classList.add("LIimg4A");
    }
    svgRun();
    menuBtn.forEach((btnCheckHash) =>{
        if(btnCheckHash.classList.length ===2){
            document.location.hash = btnCheckHash.hash;
            btndown.hash = btnCheckHash.hash;
            menu_toggle.hash = btnCheckHash.hash;
        }
    });
}

 
function svgRun(){
    
    if(innerWidth > 660){
        if(works.classList.length === 2){ 
            pathRun.forEach((path)=>{
                path.dataset.aos = "path_run";
            });
            content5StyleTrue();
        }else{
            content5StyleFalse();
        }
    } else{ 
        if(works.classList.length === 2){ 
            svg1_2.forEach((Mobpath1)=>{
                Mobpath1.dataset.aos = "path_run";
            });
            content5StyleTrue();
 
        } 
        if(works2.classList.length === 2){ 
            svg3_4.forEach((Mobpath2)=>{
                Mobpath2.dataset.aos = "path_run";
            });
            content5StyleTrue();
 
        } 
        if(works3.classList.length === 2){ 
            svg5_6.forEach((Mobpath3)=>{
                Mobpath3.dataset.aos = "path_run";
            });
            content5StyleTrue();
 
        }
        if( works.classList.length == 1    &&
            works2.classList.length == 1   &&
            works3.classList.length == 1
            ){
            content5StyleFalse();
            
        }
    }  
}

 function content5StyleTrue(){

    for(let i = 0 ; i < menuBtn.length ; i++){
        menuBtn[i].style.color="#000"; 
    }
    for(let i = 0 ; i < mainmenu.length ; i++){
        mainmenu[i].style.borderBottomColor = "rgb(0 0 0)";
    }
    arrow.style.background ="rgb(123 123 123)";
    btndown.style.color = "rgb(0 0 0)";
    idWorks.classList.add("activeLi");
 }
 
 function content5StyleFalse(){

    for(let i = 0 ; i < menuBtn.length ; i++){
        menuBtn[i].style.color="";
    }
    for(let i = 0 ; i < mainmenu.length ; i++){
        mainmenu[i].style.borderBottomColor = "rgb(255 255 255)";
    }
    arrow.style.background ="";
    btndown.style.color = "";
    idWorks.classList.remove("activeLi");
 }
 
 