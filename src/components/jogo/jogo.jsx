import styles from './jogo.module.css'
import Tabuleiro from '../tabuleiro/tabuleiro'

function Jogo()
{
    return(
        <>
            <div className={styles.itemtabuleiro}>
                <Tabuleiro/>
                <Tabuleiro/>
                <Tabuleiro/>
            </div>
            <div className={styles.itemtabuleiro}>
                <Tabuleiro/>
                <Tabuleiro/>
                <Tabuleiro/>
            </div>
            <div className={styles.itemtabuleiro}>
                <Tabuleiro/>
                <Tabuleiro/>
                <Tabuleiro/>
            </div>
         </>
        
    )
}

export default Jogo