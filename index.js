

const BLOCK_LENGTH_IN_FEET = 264;

function distanceFromHqInBlocks(blockNumber) {
 return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber) {
 return distanceFromHqInBlocks(blockNumber) * BLOCK_LENGTH_IN_FEET;
}

function distanceTravelledInFeet(start, destination) {
 return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
}

function calculatesFarePrice(start, destination) {
 const totalFeetTravelled = distanceTravelledInFeet(start, destination);
 if (totalFeetTravelled > 2500) {
    return 'cannot travel that far';
 }
 if (totalFeetTravelled <= 400) {
    return 0;
 }
 const fare = (totalFeetTravelled - 400) * 0.02;
 return fare > 25 ? 25 : fare;
}

