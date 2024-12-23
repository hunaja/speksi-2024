'use client';

import React, {useEffect} from 'react';
import { Lisu_Bosa } from 'next/font/google'
import {animated, useSpring} from "@react-spring/web";

import NextImage from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faDotCircle} from "@fortawesome/free-solid-svg-icons";

import henrietta from "@/public/hahmot_cropped/henrietta.png";
import alexander from "../public/hahmot_cropped/alexander.jpg";
import clara from "@/public/hahmot_cropped/clara.jpg";
import bobby from "@/public/hahmot_cropped/bobby.jpg";
import kapteeni from "@/public/hahmot_cropped/kapteeni.jpg";
import morrison from "@/public/hahmot_cropped/morrison.jpg";
import rontti from "@/public/hahmot_cropped/rontti.jpg";
import viima from "../public/hahmot_cropped/viima.png";
import manda from "@/public/hahmot_cropped/manda.jpg";

const lisuBosa = Lisu_Bosa({ subsets: ['latin'], weight: "700" })
const characters = [
  {
    place: 1,
    name: "Henrietta Harris",
    description: "Henrietta on Harristen temperamenttinen ja dramaattisuuteen taipuva esikoinen. Erityisen tunteikkaasti hän suhtautuu pikkuveljeensä Alexanderiin, jonka titteliä kauppaempiirin perijänä Henrietta kadehtii. Hänen mielestään on huutava vääryys, ettei hän voi periä yhtiötä vain, koska on nainen. Henrietan suurta tunneskaalaa laajentaa myös menneisyyden epäonninen romanssi, joka saa hänet unelmoimaan siitä “mitä voisikaan olla”.",
    image: henrietta,
    og: "henrietta"
  },
  {
    place: 2,
    name: 'Alexander "Alex" Harris',
    description: "Alex on ison kauppapohatan ainut poika ja siten kauppaempiirin tuleva perijä. Hän on kasvanut kodin liiankin suojaisassa turvassa, minkä takia hänellä olisi harjoiteltavaa sosiaalisissa taidoissaan sekä omien mielipiteidensä ilmaisemisessa. Mutta miten sisimmältään kiltti Alex pärjää joutuessaan merirosvolaivalle? Riittääkö pelkkä salanimi “Albert” turvaksi, vai täytyykö Alexin oppia pitämään puoliaan - vaikeimman kautta?",
    image: alexander,
    og: "alexander"
  },
  {
    place: 3,
    name: "Clara",
    description: "Clara on aurinkoinen, lempeä sekä itsetietoinen ylhäisönainen. Hän on Henrietan hyvä ystävä ja valmis kertomaan tälle suoratkin sanat. Claran elämänilo on pirskahtelevaa, vaikka menneisyydestä paljastuukin rakkaan aviomiehen menehtyminen. Onko Clara valmis avaamaan sydämensä uudelleen?",
    image: clara,
    og: "clara"
  },
  {
    place: 4,
    name: 'Robert "Bobby"',
    description: 'Bobby on kauppalaivaston nuori ja innokas kajuuttavahti. Hänen suurin haaveensa on seikkailla suurilla vesillä merirosvojen kanssa. Mutta miten käy, kun unelma käykin toteen? Onko naiivi ja puhelias poika valmis merirosvoelämän haasteisiin? Entä mikä olikaan miekkailua rakastavan Bobbyn syntyperä?',
    image: bobby,
    og: "bobby"
  },
  {
    place: 5,
    name: "Kapteeni Kultakynsi",
    description: 'Kapteeni Kultakynsi johtaa miehistöään kovalla otteella, eikä anna tilaa vastaväitteille. Hän on kuitenkin reilu ja lojaali miehistönsä jäseniä kohtaan, ja näkee heissä hyvätkin puolet. Kapteeni ei päästä ihmisiä helposti lähelleen, ja vain muutama tuntee hänen etunimensä Marina, saati saa kutsua häntä siten. Miten kapteeni pystyy säilyttämään miehistönsä uskollisuuden, kun menneisyyden katkeruus ottaa hänestä vallan? Ja onko se ainoa tunne, joka kapteenin sisimmässä kyteekään?',
    image: kapteeni,
    og: "kapteeni"
  },
  {
    place: 6,
    name: "Perämies Morrison",
    description: 'Laivan perämies Morrison on vankkumattomalla itseluottamuksella ja armottomuudella varustettu merirosvo. Ainut, mitä häneltä puuttuu, on raaka voima - ja oma merirosvolaiva johdettavana. Voiman puutteen Morrison on ratkaissut haalimalla vuosien saatossa Rontin oikeaksi kädekseen sekä toisaalta käskyläisekseen. Siispä ratkaistavana olisi enää kapteenin pesti... Keksiikö perämies Morrison tavan saada haluamansa ylennyksen?',
    image: morrison,
    og: "morrison"
  },
  {
    place: 7,
    name: "Rontti",
    description: 'Rontti on merten hurjimmat taistelut kokenut karski korsto. Hänen harteilleen annetaan kaikki tehtävät, joihin liittyy uhkailua taikka pelottelua. Mutta sisältävätkö Rontin syvimmät haaveet sittenkään ryöstelyn raakuutta? Ja osaisiko hän enää edes tehdä oikein, jos saisi siihen tilaisuuden?',
    image: rontti,
    og: "rontti"
  },
  {
    place: 8,
    name: "Viima",
    description: 'Viima toimii merirosvolaivalla lähetin pestissä. Luonteeltaan hän on hölmö höseltäjä, jonka tarinat harhautuvat usein kaikkien muiden mielestä turhiin yksityiskohtiin. Pienistä vioistaan huolimatta Viima ilmestyy aina sinne missä häntä tarvitaan, usein itsekään tietämättä miten siinä onnistuu.',
    image: viima,
    og: "viima"
  },
  {
    place: 9,
    name: "Manda",
    description: 'Manda on merirosvolaivan vakiokalustoa, eikä kukaan oikein tiedä, kuinka vanha hän onkaan. Tähän vaikuttaa Mandan tapa esittää huomattavasti vanhempaa ja raihnaisempaa merirosvolaivan miehistölle - lukuunottamatta laivan kapteenia, joka on onkin Mandalle kuin oma tytär. Mandan löytää sieltä, mistä on mahdollista kerätä hyviä juoruja. Ja jos mitään häntä viihdyttävää ei tapahdu, hän kyllä osaa laittaa pyörät pyörimään niin, että ainakin pian on viihdykettä tarjolla!',
    image: manda,
    og: "manda"
  }
]

