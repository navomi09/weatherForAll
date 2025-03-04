import React from "react";

const VoiceInput = ({ setCity }) => {
  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = (event) => {
      const cityName = event.results[0][0].transcript;
      setCity(cityName);
    };
  };

  return (
    <button
      onClick={startListening}
      className="bg-purple-500 text-white px-4 py-2 rounded w-full mt-2 flex items-center justify-center"
    >
      🎤 Speak City Name
    </button>
  );
};

export default VoiceInput;
