import styles from './popup.module.css'
import ReactDOM  from 'react-dom'


export default function Background({toggleModal}) {
    return ReactDOM.createPortal(
        <div onClick={toggleModal}  className={styles.background}>
            
        </div>, document.getElementById('model')
    )
}