"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import shuffleArray from "../utils/shuffleArray";

import "../styles/memoryGame.css";

const API_URL =
  "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10";

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [turns, setTurns] = useState(0);
  const [errors, setErrors] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (!storedName) {
      const name = prompt("Enter your name:") || "Player";
      localStorage.setItem("username", name);
      setUsername(name);
    } else {
      setUsername(storedName);
    }
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const images = data.entries.map((entry) => entry.fields.image.url);
    const duplicatedCards = shuffleArray([...images, ...images]);
    setCards(duplicatedCards.map((image, index) => ({ id: index, image })));
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || matched.includes(index)) return;
    setFlipped((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;

      if (cards[first].image === cards[second].image) {
        setMatched((prev) => [...prev, first, second]);
      } else {
        setErrors((prev) => prev + 1);
        setTimeout(() => setFlipped([]), 1000);
      }

      setTimeout(() => setFlipped([]), 1000);
      setTurns((prev) => prev + 1);
    }
  }, [flipped]);

  return (
    <div className="memory-game">
      <h1 className="memory-game__title">Memory Game</h1>
      <p className="memory-game__player">Player: {username}</p>
      <p className="memory-game__stats">
        Turns: {turns} | Errors: {errors}
      </p>
      <div className="memory-game__board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`memory-game__card ${
              flipped.includes(index) || matched.includes(index)
                ? "memory-game__card--flipped"
                : "memory-game__card--hidden"
            }`}
            onClick={() => handleCardClick(index)}
          >
            {(flipped.includes(index) || matched.includes(index)) && (
              <Image
                src={card.image}
                alt="Animal"
                width={100}
                height={100}
                className="memory-game__image"
              />
            )}
          </div>
        ))}
      </div>
      {matched.length === cards.length && (
        <p className="memory-game__win-message">
          🎉 Congratulations {username}! You won! 🎉
        </p>
      )}
    </div>
  );
}
