import styles from './jogo.module.css'
import Tabuleiro from '../tabuleiro/tabuleiro'
import { useState } from 'react'

function Jogo()
{
    const [estado, setEstado] = useState(Array(9).fill(0))
    const [elementoAtual, setElementoAtual] = useState(1)

    const handleClick = (posi) => {
        let novoEstado = [...estado]
        novoEstado[posi] = elementoAtual
        setElementoAtual(elementoAtual * -1)
        setEstado(novoEstado)
    }

    return(
        <>
            <div className={styles.itemtabuleiro}>
                {
                    estado.map((valor, posicao) => <Tabuleiro key={`tabuleiro-posicao-${posicao}`} status={valor}
                    clique={() => handleClick(posicao)}
                    />)
                }
            </div>
         </>
        
    )
}

export default Jogo