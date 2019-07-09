import {observable, action, computed} from 'mobx';
import {musicService, IMusicResponse} from '../services/MusicService';
import MusicModel, { Track } from '../entities/MusicModel';
import { AxiosResponse } from 'axios';

export default class MusicStore {
    @observable
    public musicList!: MusicModel;
    @observable
    public filteredTrack!: Track;

    public getAll = () => {
        musicService.getAll().then(this.setMusicList)
    }

    @action
    private setMusicList = (response: AxiosResponse<IMusicResponse>) => {
        this.musicList = new MusicModel(response.data)
    }

    public filterMusicList = (searchString:string) => {
        let filteredTrack = this.musicList.playlist.filter((item) => {
            return item.author === searchString || item.title === searchString
        });
        this.filteredTrack = new Track(filteredTrack[0])
    }
}