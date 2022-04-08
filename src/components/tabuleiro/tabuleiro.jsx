import styles from "./tabuleiro.module.css"
import Icon from "../icon/icon"

function Tabuleiro({status})
{
    return(
        <div className={styles.gameoption}>
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