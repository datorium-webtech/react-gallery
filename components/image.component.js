// Create a class called "Image"
// Give it two methods:
// enlarge()
// render()
// TIMELIMIT: 19:34
class Image extends React.Component {
    enlarge() {

    }

    render() {
        // TASK:
        // make this function return a value
        // the value should be a React element ("div", no attributed, "Test" as text)
        // TASK:
        // Give the div created below 2 classes "item" and "image"
        // Give the div style.backgroundImage and set it to "url(resources/desert.jpg)"
        return e("div", {className: "item image", style: {backgroundImage:"url(resources/desert.jpg)"}}, "Testfafasfas");
    }
}
