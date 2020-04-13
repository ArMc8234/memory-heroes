# Memory Heroes

Welcome to my 'clicky-game' project, "Memory Heroes!"

![Demo](./public/assets/Memory_Hero_Demo.gif)

You can access the heroku-deployed app at https://memory-heroes.herokuapp.com

## Summary
This project uses React.js and Bootstrap. A JSON file was created to hold JSON objects with all of the character details.

```javascript
 {
      "id": 1,
      "name": "Apocalypse",
      "image": "/assets/apocalypse.jpg",
      "clicked": false
    }
```
A component titled "CharacterCard" was created to receive the JSON data as props and render the cards displayed within the Game wrapper.

```javascript
{this.state.characters.map(character => (
                      <CharacterCard
                        name={character.name}
                        image={character.image}
                        id={character.id}
                        key={character.id}
                        // type={"img"}
                        clicked={character.clicked.value}
                        toggle={this.toggle}
                        handleIncrement={this.handleIncrement}

                      />
                    ))}
```

A series of functions toggle filters through the characters list to determine the character chart that is selected, checks the characters.clicked boolean to determine if it was previously selected and the flips that boolean to "true" if it has not been previously chosen. The state of the score is changed and compared to the previous higher score while the character cards are reshuffled.  If the user selects a card that has been previously chosen, then the user loses and the game is reset.

# React.js Readme File Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
