import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  opponent: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.opponent = player2;
  }

  fight() {
    this.player.attack(this.opponent);
    this.opponent.attack(this.player);

    const playerIsAlive = this.player.lifePoints > 0;
    const opponentIsAlive = this.opponent.lifePoints > 0;

    if (playerIsAlive && opponentIsAlive) {
      this.fight(); // recursive
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
