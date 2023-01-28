# Wayfarer

## Full game release date: July 1, 2023

Welcome to Wayfarer. A multiple choice mystery RPG with some shocking twists and turns.

The game's current state is mainly structural. It has the structure and foundation that will be used in the final game, but the current data and adventure options are placeholders for the true storyline to come later.
<p>&nbsp;</p>


### Visuals

![welcome screen](https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/readme/welcome.png)

![character selection](https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/readme/character_design.gif)

![event action](https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/readme/event.gif)
<p>&nbsp;</p>


### Installation

After initial cloning. Navigate into the project folder and run the following:

```
bundle install
```
```
npm install --prefix client
```
Once the apps dependencies are installed, run the following code to set up the database.
```
rails db:create db:migrate
```
The final step once setup is complete is to run the app. If running locally run the following command:
```
rails s
```
```
npm start --prefix client
```
Then navigate to http://localhost:4000/
<p>&nbsp;</p>


### Support
Once the official game launches, there will be a help page where support tickets can be submitted.
<p>&nbsp;</p>


### Roadmap
#### Future Release Features
##### Major Releases
- Help page
  - Bug ticket submission ability
  - List of future features
- Add two more locations
  - ~~On frontend~~
  - ~~On backend~~
- Built out storyline
- 3 different ending options
- Item functionality
  - Aquire items
  - Use items
- Event option availability based on character attributes

##### Minor Releases
- 4 character options, replacing all three current options
- Music for each location, scene, or event
- Digital dice roll to determine action achievement
  - ~~Build die roll~~
  - Implement the die roll on option results page
- ~~Grey out location after all events from that location have been played~~
- Create password reset functionality

##### Bug Fixes & Tweaks
- ~~Add Location image to the location database: parse that image onto the event list page~~
- For each locations music, check to see if other music is currently playing and stop that music before playing other music
- Include a clear note on the login screen to remember your username and password. The game is still in development and currently can not reset passwords.
- Include note before landing page to turn speakers on for ideal game experience
<p>&nbsp;</p>


### Contributions
I am not open to contributions at the present time.
<p>&nbsp;</p>


### Acknowledgements
None yet. But this project will include many partners.
<p>&nbsp;</p>


### Project status
##### Currently in development.
<!-- ##### Active development has paused as of 10/15/22 and will resume December 2022 -->
