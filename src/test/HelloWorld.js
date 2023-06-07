const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("HelloWorld", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContract() {
    const Contract = await ethers.getContractFactory("HelloWorld");
    const contract = await Contract.deploy();
    return { contract };
  }

  describe("HelloWorld Smart Contract", function () {
    it("sayHello function should return Hello, World!", async function () {
      const { contract } = await loadFixture(deployContract);
      expect(await contract.sayHello()).to.equal('Hello, World!');
    });
  });
});
