import axios from 'axios'

axios.post('http://contact.plaid.com/jobs', {
 "name": "Lyhour Lay",
  "email": "lyhourlay1@gmail.com",
  "resume": "https://docs.google.com/document/d/1Co0Lu0ymVzhDd85JkLWvtw9Xfjp1MNNA/edit?usp=sharing&ouid=101451009492698030492&rtpof=true&sd=true",
  "phone": "951-331-8309",
  "job_id": "db2bd20f-649b-4a6a-8f63-4da8c9af99e9", // leave as is
  "github": "https://github.com/lyhourlay1", // optional
  "twitter": "@example", // optional
  "website": "https://lyhourlay1.github.io/portfolio/", // optional
  "location": "San Francisco", // optional
  "favorite_candy": "Twix", // optional
  "superpower": "multilingual" // optional
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
