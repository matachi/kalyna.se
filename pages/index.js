import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '../static/logo.png'
import ProfileImage from '../static/profile.png'
import KalynaIllustrationImage from '../static/kalyna-illustration.jpg'
import LinkedInIcon from '../node_modules/bootstrap-icons/icons/linkedin.svg'
import StackOverflowIcon from '../node_modules/bootstrap-icons/icons/stack-overflow.svg'
import TwitterIcon from '../node_modules/bootstrap-icons/icons/twitter.svg'
import GitHubIcon from '../node_modules/bootstrap-icons/icons/github.svg'
import FacebookIcon from '../node_modules/bootstrap-icons/icons/facebook.svg'
import PhoneIcon from '../node_modules/bootstrap-icons/icons/phone.svg'
import EnvelopeIcon from '../node_modules/bootstrap-icons/icons/envelope.svg'

export default function Home() {
  return <>
    <Head>
      <title>Kalyna Solutions AB</title>
      <meta name="description" content="Egenkonsult i Stockholm som erbjuder fullstack-utveckling." key="desc" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kalyna Solutions AB" />
      <meta property="og:description" content="Egenkonsult i Stockholm som erbjuder fullstack-utveckling." />
      <meta property="og:image" content="/apple-touch-icon.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="fibonaccital" />
      <meta property="twitter:title" content="Kalyna Solutions AB" />
      <meta property="twitter:description" content="Egenkonsult i Stockholm som erbjuder fullstack-utveckling." />
      <meta property="twitter:image" content="https://raw.githubusercontent.com/matachi/kalyna.se/main/public/logo.png" />
      <meta property="twitter:image:alt" content="Företagsloggo för Kalyna Solutions AB." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>

    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <Link href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <>
              <Image src={LogoImage} width="32" height="32" alt="Företagsloggo för Kalyna Solutions AB." />
              <span className="fs-4" style={{paddingLeft: '8px'}}>Kalyna Solutions AB</span>
            </>
          </Link>

          {/*<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
            <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
          </nav>*/}
        </div>

        {/*<div className="p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Kalyna Solutions</h1>
          <p className="fs-5 text-muted">Frilansande konsult som erbjuder hjälp med utveckling av programvara, oavsett om det handlar om att ta fram något nytt från grunden eller om att förvalta ett existerande system. Gillar att ha inflytande, lösa problem och leverera lösningar som uppfyller kundens behov. Har haft roller som systemutvecklare, team lead, teknisk lead och scrum master. Besitter erfarenhet av bl.a. webbutveckling (front- och backend), Windows-applikationsutveckling, embedded-utveckling och iOS-utveckling. Behöver du en orädd programmerare som gärna är med i alla delar av mjukvaran så har du kommit rätt!</p>
        </div>*/}
      </header>

      <main>
        <div className="container mb-5">
          <div className="row align-items-center align-items-center gy-2 gx-5">
            <div className="col-12 col-lg-4 d-flex justify-content-center align-self-start py-2">
              <Image className="d-block mx-lg-auto img-fluid align-top" src={ProfileImage} width="300" height="300" alt="Profilbild av Daniel Jonsson, ägare av Kalyna Solutions AB." />
            </div>
            <div className="col-lg-8">
              <h1 className="display-5">Daniel Jonsson</h1>
              <p className="lead">Daniel är en systemutvecklare med 7+ års erfarenhet av mjukvaruutveckling professionellt inom flera programmeringsspråk. Framförallt har Daniel arbetat med C#/.NET, men har även gedigen erfarenhet av JavaScript, C++, Python, Swift, HTML och CSS. Han började programmera som nioåring och har en civilingenjörsexamen i systemutveckling från Chalmers tekniska högskola. Plattformarna som Daniel har arbetat professionellt med är Windows, webben, iOS och inbyggda system.</p>
              <p className="lead">Daniel är duktig på att lösa komplexa uppgifter och är snabbt produktiv i nya system. Han är en fantastisk lagspelare och duktig på att höra sina kunder och kollegor. Han en människokännare med ett analytiskt sinne. Utanför arbetstid programmerar han gärna på egna projekt, tränar på gymmet, spelar schack, lär sig språk eller läser om kryptovalutor.</p>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row g-5">
            <div className="col">
              <figure class="text-center">
                <blockquote class="blockquote">
                  <p>”Daniel var utvecklare i många projekt (konsult), varav vissa med mig. Han tog stort eget ansvar för planering, ledning och utförande, samt direktkontakt med kund. Han var allmänt (även av ledningen) ansedd som en schweizisk armékniv som kunde skickas in i vilket mjukvaruprojekt som helst och glänsa.”</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Citat från tidigare kollega.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row g-5">
            <div className="col">
              <h1 className="display-5">Erfarenhet av tekniker</h1>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <h2 className="display-7">Programmeringsspråk</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">C#</li>
                <li class="list-group-item">Python</li>
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">C</li>
                <li class="list-group-item">C++</li>
                <li class="list-group-item">Swift</li>
                <li class="list-group-item">HTML</li>
                <li class="list-group-item">CSS</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h2 className="display-7">Ramverk & bibliotek</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">.NET Framework 4.8, .NET Core 3.1, .NET 6</li>
                <li class="list-group-item">ASP.NET</li>
                <li class="list-group-item">WPF</li>
                <li class="list-group-item">Prism Library for WPF</li>
                <li class="list-group-item">Telerik UI for WPF</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Next.js</li>
                <li class="list-group-item">jQuery</li>
                <li class="list-group-item">Django</li>
                <li class="list-group-item">Flask</li>
                <li class="list-group-item">Bootstrap</li>
                <li class="list-group-item">Foundation Framework</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h2 className="display-7">Verkyg</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Azure DevOps</li>
                <li class="list-group-item">Jenkins</li>
                <li class="list-group-item">Grunt</li>
                <li class="list-group-item">Gulp</li>
                <li class="list-group-item">Webpack</li>
                <li class="list-group-item">GNU Make</li>
                <li class="list-group-item">CMake</li>
                <li class="list-group-item">Ansible</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h2 className="display-7">Protokoll</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">TCP/IP</li>
                <li class="list-group-item">HTTP</li>
                <li class="list-group-item">REST</li>
                <li class="list-group-item">gRPC</li>
                <li class="list-group-item">MQTT</li>
                <li class="list-group-item">RabbitMQ</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h2 className="display-7">Utvecklingsmiljöer</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Visual Studio</li>
                <li class="list-group-item">Visual Studio Code</li>
                <li class="list-group-item">PyCharm</li>
                <li class="list-group-item">Xcode</li>
                <li class="list-group-item">Eclipse</li>
                <li class="list-group-item">Notepad++</li>
                <li class="list-group-item">Vim</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h2 className="display-7">Plattformar</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Windows</li>
                <li class="list-group-item">Webben (backend & frontend)</li>
                <li class="list-group-item">Linux/embedded</li>
                <li class="list-group-item">iOS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <h1 className="display-5">Daniel i sociala medier</h1>
              <a href="https://www.linkedin.com/in/dnljnssn/" className="px-1" title="Daniel Jonsson på LinkedIn.">
                <Image src={LinkedInIcon} width="40" height="40" alt="LinkedIn-ikon." />
              </a>
              <a href="https://twitter.com/fibonaccital" className="px-1" title="Daniel Jonsson på Twitter.">
                <Image src={TwitterIcon} width="40" height="40" alt="Twitter-ikon." />
              </a>
              <a href="https://stackoverflow.com/users/595990/daniel-jonsson" className="px-1" title="Daniel Jonsson på Stack Overflow.">
                <Image src={StackOverflowIcon} width="40" height="40" alt="Stack Overflow-ikon." />
              </a>
              <a href="https://github.com/matachi" className="px-1" title="Daniel Jonsson på GitHub.">
                <Image src={GitHubIcon} width="40" height="40" alt="GitHub-ikon." />
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <h1 className="display-5">Kalyna Solutions AB i sociala medier</h1>
              <a href="https://www.linkedin.com/company/kalyna-solutions-ab/" className="px-1" title="Kalyna Solutions AB på LinkedIn.">
                <Image src={LinkedInIcon} width="40" height="40" alt="LinkedIn-ikon." />
              </a>
              <a href="https://www.facebook.com/kalyna.solutions.ab" className="px-1" title="Kalyna Solutions AB på Facebook.">
                <Image src={FacebookIcon} width="40" height="40" alt="Facebook-ikon." />
              </a>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 py-5">
          <div className="row flex-lg-row-reverse align-items-center gy-2 gx-5">
            <div className="col-12 col-lg-4 d-flex justify-content-center align-self-start py-2">
              <Image className="d-block mx-lg-auto img-fluid align-top" src={KalynaIllustrationImage} width="260" height="300" alt="Illustration av växten 'skogsolvon'." />
            </div>
            <div className="col-lg-8">
              <h1 className="display-5">Vad betyder Kalyna?</h1>
              <p className="lead">{'"'}Kalyna{'"'} är det ukrainska ordet {'"'}Калина{'"'} skrivet med latinska bokstäver. Калина är en växt som på svenska översätts till <a href="https://sv.wikipedia.org/wiki/Skogsolvon" title="Wikipedia-artikel om skogsolvon.">skogsolvon</a>. Det är en anrik symbol för Ukraina med lång tradition, och dess bär symboliserar hemlandet. Skogsolvon dyker i Ukraina upp i sånger, konst, broderi och poesi. En numera välkänd sång är {'"'}<a href="https://sv.wikipedia.org/wiki/Ett_r%C3%B6tt_olvon_vid_%C3%A4ngen" title="Wikipedia-artikel om sången 'Ett rött olvon vid ängen'.">Ett rött olvon vid ängen</a>{'"'} som skrevs 1914; {'"'}Ой у лузі червона калина{'"'} är dess originaltitel och <a href="https://www.youtube.com/watch?v=EV_vT0Vud5Q" title="En grupp personer som sjunger sången 'Ой у лузі червона калина'.">sjungs fortfarande</a>.</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-4">
              <h1 className="display-5">Kontakt</h1>
              <p className="lead">För att komma i kontakt med mig</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item align-middle">
                  <Image src={PhoneIcon} width="20" height="20" />
                  <span className="px-3">Telefon: <a href="tel:+46707329868" title="Ring till Daniel Jonsson.">+46 707 32 98 68</a></span>
                </li>
                <li class="list-group-item align-middle">
                  <Image src={EnvelopeIcon} width="20" height="20" />
                  <span className="px-3">Mejl: <a href="mailto:daniel.jonsson@kvadrat.se" title="Skicka mejl till Daniel Jonsson.">daniel.jonsson@kvadrat.se</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <Image className="mb-2" src={LogoImage} width="24" height="24" alt="Företagsloggo för Kalyna Solutions AB." />
          </Link>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Kalyna Solutions AB</span>
        </div>
      </footer>
    </div>
  </>
}
