import store from "../store"


let allData

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
        let nom2 =[]
        
        const gettingData = async (_account)=>{
          const options = {method: 'GET'};
  
           const response = await fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0xece6fFFF5Ad61A2dC2e2DcF94a46554c0933d549&order_direction=desc&offset=0&limit=20', options)
           const resp = await response.json()
           nom = resp
           console.log(nom.assets)
           console.log('SALIENDO YUPI')
           for(let i = 0; i < nom.assets.length; i++ ){
             nom2.push(nom.assets[i])
           }
    
           
          
        }


        gettingData()
  
        
        console.log('ALLNFTS! NOJODAS')
        console.log(nom2) 
        
        // Enviar Fetch a STORE
        dispatch(
          fetchDataExitoso({
          allNFTs: nom2
          })
        ) 

    } catch (error) {

        dispatch(fetchDataFallido("Could not load data from contract."));

    }


  }
      
      
}


