// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract simpleDepositContract {

    event depositEvent(address user, uint amount);
    

    mapping(address => uint) balances;

    function Deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function getUserBalance(address _user) external view returns(uint) {
        return balances[_user];
    }

    receive() external payable {
        Deposit();
        emit depositEvent(msg.sender, msg.value);
    }
    
    function withdraw() public {
        require(balances[msg.sender] > 0, "No deposit");
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(balances[msg.sender]);
    }


}