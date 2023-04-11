import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.scss"
import "./Prueba.scss"

const Register = ({ info }) => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, formState } = useForm();

    let isEmpty = Object.entries(errors).length === 0;

    let boton = isEmpty === true && formState.isDirty === true && formState.isValid ?
        {
            backgroundColor: '#6F4EF5'
        } : {
            backgroundColor: '#BAADFB'
        }

    const onSubmit = (data, e) => {
        console.log(data);
        navigate("/confirmation")

    }


    return (
        <div className={style.register}>
            <div className={style.subContainer}>
                {info ? (<h2>{info.tittle}</h2>) : (<h2>¡Agendar reunión ahora!</h2>)}

                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <div className={style.casillero}>
                        <label>Nombre de empresa:</label>
                        <input
                            className={style.casilleroInput}
                            type="text"
                            placeholder="Ingrese su nombre de empresa aquí"
                            {...register('empresa', {
                                required: true,
                                pattern: /^[A-Za-z]+$/i,
                                maxLength: 15
                            })}
                        />
                        {errors.empresa?.type === 'required' && <p className={style.error}>El campo nombre es requerido</p>}
                        {errors.empresa?.type === 'pattern' && <p className={style.error}>El formato de nombre es incorrecto</p>}
                        {errors.empresa?.type === 'maxLength' && <p className={style.error}>El campo nombre debe tener menos de 15 caracteres</p>}
                    </div>

                    <div className={style.casillero}>
                        <label>Correo electrónico:</label>
                        <input
                            className={style.casilleroInput}
                            type="text"
                            placeholder="ejemplo@email.com"
                            {...register('email', {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })} />
                        {errors.email?.type === 'required' && <p className={style.error}>El campo email es requerido</p>}
                        {errors.email?.type === 'pattern' && <p className={style.error}>El formato del email es incorrecto</p>}
                    </div>

                    <div className={style.casillero}>
                        <label>Número de contacto:</label>
                        <input
                            className={style.casilleroInput}
                            type="number"
                            placeholder="Ingrese su número de contacto aquí"
                            {...register('telefono', {
                                required: true
                            })} />
                        {errors.telefono?.type === "required" && <p className={style.error}>El campo contacto es requerido</p>}
                    </div>

                    <div className={style.casillero}>
                        <label>Indicar el servicio de interés:</label>
                        <select
                            className={style.select}
                            {...register('servicio', {
                                required: true
                            })} >
                            <option value="" selected disabled>El nombre de su empresa aquí...</option>
                            <option value="smd" className={style.optionColor}>Servicio de marketing digital</option>
                            <option value="si" className={style.optionColor}>Servicios integrales</option>
                            <option value="spv" className={style.optionColor} >Servicios de potenciamiento de ventas</option>
                            <option value="sad" className={style.optionColor}>Servicios de análisis de datos</option>
                            <option value="sdu" className={style.optionColor}>Servicios de diseño UI/UX</option>
                            <option value="st" className={style.optionColor}>Servicios en tendencia</option>
                            <option value="sm" className={style.optionColor}>Servicios a medida</option>
                        </select>
                        {errors.servicio?.type === "required" && <p className={style.error}>El campo servicio es requerido</p>}
                    </div>

                    <input type="submit" value="Enviar información" style={boton} className={style[info? "inputEnviar2": "inputEnviar"]}/>
                </form>
            </div>
        </div>
    )
}

export default Register;








/* <div className="select" tabIndex="1">
                    <input type="radio" className="option-select" name="test" id="opt1" checked />
                    <label for="opt1" className="option" >option1</label> 

                    <input type="radio" className="option-select" name="test" id="opt2" checked />
                    <label for="opt2" className="option" >option2</label>

                    <input type="radio" className="option-select" name="test" id="opt3" checked />
                    <label for="opt3" className="option" >option3</label>

                    <input type="radio" className="option-select" name="test" id="opt4" checked />
                    <label for="opt4" className="option" >option4</label>

                    <input type="radio" className="option-select" name="test" id="opt5" checked />
                    <label for="opt5" className="option" >option5</label>
                    
                </div> */