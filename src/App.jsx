import './App.css'
import AlbumList from "./components/AlbumList";

function App() {
  const myAlbums = [
    {
      name: "Album ett",
      songs: ["Låt 1", "Låt 2", "Låt 3"],
    },
    {
      name: "Album två",
      songs: ["Låt A", "Låt B", "Låt C"],
    },
    {
      name: "Album tre",
      songs: ["Låt X", "Låt Y", "Låt Z"],
    },
  ];

  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList albums={myAlbums} />
    </div>
  );
}

export default App 