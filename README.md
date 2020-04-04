<h2>Building</h2>
<ol>
  <li>Run ```git clone https://github.com/klrs/simple_survey.git``` on chosen location</li>
  <li>Run .sql script with MySQL server of your choice with ```source /your/path/here/simple_survey/backend/survey_mysql_create.sql;```</li>
  <li>Run ```npm install``` in simple_survey/backend</li>
  <li>Run ```npm install``` in simple_survey/simple_survey_frontend</li>
  <li>Run ```npm start``` in simple_survey/backend</li>
  <li>Run ```npm start``` in simple_survey/simple_survey_frontend</li>
  <li>Open http://localhost:3000/ in browser if it doesn't automatically open</li>
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
