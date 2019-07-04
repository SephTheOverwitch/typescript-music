export default class MusicModel {
    public trackName!: string

    public constructor(init?:Partial<MusicModel>) {
        Object.assign(this, init);
    }
}