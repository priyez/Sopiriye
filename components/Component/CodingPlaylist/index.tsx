import React from 'react';
import axios from 'axios';
import useSWR from 'swr';


interface SpotifyData {
  isPlaying: boolean;
  albumImageUrl: string;
  album: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);


    export default function CodingPlaylist() {
  const { data, error } = useSWR<SpotifyData>('/api/spotify', fetcher);

  if (error) {

    console.log(error);
  }


  return (
    <div className="spotify-card">
    <img
        src={data?.albumImageUrl}
         alt={data?.album}
        width="60"
        height="88"
        className="spotify-image"
      
    // placeholder='blur'
    />

    <div className="spotify-details">
        <h2 className="spotify-title">My <br className='hideDesktop' /> Coding Playlist</h2>
        <p>A curated list of songs I listen to when I need to go head’s down and focus.</p>
        <a href='https://open.spotify.com/playlist/1AWZTiPxnFhmgEjb6hwvi7?si=lyX4ILGbR-aSq-9MlCutJA&pi=e-S9VB-16XSN-L' >Listen</a>
    </div>
</div>
    );
};

// export default CodingPlaylist;