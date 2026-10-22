// Editable starter FBS directory; conferences are approximate and can be edited per dynasty.
window.TEAM_GROUPS = {
'ACC':'Boston College|California|Clemson|Duke|Florida State|Georgia Tech|Louisville|Miami|NC State|North Carolina|Pittsburgh|SMU|Stanford|Syracuse|Virginia|Virginia Tech|Wake Forest',
'Big Ten':'Illinois|Indiana|Iowa|Maryland|Michigan|Michigan State|Minnesota|Nebraska|Northwestern|Ohio State|Oregon|Penn State|Purdue|Rutgers|UCLA|USC|Washington|Wisconsin',
'Big 12':'Arizona|Arizona State|Baylor|BYU|Cincinnati|Colorado|Houston|Iowa State|Kansas|Kansas State|Oklahoma State|TCU|Texas Tech|UCF|Utah|West Virginia',
'SEC':'Alabama|Arkansas|Auburn|Florida|Georgia|Kentucky|LSU|Mississippi State|Missouri|Oklahoma|Ole Miss|South Carolina|Tennessee|Texas|Texas A&M|Vanderbilt',
'AAC':'Army|Charlotte|East Carolina|FAU|Memphis|Navy|North Texas|Rice|South Florida|Temple|Tulane|Tulsa|UAB|UTSA',
'Conference USA':'Delaware|FIU|Jacksonville State|Kennesaw State|Liberty|Louisiana Tech|Middle Tennessee|Missouri State|New Mexico State|Sam Houston|UTEP|Western Kentucky',
'MAC':'Akron|Ball State|Bowling Green|Buffalo|Central Michigan|Eastern Michigan|Kent State|Miami (OH)|Northern Illinois|Ohio|Toledo|Western Michigan|UMass',
'Mountain West':'Air Force|Boise State|Colorado State|Fresno State|Hawaii|Nevada|New Mexico|San Diego State|San Jose State|UNLV|Utah State|Wyoming',
'Pac-12':'Oregon State|Washington State',
'Sun Belt':'Appalachian State|Arkansas State|Coastal Carolina|Georgia Southern|Georgia State|James Madison|Louisiana|Louisiana-Monroe|Marshall|Old Dominion|South Alabama|Southern Miss|Texas State|Troy',
'Independent':'Notre Dame|UConn'
};
window.STARTER_TEAMS=Object.entries(window.TEAM_GROUPS).flatMap(([conference,names])=>names.split('|').map(name=>({id:name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,conference}))).sort((a,b)=>a.name.localeCompare(b.name));
