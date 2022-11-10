# SignalMapper

## Background

SignalMapper is intended to be a data visualization of amateur radio signals in any given geographical area. Using location and callsign lookup APIs, the app will display the locations of these stations and their related info. It will be visually pleasing.

## Functionality and MVPs

In SignalMapper, user will be able to:

1. Input location data, such as a zip code or address, with a default provided
2. Click through nodes on a map representing the locations of radio signals
3. The map will be interactive
4. Display a list of the signals in the area
5. Display relevant data related to the signals in several visual styles
6. Include animations for different interaction events on the visuals

In addition, this project will include:

1. A README
2. An about page wtih links
3. A favicon
4. Basic instructions if needed or animated queues to the user

## Wireframes

<https://wireframe.cc/mN6GRz>

## Technologies, Libraries, APIs

This project will be implemented with the following technologies

- A D3 library to render the data visuals
- The radioreference.com API to retrieve radio data
  - <https://wiki.radioreference.com/index.php/API>
- The callook.info API to retrieve radio data
  - <https://callook.info/>
- Webpack and Babel to bundle and transpile
- npm to manage project dependencies

## Anticipated Features

1. A webplayer to listen to the stations
2. A noise mixer to combine sounds from other sources

## Timeline

### Friday and Weekend

- Begin backend interaction with the APIs to gather resources
- Get accustomed to D3 and basic visual rendering
- Implement app armature for interaction and styling/animation

### Monday

- Work with forms and API data being retrieved

### Tuesday

- Have a working version of data retrieval and display
- Continue styling and animation/interaction

### Wednesday

- Visually olish as much as possible to make sure the site is presentable

### Thursday Morning

- Deploy, rewrite proposal
