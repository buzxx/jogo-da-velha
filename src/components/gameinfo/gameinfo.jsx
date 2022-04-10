import Icon from "../icon/icon"
import styles from './gameinfo.module.css'
import Botao from "../botao/botao"


function GameInfo({elementoAt, vencedor, onReset, isDraw}){
    return(
        <div className={styles.painel}>
            {
                !isDraw && vencedor === 0 && 
                <>
                    <h3>Próximo a jogar:</h3>
                    {
                        elementoAt === 1 && <Icon iconName={"circle"}/>
                    }
                    {
                        elementoAt === -1 && <Icon iconName={"x"}/>
                    }
                </>  
            }
            {
                !isDraw && vencedor !== 0 && 
                <>
                    <h3>vencedor:</h3>
                    {
                        vencedor === 1 && <Icon iconName={"circle"}/>
                    }
                    {
                        vencedor === -1 && <Icon iconName={"x"}/>
                    }
                </>
            }
            {
                isDraw &&
                <>
                    <h3>EMPATE!</h3>
                </>
            }
            <Botao click={onReset}>Reiniciar</Botao>
                
        </div>
    )
}

export default GameInfo