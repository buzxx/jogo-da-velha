import styles from './header.module.css'

function Header(){
    return(
        <header>
        <div className="container">
                <div className={styles.content}>
                    <h1>Jogo da Velha</h1>
                </div>
                <div className={styles.content}>
                    <h5>Criado por Josias</h5>
                </div>
            </div>
        </header>
    )
}

export default Header