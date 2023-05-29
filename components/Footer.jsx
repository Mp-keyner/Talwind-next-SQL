import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import Linkedin from './Linkedin'
import Instagram from './Instagram'
import Facebook from './Facebook'
import Github from './Github'

const Pie = () => {
    return (<>
        <footer className={styles.siteFooter}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.acerca}>
                        <h6>Acerca de</h6>
                        <p>
                            Con nuestras características y funcionalidades avanzadas, podrás realizar un seguimiento detallado de tu inventario, desde la entrada de nuevos productos hasta su venta. Podrás gestionar fácilmente las cantidades disponibles, realizar actualizaciones en tiempo real, y recibir alertas automáticas cuando los niveles de stock estén bajos.
                            <br />
                            <br />
                            Además, MarketFast te brinda la posibilidad de generar informes y análisis en profundidad para obtener una visión clara de tu inventario. Esto te permitirá identificar patrones de demanda, optimizar tus compras, y tomar decisiones informadas para maximizar la rentabilidad de tu negocio.
                        </p>

                    </div>

                    <div className={styles.boostrapUno}> {/*  className="col-xs-6 col-md-3 p-1"*/}
                        <h6>Ofrecemos los siguientes servicios</h6>
                        <ul className={`${styles.footerLinks} ${styles.space}`}>
                            <div>
                                <h2>Gestión de productos</h2>
                            </div>
                            <div>
                                <h2>Control de existencias</h2>

                            </div>
                            <div>
                                <h2>Informes y análisis</h2>
                            </div>
                            <div>
                                <h2>Notificaciones y recordatorios</h2>
                            </div>
                            <div>
                                <h2>Integraciones y compatibilidad</h2>
                            </div>
                        </ul>
                    </div>

                    <div className={styles.column}>{/*  className="col-xs-6 col-md-3"> */}
                        <h6>ATENCION AL CLIENTE</h6>
                        <ul className={`${styles.footerLinks} ${styles.space}`}>
                            <div>
                                <h2>MONDAY UNTIL FRIDAY</h2>
                                <p>9:00 - 22:00</p>
                            </div>
                            <div>
                                <h2>SATURDAY - SUNDAY</h2>
                                <p>12:00 - 24:00</p>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.footerIco}>
                <div className={styles.footerIcon}>
                    <div className={styles.col}> {/*className="col-md-8 col-sm-6 col-xs-12"*/}
                        <p className={styles.copyrightText}><span className={styles.vic}>MarketFast</span> &copy; 2023 Todos los derechos reservados por
                            <a className={styles.navLink} href="#"> Keyner Oswaldo Dela hoz Hincapie</a>.
                        </p>
                    </div>

                    <div className={styles.colmd}> {/*className="col-md-4 col-sm-6 col-xs-12"*/}
                        <ul className={styles.socialIcons}>
                            <li>
                                <Facebook color="#000" red='facebook' />
                            </li>
                            <li>
                                <Github color="#000" red='twitter' />
                            </li>
                            <li>
                                <Linkedin color="#000" red='linkedin' />
                            </li>
                            <li>
                                <Instagram color="#000" red='dribbble' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >

    </>)
}

export default Pie