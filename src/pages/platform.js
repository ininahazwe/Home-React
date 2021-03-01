import React from "react";

class Platform extends React.Component {
    componentDidMount(){     window.location.href = "http://platform.home-education.fr";  }
    render() {
        return (
            <div>
                <h2>Contact</h2>
            </div>
        )
    }
}

export default Platform;