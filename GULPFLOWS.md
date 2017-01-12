# Some notes on the build streams via the Gulpfile

There are two main gulpflows available. You run them from the project root folder
1. ```gulp dist-build```
2. ```gulp watch```

The first option uses mainly the gulp-tasks in the file tasks/buildflowDist.js - the
result is a set of minified files in the project dist-folder, which via Dockerfile can go to the static server.

The second option calls gulp task 'dev-build', building a non-minified set of
files which you can use for debugging via localhost, since the watch task also
starts up a server that then serves the files from the project dev-folder.
(You can run the 'dev-build' task using ```gulp dev-build``` , in case you don't want a server started).

The dist-build goes like this:
clean (dist-folder), init (dist-folder), sass (minified via gulp-clean-css), pages, resources, (legacy)js, eslint (modern js in src-folder), browserify (make app.js from src-folder js) & uglify(i.e. minify app.js)

(You might note that eslint gets run twice, once by the declaration of task 'eslint' in 'dist-build', then again via the task-calls of 'minify' -> 'browserify' -> 'eslint'. That's not maybe the most efficient flow, though it doesn't do much harm either.)

The dev-build goes like this:
clean (dev-folder), init (dev-folder), eslint (modern js in src-folder), browserify (make app.js from src-folder js), sass (non-minified), pages, resources, (legacy)js
