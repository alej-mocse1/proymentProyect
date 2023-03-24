import { useForm } from "react-hook-form";
//import { edadValidator } from "./validators";
import style from "./Register.module.scss"

const Register = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        /* defaultValues: {
            empresa: '',
            direccion: ''
        } */
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

    return <div className={style.register}>
        <h2>¡Agendar reunión ahora!</h2>
        {/* <p>Nombre: {watch('nombre')}</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre de empresa:</label>
                <input 
                    type="text" 
                    placeholder="Ingrese su nombre de empresa aquí" 
                    {...register('empresa', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: 10
                })} 
                
                
                />
                {errors.empresa?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.empresa?.type === 'pattern' && <p>El formato de nombre es incorrecto</p>}
                {errors.empresa?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>

            <div>
                <label>Correo electrónico:</label>
                <input type="text" 
                placeholder="ejemplo@email.com"
                {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <div>
                <label>Número de contacto:</label>
                <input type="text" 
                placeholder="Ingrese su número de contacto aquí"
                {...register('telefono')} />
            </div>

            <div>
                <label>Indicar el servicio de interés:</label>
                <select {...register('servicio')}>
                    <option value="smd">Servicio de marketing digital</option>
                    <option value="si">Servicios integrales</option>
                    <option value="sp">Servicios de potenciamiento de ventas</option>
                    <option value="sa">Servicios de análisis de datos</option>
                    <option value="sd">Servicios de diseño UI/UX</option>
                    <option value="st">Servicios en tendencia</option>
                    <option value="sm">Servicios a medida</option>
                </select>
            </div>

            {/* <div>
                <label>Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div> */}

            {/* <div>
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && ( */}

            {/* )} */}
            <input type="submit" value="Enviar información" />
        </form>
    </div>
}

export default Register;