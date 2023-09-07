function calculateMinigameInstances(players, maxPlayersPerInstance, maxInstances) {
    if (players <= 0 || maxPlayersPerInstance <= 0) {
      return { instancesNeeded: 0, playersLeftOut: players };
    }
  
    // Calculate the number of instances needed.
    const instancesNeeded = Math.ceil(players / maxPlayersPerInstance);
  
    // Limit the number of instances to the maximum allowed.
    const instancesToCreate = Math.min(instancesNeeded, maxInstances);
    
    // Calculate the players left out.
    const playersLeftOut = players - (instancesToCreate * maxPlayersPerInstance);
    
    if (playersLeftOut <= 0) return { instancesNeeded: instancesToCreate };

    return { instancesNeeded: instancesToCreate, playersLeftOut };
  }
  
// Example usage:
const totalPlayers = 50;
const maxPlayersPerInstance = 8;
const maxInstances = 3; // Set your maximum instances here.
const { instancesNeeded, playersLeftOut } = calculateMinigameInstances(totalPlayers, maxPlayersPerInstance, maxInstances);

console.log(`You need ${instancesNeeded} instances of the minigame for ${totalPlayers} players.`);
if (playersLeftOut) console.log(`There are ${playersLeftOut} players left out.`);
