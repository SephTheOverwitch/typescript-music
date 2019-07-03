import React from 'react';

type WelcomeProps = {
    name: string
}

class Welcome extends React.Component<WelcomeProps> {

    render() {
        return <h1> Welcome {this.props.name} </h1>
    }
}

export default Welcome;