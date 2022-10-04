import * as React from "react";

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}

/**
 * React hook to use browser's recorder.
 *
 * @example
 * import { useRecorder } from 'react-hook-recorder';
 * const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
 *
 * @example
 * // use audioURL
 * <audio controls src={audioURL} />
 *
 * @example
 * // use startRecording
 * startRecording()
 *
 * @example
 * // use stopRecording
 * stopRecording()
 *
 * @param no
 */

const useRecorder = () => {
  const [audioURL, setAudioURL] = React.useState("");
  const [isRecording, setIsRecording] = React.useState(false);
  const [recorder, setRecorder] = React.useState(null);

  React.useEffect(() => {
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    const handleData = (e) => {
      setAudioURL(URL.createObjectURL(e.data));
    };

    recorder.addEventListener("data available", handleData);
    return () => recorder.removeEventListener("data available", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return [audioURL, isRecording, startRecording, stopRecording];
};

export default useRecorder;
