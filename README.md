This project used the API of https://codestats.net
and creates a chart with https://quickchart.io/

## How to use

Structure of the url is: `https://code-stats-maorun.vercel.app/api/codestats/{user}/top/{count}`

for markdown:
```markdown
[![Top Langs](https://code-stats-maorun.vercel.app/api/codestats/{user}/top/{count})] \
    (https://codestats.net/users/{user})]
```

### Examples
https://code-stats-maorun.vercel.app/api/codestats/maorun/top/10

results in 

[![Top Langs](https://code-stats-maorun.vercel.app/api/codestats/maorun/top/10)](https://codestats.net/users/maorun)

https://code-stats-maorun.vercel.app/api/codestats/maorun/top/5

results in 

[![Top Langs](https://code-stats-maorun.vercel.app/api/codestats/maorun/top/5)](https://codestats.net/users/maorun)

## to consider
No cache is used. Each request goes to the code:stats-API and redirects to quickchart.io with the collected data (which renders the image).
