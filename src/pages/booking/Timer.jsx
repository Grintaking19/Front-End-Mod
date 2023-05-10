import { useRef, useEffect, useState } from "react"

const formateTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

const style = {
  color: "rgb(111, 114, 135)",
  "font-size": "12",
  "font-weight": "400"

}

export function Timer({ seconds, setTimeOut }) {
  const [time, setTime] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime(time => time - 1);
      setTimeOut(false);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTimeOut(true);
    }
  }, [time, setTimeOut]);

  return (
    <p style= {style}>Time left {formateTime(time)}</p>
  )

}