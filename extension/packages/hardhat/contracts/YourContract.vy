# @version ^0.4.0

"""
@title YourContract
@notice A smart contract that allows changing a state variable and tracking changes
@dev Allows the owner to withdraw the Ether in the contract
@author BuidlGuidl
"""

# Events
event GreetingChange:
    greetingSetter: indexed(address)
    newGreeting: String[100]
    premium: bool
    value: uint256

# State variables
owner: public(immutable(address))
greeting: public(String[100])
premium: public(bool)
totalCounter: public(uint256)
userGreetingCounter: public(HashMap[address, uint256])

@deploy
def __init__(_owner: address):
    """
    @notice Constructor - called once on contract deployment
    @param _owner The owner of the contract
    """
    owner = _owner
    self.greeting = "Building Unstoppable Apps!!!"
    self.premium = False
    self.totalCounter = 0

@external
@payable
def setGreeting(_newGreeting: String[100]):
    """
    @notice Function that allows anyone to change the state variable "greeting" and increase counters
    @param _newGreeting The new greeting to save on the contract
    """
    # Change state variables
    self.greeting = _newGreeting
    self.totalCounter += 1
    self.userGreetingCounter[msg.sender] += 1
    
    # Check if ETH was sent with the transaction
    if msg.value > 0:
        self.premium = True
    else:
        self.premium = False
    
    # Emit event
    log GreetingChange(msg.sender, _newGreeting, msg.value > 0, msg.value)

@external
def withdraw():
    """
    @notice Function that allows the owner to withdraw all the Ether in the contract
    @dev Can only be called by the owner of the contract
    """
    # Check that caller is the owner
    assert msg.sender == owner, "Not the Owner"
    
    # Send all ETH to owner
    send(owner, self.balance)

@external
@payable
def __default__():
    """
    @notice Function that allows the contract to receive ETH
    """
    pass 