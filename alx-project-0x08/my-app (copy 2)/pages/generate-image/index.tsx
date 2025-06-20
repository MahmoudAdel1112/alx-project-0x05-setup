import React from "react";

const index = () => {
  const [inputVlaue, setInputVlaue] = React.useState<string>("");
  const [image, setImage] = React.useState<string>();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: inputVlaue,
      }),
    });
    const data = await res.json();
    setInputVlaue("");
    setImage(data.generated_image);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="prompt"
          id="prompt"
          value={inputVlaue}
          onChange={(e) => setInputVlaue(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Generate
        </button>
      </form>
      {image ? (
        <div>
          <img src={image} alt="" />
        </div>
      ) : (
        "Waiting for an image"
      )}
    </div>
  );
};

export default index;
