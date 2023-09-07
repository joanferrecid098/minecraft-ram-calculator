const { calculateMinigameInstances } = require('./instances.js');

function calculateRAMPerInstance(numPlayers) {
  if (numPlayers >= 0 && numPlayers <= 10) {
    return 2;
  } else if (numPlayers <= 15) {
    return 3;
  } else if (numPlayers <= 25) {
    return 4;
  } else if (numPlayers <= 30) {
    return 5;
  } else if (numPlayers <= 40) {
    return 6;
  } else if (numPlayers <= 90) {
    return 8;
  } else if (numPlayers <= 150) {
    return numPlayers / 10;
  } else {
    return 0;
  }
}

function calculateRAMNeeded (numPlayers, maxPlayersPerInstance, maxInstances) {
  const instances = calculateMinigameInstances(numPlayers, maxPlayersPerInstance, maxInstances);

  let ramNeeded = 0;

  for (let i = 0; i < instances.instancesNeeded; i++) {
    const ram = calculateRAMPerInstance(instances.playersInInstances[0]);

    ramNeeded = ramNeeded + ram;
  }

  return {
    ramNeeded: ramNeeded,
    instances: instances.instancesNeeded,
    playersLeftOut: instances.playersLeftOut
  };
}

module.exports = calculateRAMNeeded;