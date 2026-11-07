import Album from "./Album";

export default function AlbumList({ albums }) {
  return (
    <div className="AlbumList">
      <h3>Album List</h3>
      {albums.map((album, index) => (
        <Album key={index} album={album} />
      ))}
    </div>
  );
} 