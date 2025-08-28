import { useState, useEffect } from "react";
import SandBox from "./SandBox";
// SandBox 라는 자식 컴포넌트를 가져옴

function Box() {
  //<= 함수 Box 선언
  const [boxwidth, setWidth] = useState(100); //<= 초기값 100을 가진 박스 너비에 대한 상태변환값 선언
  const [boxheight, setHeight] = useState(100); //<= 초기값 100을 가진 박스 높이에 대한 상태변환값 선언
  const [posLeft, setLeft] = useState(0); // 처음에는 0으로 시작  <= 초기값 0을 가진 박스의 좌우 좌표 설정
  const [posTop, setTop] = useState(0); // <= 초기값 0을 가진 박스의 상하 좌표 설정

  const MIN_SIZE = 10; // 박스의 최소 사이즈 10
  const MAX_SIZE = 100; //박스의 최대 사이즈 10

  // ✅ 박스를 container의 정중앙에 위치시키는 useEffect
  useEffect(() => {
    const container = document.getElementById("container"); //변수 container 설정
    if (container) {
      //if로 콘테이너에 속성 지정
      const { offsetWidth, offsetHeight } = container; //container의 실제 크기 가져오기
      setLeft((offsetWidth - boxwidth) / 2); //현재값 offsetWidth 에서 boxWidth의 기본값 100을 빼주고 2를 나눠 중앙
      setTop((offsetHeight - boxheight) / 2); //현재값 offsetHeight 에서 boxheight의 기본값 100을 빼주고 2를 나눠 중앙
    }
  }, [boxwidth, boxheight]); // 크기가 바뀌면 다시 가운데 정렬

  const handleResize = (e) => {
    //<= 박스의 크기를 바꾸는 변수
    const id = e.target.id; //<= id에 따라 작동을 지정
    if (id === "width_inc") setWidth((w) => Math.min(w + 10, MAX_SIZE));
    //<=   width_inc가 불릴때마다 실행
    //값을 10 더해주며 w+10과 MAX_SIZE 중에 더 작은 쪽을 출력
    else if (id === "width_dec") setWidth((w) => Math.max(w - 10, MIN_SIZE));
    //<=   width_inc가 불릴때마다 실행
    //값을 10 빼주며 w-10과 MIN_SIZE 중에 더 작은 쪽을 출력
    else if (id === "height_inc") setHeight((h) => Math.min(h + 10, MAX_SIZE));
    // <= /<=   height_inc가 불릴때마다 실행
    //값을 10 더해주며 w+10과 MAX_SIZE 중에 더 작은 쪽을 출력
    else if (id === "height_dec") setHeight((h) => Math.max(h - 10, MIN_SIZE)); //<=   height_inc가 불릴때마다 실행
    //값을 10 빼주며 w-10과 MIN_SIZE 중에 더 작은 쪽을 출력
  };

  const handleMove = (e) => {
    //<= 버튼을 누르면 실행
    const id = e.target.id;
    if (id === "left") setLeft((l) => l - 10); //<= left 값을 -10
    else if (id === "right") setLeft((l) => l + 10); //<= left 값을 +10
    else if (id === "up") setTop((t) => t - 10); //<= top 값을 -10
    else if (id === "down") setTop((t) => t + 10); //<= top 값을 +10
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      //<= 키보드를 누를 때 실행
      if (e.key === "ArrowLeft") setLeft((l) => l - 10); //<= left 값을 -10
      else if (e.key === "ArrowRight")
        setLeft((l) => l + 10); //<= left 값을 +10
      else if (e.key === "ArrowUp") setTop((t) => t - 10); //<= top 값을 -10
      else if (e.key === "ArrowDown") setTop((t) => t + 10); //<= top 값을 +10
    };
    window.addEventListener("keydown", handleKeyDown); //<= window에 키보드 눌림 감지
    return () => window.removeEventListener("keydown", handleKeyDown); //<= 이벤트 제거
  }, []); //<=한번만 실행되도록 정리

  return (
    <div className="wrapper">
      <div className="controls">
        {/* 버튼들 */}
        <h3>크기 조절</h3>
        <button onClick={handleResize} id="width_inc">
          가로+
        </button>
        <button onClick={handleResize} id="width_dec">
          가로-
        </button>
        <button onClick={handleResize} id="height_inc">
          세로+
        </button>
        <button onClick={handleResize} id="height_dec">
          세로-
        </button>

        <h3>방향 이동</h3>
        <button onClick={handleMove} id="left">
          ←
        </button>
        <button onClick={handleMove} id="right">
          →
        </button>
        <button onClick={handleMove} id="up">
          ↑
        </button>
        <button onClick={handleMove} id="down">
          ↓
        </button>
      </div>

      <div id="container">
        <SandBox //<= 자식 컴포넌트 SandBox에게 위임
          width={boxwidth}
          height={boxheight}
          left={posLeft}
          top={posTop}
        />
      </div>
    </div>
  );
}

export default Box;
