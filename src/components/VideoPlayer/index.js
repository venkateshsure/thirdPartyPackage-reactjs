import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        controls="false"
        url="https://www.youtube.com/watch?v=2pgx-tajxwE"
      />
    </div>
  </div>
)

export default VideoPlayer
