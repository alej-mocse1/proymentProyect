import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.scss"
import "./Prueba.scss"

const Register = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, formState } = useForm();

    let isEmpty = Object.entries(errors).length === 0;
    
    let boton = isEmpty === true && formState.isDirty === true && formState.isValid ?
        {
            backgroundColor: '#1e0891'
        } : {
            backgroundColor: '#BAADFB'
        }

    const onSubmit = (data, e) => {
        console.log(data);
        navigate("/confirmation")

    }


    return <div className={style.register}>
        <h2>¡Agendar reunión ahora!</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre de empresa:</label>
                <input
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

            <div>
                <label>Correo electrónico:</label>
                <input type="text"
                    placeholder="ejemplo@email.com"
                    {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                {errors.email?.type === 'required' && <p className={style.error}>El campo email es requerido</p>}
                {errors.email?.type === 'pattern' && <p className={style.error}>El formato del email es incorrecto</p>}
            </div>

            <div>
                <label>Número de contacto:</label>
                <input type="number"
                    placeholder="Ingrese su número de contacto aquí"
                    {...register('telefono', {
                        required: true
                    })} />
                {errors.telefono?.type === "required" && <p className={style.error}>El campo contacto es requerido</p>}
            </div>

            <div>
                <label>Indicar el servicio de interés:</label>
                <select {...register('servicio', {
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

            <input type="submit" value="Enviar información" style={boton} />
        </form>
    </div>
}

export default Register;