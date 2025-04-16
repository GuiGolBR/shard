function calculateBoxes() {
    const currentShards = parseInt(document.getElementById('currentShards').value, 10);
    const probability = 0.95;

    if (isNaN(currentShards) || currentShards < 0) {
        document.getElementById('result').textContent = "Please enter a valid number of shards.";
        return;
    }

    const targetShards = 400;
    const shardsNeeded = targetShards - currentShards;

    if (shardsNeeded <= 0) {
        document.getElementById('result').textContent = "You already have enough shards!";
        return;
    }

    const averageShardsPerBox = 2;
    const variance = (1 ** 2 + 2 ** 2 + 3 ** 2) / 3 - averageShardsPerBox ** 2;
    const standardDeviation = Math.sqrt(variance);

    const zScore = (shardsNeeded - averageShardsPerBox) / standardDeviation;
    const boxesNeeded = Math.ceil(shardsNeeded / averageShardsPerBox / probability);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `${boxesNeeded}`;

    const image = document.createElement('img');
    image.alt = 'ShardBox';
    image.id = 'shardBox';
    image.src = 'assets/ShardBox.png';

    resultElement.style.position = 'relative';
    resultElement.appendChild(image);
}