import styles from "./tabuleiro.module.css"
import Icon from "../icon/icon"

function Tabuleiro({status, clique})
{
    return(
        <div className={styles.gameoption} onClick={clique}>
            {
                status === -1 && <Icon iconName={"x"}/>
            }
            {
                status === 1 && <Icon iconName={"circle"}/>
            }
            
        </div>
    )
}

export default Tabuleiro