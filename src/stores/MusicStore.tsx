import {observable, action, computed} from 'mobx';

export default class MusicStore {
    @observable musicList: string[] = ["item1", "item2", "item3"]

    @action
    add(item: string) {
        this.musicList.push(item)
    }

    @computed
    get numOfSongs() {
        return this.musicList.length;
    }
}