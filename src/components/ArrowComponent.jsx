import '../assets/styles/arrowComponent.css'
const ArrowComponent = () => {
  return (
    <div className='mouse_scroll_container'>
      <div className="mouse_scroll">
          <div>
            <span className="m_scroll_arrows one"></span>
            <span className="m_scroll_arrows two"></span>
            <span className="m_scroll_arrows three"></span>
          </div>
      </div>
      <div className="mouse_scroll">

          <div className="mouse">
            <div className="wheel"></div>
          </div>
      </div>
    </div>
  )
}

export default ArrowComponent