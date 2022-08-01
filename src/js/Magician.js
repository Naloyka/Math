import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.stoned = false;
  }
}
