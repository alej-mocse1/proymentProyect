import {addDoc, collection} from '@firebase/firestore';
import {firestore} from '../fireBaseSetup';
const handleSubmitFireBase = (infoform) => {
    const ref = collection(firestore, 'Agendas de Reuniones'); // Firebase creates this automatically
    let data = {
      Empresa: infoform.empresa,
      Email:infoform.email,
      Telefono:infoform.telefono,
      Servicios:infoform.servicio,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  };
  export default handleSubmitFireBase;