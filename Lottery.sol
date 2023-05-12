// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract Lottery{
    address payable[] public players;
    address payable public winner;

function participate() public payable{
    require(msg.value==1 ether, "Pay 1 ether only");
    players.push(payable(msg.sender));
}

function getBalance() public view returns(uint){
    return address(this).balance;
}

function random() public view returns(uint){
    return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,players.length)));
}

function pickWinner() public{
    require(players.length>=3,"Less than 3 players still");

    uint r= random();
    uint index= r%players.length;
    winner=players[index];
    winner.transfer(getBalance());
    players= new address payable[](0);
}

}//end program