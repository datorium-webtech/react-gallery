ReactDOM.render(
    // TASK:
    // Show every image we have in the resources folder.
    // TASK:
    // Give each image some text. 
    // 12:04
    [
        e(Image, {imageSrc: "resources/savanna.jpg", text: "This is a savanna."}),
        e(Image, {imageSrc: "resources/desert.jpg", text: "No water."}),
        e(Image, {imageSrc: "resources/forest.jpg", text: "Deer in a forest."}),
        e(Image, {imageSrc: "resources/mountain.jpg", text: "Mountains."}),
        e(Image, {imageSrc: "resources/underwater.jpg", text: "A lot of water."}),
        e(Note, {color: "blue", text: "This is the first note.", title: "First Note"})
    ],

    document.querySelector(".image-container")
);
