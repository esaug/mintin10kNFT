

// ESTADO

const initialState = {
    loading: false,
    account: null,
    NftContract: null,
    web3: null,
    errorMsg: "",
  };
  
  
  // FUNCION ACTUALIZADORA DE ESTADO 
  
  const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PETICION_DE_CONEXION":
        return {
          ...initialState,
          loading: true,
        };
      case "CONEXION_EXITOSA":
        return {
          ...state,
          loading: true,
          account: action.payload.account,
          NftContract: action.payload.NftContract,
          web3: action.payload.ethers,
        };
      case "CONEXION_FALLIDA":
        return {
          ...initialState,
          loading: false,
          errorMsg: action.payload,
        };
      case "UPDATE_ACCOUNT":
        return {
          ...state,
          account: action.payload.account,
        };
      default:
        return state;
    }
  };

  export default blockchainReducer