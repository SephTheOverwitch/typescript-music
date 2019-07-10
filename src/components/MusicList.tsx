import React, { ChangeEvent } from 'react';
import { observer, inject } from 'mobx-react';
import MusicStore from '../stores/MusicStore';
import { Route, RouteComponentProps } from 'react-router-dom';
import MusicDetails from './MusicDetails';
import { Track } from '../entities/MusicModel';

interface IProps extends RouteComponentProps {
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

    openDetail = (track: Track) => {
        this.props.history.push(`/musicList/details/${track.title}`)
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
                        return <li key={track.title} onClick={() => this.openDetail(track)}> {track.author} </li>;
                    })}
                </ul>
                <Route path={`/musicList/details/:title`} component={MusicDetails} />
            </>
        );
    };
}

export default MusicList;