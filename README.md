# For learning purpose
![GitHub release (latest by date)](https://img.shields.io/github/v/release/gauraputu/idaman)


made with Next.js
there's a lot of unnecessary things I did here and I did that because I didn't know what is good at the time. I should be able to make a better one a long time after this done.
this web app is auto deployed on cloudflare on https://idaman.pages.dev/
the data used in this web app is fetched from google sheet.

## What does this web app do?
so essentially this is made to make my work easier. My work is to synchronize data in the company database with data got in the field (we'll disregard the reason why the the data is different in the first place). We have a web interface to input data and we use telegram to share data between my team and the team on the field. the problem is if I were to input it using web interface it would take too long (~20 minute) just to finish snychonizing one customer and we have a lot snyc to do in a day (it get tedious fast). fortunately there's this built in script function in the web interface to make it easier, you just need to type which data you want to input and to where in a csv file then upload the file. my collage already had made a list of which data to input so we just need look it up based on the field team finding. this reduced the time to do the task significantly to ~2-4 minutes (actually most of the time taken because the web interface is so so slow, yes i say so twice to emphasis). it already great. what this web do is automating the lookup that we had to do. so essentially all we just need to do is copy the request, and let the web app do the lookup automatically. so far it reduce the time to do the task to ~1-3 minutes. 

## how to run in local environment after clonning
since node_module is in .gitignore, run `npm install` first then `npm run dev` 

## depedency
`npm install react-hot-toast`