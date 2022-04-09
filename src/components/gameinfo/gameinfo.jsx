import Icon from "../icon/icon"
import styles from './gameinfo.module.css'
import Botao from "../botao/botao"


function GameInfo({elementoAt, vencedor, onReset}){
    return(
        <div className={styles.painel}>
            {
                vencedor === 0 && 
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
                vencedor !== 0 && 
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
            <Botao click={onReset}>Reiniciar</Botao>
                
        </div>
    )
}

export default GameInfo