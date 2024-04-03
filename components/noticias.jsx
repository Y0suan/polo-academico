import React from 'react'

export const Noticias = () => {
  return (
    <div className=' w-screen gap-8 py-10 flex  flex-col justify-center items-center ' >
        <h1>Ultimas noticias</h1>
        <div className=' w-screen sm:px-40 flex justify-evenly sm:flex-row flex-col sm:gap-0 gap-4  sm:items-start items-center ' >
            <div className='card' >
                <img src='https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/335127589_164214219782994_76049802838181505_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHH-YU54atK96WtkwCGzD_A-LzXfeiKogP4vNd96IqiA08vCghf4rP9ncsBtYwwpbuxmkKAUe0Wg0Og6enQq1dO&_nc_ohc=mqXXjxpYDcUAX_MyfVd&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfCroI8sHqRtVvbxKXM5mSQbox1DIfrg97GhaFV_jBX2-Q&oe=6612F384' ></img>
                <div className='flex flex-col p-3 gap-3' >
                <h3>Inscripciones Becas Progresar</h3>
                <p>
                Desde el Polo Académico de la Municipalidad de Eldorado estamos brindando asesoramiento a todos los estudiantes en la inscripción a las becas PROGRESAR.
                </p>
                </div>
            </div>
            <div className='card' >
                <img src='https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/298611692_439751604861991_3896035646195181954_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG_mttVGgp43SdBxfee10nWXM6ZSjjoVLJczplKOOhUsozNgKm2oO782n_ygEwXQtyfOBzTbRhQud0QtL5ghFvX&_nc_ohc=Zyf0IQftyQIAX_uqx3Y&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfA_lKPJArlnIhu02Z0FhXW1XA8dAf1_hbyT18-ktBpSNw&oe=66131720' ></img>
                <div className='flex flex-col p-3 gap-3' >
                <h3>Expo Secundaria 2022</h3>
                <p>
                Expo Secundaria 2022-1era Edicion-Seguimos trabajando para fortalecer la educacion👇</p>
                </div>
            </div>
            <div className='card' >
                <img src='https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/298384143_437410525096099_5439161245747320051_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEXsXcK7qq_TRZ0mklA7Den3yJTsmk7a_vfIlOyaTtr-yDGr7Mb0UXDzgsgTOenFbbo0QgeQEjLRr4OTrJttwHb&_nc_ohc=yDEKZJjfs5sAX_2K6dS&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfDD_ISfvjNtp8nkJ4gSfVz1KT-5ORv9mqqKBIAsPxWk7g&oe=66130849' ></img>
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

