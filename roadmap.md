# Roadmap 

## IPSTACK - Location Detection 
  https://ipstack.com/quickstart
  API KEY  316340baee8e3995e8d261a746a2571a

## SHARING 
  - Share this event by... Text, Social 
  - "I found this event at SanDiegoHouseMusic.com"


## Music TODO 
  - SORTABLE MUSIC MIXES (last 5 years?)
    - top rated by stars 

## UI TODO

  - [DONE!] add icons next to each dropdown button
  - [DONE!] remove "Live Stream" for now, 
    [DONE!] - remove live stream artists 
     maybe bring back as a different section / area - below in person events 

  - change event layout
    - [PARTIAL] change single layout to match vividseats
    - [DONE!] reduce amount of events shown... have load more button 
        - Add "View All" and change to "show More"
    - reduce amount of artists, have {more} clickable button
  
  - [DONE!] add "Upcoming Events Near You 
    - with (San Diego)" headline with city

  - [PARTIAL] format date like vividseats: line 1: august 8th  line2 Saturday * 8pm 

  - add sidebar with sortable options "Filter Results"
    - sort "by venue" 
    - sort "by artist"
    - pupular cities? 
    - ... more 

  
  - mobile
    - add clickable hamburger - with an easy to navigate menu

  - ADD IMAGES TO EVENTS
  - Integrate TICKET MASTER API


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
  Database-  will need for login to hold user info

  Data - put in local or session storage or too big?

  FRont end --. API - Displays on website. No data is stored, no cookie.  Dont know anything about user. 

  Node -> Service - > API once a day - Stores Results somewhere (locally). 
    --> Font End read local file. 

    --> If multiple API's need to sort the data into a single local table 

  Cache Event Data on Server  

  ### Integrate more API's

  - research Ticket Master, Live Nation, Comedy Clubs too? 


## Add social media interaction ability
  - ability to like venues / artists
  - ability to share


