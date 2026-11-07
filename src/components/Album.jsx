export default function Album({ album }) {
  return (
    <div className="Album">
      <h3 className="Album-title">{album.name}</h3>
      <ul>
        {album.songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
} 