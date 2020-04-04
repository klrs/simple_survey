<h2>Running</h2>
<ol>
<li>Run the /backend/survey_mysql_create.sql script with MariaDB</li>
<li>Get the correct dependencies. Refer to package.json files</li>
<li>run `node index.js` in /backend/</li>
<li>run `npm start` in /simple_survey_frontend</li>
  <li>Open http://localhost:3000/ in browser</li>
</ol>

<h2>REST endpoints</h2>
GET - '/api/scale/:id', where :id is the id of the scale
Gets scale by id.

GET - '/api/survey/:id', where :id is the id of the survey
Gets survey by id.

PUT - '/api/scale/:id/vote/:option', where :id is the id of the survey and :option is the option int [0, 5].
Increments chosen option field by one. Note: body is not needed.

<h2>Pictures</h2>
<img src=https://github.com/klrs/simple_survey/blob/master/kuva1.PNG>

<img src=https://github.com/klrs/simple_survey/blob/master/kuva2.PNG>