const maxPlace = 9;

export default function CharacterSlider() {
  const [fadeIn, setFadeIn] = useSpring(() => ({ opacity: 1, from: { opacity: 0 } }) as any);
  const [currentPlace, setCurrentPlace] = React.useState(1);
  const character = characters.find(character => character.place === currentPlace);

  useEffect(() => {
    setFadeIn({ opacity: 1, from: { opacity: 0 } });
  }, [currentPlace, setFadeIn]);

  useEffect(() => {
    // preload all images
    characters.forEach(character => {
      const img = new Image();
      img.src = character.image.src;
    });
  }, []);

  if (!character) return null;

  const pickPlace = (place: number) => {
    if (place === currentPlace) return;

    setCurrentPlace(place);
  }

  const nextPlace = () => {
    if (currentPlace === maxPlace) {
      setCurrentPlace(1);
      return;
    }
    setCurrentPlace(currentPlace + 1);
  }

  const previousPlace = () => {
    if (currentPlace === 1) {
      setCurrentPlace(maxPlace);
      return;
    }
    setCurrentPlace(currentPlace - 1);
  }

  return (
    <>
      <div className="text-white flex-1 flex flex-row place-content-center justify-center place-items-center">
            <button
              className="px-2 m-2 text-white hover:cursor-pointer flex lg:flex-1 flex-row place-content-center justify-center place-items-center py-10"
              onClick={previousPlace}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6 p-1 bg-teal-950 text-teal-800 rounded-full"/>
            </button>
        <animated.div style={fadeIn} className="p-2 flex-1 h-full flex flex-col lg:flex-row place-content-center lg:content-center text-zinc-300">
          <div className="flex flex-col justify-center p-4 w-auto lg:w-96">
            <h2 className={`${lisuBosa.className} text-2xl lg:text-3xl mb-2 text-center lg:text-start text-zinc-100`}>{character.name}</h2>
            <p className="text-sm sm:text-base text-center lg:text-left leading-relaxed">
              {character.description}
            </p>
          </div>
          <div className={"flex flex-col justify-center max-w-full"}>
              <a href={`/hahmot_original/${character.og}.jpg`} rel="noopener noreferrer" target="_blank">
                <NextImage src={character.image} alt={character.name} priority={true}
                           className="p-2 lg:p-10 max-w-[40vw] m-auto lg:m-0" />
              </a>
          </div>
        </animated.div>
            <button
            className="py-10 px-2 m-2 text-white hover:cursor-pointer flex lg:flex-1 flex-row place-content-center justify-center place-items-center"
            onClick={nextPlace}
            >
            <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6 p-1 bg-teal-950 text-teal-800 rounded-full"/>
          </button>
      </div>
      <div className="mt-2 text-white flex flex-row place-items-center justify-center">
        {Array.from({ length: maxPlace }, (_, i) => i + 1).map(place => (
          <button
            key={place}
            onClick={() => pickPlace(place)}
            className={`flex content-center rounded-full mx-2 ${place === currentPlace ? 'bg-teal-500' : 'bg-teal-900 hover:cursor-pointer'}`}
          >
            <FontAwesomeIcon icon={faDotCircle} className={`h-4 w-4 lg:h-6 lg:w-6 text-teal-950`} />
          </button>
        ))}
      </div>
    </>
  )
}