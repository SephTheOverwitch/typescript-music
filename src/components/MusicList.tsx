import React from 'react';
import {observer, inject} from 'mobx-react';
import MusicStore from '../stores/MusicStore';

interface IProps {
    musicStore: MusicStore;
}
@inject("musicStore")
@observer
class MusicList extends React.Component<IProps> {

    render() {
        return (
            <ul>
                {this.props.musicStore.musicList.map(function(name: string){
                    return <li>{name}</li>
                })}
            </ul>
        );
    };
}

export default MusicList;