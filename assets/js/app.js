
    width = $(document).width();
    if (width>768){
        num_nb = Math.round(Math.sqrt(width * 30));
    }else{
        num_nb = Math.round(Math.sqrt(width * 3));
    }
    console.log(num_nb)
particlesJS("particles-js", {"particles":{"number":{"value":num_nb,"density":{"enable":false,"value_area":500}},"color":{"value":"#3e3368"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ff0000"},"polygon":{"nb_sides":5},"image":{"src":"","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":true,"speed":2,"opacity_min":0.3,"sync":false}},"size":{"value":2.5,"random":false,"anim":{"enable":true,"speed":10,"size_min":0,"sync":false}},"line_linked":{"enable":false,"distance":120,"color":"#fff","opacity":1,"width":1},"move":{"enable":true,"speed":1.5,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":100,"line_linked":{"opacity":5}},"bubble":{"distance":200,"size":80,"duration":.4,"opacity":1,"speed":300},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});


