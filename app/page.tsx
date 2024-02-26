import Image from 'next/image'
import { Lisu_Bosa, Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faClock,
  faLocationPin,
  faSprayCanSparkles,
  fa2,
  fa3,
  faEuroSign, faBus, faDiceD6, fa4, fa5
} from "@fortawesome/free-solid-svg-icons"
import { faSquareInstagram, faFacebook, faVimeo } from '@fortawesome/free-brands-svg-icons'
import CharacterSlider from "@/app/character_slider";

// TODO: Serverside rendering optimization

// lightwight inter
const inter = Inter({ subsets: ['latin'], weight: "500" })
const lisuBosa = Lisu_Bosa({ subsets: ['latin'], weight: "700" })

export default function Home() {
    return (
      <main className="h-full">
          <div className="w-full">
              <header className="border-b-2 border-zinc-800 bg-gradient-to-t from-pink-900 to-pink-950 py-5 px-10 lg:px-20 sm:flex items-center sm:place-content-between drop-shadow text-sm">
                  <nav className={"hidden sm:block"}>
                      <ul className={`list-none flex text-black ${inter.className}`}>
                          <li className="lg:mr-5">
                              <a href="#hahmokaarti">HAHMOKAARTI</a>
                          </li>

                          <li className={"mx-2 lg:mx-5"}>
                              <a href={"#esitykset"}>NÄYTÖKSET</a>
                          </li>
                        {/*<li className={"mx-2 lg:mx-5"}>
                          <a href={"#rooleissa"}>ROOLEISSA</a>
                        </li>*/}
                        <li className={"ml-2 lg:ml-5"}>
                          <a href={"#vastaavat"}>VASTAAVAT</a>
                        </li>
                      </ul>
                  </nav>

                  <ul className="list-none flex place-content-center">
                      <a href={"https://www.instagram.com/kuolonspeksi/?hl=en"} target={"_blank"}>
                      <li className="mr-5 border-2 border-black w-10 h-10 rounded-3xl flex items-center justify-center">
                          <FontAwesomeIcon icon={faSquareInstagram} fontWeight="500" className="h-5 w-5 text-black" />
                      </li>
                      </a>

                      <a href={"https://vimeo.com/user11645998"} target={"_blank"}>
                        <li className="mr-5 border-2 border-black w-10 h-10 rounded-3xl flex items-center justify-center">
                            <FontAwesomeIcon icon={faVimeo} fontWeight="500" className="h-5 w-5 text-black" />
                        </li>
                      </a>

                      <a href={"https://www.facebook.com/speksikuolo/"} target={"_blank"}>
                      <li className="border-2 border-black w-10 h-10 rounded-3xl flex items-center justify-center">
                          <FontAwesomeIcon icon={faFacebook} fontWeight="500" className="h-5 w-5 text-black" />
                      </li>
                        </a>
                  </ul>
              </header>

              <div className="align-center flex align-between flex-col lg:flex-row w-full place-content-between">
                  <div className="shadow-2xl border-r-2 border-b-2 border-zinc-800 bg-black items-center flex lg:rounded-br-[5rem] w-full flex-row content-center">
                      <Image src="/Speksi24valkea.png" alt="Kuolon Speksi 2043" width="300" height="300" className="p-10 m-auto" />
                  </div>

                  <div className={"items-center justify-center flex w-full px-2 sm:px-10 py-5 lg:px-5 lg:py-2"}>
                    <iframe src="https://player.vimeo.com/video/916783268?h=ecf27ecb26&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="w-full h-96 lg:h-full" frameBorder="0" allow="fullscreen; picture-in-picture" title="KuoLOn Speksi 2024 Traileri"></iframe>
                  </div>
              </div>
          </div>

          <article className="p-2 sm:p-10 mt-5 text-zinc-300">
              <h1 className={`text-5xl my-5 ${lisuBosa.className} text-center text-zinc-100`}>Synopsis</h1>
              <div className="flex flex-col lg:flex-row items-center">
                  <div className="flex-1 leading-relaxed p-2 sm:p-0">
                      <p>
                          Eletään 1700-luvun alkua Iso-Britannian rannikolla. Alexander Harris, suuren kauppaempiirin tuleva perijä, on lähdössä merimatkalle kohti Ranskaa näkemään kihlattuaan ensi kertaa. Kunhan järjestetty avioliitto saa papin siunauksen, läjäytetään kauppaempiirin koko paino Alexanderin niskoille. Tästä kaikesta Harristen esikoisella Henrietalla on oma mielipiteensä - eikä niin suotuinen sellainen. Pelkoa Alexanderin matkalle tuo Harristen kauppalaivojen tunnettu vihollinen Kapteeni Kultakynsi merirosvojoukkoineen, joiden kuiskitaan suunnittelevan perijän kidnappausta suuria lunnaita vastaan. Mutta miten käy, kun Alexander joutuu kuin joutuukin merirosvojen kynsiin vain valeasu turvanaan, läheisensä pettämänä? Entä liehuuko laivassa merirosvolipun lisäksi kapinan tuulia? Ja miten tähän kaikkeen sotkeutuu kahden epäonnisen rakastavaisen kohtalot?
                      </p>
                  </div>

                  <Image src="/instajulistet.png" alt="Juliste" width="500" height="500" className="m-10 rounded-xl" />
              </div>
          </article>

          <article id={"hahmokaarti"} className="pb-10 flex flex-col min-h-full w-full bg-gradient-to-b from-zinc-900 via-zinc-800 to-black">
              <h1 className={`text-5xl flex-grow-0 mb-2 ${lisuBosa.className} text-center mt-10 mb-10 text-zinc-100`}>Hahmokaarti</h1>
              <CharacterSlider />
          </article>

          <article className="py-20 w-full bg-gradient-to-b from-black via-zinc-800 to-zinc-700 px-4 lg:px-0" id={"esitykset"}>
              <h1 className={`text-5xl ${lisuBosa.className} text-center text-zinc-100`}>Näytökset</h1>
              <div className={"text-center text-zinc-400 text-sm mt-2 mb-10"}>
                <i>Paina näytöskertaa ostaaksesi lipun kide.appista.</i>
              </div>
              <div className="p-0 md:p-5 xl:p-10 w-full lg:m-auto lg:w-3/4 md:flex justify-between">
                  <div className="w-full">
                      <a href="https://kide.app/events/6d5cba6c-8247-48d1-b2cf-d2f3af352764/details" target={"_blank"}>
                       <div className="mt-2 bg-pink-800 text-black border-pink-950 shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                         <div className="flex place-items-center">
                            <FontAwesomeIcon icon={faSprayCanSparkles} className="h-12 w-12 p-2 text-black" />
                           <span className="drop-shadow text-lg text-black font-normal">ENSI-ILTA</span>
                         </div>
                         <li className="flex place-items-center">
                           <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                           Pe 22.3.
                         </li>
                         <li className="flex place-items-center">
                            <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                            Klo 19:00
                         </li>
                         <li className="flex place-items-center">
                           <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                           Maxim, Haapaniemenkatu 34
                         </li>
                         <li className="flex place-items-center">
                           <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                           19 €
                         </li>
                       </div>
                      </a>
                    <div className="border-l-2 border-zinc-500 h-6 ml-2 border-dotted" />
                    <a href={"https://kide.app/events/6d5cba6c-8247-48d1-b2cf-d2f3af352764/details"} target={"_blank"}>
                    <div className="bg-teal-800 border-teal-950 text-black shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                      <div className="flex place-items-center">
                        <FontAwesomeIcon icon={fa2} className="h-12 w-12 p-2 text-black" />
                        <span className="drop-shadow text-lg text-black font-normal">ALUMNINÄYTÖS</span>
                      </div>
                      <li className="flex place-items-center">
                        <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                        La 23.3.
                      </li>
                      <li className="flex place-items-center">
                        <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                        Klo 18:00
                      </li>
                      <li className="flex place-items-center">
                        <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                        Maxim, Haapaniemenkatu 34
                      </li>
                      <li className="flex place-items-center">
                        <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                        17 €
                      </li>
                    </div>
                    </a>
                    <div className="border-l-2 border-zinc-500 h-6 ml-2 border-dotted" />
                    <a href={"https://kide.app/events/6d5cba6c-8247-48d1-b2cf-d2f3af352764/details"} target={"_blank"}>
                    <div className="bg-teal-800 border-teal-950 text-black shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                      <div className="flex place-items-center">
                        <FontAwesomeIcon icon={fa3} className="h-12 w-12 p-2 text-black" />
                        <span className="drop-shadow text-lg text-black font-normal">KOLMAS NÄYTÖS</span>
                      </div>
                      <ul className="flex flex-col justify-items-end">
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                          Su 24.3.
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                          Klo 18:00
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                          Maxim, Haapaniemenkatu 34
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                          17 €
                        </li>
                      </ul>
                    </div>
                    </a>
                    <div className="border-l-2 border-zinc-500 h-6 ml-2 border-dotted" />
                    <div className="bg-pink-800 text-black border-pink-950 shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                      <div className="flex place-items-center">
                        <FontAwesomeIcon icon={faDiceD6} className="h-12 w-12 p-2 text-black" />
                        <span className="drop-shadow text-lg text-black font-normal">VÄLIPÄIVÄ</span>
                      </div>
                    </div>
                    <div className="border-l-2 border-zinc-500 h-6 ml-2 border-dotted" />
                    <a href={"https://kide.app/events/6d5cba6c-8247-48d1-b2cf-d2f3af352764/details"} target={"_blank"}>
                    <div className="bg-teal-800 border-teal-950 text-black shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                      <div className="flex place-items-center">
                        <FontAwesomeIcon icon={fa4} className="h-12 w-12 p-2 text-black" />
                        <span className="drop-shadow text-lg text-black font-normal">NELJÄS NÄYTÖS</span>
                      </div>
                      <ul className="flex flex-col justify-items-end">
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                          Ti 26.3.
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                          Klo 18:00
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                          Maxim, Haapaniemenkatu 34
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                          17 €
                        </li>
                      </ul>
                    </div>
                    </a>
                    <div className="border-l-2 border-zinc-500 h-6 ml-2 border-dotted" />
                    <a href={"https://kide.app/events/6d5cba6c-8247-48d1-b2cf-d2f3af352764/details"} target={"_blank"}>
                    <div className="bg-teal-800 border-teal-950 text-black shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                      <div className="flex place-items-center">
                        <FontAwesomeIcon icon={fa5} className="h-12 w-12 p-2 text-black" />
                        <span className="drop-shadow text-lg text-black font-normal">VIIDES NÄYTÖS</span>
                      </div>
                      <ul className="flex flex-col justify-items-end">
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                          Ke 27.3.
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                          Klo 18:00
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                          Maxim, Haapaniemenkatu 34
                        </li>
                        <li className="flex place-items-center">
                          <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                          17 €
                        </li>
                      </ul>
                    </div>
                    </a>
                  </div>

                <h1 className={`block md:hidden text-5xl ${lisuBosa.className} text-center m-10 text-zinc-100`}>Kiertue</h1>

                <div className="ml-0 lg:ml-2 xl:ml-0 w-full md:flex md:p-2 lg:p-0 flex-col place-items-end justify-center">
                  <a href="https://kide.app/events/afd6cce8-a018-49c5-a112-7e133656c102/details" target={"_blank"}>
                  <div className="bg-pink-800 text-black border-pink-950 shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                    <div className="flex place-items-center">
                      <FontAwesomeIcon icon={faBus} className="h-12 w-12 p-2 text-black" />
                      <span className="drop-shadow text-lg text-black font-normal">HELSINKI</span>
                    </div>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                      Pe 5.4.
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                      Klo 17:00
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                      Arabiasali, Muotoilijankatu 1B
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                      18 € opiskelija
                    </li>
                  </div>
                  </a>
                  <div className="border-l-2 border-zinc-500 h-6 ml-2 md:mr-2 border-dotted" />
                  <a href="https://kide.app/events/afd6cce8-a018-49c5-a112-7e133656c102/details" target={"_blank"}>
                  <div className="bg-pink-800 text-black border-pink-950 border-2 shadow-xl w-full lg:w-96 py-2 pr-12 text-sm font-light">
                    <div className="flex place-items-center">
                      <FontAwesomeIcon icon={faBus} className="h-12 w-12 p-2 text-black" />
                      <span className="drop-shadow text-lg text-black font-normal">TAMPERE</span>
                    </div>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                      Su 6.4.
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                      Klo 17:00
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                      Hällä-näyttämö, Hämeenkatu 25
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                      18 € opiskelija
                    </li>
                  </div>
                  </a>
                  <div className="border-l-2 border-zinc-500 h-6 ml-2 md:mr-2 border-dotted" />
<a href="https://kide.app/events/afd6cce8-a018-49c5-a112-7e133656c102/details" target={"_blank"}>
                  <div className="bg-pink-800 text-black border-pink-950 shadow-xl border-2 w-full lg:w-96 py-2 pr-12 text-sm font-light">
                    <div className="flex place-items-center">
                      <FontAwesomeIcon icon={faBus} className="h-12 w-12 p-2 text-black" />
                      <span className="drop-shadow text-lg text-black font-normal">TURKU</span>
                    </div>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faCalendarDay} className={"h-4 w-4 p-2"} />
                      Ma 7.4.
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faClock} className={"h-4 w-4 p-2"} />
                      Klo 17:00
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faLocationPin} className={"h-4 w-4 p-2"} />
                      Siqyn-sali, Linnankatu 60
                    </li>
                    <li className="flex place-items-center">
                      <FontAwesomeIcon icon={faEuroSign} className={"h-4 w-4 p-2"} />
                      18 € opiskelija
                    </li>
                  </div>
