import React from 'react';

let musicList: string[];

musicList = ["title1", "title2", "title3"]

class MusicList extends React.Component<{}, {}> {

    render() {
        return (
            <ul>
                {musicList.map(function(name){
                    return <li>{name}</li>
                })}
            </ul>
        );
    };
}

export default MusicList;