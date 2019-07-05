import axios, { AxiosResponse } from 'axios';

export interface IMusicResponse {
    playlist: ITrack[];
}

interface ITrack {
    author: string;
    title: string
}

export default class MusicService {

    private readonly apiUrl = 'http://localhost:8000';

    public getAll(): Promise<AxiosResponse<IMusicResponse>> {
        console.log("I AM FETCHING DATA")

        return axios.get<IMusicResponse>(this.apiUrl + '/music-list', {
            'headers': {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            console.log(response.data)
            return response
        })
    }
}

export const musicService = new MusicService();