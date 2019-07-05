export default class MusicModel {
    public playlist: Track[] = [];

    public constructor(init?:Partial<MusicModel>) {
        Object.assign(this, init);
    }
}

export class Track {
    public author!: string;
    public title!: string;

    public constructor(init?:Partial<Track>) {
        Object.assign(this, init)
    }
}