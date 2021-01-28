<<<<<<< HEAD
# Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
=======
# AluraQuiz Base

Seja bem vindo ao projeto base do AluraQuiz!!! Passos fundamentais:
- Marque esse projeto com uma estrela
- Siga as instruções das aulas e conteúdo extra da Imersão React Next.js
- Faça o deploy na Vercel e compartilhe

![Capa do Projeto](/_docs/aluraquiz-base.png)

## Como colocar o meu projeto na vitrine da imersão?

> [Vitrine da Imersão](https://aluraquiz-base.alura-challenges.vercel.app/contribuidores)

- [Siga os passos](/CONTRIBUTING.md)

## Onde está o Layout base?
- [Link](https://www.figma.com/file/cg1MIzSRRss8ggpypQbmdD/AluraQuiz?node-id=0%3A1)


## Como pegar cores tema diferentes para minha app?

Você pode dar uma olhada nesse link e separar uma palheta que combine com sua imagem de background :) :
- https://material-ui.com/customization/color/#playground


# Contribuidores 

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://youtube.com/c/DevSoutinho"><img src="https://avatars.githubusercontent.com/u/13791385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mario Souto</b></sub></a><br /><a href="https://github.com/alura-challenges/aluraquiz-base/commits?author=omariosouto" title="Code">💻</a></td>
    <td align="center"><a href="http://www.alura.com.br"><img src="https://avatars.githubusercontent.com/u/32266030?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juliana Amoasei</b></sub></a><br /><a href="https://github.com/alura-challenges/aluraquiz-base/commits?author=JulianaAmoasei" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lucas-hidalgo"><img src="https://avatars.githubusercontent.com/u/54157203?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Cesar</b></sub></a><br /><a href="#design-lucas-hidalgo" title="Design">🎨</a></td>
    <td align="center"><a href="https://www.alura.com.br/"><img src="https://avatars.githubusercontent.com/u/71636?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paulo Silveira</b></sub></a><br /><a href="https://github.com/alura-challenges/aluraquiz-base/commits?author=peas" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/alura-challenges/aluraquiz-base/blob/master/LICENSE)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END --> 

>>>>>>> 1547267e0928c510d800e33d27c6c195105c3df8
