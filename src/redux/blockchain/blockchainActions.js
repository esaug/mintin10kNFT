import {ethers} from 'ethers'
import ContractNFT from "./contracAbi.json";
import { fetchData } from "../data/dataActions.js"


const contractAddress = '0x57bAF850e783Efd504572e9B0dB8bcc705f3C81e'
const seed = 'detect relief daughter weird artwork pelican want victory guess layer acid detail'
// FUNCIONES QUE ACTUALIZAN EL ESTADO

const conexionRequest = () => {
    return {
      type: "PETICION_DE_CONEXION",
    };
  };
  
  const conexionExitosa = (payload) => {
    return {
      type: "CONEXION_EXITOSA",
      payload: payload,
      
    };
  };
  
  const conexionFallida = (payload) => {
    return {
      type: "CONEXION_FALLIDA",
      payload: payload,
    };
  };
  
  const updateAccountRequest = (payload) => {
    return {
      type: "UPDATE_ACCOUNT",
      payload: payload,
    };
  };

  // FUNCION QUE CONECTA AL METAMASK, EXTRAE LOS DATOS DEL CONTRADO 

  export const conexion = () =>{
      
    return async (dispatch) =>{

      dispatch(conexionRequest())
    
        try {
       
            if(typeof window.ethereum !== 'undefined'){
        
                //CONECTAR A METAMASK Y ADQUIRIR NUMERO DE RED

                const account = await window.ethereum.request({
                method: "eth_requestAccounts"
                })
                const networkId = await window.ethereum.request({
                method: "net_version"
                }) 

                // GET CONTRATO 
                
                
                const Provider = new ethers.providers.Web3Provider(window.ethereum)
                const signer = Provider.getSigner()
                const NftContract = new ethers.Contract(contractAddress, ContractNFT, signer)

                console.log(networkId)
        
                if(networkId == 4){

                    //MANDAR DATOS A REDUCER

                    dispatch(conexionExitosa({
          
                        account: account[0],
                        NftContract: NftContract,
                        web3: ethers
              
                    }))

                    fetchData(dispatch)
                    //UPDATE
                    dispatch(updateAccount(account[0]))
                } 
            } else {
                dispatch(conexionFallida("Worng network"));
            }
        } catch (error) {
             dispatch(conexionFallida("Metamask is not installed."))
         }
    }      
}
    //update 
      
export const updateAccount = (account) => {
    
    return async (dispatch) => {
            
            dispatch(updateAccountRequest({ account: account }));
            dispatch(fetchData(account));
        };
      };
        