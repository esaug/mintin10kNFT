const NFT = artifacts.require("NFT");

module.exports = function (deployer) {
    deployer.deploy(NFT, "ipfs://QmP3uGLkwaz1M2RX8M8bLngX6GXN9inW8HkgX9cFLnqCbA/","ipfs://QmP3uGLkwaz1M2RX8M8bLngX6GXN9inW8HkgX9cFLnqCbA/1.json");
  };
  