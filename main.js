ReactDOM.render(
    [
        e(Image, {imageSrc: "resources/savanna.jpg", text: "This is a savanna."}),
        e(Image, {imageSrc: "resources/desert.jpg", text: "No water."}),
        e(Image, {imageSrc: "resources/forest.jpg", text: "Deer in a forest."}),
        e(Note, {color: "blue", text: "This is the first note.", title: "First Note"}),
        e(Image, {imageSrc: "resources/mountain.jpg", text: "Mountains."}),
        e(Image, {imageSrc: "resources/underwater.jpg", text: "A lot of water."}),
        e(Note, {color: "red", text: "This note is red.", title: "Red Note"}),
        e(Caption, {imageSrc: "resources/stairs.jpg", caption: "Long stairs."})
    ],

    document.querySelector(".image-container")
);
