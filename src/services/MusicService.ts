import { Base64 } from 'js-base64';
import axios, { AxiosResponse } from 'axios';

interface ISpotifyResponse {
    response: IPaging;
}

interface IPaging {
    href: string;
    items: ITrack[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

interface ITrack {
    album: IAlbum;
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: IExternalURL;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: ILinkedTrack;
    restrictions: string;
    name: string;
    preview_url: string;
    track_number: number;
    uri: string;
    is_local: boolean
}

interface IAlbum {
    external_urls: IExternalURL;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface IExternalURL {
    key: string;
    value: string;
}

interface ILinkedTrack {
    external_urls: IExternalURL;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export default class MusicService {

    private readonly apiUrl = 'https://api.spotify.com/v1/playlists/2SU1PDjWkj8aOE5ri8NZlk/tracks';

    private token: string = '';

    public login() {
        return axios.post('https://accounts.spotify.com/api/token', {
            data: {
                'grant_type': 'client_credentials'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Base64.btoa(process.env.REACT_APP_SPOTIFY_CLIENT_ID! + ":" + process.env.REACT_APP_SPOTIFY_SECRET_KEY)
            }
        }
        ).then( (response) => {
            console.log('Login: ' + response.data)
            this.token = response.data
        }).catch((error) => {
            console.log(error);
        });
    }

    public getAll() {
        this.login()

        console.log("This is a token!!!" + this.token);

        return axios.get(this.apiUrl, {
            'headers': { 'Authorization': "Bearer " + this.token }
        }).then(function (response: AxiosResponse) {
            console.log(response.data)
            return response.data
        })
    }
}

export const musicService = new MusicService();