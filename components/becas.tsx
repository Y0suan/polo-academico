import Link from 'next/link'
import React from 'react'

export const Becas = () => {
  return (
    <div className=' w-screen h-auto py-20 flex sm:flex-row flex-col ' id='Becas' >
      <div className=' relative sm:w-1/4 h-auto p-4 sm:p-8 bg-blue-600 hover:bg-blue-500 text-white justify-between flex flex-col gap-3 ' >
        <h3 className='text-3xl font-semibold flex flex-col ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 font-semibold">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
         Beca Material de Estudio</h3>
        <p>La beca consiste en facilitar al estudiante de nivel superior, de escasos recursos, una cantidad específica de fotocopias de la bibliografía requerida por la Institución a la que concurre.</p>
        <Link className='  btn-Primary ' href={'https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform'} target='_blank' >
          Incribite</Link>
      </div>
      <div className='relative  sm:w-1/4 h-auto p-4 sm:p-8 bg-blue-600 hover:bg-blue-500  text-white justify-between flex flex-col gap-3' >
        <h3  className='text-3xl font-semibold flex flex-col ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"className="w-10 h-10 font-semibold">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
          Becas Municipales</h3>
        <p>El Programa de Becas surge como iniciativa del Municipio de Eldorado, para apoyar a los jóvenes universitarios o alumnos de carreras terciarias en situación de vulnerabilidad social, para que puedan acceder y continuar sus estudios de grado. Descarga el formulario para la inscripción a las Becas Municipales 2019.</p>
        <Link className='  btn-Primary ' href={'https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform'} target='_blank' >
          Incribite</Link>
      </div>
      <div className='relative  sm:w-1/4 h-auto p-4 sm:p-8 bg-blue-600 hover:bg-blue-500 text-white justify-between flex flex-col gap-3' >
        <h3  className='text-3xl font-semibold flex flex-col ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 font-semibold">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
          Becas Institucionales</h3>
        <p>El programa de Beca Institucional tiene por finalidad primordial asesorar sobre los distintos programas estudiantiles que ofrecen las Instituciones y Universidades de nuestra ciudad, con la finalidad de incluir a los jóvenes en la educación superior.</p>
        <Link className='  btn-Primary ' href={'https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform'} target='_blank' >
          Incribite</Link>
      </div>
      <div className='relative sm:w-1/4 h-auto p-4 sm:p-8 bg-blue-600 hover:bg-blue-500 text-white  justify-between flex flex-col gap-3' >
        <h3  className='text-3xl font-semibold flex flex-col ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-10 h-10 font-semibold">
        <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
          Becas Deportivas</h3>
        <p>Destinadas a deportistas de alto rendimiento, de la ciudad de Eldorado, a los fines de mejorar el desarrollo del atleta y acompañar sus progresos.</p>
        <Link className='  btn-Primary ' href={'https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform'} target='_blank' >
          Incribite</Link>
      </div>
    </div>
  )
}
