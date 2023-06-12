// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    address public owner; 
    
    constructor()  {
        owner = msg.sender; 
    }

    function sayHello() public pure returns (string memory) {
        return "Hello, World!";
    }

}