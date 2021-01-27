class Caption extends React.Component {

    render() {
        let caption = e("h1", null, this.props.caption);
        let attributes = {
            className: "item caption",
            style: {
                backgroundImage: "url(" + this.props.imageSrc + ")"
            }
        }
        return e("div", attributes, caption);
    }
}