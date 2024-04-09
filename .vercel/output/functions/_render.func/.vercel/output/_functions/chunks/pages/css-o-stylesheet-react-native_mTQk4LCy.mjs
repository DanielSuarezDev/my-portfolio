/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as addAttribute, e as renderSlot, u as unescapeHTML } from '../astro_BFJM5mxp.mjs';
import { b as $$Layout, $ as $$SectionContainer, a as $$Badge } from './blog_BZFACTp0.mjs';

const $$Astro = createAstro("https://porfolio.dev/");
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "description": frontmatter.description, "image": frontmatter.image.url }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "px-6 py-16 md:py-36 leading-9" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> <a href="/blog">${"<"} volver </a> </div> <img${addAttribute(frontmatter.image.url, "src")} class="rounded-xl mb-3 shadow-lg"${addAttribute(frontmatter.image.alt, "alt")}> <h1 class="text-4xl font-bold my-4">${frontmatter.title}</h1> <p class="text-gray-700 mb-2">🗓️ ${frontmatter.pubDate.slice(0, 10)}</p> <p class="text-gray-700 mb-4">✍️ Autor: ${frontmatter.author}</p> <div class="flex flex-wrap gap-2 mb-6"> ${frontmatter.tags.map((tag) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "class": "bg-green-700 text-white py-1 px-2 rounded-full shadow" }, { "default": ($$result4) => renderTemplate`
#${tag}` })}`)} </div> ${renderSlot($$result3, $$slots["default"])} <div class=""> <p class="text-xl font-bold my-4">Sígueme</p> <div class="flex"> <a class="border-gray-400 p-3 border-2 rounded-md mr-4" href="https://www.instagram.com/danielsuarezdev">
Instagram
</a> <a class="border-gray-400 p-3 border-2 rounded-md" href="https://twitter.com/DanielSuarezDev">
Twitter
</a> </div> </div> ` })} ` })}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/components/layouts/MarkdownPostLayout.astro", void 0);

const html = "<p>React Native es una popular plataforma de desarrollo de aplicaciones móviles que permite a los desarrolladores crear aplicaciones nativas para iOS y Android utilizando JavaScript y React. Pero, ¿cómo estilizamos nuestra aplicación en React Native? ¿Deberíamos utilizar CSS o StyleSheet?</p>\n<p>Ambos CSS y StyleSheet tienen sus pros y contras, y la elección depende de tus preferencias personales y de las necesidades de tu aplicación.</p>\n<p>CSS (Cascading Style Sheets) es un lenguaje de estilo que se utiliza ampliamente en el desarrollo web. Con CSS, puedes definir estilos para tu aplicación que se apliquen a todas las páginas o componentes que los utilicen.</p>\n<p>Sin embargo, en React Native, CSS no funciona de la misma manera que en el desarrollo web. React Native no admite todas las propiedades de CSS y algunas propiedades funcionan de manera diferente en React Native en comparación con el desarrollo web.</p>\n<p>Por otro lado, StyleSheet es una API nativa de React Native que permite a los desarrolladores definir estilos para sus aplicaciones móviles. StyleSheet es más eficiente y optimizado para aplicaciones móviles que CSS y también ofrece una mayor flexibilidad en cuanto a la personalización y la gestión de estilos.</p>\n<p>Además, StyleSheet es más rápido y eficiente en comparación con CSS, ya que los estilos se compilan directamente en la aplicación móvil en lugar de ser descargados desde un servidor web. Esto significa que los estilos se cargan más rápido y no dependen de una conexión a Internet para funcionar.</p>\n<p>En resumen, si estás familiarizado con CSS y prefieres utilizarlo, puedes hacerlo en React Native, pero es importante tener en cuenta que algunas propiedades y comportamientos pueden diferir. Si prefieres una solución nativa y optimizada para aplicaciones móviles, StyleSheet es una buena opción.</p>\n<p>En última instancia, la elección depende de tus preferencias personales y de las necesidades de tu aplicación. Ambos CSS y StyleSheet tienen sus pros y contras, y la elección correcta depende de tus objetivos.</p>";

				const frontmatter = {"layout":"../../components/layouts/MarkdownPostLayout.astro","title":"¿CSS o StyleSheet en react native?","pubDate":"2023-03-01T00:00:00.000Z","description":"React Native es una popular plataforma de desarrollo de aplicaciones...","author":"Daniel Suarez Dev","image":{"url":"/images/css-stylesheets.webp","alt":"react native img"},"tags":["react native","styles"]};
				const file = "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/pages/posts/css-o-stylesheet-react-native.md";
				const url = "/posts/css-o-stylesheet-react-native";
				function rawContent() {
					return "\nReact Native es una popular plataforma de desarrollo de aplicaciones móviles que permite a los desarrolladores crear aplicaciones nativas para iOS y Android utilizando JavaScript y React. Pero, ¿cómo estilizamos nuestra aplicación en React Native? ¿Deberíamos utilizar CSS o StyleSheet?\n\nAmbos CSS y StyleSheet tienen sus pros y contras, y la elección depende de tus preferencias personales y de las necesidades de tu aplicación.\n\nCSS (Cascading Style Sheets) es un lenguaje de estilo que se utiliza ampliamente en el desarrollo web. Con CSS, puedes definir estilos para tu aplicación que se apliquen a todas las páginas o componentes que los utilicen.\n\nSin embargo, en React Native, CSS no funciona de la misma manera que en el desarrollo web. React Native no admite todas las propiedades de CSS y algunas propiedades funcionan de manera diferente en React Native en comparación con el desarrollo web.\n\nPor otro lado, StyleSheet es una API nativa de React Native que permite a los desarrolladores definir estilos para sus aplicaciones móviles. StyleSheet es más eficiente y optimizado para aplicaciones móviles que CSS y también ofrece una mayor flexibilidad en cuanto a la personalización y la gestión de estilos.\n\nAdemás, StyleSheet es más rápido y eficiente en comparación con CSS, ya que los estilos se compilan directamente en la aplicación móvil en lugar de ser descargados desde un servidor web. Esto significa que los estilos se cargan más rápido y no dependen de una conexión a Internet para funcionar.\n\nEn resumen, si estás familiarizado con CSS y prefieres utilizarlo, puedes hacerlo en React Native, pero es importante tener en cuenta que algunas propiedades y comportamientos pueden diferir. Si prefieres una solución nativa y optimizada para aplicaciones móviles, StyleSheet es una buena opción.\n\nEn última instancia, la elección depende de tus preferencias personales y de las necesidades de tu aplicación. Ambos CSS y StyleSheet tienen sus pros y contras, y la elección correcta depende de tus objetivos.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const cssOStylesheetReactNative = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, cssOStylesheetReactNative as c };
