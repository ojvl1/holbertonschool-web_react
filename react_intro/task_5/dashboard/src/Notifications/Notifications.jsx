import './Notifications.css';
import { getLatestNotification } from "./utils/utils.jsx"
import closeIcon from "./assets/close-icon.png"

function Notifications() {
  return (
    <div className='notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
      aria-label='Close'
      onClick={() => console.log("Close button has been clicked")}>
      <img src={closeIcon} alt="close button" />
      </button>
    </div>
  );
}

export default Notifications
