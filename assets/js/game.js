/* GAME FUNCTIONS */

// function to check if player wants to fight or skip
var fightOrSkip = function () {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to lock in action.'
  );

  // validate prompt answer
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return fightOrSkip();
  }

  // convert promptFight to all lowercase so we can check with less options
  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name +
          " has chickened out and decided not to fight. Goodbye!"
      );
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // stop while() loop using break; and enter next fight

      // return true if player wants to leave
      return true;
    }
  }
  return false;
};
