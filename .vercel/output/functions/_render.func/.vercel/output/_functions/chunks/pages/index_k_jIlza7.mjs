/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, e as renderSlot, g as renderComponent, n as Fragment } from '../astro_BFJM5mxp.mjs';
import { a as $$Badge, $ as $$SectionContainer, b as $$Layout } from './blog_mqaXy5GM.mjs';
import { $ as $$SocialPill, a as $$LinkedIn } from './components_d_D4RqkF.mjs';

const $$Astro$j = createAstro("https://porfolio.dev/");
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const personalImageAlt = "Daniel Suarez";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-purple-700 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Daniel Suarez. Empecé en la programación gracias a Excel 🤡 (No es broma jejeje) . Actualmente estoy <strong>trabajando como fullStack developer especializandome en reactjs.</strong>.
</p> <p>
Algunos de mis éxitos incluyen <strong>colaborar en startups que han crecido exponencialmente como Treinta</strong>. Y tambien desarrollar una app propia llamada <strong>Jausme</strong> que ha tenido un gran impacto en la comunidad.
</p> <!-- <p>
      Como creador de contenido, <strong
        >cuento con el canal de habla hispana más visto del mundo en la
        categoría de <em class="italic">Software & Game Development</em> en Twitch</strong
      >. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el
      acceso a contenido de calidad.
    </p> --> </div> <img width="200" height="200" src="/me2.png"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article> <!-- FRASES PROHIBIDAS EN VUESTRO PORTFOLIO

<p>
  Mi sueño es encontrar mi primer empleo en el mundo de la programación. Una empresa donde pueda seguir aprendiendo. ❌
</p>

<p>
  ❌ Apasionado de la programación desde chekitito. Me encantan los ordenadores y crear páginas web buenas y rápidas con la última tecnología.
</p>

<p>
  Trabajo bien en equipo. Siempre estoy aprendiendo cosas nuevas.
</p>

-------------------------------------

--------------------------------------

<p>
  ¡Soy Leo! Estudié Derecho Empresarial y, tras años ejerciendo, me pasé al mundo de la Programación. Desde entonces disfruto creando experiencias web para los usuarios.
</p>

<p>
  Entre mis éxitos destaco que durante el Grado Superior, ayudé a mis compañeros a aprender sobre TDD. Me encanta el testing, creo en su importancia, y me gusta compartir mi conocimiento sobre ello.
</p>

<p>
  Cuento con experiencia desarrollando aplicaciones móviles, y he creado una iniciativa llamada X para mezclar mis dos pasiones: la programación y el derecho. Ayudando a la sociedad a acceso a una defensa justa.
</p>

---------------------------------------

<p>Me llamo Sara, tengo 25 años y soy de Santiago, Chile 🇨🇱. Terminé mis estudios como Desarrolladora Web. Me encanta enfocarme en la parte del rendimiento, para ofrecer la mejora experiencia al usuario.</p>

<p>
  Colaboro en la organización del MeetUp local BeerJS donde reunimos a desarrolladores de Santiago para compartir conocimiento y experiencias. El año 2023 hicimos un total de 25 charlas con más de 2000 asistentes.
</p>

<p>
  Además de participar activamente en la comunidad, he participado en la Hackathon de Midudev quedando en 3er puesto con mi proyecto _Chatty_, donde usando IA podías interactuar con un PDF. ¡Échale un vistazo!
</p>

