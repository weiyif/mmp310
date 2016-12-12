var camera, scene, renderer;

var sun,earth, moon, Mercury,Venus,Mars,Jupiter,Saturn;


window.onload = function() {
    //Camera
    
    var fov = 45;
    var aspectRatio = window.innerWidth / window.innerHeight;
    var near = 1;
    var far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    
    //Scene
    scene = new THREE.Scene();
    
    //Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    
    // Create some 3d objects
    var textureLoader = new THREE.TextureLoader();
    
     var sunTexture =textureLoader.load('textures/sun.gif');
    var sunGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sunMaterial = new THREE.MeshBasicMaterial({
        
        map: sunTexture
        
    });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    
    
    var earthTexture = textureLoader.load('textures/earth 2.jpeg');
    
    var earthGeometry = new THREE.SphereGeometry(2, 20, 20);
    var earthMaterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 1
    });
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    sun.add(earth);
    earth.position.x = 15;
    
    
    var moonTexture = textureLoader.load('textures/moon.jpg');
    
    var moonGeometry = new THREE.SphereGeometry(1.34, 20, 20);
    var moonMaterial = new THREE.MeshStandardMaterial({
        map: moonTexture,
        roughness: 1
    });
     moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.add(Mercury);
    earth.position.x = 15; 
    
    //水星
    var MercuryTexture = textureLoader.load('textures/mercury.jpg');
    
    var MercuryGeometry = new THREE.SphereGeometry(2.45, 30, 20);
    var MercuryMaterial = new THREE.MeshStandardMaterial({
        map: MercuryTexture,
        roughness: 1
    });
    
   
    Mercury = new THREE.Mesh(MercuryGeometry, MercuryMaterial);
    sun.add(earth);
    earth.add(moon);
    sun.add(Mercury);
    
    Mercury.position.x = 25;
    moon.position.x = 4;//月亮和地球的距离
    
    
//    金星
      var VenusTexture = textureLoader.load('textures/Venus.png');
    
    var VenusGeometry = new THREE.SphereGeometry(2.45, 30, 20);
    var VenusMaterial = new THREE.MeshStandardMaterial({
        map: VenusTexture,
        roughness: 1
    });
    Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);
    sun.add(earth);
    earth.add(moon);
    sun.add(Mercury);
    sun.add(Venus);
    
    
     Venus.position.x = 45;
    moon.position.x = 4;//月亮和地球的距离
    
    //火星
   var MarsTexture = textureLoader.load('textures/Mars.jpg');
    
    var MarsGeometry = new THREE.SphereGeometry(2.45, 30, 20);
    var MarsMaterial = new THREE.MeshStandardMaterial({
        map: MarsTexture,
        roughness: 1
    });
    
     Mars = new THREE.Mesh(MarsGeometry, MarsMaterial);
    sun.add(earth);
    earth.add(moon);
    sun.add(Mercury);
    sun.add(Venus);
    sun.add(Mars);
    Mars.position.x = 65;
    moon.position.x = 4;//月亮和地球的距离
    //
    
    
    
    
    
    var JupiterTexture = textureLoader.load('textures/Jupiter.jpg');
    
    var JupiterGeometry = new THREE.SphereGeometry(2.45, 30, 20);
    var JupiterMaterial = new THREE.MeshStandardMaterial({
        map: JupiterTexture,
        roughness: 1
    });
    
     Jupiter = new THREE.Mesh( JupiterGeometry, JupiterMaterial);
//    sun.add(earth);
//    earth.add(moon);
//    sun.add(Mercury);
//    sun.add(Venus);
//    sun.add(Mars);
    sun.add(Jupiter);
    Jupiter.position.x = 105;

    
    
   var SaturnTexture = textureLoader.load('textures/Saturn.jpg');
    
    var SaturnGeometry = new THREE.SphereGeometry(2.45, 30, 20);
    var SaturnMaterial = new THREE.MeshStandardMaterial({
        map: SaturnTexture,
        roughness: 1
    });
    
     Saturn = new THREE.Mesh( SaturnGeometry, SaturnMaterial);
//    sun.add(earth);
//    earth.add(moon);
//    sun.add(Mercury);
//    sun.add(Venus);
//    sun.add(Mars);
    sun.add(Saturn);
    Saturn.position.x = 155;  
   
    
    
    
    
    
    
    
    // Create lights
    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);
    
    var light = new THREE.PointLight(0xfffff, 4);
     light.position.z = 10;
    scene.add(light);
    
    camera.position.z = 100;
    
    requestAnimationFrame(animate);
};







document.addEventListener('mousemove', function(event) {
    camera.rotation.y = 0.1 * ((event.offsetX / window.innerWidth) * 2 - 1);
});

function animate() {
    sun.rotation.y += 0.008;
    earth.rotation.y += 0.01;
    moon.rotation.y += 0.001;
  Mercury.rotation.y += 0.01;
    Venus.rotation.y += 0.01;
    Mars.rotation.y += 0.01;
    Jupiter.rotation.y += 0.01;
    Saturn.rotation.y +=0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}