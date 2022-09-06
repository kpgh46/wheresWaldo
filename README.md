# Where's Waldo (Photo Tagging App)

This project is the classic "Where's Waldo" game built with React and Firebase

[preview](https://kpgh46.github.io/wheresWaldo/)

## Overview

Where's Waldo is a game where the goal is to find Waldo (along with other characters) as fast as possible. Characters are hidden within a 'busy' photo. Once the user clicks on all characters, the level is complete. If found fast enough, the user may enter their name for the leaderboard where fastest times are tracked.

## Functionality

The user can choose from four different levels, each with increasing difficulty. Once a level is selected, the game starts. Each level has a different set of characters which are shown above the game board. When a character is clicked on, a message will appear confirming which character was found and the character image will turn grey. Once all characters are found, a prompt will appear confirming all characters were found and the amount of time it took. A global leaderboard can be accessed from the home screen

## Features

-   4 unique boards to play
-   Time recorder during gameplay
-   Tracking and confirmation to when a character is selected
-   Global leaderboard save on FireBase

## Technologies

-   React.js
-   Firebase
-   CSS3

## Setup

-   install Node.js
-   Go to the project directory in the terminal & install the required dependencies by using: npm install
-   Build the distribution files using: npm run build
-   npm run start
