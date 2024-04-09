/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, g as renderComponent } from '../astro_BFJM5mxp.mjs';
import { $ as $$SectionContainer, a as $$Badge, b as $$Layout } from './blog_BZFACTp0.mjs';

const $$Astro$2 = createAstro("https://porfolio.dev/");
const $$SocialPill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/components/SocialPill.astro", void 0);

const $$Astro$1 = createAstro("https://porfolio.dev/");
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/components/icons/LinkedIn.astro", void 0);

const $$Astro = createAstro("https://porfolio.dev/");
const $$Components = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Components;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System porfolio.dev", "description": "El cat\xE1logo de componentes de nuestro porfolio", "image": "/images/logo.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/daniel-suarez-dev/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/pages/components.astro", void 0);

const $$file = "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/pages/components.astro";
const $$url = "/components";

const components = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SocialPill as $, $$LinkedIn as a, components as c };
