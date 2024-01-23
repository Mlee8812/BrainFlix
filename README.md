# BrainFlix App

Front-End Functionality:

Utilizing React and Node Express, this full-stack app leverages API integration and state management to seamlessly pass data as props. The dynamic generation of side videos and the main video content, including comments, is achieved through efficient use of props.

The front-end comprises three key routes: Home/Video Player Page, Video Upload Page, and Side Video with Video ID. Notably, clicking on a video within the "Next Video" list navigates to the Video Details Page for the selected video, presenting comprehensive information such as likes, views, author details, description, and more.

Back-End Functionality:

The back-end server is structured around specific endpoints and responses, notably including GET/video, GET/video/:id, and POST/video. Submitting a new video through the Upload Page triggers a POST request to the API, ensuring seamless integration with the back-end.

Main Page:

On the main page, the "Next Video" list intelligently excludes the currently displayed video. This is achieved through the utilization of the componentDidUpdate lifecycle method and match.params from react-router, facilitating precise updates to the main video data when necessary.

![Screenshot 2024-01-23 at 3 12 23 PM](https://github.com/Mlee8812/BrainFlix/assets/97935821/1b0214c5-234c-47d5-9b46-28ec2d7de1fa)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
