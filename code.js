function calculateBoxes() {
    const currentShards = parseInt(document.getElementById('currentShards').value, 10);
    const resultElement = document.getElementById('result');

    if (isNaN(currentShards) || currentShards < 0) {
        resultElement.textContent = "Please enter a valid number of shards.";
        return;
    }

    const targetShards = 400;
    const shardsNeeded = targetShards - currentShards;

    if (shardsNeeded <= 0) {
        resultElement.textContent = "You already have enough shards!";
        return;
    }

    const z95 = 1.645;
    const stdPerBox = 0.816; // from variance calculation

    let boxes = 1;
    while (true) {
        const mean = 2 * boxes;
        const std = stdPerBox * Math.sqrt(boxes);
        const lowerBound = mean - z95 * std;

        if (lowerBound >= shardsNeeded) {
            break;
        }
        boxes++;
    }

    resultElement.textContent = `${boxes}`;

    // Optional image
    const image = document.createElement('img');
    image.alt = 'ShardBox';
    image.id = 'shardBox';
    image.src = 'assets/ShardBox.png';
    resultElement.style.position = 'relative';
    resultElement.appendChild(image);
}
