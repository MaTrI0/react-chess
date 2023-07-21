import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import {Link, NavLink, redirect} from "react-router-dom";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1)
  }
  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1)
  }

  const handleRestart = () => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
      <div className="timer">
        <div className="box-3">
            <NavLink to="/">\
                <div className="btn btn-three">
                    <span>Главное меню</span>
                </div>
            </NavLink>
            <div onClick={handleRestart} className="btn btn-three">
                <span>Рестарт игры</span>
            </div>
        </div>
        <h2>Чёрные: {blackTime}</h2>
        <h2>Белые: {whiteTime}</h2>
      </div>
  );
};

export default Timer;
