function distanceFromHqInBlocks(blocks) {
    return Math.abs (blocks - 42);
}
function distanceFromHqInFeet(blocks) {
    const blockfeet = 264;
    return distanceFromHqInBlocks(blocks) * blockfeet;
}
function distanceTravelledInFeet(endBlock,firstBlock) {
    const blockFeet = 264;
    return Math.abs(endBlock-firstBlock) * blockFeet;
}
function calculatesFarePrice(endBlock,firstBlock) {
const distance = distanceTravelledInFeet(endBlock,firstBlock)
if (distance <= 400) {
    return 0; // free sample
} else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
} else if (distance > 2000 && distance <= 2500) {
    return  25; // flat fee for distances over 2000 feet
} else {
    return "cannot travel that far"; // does not allow rides over 2500 feet
}
}


