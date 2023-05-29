import { Layouy } from "../components/Layouy"
import Image from 'next/image';


function About() {
    return (
        <Layouy>
            <div className="flex w-100% h-[80vh] items-center justify-center flex-col lg:flex-row h-[100%]" data-aos="zoom-out">
                <div className="p-[1pc] lg:w-1/2 xl:w-1/2">
                    <p className="text-xl">
                        MarketFast es una plataforma web de gestión de inventario diseñada para ayudarte a administrar de manera eficiente y efectiva tus productos y existencias. Nuestro objetivo es proporcionarte una solución integral que simplifique el seguimiento, control y análisis de tu inventario, permitiéndote optimizar tus operaciones y maximizar tus resultados.
                    </p>
                </div>
                <div className="p-[1pc] lg:w-1/2 xl:w-1/2 ">
                    <Image src={'img/mark.svg'} width={200} height={200} alt="" className="w-[35vh] lg:w-[90vh] lg:h-[50vh] xl:h-[50vh] " />
                </div>
            </div>


        </Layouy>
    )


}

export default About
