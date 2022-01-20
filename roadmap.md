# Roadmap

## 2022 Product Roadmap

### Big Fries

- Backend Server to event info, then later user info
- add more API's (you already have access to one) - BIG WIN!
- Better Search - Elastic Search NPM package?
- sort by "this week" "Next week" "this Month" - bar below main title
- navitaion, logo, social icons at the top of page
- App store ready?!
- whole SDHM app to Jamstack (like the whole app, the wordpress side too)

### Small Fries

- add missing Schema Mark up, check in Search Console - probably could to export the full schema as a giant object?
- Dates to more readable dates with search working
- Venue / DJ's Titles not showing - func getting called too early
- city icon text max characters limit "San Fran..."
- set city as cookie or in local storage
- hover states, active states for sidebar DJ's and Venues
- "City" icon shows city at on first load
- loads Event info in an iframed popup - so that it doesn't leave site

### Done 2022

- [done] update DATE to use DAY.js
- [done] fix apple PNG icon

## 2021 Roadmap

Sept 5th

Maybe I just leave SDHM alone and put this all on sandiegohousenusic.com/events
this would keep all WordPress URL's in place.
Then I can buy another domain for the events site, if i want to continue building this app. I need to upgrade the techstack now, otherwise it will start to get too late.

Sept 4th New List

- [done]fix date search
- [done]sidebar with Venues
- [done]sidebar with Artists

August 31, 2021

MVP Roadmap to launch app on main domain sandiegohousemusic.com

- add all needed SEO, just copy from current homepage
- add main navigation, or just in footer
- on homepage add video, mixes, and mix carausel ? (later)
- upload to my own server ? (not sure)

- final touches
  - desktop nav base color
  - mobile nav - not fixed, adjust transistion
  - mobile search - adjust location

What is my goal here? What am I trying to do?

- build an app with a modern tech stach and infrastructure
- build out a produce that attracts users and an audience
- keep learning while making cool shit
- be a promoter of events in every city, just because I can
- leaverage in the future for DJ gigs and other cool perks like travel, etc
- be able to leverage audience for promoting other events, partnerships

## SHARING

- Share this event by... Text, Social
- "I found this event at SanDiegoHouseMusic.com"

## Music TODO

- SORTABLE MUSIC MIXES (last 5 years?)
  - top rated by stars

[DONE!!] ## IPSTACK - Location Detection  
 https://ipstack.com/quickstart
API KEY 316340baee8e3995e8d261a746a2571a

[DONE!!] ## FREE
https://tools.keycdn.com/geo.json?host={IP or hostname}

## UI TODO

- [DONE!] add icons next to each dropdown button
- [DONE!] remove "Live Stream" for now,
  [DONE!] - remove live stream artists - maybe bring back as a different section / area - below in person events

- change event layout

  - [PARTIAL] change single layout to match vividseats
  - [DONE!] reduce amount of events shown... have load more button
    - Add "View All" and change to "show More"
  - reduce amount of artists, have {more} clickable button

- [DONE!] add "Upcoming Events Near You

  - with (San Diego)" headline with city

- [PARTIAL] format date like vividseats: line 1: august 8th line2 Saturday \* 8pm

- add sidebar with sortable options "Filter Results"

  - sort "by venue"
  - sort "by artist"
  - pupular cities?
  - ... more

- mobile

  - add clickable hamburger - with an easy to navigate menu

- ADD IMAGES TO EVENTS
- Integrate TICKET MASTER API
- Integrate Stub Hub API

## Add ability to create pages programatically

- Have page URLS for: city, stata, artist, venue
- URL structure:
  /concerts/ ??
  /concerts/california/san-diego
  /california/san-diego/venue-name
  /artist/kaskade

- Schema Markup for Events
- On Page Markup

  https://www.vividseats.com/concerts/
  https://www.vividseats.com/Login.action

- Hamburger Navigation

  Cities
  Events
  Venues
  Dates
  User Icon

  ## Filter Results

  This Weekend
  Next Weekend
  This Month
  Next Month

  By Time
  Day
  Night

  By Venue
  ....
  ....
  ....
  More

Upcoming Events Near You

Events in all locations

- Search Behaviour on Mobile

  "Search by artist, event, city or venue"

## User Accoints

    - Google Login / Firebase?
    - Facebook?

### Possible Approaches:

Next.JS Server side rendering with dynamic routes
Node JS - need to research ways
Change Front End to React - not really needed right now, but would be cool
Database - can use to store API info from different sources
Database- will need for login to hold user info

Data - put in local or session storage or too big?

FRont end --. API - Displays on website. No data is stored, no cookie. Dont know anything about user.

Node -> Service - > API once a day - Stores Results somewhere (locally).
--> Font End read local file.

    --> If multiple API's need to sort the data into a single local table

Cache Event Data on Server

### Integrate more API's

- research Ticket Master, Live Nation, Comedy Clubs too?

## Add social media interaction ability

- ability to like venues / artists
- ability to share
