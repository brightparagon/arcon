const HeaderButtonGroup = ({ onPreviousPage, onNextPage }) => {
  if (typeof onPreviousPage !== 'function' || typeof onNextPage !== 'function') {
    throw new Error('onPreviousPage 함수 또는 onNextPage 함수가 props로 전달되지 않았습니다.')
  }

  return (
    <>
      <button onClick={onPreviousPage}>이전 페이지</button>
      <button onClick={onNextPage}>다음 페이지</button>
    </>
  )
}

export default HeaderButtonGroup
