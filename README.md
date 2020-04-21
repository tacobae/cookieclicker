# cookieclicker
With Cookie Clicker open, click the bookmark.

## Configuration
You can tweak the clicking speed by changing the FC's `Speed` setting (clicking frequency in milliseconds) in your browser's JavaScript Console (the default is 100, meaning 10 times per second):

    FrenzyClicker.Speed = 200
All FC's settings can be managed in Cookie Clicker's "Settings" menu.

## Other mods
Frenzy Clicker should not conflict with any other mods (using other auto-clickers at the same time might slow down the game, though). To easily load FC and other mods together, just add them to the bookmark.
Frenzy Clicker should not conflict with any other mods (using other auto-clickers at the same time might slow down the game, though). To easily load FC and other mods with one click, just add them to the bookmark.

### Cookie Monster
### Example: Load FC and Cookie Monster with one bookmark

    javascript:( function () {
      Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');
