import {observable, action, computed} from 'mobx';
import {musicService, IMusicResponse} from '../services/MusicService';
import MusicModel, { Track } from '../entities/MusicModel';
import { AxiosResponse } from 'axios';

export default class MusicStore {
    @observable
    public musicList!: MusicModel;
    @observable
    public filter?: string;
    @observable
    public selectedTrack!: Track;

    public getAll = () => {
        musicService.getAll().then(this.setMusicList)
    }

    public getSelectedTrack = (track: string) => {
        musicService.getSelectedTrack(track).then(this.setSelectedTrack)
    } 

    @computed public get filteredTrack() {
        if (!this.filter) {
            return this.musicList.playlist;
        }

        return this.musicList.playlist.filter((item) =>  {
            return item.author.match(this.filter!) || item.title.match(this.filter!);
        });
    }

    @action
    private setMusicList = (response: AxiosResponse<IMusicResponse>) => {
        this.musicList = new MusicModel(response.data)
    }

    @action
    private setSelectedTrack = (response: AxiosResponse<Track>) => {
        this.selectedTrack = new Track(response.data)
    }

    @action
    public setFilter = (searchString: string) => {
        this.filter = searchString;
    }
}