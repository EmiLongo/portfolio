import './GlowingButton.css'
export const GlowingButton = ({action, children}) => {
  return (
    <div className="glowing-button"
          onClick={action}
    >
      <div className="animated-border-box-glow"></div>
      <div className="animated-border-box">
      {children}
    </div>
  </div>
  )
}
