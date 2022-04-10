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
    const [empate, setEmpate] = useState(false)

    const handleClick = (posi) => {
        if (estado[posi] === 0 && winner === 0)
        {
            let novoEstado = [...estado]
            novoEstado[posi] = elementoAtual//não pode passar o valor do elemento atual direto para o estado pq estado é uma var useState que vai ser usada nos componentes react, por isso tem que ser useState, senao nao funciona
            setEstado(novoEstado)/*o array estado passa a ser igual ao array novoEstado, 
            e com a alteração, começa a percorrer novamente o estado.map que gera o componente <Tabuleiro/>, 
            por isso altera dinamicamente o tabuleiro, pois percorre o array novamente a cada alteracao do estado por meio do estado.map. 
            Também, cada vez q ocorre alteração no estado, executa o useEffect que faz todas as verificacoes e alteracao do jogador*/
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
        setEmpate(false)
    }

    const verifyEmpate = () => {
        //if (estado.filter((value) => value === 0).length === 0) tb é uma opcao de fazer
        if (estado.find((valor) => valor === 0 ) === undefined && winner === 0)
        {
            setEmpate(true)
        }
    }

    const verifyWinnerLine = (pos) => 
    winnerLine.find((value) => value === pos) !== undefined

    //useEffect(() => {}, []) forma do use effect, primeiro parametro é uma funcao e o segundo é um array, dentro do array coloca a variavel que quer controlar

    useEffect(() => {
        setElementoAtual(elementoAtual * -1)
        verifyGame()
        verifyEmpate()
    }, [estado])

    useEffect (() => {
        if(winner !== 0) setEmpate(false)
    }, [winner])

    return(
        <>
            <div className={styles.jogo}>
            <div className={styles.itemtabuleiro}>
                {
                    estado.map((valor, posicao) => <Tabuleiro key={`tabuleiro-posicao-${posicao}`} status={valor}
                    clique={() => handleClick(posicao)}//passa arrow function quando quer exetutar no clique
                    isWinner={verifyWinnerLine(posicao)}// nesse caso nao passa arrow function pq nao executa no clique, executa direto
                    isEmpate={empate}
                    />)
                }
            </div>
            <GameInfo elementoAt={elementoAtual} vencedor={winner}
                onReset={handleReset}
                isDraw={empate}
            />
            
            </div>
         </>
        
    )
}

export default Jogo