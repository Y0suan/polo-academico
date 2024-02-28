import Link from 'next/link'
import React from 'react'

export const Flayer = () => {
  return (
    <div className=' fondo-img-uno flayer w-screen sm:h-[100vh] h-auto flex  sm:flex-row flex-col ' >
        <div className='sm:w-1/2 fondo-img-uno sm:py-0 py-4 sm:h-[100%] flex flex-col justify-center  items-center  ' >
            <div className=' h-auto sm:w-1/2 sm:p-0 p-4 text-white flex flex-col gap-4 '>
            <h2 className='' >PEDI TU TARJETA UNIVERSITARIA</h2>
            <p>La tarjeta Universitaria está pensada para beneficiar a todos los estudiantes de la comunidad universitaria, ofreciéndoles la posibilidad de tener importantes promociones y descuentos en compras y servicios en los diferentes rubros comerciales, para disfrutar y vivir mejor en la ciudad.</p>
            <Link className='btn-Primary' href={'https://poloacademico.eldorado.gob.ar/#/TarjetaUni'} >Pedi la Tuya</Link>
            </div>
        </div>
        <div className=' fondo-img-dos sm:w-1/2 bg-blue-500 h-[100%] flex flex-col ' >
            <div className=' p-4 sm:p-0  w-[100%] h-1/2  flex justify-center items-center ' >
                <div className=' text-white  w-4/6 flex flex-col gap-3'>
                <h2>TEST VOCACIONAL</h2>
                <p>Se encuentra orientado a identificar y reconocer los factores que inciden en la toma de decisiones para la eleccion vocacional .Asimismo brindarles las diferentes ofertas educativas a nivel terciario y/o universitario para posible insercion laboral, asi como tambien los recursos que brindan las Instituciones .</p>
                <Link className='btn-Primary' href={'/https://docs.google.com/forms/d/e/1FAIpQLSeWAvP1HaTi4ElG1w4urgJGx6JPE2JFn_J6vb6j-BWVMd53IQ/alreadyresponded?fbzx=8563204841281013938'} >
                    Realiza tu test vocacional</Link>
                </div> 
            </div>
            <div className=' fondo-img-tres p-4 sm:p-0  w-[100%] h-1/2 bg-green-400 flex justify-center items-center ' >
                <div className=' text-white  w-4/6 flex flex-col gap-3'>
                <h2>Expo Carreras</h2>
                <p>La Expo Carreras es un espacio de encuentro de las distintas Universidades,</p>

                </div> 
            </div>
        </div>
    </div>
  )
}
