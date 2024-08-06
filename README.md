# Create:Unlimited Wiki How-To use guide

[![Netlify Status](https://api.netlify.com/api/v1/badges/868f3c3a-3d7b-4798-89a4-adfa0d2da3d5/deploy-status)](https://app.netlify.com/sites/create-unlimited-wiki/deploys)

Hey there! Hope you enjoyed browsing the wiki. If you want to create more pages, or edit some things here and there you're in the right place.

- [Create:Unlimited Wiki How-To use guide](#createunlimited-wiki-how-to-use-guide)
  - [Small Technical Walkthrough](#small-technical-walkthrough)
  - [Create, Edit an Remove Pages](#create-edit-an-remove-pages)
  - [Import pictures](#import-pictures)
  - [Import Components](#import-components)
  - [What's up with `.mdx`?](#whats-up-with-mdx)
  - [Available components](#available-components)
    - [The Accepted values component](#the-accepted-values-component)
    - [The Minecraft command component](#the-minecraft-command-component)
    - [The Before and After component](#the-before-and-after-component)
  - [Credits](#credits)

## Small Technical Walkthrough

The site is made using Astro, a web framework. It is currently configured to re-generate pages whenever something changes (using Static Site Generation).

The project is split into the following parts:

- Assets (the main place where you can store any type of picture that will get optimized by the framework)
- Components (where you will find re-usable bits such as the MinecraftCommandComponent which basically previews the way a command should be written in-game)
- Layouts (where you will find the logic and overall "layout" of how things are generally shown on a page)
- Pages (where you will find the routes configured for the site - such as _/_ and _/wiki/[category]/[slug]_)
- Utils (where you will find random bits of javascript code that are used throughout the project )
- Content - where you can create, edit and remove actual pages (Not to be confused with pages)

You mostly need to worry about **content** and **assets**.

## Create, Edit an Remove Pages

> I hope it goes without saying, but please use a **code editor**.

To create a new wiki article, go into the `src/content/wiki` folder. As you might guess, there already are some articles made but if you want to create a new one just create a new `.mdx` file with the title of the page separated by dashes. (example: `your-title-goes-here.mdx`).

To delete a wiki article, delete the `.mdx` file associated with it. Do note that once it's deleted it's gone and can be recovered only through the GitHub history.

To edit a wiki article, click on it and add whatever you want. You can add components inside of it and write markdown and JSX (an HTML alternative which supports javascript to be written inside of it.)

To publish your changes, commit and push them on GitHub. After you do that - Netlify will start a build process which will re-generate the site with the new content. To check the state of the build process - go into your Netlify Deploys page.

## Import pictures

Place any picture inside `src/assets/[whicheverpathyouwant]`. Any picture there will get automatically optimized by Astro.

In your article's `.mdx` file write the following:

```javascript
import yourPictureNameCanBeAnything from "@/assets/[yourPicturePathOrName]";
```

> **_Note_** : _Imports_ go at the top of the document, right after the front-matter.

## Import Components

At the top of the `.mdx` file, just after the front-matter, write the following syntax:

```javascript
import componentNameGoesHere from "@/components/[componentPathOrNameGoesHere]":
```

> **_Note_** : _Imports_ go at the top of the document, right after the front-matter.

## What's up with `.mdx`?

MDX is a markdown flavour that let's you write markdown enhanced with javascript. Check out the [documentation](https://mdxjs.com/docs/) for more info on the language.

Currently, each article has the following structure

- The frontmatter - where you can edit the article's metadata which includes:

  - Title
  - Description
  - Category
  - isWikiIndex (a boolean that determines which article get's shown whenever someone clicks on the wiki link at the top right of the sites index page.)

  Example:

  ```YAML
  ---
  title: Your Article Title goes here
  category: your-category-goes-here
  description: This description is amazing.
  isWikiIndex: false
  ---
  ```

  > - **_Do Not Use_** spaces for the category

  > - `isWikiIndex` and `description` are **_optional_**

- The actual MDX

As stated previously, you can use javascript-like syntax to enhance your markdown.

![Components screenshot](/src/assets/readme/component-screenshot.png)

In the image above of a simple `.mdx` file, you can see that we import 2 components - the acceptedValuesComponent and the MinecraftCommandComponent. They are meant to show content in a "friendlier" manner. (note that all imports are at the top, just after the front-matter)

> If you take a look inside of the `src/components` folder you can see the way they are written.

JSX Elements can be written like this:

```
<Element prop={["value1","value2"]}/>
```

or

```
<Element>content</Element>
```

Each element can have attributes (called props) which get transferred to the component in order to show certain data.

## Available components

### The Accepted values component

**Shows 2 Minecraft signs that have potential command values written on them as well as the default value above.**

Don't forget to import the component.

```javascript
import AcceptedValuesComponent from "@/components/AcceptedValuesComponent.astro";
```

> **_Note_** : _Imports_ go at the top of the document, right after the front-matter.

To edit the values, modify the array inside the values prop with your desired values. _(currently only 2 or 3 elements are supported)_

```
<AcceptedValuesComponent values={["true", "false"]} defaultValue="false" />
```

> Use brackets instead of quotation marks. (JSX quirk)

To edit the default value, modify the string inside the default value prop with your desired value.

> You can use quotation marks there because you're just writing a string.

### The Minecraft command component

**Shows a _Minecraft-like_ text input.**

Don't forget to import the component.

```javascript
import MinecraftCommandComponent from "@/components/MinecraftCommandComponent.astro";
```

> **_Note_** : _Imports_ go at the top of the document, right after the front-matter.

To use the element write it anywhere inside of the `.mdx` file.

```
<MinecraftCommandComponent>/say hello there</MinecraftCommandComponent
```

### The Before and After component

**Shows 2 _before and after_ pictures.**

To import a picture use the following syntax:

```javascript
import anyPictureName1 from "@/assets/*imagepath*";
import anyPictureName2 from "@/assets/*imagepath*";
```

> **_Note_** : _Imports_ go at the top of the document, right after the front-matter.

To use the element write it anywhere inside of the `.mdx` file and provide the props necessary.

```
<BeforeAndAfterComponent before={anyPictureName1} after={anyPictureName2}/>
```

## Credits

**Special thanks** to rdh, the developer of Create:Unlimited.

Rdh - The developer of Create: Unlimited - [Github](https://github.com/rhysdh540), [Discord](https://discord.gg/GeGm3DRDWY)  
darpserj - Web Developer - Wiki - [Github](https://github.com/darpserj), [Discord](https://discordapp.com/users/772008166674006027), [YouTube](https://www.youtube.com/@DariusP.webdev), [Facebook](https://www.facebook.com/dariuspopa.dev), and [personal site](https://dariuspopa.dev/?utm_source=Github&utm_medium=Create%3A+Unlimited+Wiki&utm_content=credits)
