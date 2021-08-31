import mergeImages from 'merge-images';
import { Canvas, Image } from 'canvas';
import backgroundBlue from '../assets/images/Backgrounds/Blue.png'
import backgroundGreen from '../assets/images/Backgrounds/Green.png'
import backgroundRed from '../assets/images/Backgrounds/Red.png'
import backgroundYellow from '../assets/images/Backgrounds/Yellow.png'
import bodyBlack from '../assets/images/Bodies/StickBlack.png'
import bodyWhite from '../assets/images/Bodies/StickWhite.png'
import happyFace from '../assets/images/Faces/HappyFace.png'
import madFace from '../assets/images/Faces/MadFace.png'
import sadFace from '../assets/images/Faces/SadFace.png'
import wtfFace from '../assets/images/Faces/WtfFace.png'
import brownHat from '../assets/images/Hats/BrownHat.png'
import cyanHat from '../assets/images/Hats/BrownHat.png'
import pinkHat from '../assets/images/Hats/PinkHat.png'
import roundShield from '../assets/images/Shields/ShieldRound.png'
import squareShield from '../assets/images/Shields/ShieldSquare.png'
import sword from '../assets/images/Weapons/Sword.png'
import spear from '../assets/images/Weapons/Spear.png'
import emptyRoll from '../assets/images/EmptyRoll.png'

export const GenerateNFT = async () => {
  let RngBackground = Math.floor(Math.random() * 5);
  let RngBody = Math.floor(Math.random() * 3);
  let RngFace = Math.floor(Math.random() * 5);
  let RngHat = Math.floor(Math.random() * 5);
  let RngShield = Math.floor(Math.random() * 5);
  let RngWeapon = Math.floor(Math.random() * 5);

  let RandomBackground, RandomBody, RandomFace, RandomHat, RandomShield, RandomWeapon: string;

  switch (RngBackground) {
    case 1:
      RandomBackground = backgroundBlue;
      break;
    case 2:
      RandomBackground = backgroundGreen;
      break;
    case 3:
      RandomBackground = backgroundYellow;
      break;
    case 4:
      RandomBackground = backgroundRed;
      break;
    default:
      RandomBackground = backgroundRed;
  }

  switch (RngBody) {
    case 1:
      RandomBody = bodyBlack;
      break;
    case 2:
      RandomBody = bodyWhite;
      break;
    default:
      RandomBody = bodyWhite;
  }

  switch (RngFace) {
    case 1:
      RandomFace = madFace;
      break;
    case 2:
      RandomFace = sadFace;
      break;
    case 3:
      RandomFace = happyFace;
      break;
    case 4:
      RandomFace = wtfFace;
      break;
    default:
      RandomFace = happyFace;
  }

  switch (RngHat) {
    case 1:
      RandomHat = brownHat;
      break;
    case 2:
      RandomHat = cyanHat;
      break;
    case 3:
      RandomHat = pinkHat;
      break;
    default:
      RandomHat = emptyRoll;
  }

  switch (RngShield) {
    case 1:
      RandomShield = squareShield;
      break;
    case 2:
      RandomShield = roundShield;
      break;
    default:
      RandomShield = emptyRoll;
  }

  switch (RngWeapon) {
    case 1:
      RandomWeapon = spear;
      break;
    case 2:
      RandomWeapon = sword;
      break;
    default:
      RandomWeapon = emptyRoll;
  }

  let result;

  console.log(RandomBackground, RandomBody, RandomFace, RandomHat, RandomShield, RandomWeapon);

  await mergeImages([RandomBackground, RandomBody, RandomFace, RandomHat, RandomShield, RandomWeapon], {
    Canvas: Canvas,
    Image: Image
  }).then(b64 => {
    result = b64
  });

  console.log(result);

  return result;
}