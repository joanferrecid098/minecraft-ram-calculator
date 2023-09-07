function calculateRAMNeeded(numPlayers) {
  if (numPlayers >= 0 && numPlayers <= 10) {
    return "2GB RAM";
  } else if (numPlayers <= 15) {
    return "3GB RAM";
  } else if (numPlayers <= 25) {
    return "4GB RAM";
  } else if (numPlayers <= 30) {
    return "5GB RAM";
  } else if (numPlayers <= 40) {
    return "6GB RAM";
  } else if (numPlayers <= 90) {
    return "8GB RAM";
  } else if (numPlayers <= 150) {
    return numPlayers / 10 + "GB RAM";
  } else {
    return "Invalid number of players";
  }
}

// Example usage:
const numPlayers = 100;
const ramNeeded = calculateRAMNeeded(numPlayers);
console.log(`For ${numPlayers} players, you need ${ramNeeded}.`);
