import styles from './jogo.module.css'
import Tabuleiro from '../tabuleiro/tabuleiro'
import { useState } from 'react'

function Jogo()
{
    const [estado, setEstado] = useState(Array(9).fill(0))

    return(
        <>
            <div className={styles.itemtabuleiro}>
                {
                    estado.map((valor, posicao) => <Tabuleiro key={`tabuleiro-posicao-${posicao}`} status={valor}/>)
                }
            </div>
         </>
        
    )
}

export default Jogo