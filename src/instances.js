function calculateMinigameInstances(players, maxPlayersPerInstance, maxInstances) {
  if (players <= 0 || maxPlayersPerInstance <= 0) {
    return { instancesNeeded: 0, playersLeftOut: players, playersInInstances: [] };
  }

  // If the number of players can be accommodated in a single instance.
  if (players <= maxPlayersPerInstance) {
    return { instancesNeeded: 1, playersLeftOut: 0, playersInInstances: [players] };
  }

  // Calculate the number of instances needed.
  const instancesNeeded = Math.ceil(players / maxPlayersPerInstance);

  // Limit the number of instances to the maximum allowed.
  const instancesToCreate = Math.min(instancesNeeded, maxInstances);

  // Calculate the players left out.
  const playersLeftOut = players - (instancesToCreate * maxPlayersPerInstance);

  // Calculate the distribution of players in each instance.
  const playersInInstances = Array(instancesToCreate).fill(maxPlayersPerInstance);

  // Distribute the remaining players if any.
  for (let i = 0; i < playersLeftOut; i++) {
    playersInInstances[i % instancesToCreate]++;
  }

  return { instancesNeeded: instancesToCreate, playersLeftOut, playersInInstances };
}

module.exports = {
  calculateMinigameInstances
}