-->`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/AboutMe.astro", void 0);

const $$Astro$i = createAstro("https://porfolio.dev/");
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/Briefcase.astro", void 0);

const $$Astro$h = createAstro("https://porfolio.dev/");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/Code.astro", void 0);

const $$Astro$g = createAstro("https://porfolio.dev/");
const $$LinkInline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/LinkInline.astro", void 0);

const $$Astro$f = createAstro("https://porfolio.dev/");
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-purple-700 dark:text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/ExperienceItem.astro", void 0);

const $$Astro$e = createAstro("https://porfolio.dev/");
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "FullStack Developer",
      company: "BrangerBriz",
      description: "Desarrollo de aplicaciones web para empresas y particulares. Creaci\xF3n de una plataforma de gesti\xF3n de eccomerce con Nextjs, Node.js y MongoDB.",
      link: "https://brangerbriz.com/"
    },
    {
      date: "",
      title: "FullStack Developer & Co-Founder",
      company: "Jausme",
      description: "Cree una aplicaci\xF3n mobile para Android y iOS con React Native y Node.js para la digitalizaci\xF3n de propiedades horizontales.",
      link: "https://jausme.com/"
    },
    {
      date: "Marzo 2023",
      title: "FullStack Developer",
      company: "GoGo",
      description: "Desarroll\xE9 una aplicaci\xF3n Movile con React Native y Node.js para la gesti\xF3n de veh\xEDculos y su mantenimiento impactando a m\xE1s de 600K taxistas en Colombia.",
      link: "https://play.google.com/store/apps/details?id=com.gogo.beatlab&pli=1"
    },
    {
      date: "Mayo 2021",
      title: "Frontend Developer",
      company: "Treinta",
      description: "Empec\xE9 desde los inicios en el equipo hasta que se convirtiera en una super empresa de alto crecimiento donde impactamos +5 Millones de usuarios, logrando que cada micronegocio sustituya al libro de transacciones f\xEDsico para los 50 millones de empresas latinas que a\xFAn est\xE1n desconectadas del mundo digital",
      link: "https://www.treinta.co/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Experience.astro", void 0);

const $$Astro$d = createAstro("https://porfolio.dev/");
const $$ProfileCheck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$c = createAstro("https://porfolio.dev/");
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/GitHub.astro", void 0);

const $$Astro$b = createAstro("https://porfolio.dev/");
const $$NextJS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/NextJS.astro", void 0);

const $$Astro$a = createAstro("https://porfolio.dev/");
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/Tailwind.astro", void 0);

const $$Astro$9 = createAstro("https://porfolio.dev/");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/Link.astro", void 0);

const $$Astro$8 = createAstro("https://porfolio.dev/");
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/LinkButton.astro", void 0);

const $$Astro$7 = createAstro("https://porfolio.dev/");
const $$ReactNative = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ReactNative;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(2194, "width")}${addAttribute(2500, "height")} viewBox="175.7 78 490.6 436.9"${spreadAttributes(Astro2.props)}> <g fill="#000"> <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path> <circle${addAttribute(420.9, "cx")}${addAttribute(296.5, "cy")}${addAttribute(45.7, "r")}></circle> </g> </svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/ReactNative.astro", void 0);

const $$Astro$6 = createAstro("https://porfolio.dev/");
const $$Vite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Vite;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(2490, "width")}${addAttribute(2500, "height")} preserveAspectRatio="xMidYMid" viewBox="-1.871 -0.407 259.721 257.849"${spreadAttributes(Astro2.props)}> <linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"> <stop${addAttribute(0, "offset")} stop-color="#41d1ff"></stop> <stop${addAttribute(1, "offset")} stop-color="#bd34fe"></stop> </linearGradient> <linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"> <stop${addAttribute(0, "offset")} stop-color="#ffea83"></stop> <stop${addAttribute(0.083, "offset")} stop-color="#ffdd35"></stop> <stop${addAttribute(1, "offset")} stop-color="#ffa800"></stop> </linearGradient> <path fill="#fff" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"></path> <path fill="#fff" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"></path> </svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/Vite.astro", void 0);

const $$Astro$5 = createAstro("https://porfolio.dev/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    VITE: {
      name: "Vite",
      class: "bg-black text-white",
      icon: $$Vite
    },
    REACT_NATIVE: {
      name: "React Native",
      class: "bg-[#61DAFB] text-black",
      icon: $$ReactNative
    },
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJS
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    }
  };
  const PROJECTS = [
    {
      title: "Jausme - Digitalizando tu propiedad horizontal",
      description: "Plataforma para la gesti\xF3n de comunidades de vecinos. Creada con Vite, React , Tailwind CSS y React Native para la app m\xF3vil, con m\xE1s de 100K usuarios activos.",
      link: "https://jausme.com/",
      image: "/projects/jausme.png",
      tags: [TAGS.TAILWIND, TAGS.REACT_NATIVE, TAGS.VITE]
    },
    {
      title: "SpendWiser - Gasta Inteligentemente",
      description: "Plataforma gratuita para la gesti\xF3n de finanzas a la hora de mercar. Con m\xE1s de 500 usuarios activos. Creada con Next.js y Tailwind CSS.",
      link: "https://www.spendwiser.click/",
      image: "/projects/spendWiser.png",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
      github: "https://github.com/DanielSuarezDev/SpendWiser"
    },
    {
      title: "GoGo - Dale vida a tu veh\xEDculo",
      description: "App para la gesti\xF3n de mantenimientos de veh\xEDculos donde ha impactado a mas de 600K taxistas y expandiendose a veh\xEDculos particulares. Creada con React Native y Tailwind CSS.",
      link: "https://play.google.com/store/apps/details?id=com.gogo.beatlab&pli=1",
      image: "/projects/gogo.png",
      tags: [TAGS.VITE, TAGS.TAILWIND, TAGS.REACT_NATIVE]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="image" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Projects.astro", void 0);

const $$Astro$4 = createAstro("https://porfolio.dev/");
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/icons/Mail.astro", void 0);

const $$Astro$3 = createAstro("https://porfolio.dev/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const personalImageAlt = "Miguel \xC1ngel";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="/profile-dani.jpg"${addAttribute(personalImageAlt, "alt")}> <a href="https://www.linkedin.com/in/daniel-suarez-dev/" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hey, soy Daniel Suarez
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-purple-700 [&>strong]:font-semibold dark:text-gray-300">
+5 años de experiencia. <strong>FullStack Developer y Creador de Contenido sobre Programación</strong> de Bogotá, Colombia 🇨🇴. Especializado en el desarrollo de aplicaciones web y app
    únicas.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:danielsuarez3114@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/daniel-suarez-dev/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://porfolio.dev/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/@vercel+speed-insights@1.0.10/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://porfolio.dev/");
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Banner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl bg-neutral-100 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-2 md:p-4 text-center shadow-sm dark:bg-neutral-200 m-auto"> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-700 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-0 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none"${addAttribute(url, "href")}> ${btnTitle} <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-700 p-2 text-sm font-semibold text-gray-200 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} `;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Banner.astro", void 0);

const $$Astro = createAstro("https://porfolio.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de danielsuarezdev - Desarrollador y Programador con +5 a\xF1os de experiencia", "description": "Contrata a danielsuarezdev para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador Web. Especializado en crear aplicaciones \xFAnicas.", "image": "/images/logo.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "Banner", $$Banner, { "btnId": "dismiss-button", "btnTitle": "Entra a mi Blog", "url": "/blog" })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> ${renderComponent($$result2, "SpeedInsights", $$Index$1, {})} </main> ` })}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/pages/index.astro", void 0);

const $$file = "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
