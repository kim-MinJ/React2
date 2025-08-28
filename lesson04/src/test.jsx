import { useState, useEffect } from 'react'

// 외부에서 사용할 컴포넌트
function Box() {
  const [boxWidth, setWidth] = useState(100)
  const [boxHeight, setHeight] = useState(100)
  const [posLeft, setLeft] = useState(300)
  const [posTop, setTop] = useState(300)

  // 크기 조절 버튼 핸들러
  const handleResize = (e) => {
    const { id } = e.target

    switch (id) {
      case 'width_inc':
        setWidth((prev) => prev + 10)
        break
      case 'width_dec':
        setWidth((prev) => Math.max(10, prev - 10))
        break
      case 'height_inc':
        setHeight((prev) => prev + 10)
        break
      case 'height_dec':
        setHeight((prev) => Math.max(10, prev - 10))
        break
      default:
        break
    }
  }

  // 방향키 이벤트 핸들링 (← ↑ → ↓)
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          setLeft((prev) => prev - 10)
          break
        case 'ArrowRight':
          setLeft((prev) => prev + 10)
          break
        case 'ArrowUp':
          setTop((prev) => prev - 10)
          break
        case 'ArrowDown':
          setTop((prev) => prev + 10)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <h3>박스 크기 조절</h3>
      <button onClick={handleResize} id='width_inc'>
        가로+
      </button>
      <button onClick={handleResize} id='width_dec'>
        가로-
      </button>
      <button onClick={handleResize} id='height_inc'>
        세로+
      </button>
      <button onClick={handleResize} id='height_dec'>
        세로-
      </button>
      <hr />
      <p>※ 방향키로 박스를 움직일 수 있습니다</p>
      <div
        id='container'
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          border: '1px solid #ccc'
        }}
      >
        {/* SandBox 렌더링 */}
        <SandBox
          width={boxWidth}
          height={boxHeight}
          left={posLeft}
          top={posTop}
        />
      </div>
    </>
  )
}

// 이 파일 안에서만 사용할 컴포넌트
function SandBox(props) {
  const boxstyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.left}px`,
    top: `${props.top}px`,
    position: 'absolute',
    background: 'yellow',
    transition: '0.1s ease'
  }

  return <div style={boxstyle}></div>
}

export default Box
