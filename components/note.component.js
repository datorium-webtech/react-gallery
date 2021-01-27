class Note extends React.Component {

    writeToConsole() {
        console.log(this.props.title + ": " + this.props.text);
    }

    render() {

        let content = [
            e("h1", null, this.props.title),
            e("p", null, this.props.text)
        ];

        // Give the style attribute with the background-color as well.
        // The value should be taken from the prop "color"
        let attributes = {
            className: "item note",
            style: {
                backgroundColor: this.props.color
            },
            onClick: this.writeToConsole.bind(this)
        }

        // We want to give it a class
        // InnerHTML - simple string (from prop "text")
        return e("div", attributes, content);
    }
}
