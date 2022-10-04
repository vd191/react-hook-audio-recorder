# react-hook-audio-recorder

>

[![NPM](https://img.shields.io/npm/v/react-hook-audio-recorder.svg)](https://www.npmjs.com/package/react-hook-audio-recorder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hook-audio-recorder
```

## Usage

```jsx
import React, { Component } from 'react'
import { useRecorder } from 'react-hook-audio-recorder';

const Example = () => {
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <div>
      <p>{isRecording}</p>
      <button onClick={startRecording}>
      <button onClick={stopRecording}>
      <audio src={audioURL} />
    </div>
  )
}
```

## License

MIT © [vieduogn](https://github.com/vieduogn)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
