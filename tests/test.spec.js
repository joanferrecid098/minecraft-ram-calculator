  // @ts-check
const { test, expect } = require('@playwright/test');
const mrc = require('../src/main.js');

test('Check Multiple Instances', async () => {
  const maxPlayersPerInstance = 8;
  const maxInstances = 4

  const numPlayers = 50;
  const ramNeeded = mrc(numPlayers, maxPlayersPerInstance, maxInstances);

  await test.step('Check RAM Result', async () => {
    await expect(ramNeeded.ramNeeded).toEqual(12);
  });

  await test.step('Check Instances Result', async () => {
    await expect(ramNeeded.instances).toEqual(4);
  });

  await test.step('Check PLO Result', async () => {
    await expect(ramNeeded.playersLeftOut).toEqual(18);
  });
});

test('Check one Instance', async () => {
  const maxPlayersPerInstance = 1000000;
  const maxInstances = 1;

  const numPlayers = 50;
  const ramNeeded = mrc(numPlayers, maxPlayersPerInstance, maxInstances);
  
  await test.step('Check RAM Result', async () => {
    await expect(ramNeeded.ramNeeded).toEqual(8);
  });

  await test.step('Check Instances Result', async () => {
    await expect(ramNeeded.instances).toEqual(1);
  });

  await test.step('Check PLO Result', async () => {
    await expect(ramNeeded.playersLeftOut).toEqual(0);
  });
});