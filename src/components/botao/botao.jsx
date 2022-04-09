import styles from './botao.module.css'

function Botao({children, click})
{
    return(
        <button className={styles.botao} onClick={click}>{children}</button>
    )
}

export default Botao