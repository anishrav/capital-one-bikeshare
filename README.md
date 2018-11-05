# Capital One Bikeshare Web Application

I used pandas, numpy, and matplotlib to analyze the data in Python. Prior to the challenge I was familiar with data analysis tools in Python on face, but never had to apply them in a rigorous context with a large data set. This challenge enabled me to put my knowledge of data science to the test and I learned a great deal about using these data science libraries in Python through the experience. 

I used Chartist.js, Bootstrap, and JQuery in conjunction with HTML, CSS, and JavaScript to compile the front-end of the application. Learning about new libraries and their functionalities is a skill that I am continuously refining, and projects like these are integral in that refining process. Linking the back-end and front-end was an entirely new concept that I had no experience with before, and I had to keep both technologies in mind when designing the JSON output that I would export from Python to be used in the front-end application. The back-end data analysis was done in the Jupyter Notebook in the repository. This helped me understand the importance of designing code that not only functions, but simplifies the entire process as much as possible. 

In regards to the questions for the challenge, I created four charts in the web app using Chartist.js. Three trends that I wanted to explore were variations amongst passholder types for durations of rides, variations amongst trip route categories for durations of rides, and variations amongst bikes for durations and distances of rides. For the first two trends, I split up the data into separate data frames and analyzed each data frame individually, using a rolling mean to portray the data smoothly. For the last two trends, I chose the top 10 bikes (by number of rides) and analyzed if there were any significant discrepancies amongst them in terms of distance and duration. Analysis of the trends can be found on the web app.

I discovered that station 3069 was the most popular starting station and station 3005 was the most popular ending station. By using pandas data frames, I was able to quickly count the occurrences of starting and ending stations in the large data set.

To calculate the average distance traveled, I split up the problem into two parts, by trip route categories. For the one way trips, I used the Haversine formula to calculate the average distance traveled for rides in which the starting and ending latitudes and longitudes were known. For the round trips, I estimated that they biked at 22.43 km/h based on a Strava report (https://www.cyclingweekly.com/...) and multiplied this by their duration in hours. I added this to the data frame in Python and computed a mean, which resulted in 6.88km for the average distance traveled. There were several outliers in which the bike may not have been ridden the entire trip that skewed the data, and if there was research done on a sample of round trips to more accurately estimate the distance of those trips,  this statistic would have been more accurate. 

​To calculate the number of bikers who include ride sharing as a regular part of their commute, I counted the occurrences of flex pass and monthly pass rides in the data set, as we were allowed to assume that every entry was a unique rider. I calculated this to be 90,821 riders. 

To analyze the differences between seasons, I split up the data by seasons and analyzed each one individually. The differences in distance were interesting to analyze: summer's average distance was 13.18km, fall's was 5.90km, winter's was 2.78km, and spring's was 3.20km. In addition, summer's monthly pass users was 22548, fall's was 30789, winter's was 19516, and spring's ​​​was 8451. This indicates that monthly pass users peak in the fall, even though the average ride distance is lower. This information could help the bike sharing company inform its decisions on how to market their subscription—towards the end of spring and summer would be prime times to market the monthly passes—and how often they need to service bikes in different seasons. 

The most popular combination of trip route category and pass holder type was one way trips amongst monthly pass holders - 77532 rides fell under this combination. 32777 walk-up riders took one way trips and 9034 flex pass riders took one way trips. This indicates the overwhelming popularity of one way trips amongst all ​​pass holder types. Monthly pass riders may use the bike sharing service for commuting, and that is typically a one-way trip. The same logic applies for walk-up riders and flex pass riders, but the monthly pass enables professionals and students to use the service when the season is right.
