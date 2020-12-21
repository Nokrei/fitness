The main goal of this project was to practice my skills with using Material UI. I chose general fitness as I am familiar with the subject. 

The app is composed of a variety of calculators. All the calculations are done client-side. I was considering making this a full stack application, and still might in the future, but as the main purpose was practicing with Material UI I decided to stick to the front-end only.

All the activities and meals in the Exercise and Diet sections are hard coded. I am aware of this not being the optimal solution. I am not storing them in a database for reasons mentioned above, and I could not find a third-party API that would suit my needs. 

Most of the custom styling is done inline, with some located in the App.css file – mostly styles changing on window resize. The resize itself is handled by a custom hook – useWindowDimensions. 

The app is written in React, makes use of React router and the context API. 

One small feature I really like is the dark/light mode button in the upper right corner of the app’s top navigation bar. It was easy to implement and execute(largely thanks to Material UI’s Theme Provider). 
