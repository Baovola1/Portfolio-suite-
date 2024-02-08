
export default function Project() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen white">
    <h1 className="text-center uppercase">Project</h1>
  <div className="flex flex-col items-center justify-center space-y-4 w-full">
  {/* Div rouge avec carte contenant une vidéo */}
  <div className="flex justify-start bg-red-500 w-full mt-10">
    <div className="m-4 mt-10 bg-white shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded" autoPlay muted >
        <source src="/video.mp4" type="video/mp4" />
        
      </video>
      <h1 className="text-center uppercase">Carte rouge</h1>
    </div>
  </div>

  {/* Div vert avec carte contenant une vidéo */}
  <div className="flex justify-end bg-green-500 w-full mt-10">
    <div className="m-4 bg-white shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded"autoPlay muted >
        <source src="/adele-someone-like-you_843273.mp4" type="video/mp4" />
        
      </video>
      <h1 className="text-center uppercase">Carte verte</h1>
    </div>
  </div>

  {/* Div bleu avec carte contenant une vidéo */}
  <div className="flex justify-start bg-blue-500 w-full">
    <div className="m-4 bg-white shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded" autoPlay muted>
        <source src="/curlybrace.mp4" type="video/mp4" />
      </video>
      <h1 className="text-center uppercase">Curlybrace</h1>
    </div>
  </div>
</div>
</div>




    
      
      

    </>
  );
}
