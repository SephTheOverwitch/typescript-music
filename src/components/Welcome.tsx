import React from 'react';

interface IProps {
    name: string
}
class Welcome extends React.Component<IProps> {

    render() {
        return <h1> Welcome {this.props.name} </h1>
    }
}

export default Welcome;