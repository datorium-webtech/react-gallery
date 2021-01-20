class Image extends React.Component {
    enlarge() {

    }

    /**
     * The render function returns a react element (created with React.createElement())
     * Whatever element is returned will be created when this class is used.
     */
    render() {
        // TASK: Create a new div inside this div, set no attributes, set inner html as the text
        let content = e("div", null, this.props.text);

        // The value that we gave in main.js can be gotten with this = this.props.imageSrc
        // TASK: Make the background image of this div show the image that we gave in main.js
        let attributes = {
            className: "item image", 
            style: {
                backgroundImage:"url(" + this.props.imageSrc + ")"
            }
        }

        return e("div", attributes, content);
    }
}