</a>
                </div>
              </div>
          </article>

          <div className="bg-zinc-700 pb-10">
            {/*<div className="mb-30 pt-5 flex flex-row justify-center place-items-center">
              <i className={"p-2"}>ykkönen</i>
              <i className={"p-2"}>kakkonen<br/>testi</i>
            </div>*/}

            <div className="flex justify-center">
              <Image src={"/kaariteksti.png"} alt="Tyyrpuurin tuolla puolen" width="200" height="200" />
            </div>
          </div>

        <div className="h-5 border-y-2 border-black bg-gradient-to-t from-pink-900 to-pink-950" />

        <div className="bg-black-800 text-zinc-200 mt-20">
          { /* <article className="mb-20" id={"rooleissa"}>
            <h1 className={`text-5xl ${lisuBosa.className} text-center`}>Rooleissa</h1>
            <div className="p-10 text-center">
              tässä ei ole vielä mitään
            </div>
          </article>
          */}

          <article className="my-20">
            <h1 id={"vastaavat"} className={`text-5xl ${lisuBosa.className} text-center text-zinc-100`}>Vastaavat</h1>
            <div className="mt-10 p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                <div className="items-center h-full justify-content-center place-content-center">
                  <Image src="/tuotanto.jpg" alt="Tuotantovastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Tuotanto</h2>
                    <p className={"mb-4"}>Anniina Tapio</p>
                    <p>Juho Anderson</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/kasikirjoitus.jpg" alt="Käsikirjoitusvastaavat" width="500" height="500" className="rounded-2xl m-auto" />

                    <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                      <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Käsikirjoitus</h2>
                      <p>Aino Haajanen</p>
                    </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/taiteellinenjohto.jpg" alt="Taiteellisen johdon vastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Taiteellinen johto</h2>
                    <p className={"mb-4"}>Rosa Sahlström</p>
                    <p>Joonas Saharinen</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/tanssivastaavat.jpg" alt="Tanssivastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Tanssi</h2>
                    <p className={"mb-4"}>Raakel Pouttu</p>
                    <p className={"mb-4"}>Senja Auvinen</p>
                    <p>Roosa Jaakkola</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/puvustusvastaavat.jpg" alt="Puvustusvastaava" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Puvustus</h2>
                    <p className={"mb-4"}>Susanna Santala</p>
                    <p>Alessandra Mäkelä</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/valaistusvastaavat.jpg" alt="Valaistusvastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Valot</h2>
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <p className={"mb-4"}>Ilmari Tanninen</p>
                    <p>Aaro Näätänen</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/sanoitusvastaavat.jpg" alt="Sanoitusvastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Sanoitus</h2>
                    <p className={"mb-4"}>Kreeta-Liina Franssila</p>
                    <p>Minna Särkkälä</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/maskeeraus.jpg" alt="Lavastusvastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Maski</h2>
                    <p className={"mb-4"}>Hammi Vainio</p>
                    <p className={"mb-4"}>Hanna Hara</p>
                    <p>Wilma Matikainen</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/bandivastaavat.jpg" alt="Bändi" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Bändi</h2>
                    <p className={"mb-4"}>Heikki Koskiniemi</p>
                    <p className={"mb-4"}>Pauli Pesonen</p>
                    <p>Ella Siitari</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/lavastusvastaavat.jpg" alt="Lavastusvastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Lavastus</h2>
                    <p className={"mb-4"}>Veera Kuronen</p>
                    <p className={"mb-4"}>Aino Jaakkola</p>
                    <p>Oskari Juutinen</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/kiertuvastaava.jpg" alt="Kiertuevastaava" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Kiertue</h2>
                    <p className={"mb-4"}>JP Hakalehto</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/catering.jpg" alt="Catering-vastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Catering</h2>
                    <p className={"mb-4"}>Ruska Heikkilä</p>
                    <p className={"mb-4"}>Petra Valkonen</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center justify-center">
                  <Image src="/somevastaavat.jpg" alt="Somevastaavat" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Sosiaalinen media</h2>
                    <p className={"mb-4"}>Anni Keskinen</p>
                    <p>Petra Keromaa</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <Image src="/hupitiimi.jpg" alt="Hupitiimi" width="500" height="500" className="rounded-2xl m-auto" />
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Hupitiimi</h2>
                    <p className={"mb-4"}>Riikka Yli-Riesto</p>
                    <p className={"mb-4"}>Hanna Mangeloja</p>
                    <p>Hanna Hara</p>
                  </div>
                </div>
                <div className="flex flex-col items-center h-full justify-content-center place-content-center">
                  <div className="flex-1 h-full flex flex-col justify-center place-items-center">
                    <h2 className="text-xl drop-shadow-2xl text-teal-600 my-10">Nettisivut</h2>
                    <p>Elias Leskinen</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    )
}
