# Country Comparison API

### APIs

1. `/api/v1/countries` - To fetch all the countries
2. `/api/v1/population/:country/:date` - To fetch population of country on given date

<b>Note - </b> Use date format YYYY-MM-DD

### Bonus Question

##### Q1. What if we wanted to keep a tally of the most frequently requested countries and have this be available to consumers. How could we accomplish this?

> We can use some cache (redis, memcached) to store more frequently requested countries.

##### Q2. What if we have a database of users and we wanted to make our API smarter by defaulting comparisons to always include the population of the current user's country. How could we accomplish this?

> Fristly we can get users information from DB (including Country name). Then we can use `/api/v1/population/:country/:date` API to get population. So, in this api we can pass user's country and current date (using Date object).

##### Q3. What if the 3rd party provider is not available? How resilient is our API?

> Yes, our api is resilient because we have proper error handling (using try catch block) system.

##### Q4. Suppose we expect this API to be hit 1000s of times a second. How can we handle the load?

> We can scale our system in horizontal way and use load balancer to distribute load in between servers.
