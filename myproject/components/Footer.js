import React, { useState, useEffect } from 'react';


export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
    // Fonction de nettoyage pour effacer le timeout
    return () => clearTimeout(timer);
  }, [errorMessage]);

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setIsModalOpen(false);
        setSuccessMessage('');
      }, 3000);
    }
    // Fonction de nettoyage pour effacer le timeout
    return () => clearTimeout(timer);
  }, [successMessage]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) { 
      setErrorMessage('');
      setSuccessMessage('');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('Message sent successfully');
      } else {
        console.log("Failed to send message", data.message);
        setErrorMessage(data.message || "An error occurred, please try again later.");
      }
    } catch (error) {
      console.log("Message not sent", error);
      setErrorMessage("An error occurred, please try again later.");
    }
  };

  return (
    <footer className="bg-slate-800 text-white p-4 w-full mt-10 flex flex-col md:flex-row justify-center items-center ">
      <div className="flex flex-col md:flex-row justify-center items-center w-full  ">
        <img
          onClick={toggleModal}
          className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover cursor-pointer"
          src="/icon.jpg"
          alt="Contact"
        />
         
        {isModalOpen && (
          
          <div className="mt-4 md:mt-0 md:ml-10 bg-blue-800/60 backdrop-blur border border-white/50 text-black p-4 rounded-lg w-full md:max-w-xs">
            <h2 className="text-lg font-semibold mb-4 text-center text-white">Vous pouvez laisser votre message 😊</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="bg-red-300 text-white p-2 rounded hover:bg-red-400" type="submit">Envoyer</button>
            </form>
            {successMessage && <div className="text-green-500 mb-4 p-5">{successMessage}</div>}
            {errorMessage && <div className="text-red-500 mb-4 p-5 ">{errorMessage}</div>}
          </div>
        )}
      </div>
    </footer>

  );
}
