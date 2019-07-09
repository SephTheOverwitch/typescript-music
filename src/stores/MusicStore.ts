import {observable, action, computed} from 'mobx';
import {musicService, IMusicResponse} from '../services/MusicService';
import MusicModel, { Track } from '../entities/MusicModel';
import { AxiosResponse } from 'axios';

export default class MusicStore {
    @observable
    public musicList!: MusicModel;
    @observable
    public filter?: string;

    public getAll = () => {
        musicService.getAll().then(this.setMusicList)
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
    public setFilter = (searchString: string) => {
        this.filter = searchString;
    }
}