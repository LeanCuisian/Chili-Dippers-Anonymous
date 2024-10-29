/*   STEP 1   */
export const leagueID = "1048351284631437312"; // your league ID
export const leagueName = "Chili Dippers Anonymous"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>The 2024 season of Chili Dippers Anonymous is in full swing and a few have been able to seperate themselves from the pack. However, an injury ridden season may spoil their chances at the prized championship.</p>
<p></p>
<p>Welcome to our newest member, Catboy Dale Walker. May the fantasy gods be better to you than they were to your predecessor.</p>
<p></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
//       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "466346328377520128",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Ty McAfoose",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "The second coming and much better looking version of Dave Ramsey. Knows how to play fantasy sports like no one else.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 5845, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "466469672452091904",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Adam Engstrom",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "Lover of all things brown, especially eyes.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8137, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "475353628295557120",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Addison Haller",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "That Jawn from Philly",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "546925061052960768",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Dan Dryer",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "A confused nittany lion living in a panther's body. Kenny Pickett is my lord and savior.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8160, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "830874983730348032",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Ian Overbaugh",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "According to Tunch Ilkin, 'Overbaugh has a case of the yips' after committing 3 false starts in one half.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 9479, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "966886262026076160",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Brett Jones",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "I love Danny Dimes and making the finest Clams Casino.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 5870, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "DEF", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 4, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "967290990300135424",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Rich Doyle",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "Rumor has it, you can still hear the one I doinked off the upright against Mt. Lebo in 2006.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 10866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 6, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "981380626676809728",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "JR Hilliard",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "Wait, I thought this was the real fantasy 'football'. The only color is blue, oops, red. Go Gooners!",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 6945, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 1, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "983865341694603264",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Chaz Bondarenka",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "Lover of all things black (or blue) and gold, taking country roads, and making fine steel fabrications @puttshack @puttery.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 378, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "984637480877998080",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Kevin DiCarlo",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "I have a dream... to be adopted by <3 <3 Saquon Barkley and Trace McSorley <3 <3.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usualy your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 7, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "985014336341020672",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Scott Braun",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "Dilly Dilly... Life doesn't get much better than sippin' on a spotty, while puffin' on a stogie, and cheering on the Packies. Go Packies, bahds!",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 175, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 7, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
//       "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "740354587919269889",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Dale Walker",
//       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       // "location": null, // (optional)
       "bio": "The name is Catshark - lover of the Kentucky Wildcats. Don't take this pussy lightly.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       //"philosophy": "Your fantasy team's philosophy",
       "tradingScale": 7, // 1 - 10
       "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    {
  //     "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "466469672452091904",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Adam Engstrom",
      // "tookOver": 2023, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
       //"location": "Youngstown, OH", // (optional)
       //"bio": "Lover of all things brown, especially eyes.",
       //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       //"fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
       //"favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       //"rival": {
//         name: "Brett Jones", // Can be anything (usually your rival's name)
         //link: 6, // manager array number within this array, or null to link back to all managers page
         //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       //},
       //"favoritePlayer": 6789, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       //"rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       //"philosophy": "Your fantasy team's philosophy", // (optional)
       //"tradingScale": 5, // 1 - 10 (optional)
       //"preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       }
