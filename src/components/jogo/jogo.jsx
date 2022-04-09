import styles from './jogo.module.css'
import Tabuleiro from '../tabuleiro/tabuleiro'
import { useState, useEffect } from 'react'
import Icon from '../icon/icon'

const winnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function Jogo()
{
    const [estado, setEstado] = useState(Array(9).fill(0))
    const [elementoAtual, setElementoAtual] = useState(-1)
    const [winner, setWinner] = useState(0)

    const handleClick = (posi) => {
        if (estado[posi] === 0 && winner === 0)
        {
            let novoEstado = [...estado]
            novoEstado[posi] = elementoAtual
            setEstado(novoEstado)
        }
        
    }

    const verifyGame = () => {
        winnerTable.forEach((linha) => {
            const values = linha.map((posic) => estado[posic])
            const soma = values.reduce((sum, value) => sum + value)
            if (soma === 3 || soma === -3) setWinner(soma/3)
        })
    }

    //useEffect(() => {}, []) forma do use effect, primeiro parametro é uma funcao e o segundo é um array, dentro do array coloca a variavel que quer controlar

    useEffect(() => {
        setElementoAtual(elementoAtual * -1)
        verifyGame()
    }, [estado])

    return(
        <>
            <div className={styles.jogo}>
            <div className={styles.itemtabuleiro}>
                {
                    estado.map((valor, posicao) => <Tabuleiro key={`tabuleiro-posicao-${posicao}`} status={valor}
                    clique={() => handleClick(posicao)}
                    />)
                }
            </div>
            
            <div className={styles.painel}>
                <h3>Próximo a jogar:</h3>
                {
                    elementoAtual === 1 && <Icon iconName={"circle"}/>
                }{
                    elementoAtual === -1 && <Icon iconName={"x"}/>
                }
            </div>
            </div>
         </>
        
    )
}

export default Jogo