// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./ERC721full.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC721, Ownable{

    address public contrato;
    address _owner;
    uint cost = 0.0002 ether;
    uint public maxSupply = 10000;
    uint public maxMintAmount = 5;
    bool public pause = false;
    uint public counter = 0;
    bool public revealed = false;
    string public notRevealedUri;
    
    string baseURI;
    string public baseExtension = ".json";

    // Referencia por billetera
    mapping(address => uint) public billeteraToNFT;
    // Referencia de ID por billetera
    mapping(uint => address) public idToAddress;

    cuerpoNft [] allnfts;

    struct cuerpoNft{
        address add;
        uint id;
       
    } 
    // Evento de minteo

    event whoMint(address, uint);
    
    constructor(
    
        string memory _initBaseURI,
        string memory _initNotRevealedUri
    ) ERC721("NFTLips", "Lips") payable{
        contrato = address(this);
        _owner = msg.sender;
        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedUri);         
    }


    //INTERNAL
    
    function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
    // MINTEO

    function mint(uint _mintAmount) public payable{
         
        //Requerimientos 
        require(pause == true, "Minting isnt active");
        require(_mintAmount > 0, "Need to Mint at least 1 NFT");
        require(_mintAmount <= maxMintAmount, "You cant mint that quantity of NFT");
        require(counter + _mintAmount <= maxSupply , "You are passing the limit of NFT"); 
        require(msg.value >= cost * _mintAmount, "You dont have enough money");

        uint randNounce= 0;
        uint randNounce2 = 1;

        for (uint256 i = 1; i <= _mintAmount; i++) {
        //Random
        randNounce ++;
        randNounce2 ++;
        //contador 
        counter ++;
        
        cuerpoNft memory result = cuerpoNft(msg.sender, counter);
        allnfts.push(result);

         //Referencia del NFT por billetera
         idToAddress[counter] = msg.sender;
        //Minteo
        _mint(msg.sender, counter);
        // Evento de mintep
        emit whoMint(msg.sender, counter);
        
        }
     }

    // Activacion

    function activacion () public onlyOwner{
        pause = true;
    }

    function getAllNFT() public view returns(cuerpoNft[]memory){
      return allnfts;
  }

  // NFTs de una direccion en especifico

  function getOwnerNFT(address _address) public view returns(cuerpoNft[]memory){
        cuerpoNft[] memory result = new cuerpoNft[](balanceOf(_address));
        uint256 counter1 = 0;
            for(uint i = 0; i < allnfts.length; i++){
                if(idToAddress[i+1] == _address)
                result[counter1] = allnfts[i];
                counter1 ++;
            }
            return result;
    }

   

    // BaseUri de cada token

   function tokenURI(uint256 _tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(_tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    if (revealed == false) {
      return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, Strings.toString(_tokenId), baseExtension))
        : "";
  }
    


    function reveal() public onlyOwner {
      revealed = true;
    }

    function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx) public onlyOwner {
        maxMintAmount = _maxMintAmountPerTx;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
     notRevealedUri = _notRevealedURI;
     }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
     baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

       // RETIRAR DEL CONTRATO


    function sendEther(address payable _to, uint256 _amount) public payable onlyOwner{
       _to.transfer(_amount);
    }

    function balanceContract(address _wallet) public view returns(uint256){
        return _wallet.balance;
    }

}