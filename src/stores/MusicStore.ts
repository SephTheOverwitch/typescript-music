import {observable} from 'mobx';
import {musicService} from '../services/MusicService';
import MusicModel from '../entities/MusicModel';

export default class MusicStore {
    @observable public musicList: MusicModel[] = []

    public getAll = () => {
        musicService.getAll().then(
            response => {
                this.musicList = response
            }
        )
    }
}