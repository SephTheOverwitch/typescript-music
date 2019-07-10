import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MusicStore from '../stores/MusicStore';
import { inject, observer } from 'mobx-react';

interface IParams {
    title: string
}

interface IProps extends RouteComponentProps<IParams> {
    musicStore: MusicStore;
}

@inject("musicStore")
@observer
class MusicDetails extends React.Component<IProps> {
    componentDidMount() {
        console.log('Music Details did mount');
        this.props.musicStore.getSelectedTrack(this.props.match.params.title)
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props.match.params.title !== prevProps.match.params.title) {
            this.props.musicStore.getSelectedTrack(this.props.match.params.title)
        }
    }

    render() {
        if (!this.props.musicStore.selectedTrack) {
            return <>Empty</>
        }
        return (
            <div>
                <h1>{this.props.musicStore.selectedTrack.author}</h1>
                <h2>{this.props.musicStore.selectedTrack.title}</h2>
            </div>
        )
    }
}

export default MusicDetails;