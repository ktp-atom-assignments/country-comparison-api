# Country Comparison API

### APIs

1. `/api/v1/countries` - To fetch all the countries
2. `/api/v1/population/:country/:date` - To fetch population of country on given date

<b>Note - </b> Use date format YYYY-MM-DD

### Bonus

1. Some scenarios to consider (leave your thoughts inline in your code or edit the README):

- How efficient is your code? What are some ways that you could improve performance?
- Suppose we expect this API to be hit 1000s of times a second. How can we handle the load?
- What if the 3rd party provider is not available? How resilient is our API?
- What if the requirement for the new endpoint was to also allow the consumer to compare populations for any given date. How would you modify your implementation?
- What if we have a database of users and we wanted to make our API smarter by defaulting comparisons to always include the population of the current user's country. How could we accomplish this?
- What if we wanted to keep a tally of the most frequently requested countries and have this be available to consumers. How could we accomplish this?
