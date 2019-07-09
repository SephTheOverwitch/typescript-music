import React, { ChangeEventHandler, ChangeEvent } from 'react';
import { observer, inject } from 'mobx-react';
import MusicStore from '../stores/MusicStore';
import { type } from 'os';

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
        this.props.musicStore.setFilter(event.target.value)
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
                    {this.props.musicStore.filteredTrack.map(track => {
                        return <li key={track.title}>{track.author}</li>;
                    })}
                </ul>
            </>
        );
    };
}

export default MusicList;