// Dapatkan canvas
const canvas = document.getElementById("renderCanvas");

// Buat engine Babylon
const engine = new BABYLON.Engine(canvas, true);

// Buat scene
const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    // Tambahkan kamera
    const camera = new BABYLON.ArcRotateCamera("camera1", 
        Math.PI / 2, Math.PI / 4, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Tambahkan pencahayaan
    const light = new BABYLON.HemisphericLight("light1", 
        new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;

    // Tambahkan objek 3D (misalnya kubus)
    const box = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene);

    return scene;
};

const scene = createScene();

// Render loop
engine.runRenderLoop(function () {
    scene.render();
});

// Resize otomatis
window.addEventListener("resize", function () {
    engine.resize();
});
