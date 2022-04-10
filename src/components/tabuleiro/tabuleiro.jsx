import classNames from "classnames"

import styles from "./tabuleiro.module.css"
import Icon from "../icon/icon"

function Tabuleiro({status, clique, isWinner, isEmpate})
{
    return(
        <div className={classNames(styles.gameoption, {
            [styles.winner]: isWinner,
            [styles.empate]: isEmpate
        }
        )
        } onClick={clique}>
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