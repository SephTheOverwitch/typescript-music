import {observable, action} from 'mobx';
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

    public filter = (author: string) => {
        musicService.getAll().then( (result) => {
            this.filterMusicList(result, author)});
    }

    @action
    private setMusicList = (response: AxiosResponse<IMusicResponse>) => {
        this.musicList = new MusicModel(response.data)
    }

    @action
    private filterMusicList = (response: AxiosResponse<IMusicResponse>, author:string) => {
        this.musicList = new MusicModel(response.data)
        let filteredTrack = this.musicList.playlist.filter((item) => {
            return item.author === author
        });

        this.filteredTrack = new Track(filteredTrack[0])
    }
}