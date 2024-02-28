import React from 'react'

export const Noticias = () => {
  return (
    <div className=' w-screen gap-8 py-10 flex  flex-col justify-center items-center ' >
        <h1>Ultimas noticias</h1>
        <div className=' w-screen sm:px-40 flex justify-evenly sm:flex-row flex-col sm:gap-0 gap-4  sm:items-start items-center ' >
            <div className='card' >
                <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/335127589_164214219782994_76049802838181505_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHH-YU54atK96WtkwCGzD_A-LzXfeiKogP4vNd96IqiA08vCghf4rP9ncsBtYwwpbuxmkKAUe0Wg0Og6enQq1dO&_nc_ohc=VeFKvk6yuekAX-xrHk_&_nc_ht=scontent.fres2-1.fna&oh=00_AfA1DTgMPL1ohxSmK7bQO1niCwQpx3RmYHxB7c0-wjS02Q&oe=65E34544' ></img>
                <div className='flex flex-col p-3 gap-3' >
                <h3>Inscripciones Becas Progresar</h3>
                <p>
                Desde el Polo Académico de la Municipalidad de Eldorado estamos brindando asesoramiento a todos los estudiantes en la inscripción a las becas PROGRESAR.
                </p>
                </div>
            </div>
            <div className='card' >
                <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/298942538_748653646091627_8432354950525946062_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFnXC8Z6aXSAtnHYrijtJg7T_TIaCCJiK9P9MhoIImIr6tFVxrOxwWH2qpdCywJzXTpdGxBHP4HWmnBKGcz9rZT&_nc_ohc=jdfZEN_VFdgAX--heq_&_nc_ht=scontent.fres2-1.fna&oh=00_AfCBWsnOw3AlDPpbtWsdVATBa0M14koRe0wXWBaZY4gjOQ&oe=65E20A73' ></img>
                <div className='flex flex-col p-3 gap-3' >
                <h3>Expo Secundaria 2022</h3>
                <p>
                Expo Secundaria 2022-1era Edicion-
Seguimos trabajando para fortalecer la educacion👇        </p>
                </div>
            </div>
            <div className='card' >
                <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/297745463_739430340347291_2774871471501868049_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJRqow7bMhFr7dCyh5m75xQiWRb5x6EFFCJZFvnHoQUdL7tOtjAtND40QQHBEFqnJjQwTPv0ZaCdqVyrXgFkjz&_nc_ohc=DOahHiI88ewAX-seg6n&_nc_ht=scontent.fres2-1.fna&oh=00_AfCMkdVGo_oFzbcb-eFBBuPXkiY8No5Dng4SLw8axodLkw&oe=65E20857' ></img>
                <div className='flex flex-col p-3 gap-3' >
                <h3>Expo Carreras</h3>
                <p>
                Nueva Edición de la Expo Carreras
 ¿Todavía no sabes qué vas estudiar el año que viene?
 ¿Estás decidido/a pero querés conocer más sobre la propuesta académica?</p>
                </div>
            </div>
        </div>
    </div>
  )
}
