# Hello, world
I'm really glad to be here today—and I'd like to apologise in advance: Last Friday I fell off my bike and messed up my lips and a couple of teeth. This means my normally funny Scandinavian accent is going to sound even funnier than normal. I'll go slow, though—which I'll need as this entire session will be based on screen-sharing: as I've got HTML slides and will be showing off my entire dev environment.

As I know there is a mixed skillset in attendance here today, this session will start off with a very quick comparison of the various build tools out there and their strengths and weaknesses, before diving into more advanced examples of what you can actually do with them that isn't just your average every-day "Compile your Sass and minify your stuff". Although I'll cover that too!

So let's get this started!

## Grunt
Grunt is the most popular front-end build tool out there today, and it's also one of the first JS build that really existed. These two things are possibly related. It got a lot of traction, and hence, it has a plugin for just about everything under the sun. Which is great, especially as your application grows in complexity.

One of my main bugbears with Grunt, however, is that there's no elegant way of passing data from one task to another task. Each task will generally take in a file and spit out a file, which means that, say, if you have some Handlebars templates that you want to convert to HTML and minify them, you need two tasks to operate on the same file, you can't easily combine them into a single task. So the handlebars conversion will first open the template, process it, and save a file to disk. Then the minification task needs to open the saved file, process it, and save the file again. Now, with most computers these days having an SSD, it's not as slow as it could be, but I find it makes for more convoluted setups and slightly slower build times.

When you write automate your setup with Grunt, you'll notice it favours configuration over code. I have very simple example of what a Grunt setup looks like:

*explain thing*

## Gulp
Gulp is the second most popular front-end build tool, which, like Grunt, has an astonishing amount of plugins available for it, which isn't bad for only having been out for two years. There are two main differences between Gulp and Grunt, though:

The first being that Gulp supports piping data from one plugin to another in the same task, which means you won't have to save temporary files to disk if more than one plugin is dealing with the same file. This leads to great benefits both for both readability and for speed.

Secondly, it favours code over configuration, which you can see in the following code snippet:

*explain thing*
