import styles from "../styles/Modal.module.css";
export default function Result(props) {
    return (
        <div className={styles.Modal}>
            <div
                onClick={() => props.setResult(false)}
                className={styles.background}
            ></div>

                <div className={styles.status}>
                    <p>{props.status}</p>
                </div>

        </div>
    );
}