import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import VisuallyHidden from "../VisuallyHidden";
import Toast from "../Toast";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [activeVariant, setActiveVariant] = React.useState(VARIANT_OPTIONS[0])

    const [message, setMessage] = React.useState("")

    const [isToastVisible, setIsToastVisible] = React.useState(false)

    const handleRadioChange = (event) => {
        setActiveVariant(event.target.value)
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            {isToastVisible &&
                <Toast variant={activeVariant} setIsVisible={setIsToastVisible}>
                    message={message}
                </Toast>}
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setIsToastVisible(true)
                }}
                className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea

                            onChange={handleMessageChange}
                            value={message}
                            id="message" className={styles.messageInput}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <VisuallyHidden>Select your preferred variant</VisuallyHidden>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {
                            VARIANT_OPTIONS.map((item, index) => (

                                <label key={index} htmlFor={`variant-${item}`}>
                                    <input
                                        onChange={handleRadioChange}
                                        id={`variant-${item}`}
                                        type="radio"
                                        name="variant"
                                        value={item}
                                        checked={item === activeVariant}
                                    />
                                    {item}
                                </label>

                            ))
                        }
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}/>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
