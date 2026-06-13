// components/marketplace/FavoriteButton.tsx

"use client";

interface FavoriteButtonProps {
  templateId: number;
}

export default function FavoriteButton({
  templateId,
}: FavoriteButtonProps) {
  const handleFavorite = () => {
    const existingFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (!existingFavorites.includes(templateId)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([
          ...existingFavorites,
          templateId,
        ])
      );
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className="text-xl hover:scale-110 transition"
    >
      ❤️
    </button>
  );
}