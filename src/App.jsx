import Player from "./component/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="player">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>
        Game board
      </div>
    </main>
  );
}

export default App;
