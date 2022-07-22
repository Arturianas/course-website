import AnimatedShapes from "../../common/animatedShapes/AnimatedShapes"
import "./mailList.scss"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Subscribe to best courses!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      {/* <AnimatedShapes/> */}
    </div>
  )
}

export default MailList