import { React, useState } from "react";

// import styles
import "./style.css";

const ArtistsWrapper = () => {
  const [title, setTitle] = useState("");
  // const [body, setBody] = useState('');
  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <h2>NFT Parking Lot</h2>
      <form>
        <label>NFT URL(OpenSea, Rarible, etc.):</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Parking Level:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="5">5% APY</option>
          <option value="10">10% APY</option>
        </select>
        <button>Park</button>
      </form>
    </div>
  );
};

export default ArtistsWrapper;
