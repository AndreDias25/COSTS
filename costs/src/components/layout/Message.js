import {useState, useEffect} from 'react';

import styles from './Message.module.css';

function Message({type, msg}){
    
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg]) //useeffect sempre ligado a alguem, no caso ligado a msg

    return (
        <>
            {visible &&(
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>//passando a classe por parametro
            )}
        </> //fragment
    )
}

export default Message;