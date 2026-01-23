import React from 'react';

const VideoPublicitario = ({ Link }) => {
  return (
    <div className="ratio ratio-16x9">
      <iframe src={Link} title="Video publicitario" allow="autoplay" allowFullScreen />
    </div>
  );
};

export default VideoPublicitario;
