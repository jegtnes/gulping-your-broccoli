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

The first being that Gulp supports streaming data from one plugin to another in the same task, which means you won't have to save temporary files to disk if more than one plugin is dealing with the same file. This leads to great benefits both for both readability and for speed.

Secondly, it favours code over configuration, which you can see in the following code snippet:

*explain thing*

## Broccoli
Broccoli is a fairly new contender in the build tools space, and is like Grunt in that it doesn't support piping, _however_, it's very quick in that unlike Grunt and Gulp, instead of working off files, it works off _trees_. More on this later.

It has significantly fewer plugins than the two previously mentioned tools, but that's also for a good reason. I'll explain that in a minute, but first, let's have a look at a sample Brocoli file.

*explain thing*

So, I mentioned it has way fewer plugins than Grunt and Gulp: This is due to a couple of things: Firstly, it's very new, but also, it was conceived as a _pure_ build tool, whereas Grunt and Gulp are considered more in the realm of task runners.

If you're familiar with, say, Rails, Broccoli could be considered roughly the equivalent of the asset pipeline, which has the sole job of compiling, concatenating, processing, and minifying all your assets.

Grunt and Gulp are a bit more than Rake. They can run the asset pipeline, but they also take care of the myriad of other things that's involved with building a modern site these days, like deployment, setup, scaffolding, etc. So if your setup is not too complicated, Broccoli could be an ideal candidate. But don't let that stop you—even the creator of Broccoli said it's not a replacement for Grunt, and to prove this point, you can run Broccoli as a Grunt task. So what is the primary reason to use Broccoli?

It was created out of a very common complaint: Build tools far too often get in the way of devs by being too convoluted and too slow, and Broccoli aims to address that. My last project had a massively complex Grunt setup that took seven seconds to compile your Sass. Now that doesn't sound like a lot, but if you save your stylesheet and have to wait seven seconds to see the results, that adds up of a lot of time wasted over the course of a project, especially if you're like me, and have the attention span of a squirrel on cocaine.

"Ooooh, it's compiling. This means I can tab over to Twitter while it compiles" and then twenty minutes later you realised you were actually working on a project instead of looking at cute kittens and pointless internet arguments for a living.

Unfortunately.

Broccoli aims to get rid of some of this slowness by using an abstraction called 'trees', which basically means you work off folders instead of files, or arrays of files. This doesn't make a massive difference in tasks where you pass in one file and one file comes back out, like, say, CoffeeScript, but can speed things up on projects where you have a many-to-one compilation like Sass, where you can import hundreds of small partials in one large file. I'm not smart enough to understand exactly why, but it means plugins can cache their output in a smarter way, as plugins can return the majority of their builds from caches.

In the upcoming demos, I'll be showing you this, and also its pitfalls. What we're going to cover is:
- Broccoli, to massively reduce the compilation time of your projects
- BrowserSync, to sync the state of your site across devices for much quicker testing, and to inject your new CSS right into your site without having to reload
- Automatically generating responsive images
- Generating inline CSS for huge performance boosts
