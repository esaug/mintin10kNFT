//ESTADO DEL NFT

const initialState = {
    loading: false,
    allNFTs: [],
    error: false,
    errorMsg: "",
  };
  
// ACTUALIZADOR DE ESTADO QUE TRAE LOS NFT DE LA BLOCKCHAIN

  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHECK_DATA_PETICION":
        return {
          ...initialState,
          loading: true,
        };
      case "CHECK_DATA_EXITOSO":
        return {
          ...initialState,
          loading: true,
          allNFTs: action.payload.allNFTs,
          
        };
      case "CHECK_DATA_FALLIDO":
        return {
          ...initialState,
          loading: false,
          error: true,
          errorMsg: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;