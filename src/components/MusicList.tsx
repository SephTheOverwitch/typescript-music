import React, { ChangeEventHandler, ChangeEvent } from 'react';
import { observer, inject } from 'mobx-react';
import MusicStore from '../stores/MusicStore';

interface IProps {
    musicStore: MusicStore;
}

@inject("musicStore")
@observer
class MusicList extends React.Component<IProps> {
    componentDidMount() {
        console.log('componentDidMount')
        this.props.musicStore.getAll()
    }

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.musicStore.filter(event.target.value)
    }

    render() {
        if (!this.props.musicStore.musicList) {
            return <></>
        }

        return (
            <>
                <input
                    type="text"
                    onChange={this.onChange}
                />
                <ul>
                    {this.props.musicStore.musicList.playlist.map(track => {
                        return <li>{track.author}</li>;
                    })}
                    <li>Filered list:</li>
                    <li>{this.props.musicStore.filteredTrack ? this.props.musicStore.filteredTrack.author : 'No data'}</li>
                    <li>{this.props.musicStore.filteredTrack ?  this.props.musicStore.filteredTrack.title : 'No data'}</li>
                </ul>
            </>
        );
    };
}

export default MusicList;