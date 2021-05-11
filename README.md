<h1>Where's Waldo</h1>

<p>This app is built on Rails and uses React to render the user interface. Data (character coordinates, high scores, player names, etc.) is stored in a postgresql database and accessed through API calls from React components to controllers in the Rails app. <p>

<p>This app is currently hosted for free by Heroku and can be seen live at <a href='https://brendons-wheres-waldo.herokuapp.com'>brendons-wheres-waldo.herokuapp.com</a>. (Heroku dynos are put to sleep after 30 minutes of inactivity. Please allow 30-45 seconds for app to load if it's inactive.)<p>
  
 <p>API calls might have to be set to no-cors if calling from a localhost. Otherwise you can set up your own database with starter data by running rake db:migrate and rake db:seed. </p>
  
 <p>Project was recommended by <a href='https://www.theodinproject.com/'>The Odin Project.</a></p>
  
<h5>Ruby Version: ruby 3.0.1p64</h5>
<h5>Rails Version: Rails 6.1.3.1</h5>
<h5>React Version: 17.0.2</h5>

<h5><i>*Recommend installing the Postgres app to access the database.</i></h5>
