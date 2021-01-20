ReactDOM.render(
    // TASK:
    // Show every image we have in the resources folder.
    [
        e(Image, {imageSrc: "resources/savanna.jpg", text: "This is a savanna."}),
        e(Image, {imageSrc: "resources/desert.jpg"}),
        e(Image, {imageSrc: "resources/forest.jpg"}),
        e(Image, {imageSrc: "resources/mountain.jpg"}),
        e(Image, {imageSrc: "resources/underwater.jpg"})
    ],

    document.querySelector(".image-container")
);
