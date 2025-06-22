const players = require("./players");
const generateTrack = require("./track");
const { rollDice } = require("./utils");

function playRound(round) {
  const track = generateTrack();
  console.log(`\n🛣️  Rodada ${round}: Pista tipo ${track.toUpperCase()}`);

  players.forEach((player) => {
    let result = 0;
    const dice = rollDice();

    if (track === "reta") result = player.speed + dice;
    else if (track === "curva") result = player.handling + dice;
    else result = player.power + dice;

    player.lastScore = result;
    console.log(`${player.name} tirou ${dice} ➝ Total: ${result}`);
  });

  const [p1, p2] = players;
  if (p1.lastScore > p2.lastScore) p1.points++;
  else if (p2.lastScore > p1.lastScore) p2.points++;
}

function startGame() {
  console.log("🏁 Iniciando Mario Kart Console!\n");

  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }

  const [p1, p2] = players;
  console.log(`\n🏆 Resultado Final: ${p1.name} (${p1.points}) x ${p2.name} (${p2.points})`);

  if (p1.points > p2.points) console.log(`🎉 ${p1.name} venceu!`);
  else if (p2.points > p1.points) console.log(`🎉 ${p2.name} venceu!`);
  else console.log("🤝 Empate!");
}

module.exports = { startGame };
