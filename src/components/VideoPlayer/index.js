import ReactPlayer from 'react-player'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        controls="false"
        url="https://www.youtube.com/watch?v=2pgx-tajxwE"
      />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  </div>
)

export default VideoPlayer
