import styles from "../styles/Modal.module.css"

export default function Modal(props){
    return (
        <div className={styles.Modal}>
            <div onClick={() => props.setModal(false)}className={styles.background}></div>
            <div className={styles.island}>
                <img
                    className={styles.nft}
                    src={`${props.img}`}
                ></img>
                <div className={styles.fields}>
                    <input className={styles.input} placeholder="Name" onInput={(e) => props.setName(e.target.value)} value={props.name}></input>
                    <input
                        className={styles.input}
                        placeholder="Description"
                        onInput={(e) => props.setDescription(e.target.value)}
                        value = {props.description}
                    ></input>
                   
                        <div className={styles.mint} onClick={props.onMintPressed}>Mint NFT</div>
                        

                </div>
            </div>
        </div>
    );
}