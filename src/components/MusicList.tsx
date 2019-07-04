import React from 'react';
import {observer, inject} from 'mobx-react';
import MusicStore from '../stores/MusicStore';

interface IProps {
    musicStore: MusicStore;
}
@inject("musicStore")
@observer
class MusicList extends React.Component<IProps> {

    componentDidMount() {
        this.props.musicStore.getAll();
    }

    render() {
        return (
            <ul>
                {this.props.musicStore.musicList}
            </ul>
        );
    };
}

export default MusicList;