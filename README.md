**CubingBlog website**

To view the website, use this link: https://mmodules.github.io/web-development-task-2/

The website is organised in folders. Each page has its own folder except for index.html for the home page (had to do it so that Github Pages can work)

Each page references ./css/pagestyle.css for the vast majority of css. There are no other css files. Some inline css is used but it's only in like 4 lines I think.

I decided to put all the javascript in separate folders and not inside a single file, since none of it is repeated, and I thought it would make the file too bulky and less organised. The script files are located in the folder where they are being used. This means the scope of the scripts does not extend beyond the file they are in.

All images are in ./images

--

All my decisions were explained in comments within the .js files themselves where I thought it was appropriate/necessary

The only notable addition I can make is that I had to do research to learn about requestAnimationFrame, as I didn't know how to make the timer update in real time.
I found some useful information on how to do this from the following reddit thread:
https://www.reddit.com/r/learnjavascript/comments/ql9yes/how_to_set_up_a_timer_in_javascript/

I already knew how to use Date.now and finding the difference to get the time elapsed, but I never used javascript to make a stopwatch before, so I didn't know about the
existence of requestAnimationFrame. I also read about jsQuery being good for stuff like this, but I honestly didn't want to introduce another dependency for such a small
project, so I dismissed that idea.

Bootstrap JS was used in all pages of this website.