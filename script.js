var tl = gsap.timeline()
tl.from("#nav_logo>img,#name h3, #nav_option li",{
    y:-100,
    duration:1,
    opacity: 0,
    stagger:0.3

})
tl.from(".container, .animation, #description p, #svg_prop svg",{
    y:100,
    duration:0.6,
    // delay:0.6,
    opacity:0,
    stagger:0.3

})
tl.from("#pic_page1",{
    
   
    opacity:0,
    duration:2,
    
    // delay: 0.6

})













// page 2


gsap.from("#page2 #left_p2 #about_pic",{
    x:200,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page2 #left_p2 #about_pic",
        start:"top 45%",
        // markers:true
    }


})
gsap.from("#page2 #left_p2 #about_pic img",{
    x:-200,
    duration:1.5,
    opacity:0,
    delay:1.3,
    scrollTrigger:{
        trigger:"#page2 #left_p2 #about_pic img",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
   



})

gsap.from("#page2 #right_p2 h1",{
    x:250,
    stragger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #right_p2 h1",
        scroller:"body",
        start:"top 30%",
        // markers:true
        
    }
    

})

gsap.from("#page2 #right_p2 #para p",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #right_p2 #para p",
        scroller:"body",
        start:"top 60%",
        // markers:true
        

    }

})
gsap.from("#page2 #right_p2 #form_button button",{

    x:300,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#page2 #right_p2 #para p",
        scroller:"body",
        start:"top 70%"
        

    }

})
gsap.from("#exparties_p2",{

    y:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #right_p2 #para p",
        scroller:"body",
        start:"top 70%"
        

    }

})
gsap.from("#icon1,#icon2,#icon3,#icon4,#icon5,#icon6",{
    x:200,
    delay:.5,   
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #left_p2 #about_pic img",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
})
















// page3

gsap.from("#Blank_div_p3",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#Blank_div_p3",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }

})
gsap.from("#Blank_div_p3 p, #Blank_div_p3 span",{
    x:200,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#Blank_div_p3 p, #Blank_div_p3 span",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
    

})

gsap.from("#div_part1_section1,#div_part2_section1,#div_part3_section1",{
    y:50,
    delay:.5,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#div_part1_section1,#div_part2_section1,#div_part3_section1",
        start:"top 85%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
    


})
gsap.from("#div_part1_section2,#div_part2_section2,#div_part3_section2",{
    y:50,
    delay:.5,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#Blank_div_p3 p, #Blank_div_p3 span",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
    
    


})
















// Page 4
gsap.from("#page4>#text, #form>button",{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page4>#text, #form>button",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }



})


gsap.from("#form>label,#form>input,#form>textarea",{
    // x:100,
    opacity:0,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#form>label,#form>input,#form>textarea",
        start:"top 45%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }

})


gsap.from("#lower_part> h2,#social>#social_logo1, #social>#social_logo2,#social>#social_logo3,#social>#social_logo4, #social>#social_logo5",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#lower_part> h2,#social>#social_logo1, #social>#social_logo2,#social>#social_logo3,#social>#social_logo4, #social>#social_logo5",
        start:"top 95%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
    
})

gsap.from("#content> h3",{
    x:-200,
    delay:2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#content> h3",
        start:"top 95%",
        // end:"50%",
        //  scrub:1,
        // markers:true
    }
   
    
})
























