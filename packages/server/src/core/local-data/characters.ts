import { CharacterData } from '../../types';

export const PLAYER_CHARACTERS: CharacterData[] = [
  {
    name: 'Steve Rogers',
    scale: 0.011,
    model: '/assets/models/captain-america/scene.gltf',
    description: 'Blue Team',
    team: 'BLUE',
    imageUrl: '/assets/characters/captain-america.png',
    portraitUrl: '/assets/characters/captain_america_portrait.png',
    iconUrl: '/assets/icons/captain-america-mark.png',
  },
  {
    name: 'Anthony Stark',
    scale: 1.0,
    model: '/assets/models/ironman.gltf',
    description: 'Blue Team',
    team: 'BLUE',
    imageUrl: '/assets/characters/ironman.png',
    portraitUrl: '/assets/characters/ironman_portrait.png',
    iconUrl: '/assets/icons/ironman-mark.png',
  },
  {
    name: 'Peter Parker',
    scale: 1.01,
    model: '/assets/models/spiderman.gltf',
    description: 'Red Team',
    team: 'RED',
    imageUrl: '/assets/characters/spiderman.png',
    portraitUrl: '/assets/characters/spiderman_portrait.png',
    iconUrl: '/assets/icons/spiderman-mark.png',
  },
  {
    name: 'Bruce Wayne',
    scale: 0.01,
    model: '/assets/models/batman.gltf',
    description: 'Red Team',
    team: 'RED',
    imageUrl: '/assets/characters/batman.png',
    portraitUrl: '/assets/characters/batman_portrait.png',
    iconUrl: '/assets/icons/batman-mark.png',
  },
  {
    name: 'car',
    model: '/assets/models/car.gltf',
    scale: 1,
    description: null,
    team: null,
    imageUrl: null,
    portraitUrl: null,
  },
  {
    name: 'grandpa',
    model: '/assets/models/grandpa.gltf',
    scale: 0.035,
    description: null,
    team: null,
    imageUrl: null,
    portraitUrl: null,
  },
];