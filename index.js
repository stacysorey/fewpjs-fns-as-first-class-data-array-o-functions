const wakeDog = function(dogName="Byron", dogBreed="poodle") {
  const wakeExp = `Wake ${dogName} the ${dogBreed}`;
  console.log(wakeExp);
  return wakeExp;  
}

const leashDog = function(dogName="Byron", dogBreed="poodle") {
  const leashExp = `Leash ${dogName} the ${dogBreed}`;
  console.log(leashExp);
  return leashExp;
}

const walkToPark = function(dogName="Byron", dogBreed="poodle") {
  const walkToExp = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(walkToExp);
  return walkToExp;
}

const throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
  const throwExp = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(throwExp);
  return throwExp;
}

const walkHome = function(dogName="Byron", dogBreed="poodle") {
  const walkHomeExp = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(walkHomeExp);
  return walkHomeExp;
}

const unleashDog = function(dogName="Byron", dogBreed="poodle") {
  const unleashExp = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleashExp);
  return unleashExp;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed));
}