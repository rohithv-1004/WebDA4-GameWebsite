import React from 'react';

const IframeComponent = () => {
  return (
    <div>
      <iframe src="%PUBLIC_URL%/index.html" title="Embedded HTML" width="100%" height="600px"></iframe>
    </div>
  );
}

export default IframeComponent;
