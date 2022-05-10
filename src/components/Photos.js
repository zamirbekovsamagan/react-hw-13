import styles from './Photos.module.css'

function Photos (props){


    return (
        <div className={styles.block}>
            <h3>{props.title}</h3>
            <div className={styles.id}>{props.id}</div>
            <img src={props.url}/>
        </div>
    )
}

export default Photos

