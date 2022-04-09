import styles from './jogo.module.css'
import Tabuleiro from '../tabuleiro/tabuleiro'
import { useState, useEffect } from 'react'
import GameInfo from '../gameinfo/gameinfo'


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
    const [winnerLine, setWinnerLine] = useState([])

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
            if (soma === 3 || soma === -3) {
                setWinner(soma/3)
                setWinnerLine(linha)
            }
        })
    }

    const handleReset = () => {
        setEstado(Array(9).fill(0))
        setWinner(0)
        setWinnerLine([])
    }

    const verifyWinnerLine = (pos) => 
    winnerLine.find((value) => value === pos) !== undefined

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
                    clique={() => handleClick(posicao)}//passa arrow function quando quer exetutar no clique
                    isWinner={verifyWinnerLine(posicao)}// nesse caso nao passa arrow function pq nao executa no clique, executa direto
                    />)
                }
            </div>
            <GameInfo elementoAt={elementoAtual} vencedor={winner}
                onReset={handleReset}
            />
            
            </div>
         </>
        
    )
}

export default Jogo