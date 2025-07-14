import { useState } from "react"

export const Semaforo = () => {

    const [luzPrendida, setLuzPrendida] = useState("")





    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">

                <div className="bg-dark d-flex flex-column justify-content-center align-items-center p-3 rounded" style={{ width: '100px' }}>
                    <div className={`bg-danger ${luzPrendida == "red" ? "luz-roja" : ""} rounded-circle`} style={{ width: '80px', height: '80px' }} onClick={() => { setLuzPrendida("red") }}></div>
                    <div className={`bg-warning ${luzPrendida == "yellow" ? "luz-amarilla" : ""} rounded-circle my-3`} style={{ width: '80px', height: '80px' }} onClick={() => { setLuzPrendida("yellow") }}></div>
                    <div className={`bg-success  ${luzPrendida == "green" ? "luz-verde" : ""} rounded-circle`} style={{ width: '80px', height: '80px' }} onClick={() => { setLuzPrendida("green") }}></div>
                </div>
            </div>


        </>



    )
}