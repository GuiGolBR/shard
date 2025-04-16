function calculateBoxes() {
    const currentShards = parseInt(document.getElementById('currentShards').value, 10);
    const probability = parseFloat(document.getElementById('probability').value) / 100;

    if (isNaN(currentShards) || isNaN(probability) || currentShards < 0 || probability <= 0 || probability > 1) {
        document.getElementById('result').textContent = "Please enter valid inputs.";
        return;
    }

    const targetShards = 400;
    const shardsNeeded = targetShards - currentShards;

    if (shardsNeeded <= 0) {
        document.getElementById('result').textContent = "You already have enough shards!";
        return;
    }

    // Calculate the number of boxes needed
    const averageShardsPerBox = 2; // Average of 1, 2, and 3
    const variance = (1 ** 2 + 2 ** 2 + 3 ** 2) / 3 - averageShardsPerBox ** 2;
    const standardDeviation = Math.sqrt(variance);

    const zScore = (shardsNeeded - averageShardsPerBox) / standardDeviation;
    const boxesNeeded = Math.ceil(shardsNeeded / averageShardsPerBox / probability);

    document.getElementById('result').textContent = `You need approximately ${boxesNeeded} shard boxes to reach 400 shards.`;
}