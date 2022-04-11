import store from "../store"
import { updateAccount } from "../blockchain/blockchainActions";


// FUNCIONES DE PETICION DE DATOS 

const fetchDataPeticion = () => {
  return {
    type: "CHECK_DATA_PETICION",
  };
};

const fetchDataExitoso = (payload) => {
  return {
    type: "CHECK_DATA_EXITOSO",
    payload: payload,
  };
};

const fetchDataFallido = (payload) => {
  return {
    type: "CHECK_DATA_FALLIDO",
    payload: payload,
  };
};

// FETCH DATA DE LA BLOCKCHAIN

export const fetchData = (account) => {
  
  return async(dispatch)=>{

    dispatch(fetchDataPeticion());

    try {

        //FETCH OPEN SEA
        
        let nom
        let nom2 = new Array()
        
        const gettingData = async (_account)=>{


          const options = {method: 'GET'};
  
           const response = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${_account}&order_direction=desc&offset=0&limit=100`, options)
           const resp = await response.json()
           nom = resp.assets
           console.log (nom)
           nom.forEach(element => {
             nom2.push(element)
           });
           console.log('PASO DEL ARRAY')
           console.log(nom2)

           // Enviar Fetch a STORE
           dispatch(
           fetchDataExitoso({
           allNFTs: nom2
          })
        ) 
        }

        gettingData(account)

      
    } catch (error) {

        dispatch(fetchDataFallido("Could not load data from contract."));

    }
  } 
}


