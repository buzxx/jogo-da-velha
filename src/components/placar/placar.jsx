import styles from './placar.module.css'
import Icon from '../icon/icon'

function Placar ({placarX, placarCircle})
{
    return(
        <div className={styles.placar}>
            <h3>Placar: </h3>
            <div className={styles.itensp}>
                <div className={styles.itemplacar}>
                    <Icon iconName={"circle"}/>
                    <h2>{placarCircle}</h2>
                </div>
                <div className={styles.itemplacar}>
                    <Icon iconName={"x"}/>
                    <h2>{placarX}</h2>
                </div>
            </div>
        </div>
    )
}

export default Placar