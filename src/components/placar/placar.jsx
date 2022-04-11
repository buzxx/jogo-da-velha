import styles from './placar.module.css'
import Icon from '../icon/icon'

function Placar ()
{
    return(
        <div className={styles.placar}>
            <h3>Placar: </h3>
            <div className={styles.itensp}>
                <div className={styles.itemplacar}>
                    <Icon iconName={"circle"}/>
                    <h2>0</h2>
                </div>
                <div className={styles.itemplacar}>
                    <Icon iconName={"x"}/>
                    <h2>0</h2>
                </div>
            </div>
        </div>
    )
}

export default Placar