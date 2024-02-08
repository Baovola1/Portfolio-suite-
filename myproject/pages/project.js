import styles from "../styles/Project.module.css";


export default function Project() {

  const GlobalVisionTitle = () => {
    const title = "GLOBALVISION".split('').map((letter, index) => (
      <span key={index} className="block">{letter}</span>
    ));

    return (
      <div className="text-center uppercase ml-10 flex flex-col items-center mt-11 font-semibold">
        {title}
      </div>
    );
  };
  const ProxibanqueTitle = () => {
    const title = "PROXIBANQUESI".split('').map((letter, index) => (
      <span key={index} className="block">{letter}</span>
    ));

    return (
      <div className="text-center uppercase ml-10 flex flex-col items-center mt-9 font-semibold">
        {title}
      </div>
    );
  };
  const CurlybraceTitle = () => {
    const title = "CURLYBRACE".split('').map((letter, index) => (
      <span key={index} className="block">{letter}</span>
    ));

    return (
      <div className="text-center uppercase ml-10 flex flex-col items-center mt-16 font-semibold">
        {title}
      </div>
    );
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen white">
    <h1 className={`${styles.growTextAnimation} text-center uppercase text-4xl font-bold `}>Project</h1>
  <div className="flex flex-col items-center justify-center space-y-4 w-full">
  {/* Div rouge avec carte contenant une vidéo */}
  <div className="flex justify-start white w-full mt-10">
  <GlobalVisionTitle />
    <div className="m-4 mt-4 bg-white shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4 ml-10"> 
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded" autoPlay muted >
        <source src="/video.mp4" type="video/mp4" />  
      </video>    
    </div> 
  </div>

  {/* Div vert avec carte contenant une vidéo */}
  <div className="flex justify-end white w-full mt-10">
  <ProxibanqueTitle/>
    <div className="m-4 bg-white shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4 mr-11">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded"autoPlay muted >
        <source src="/adele-someone-like-you_843273.mp4" type="video/mp4" />  
      </video>
    </div>
  </div>

  {/* Div bleu avec carte contenant une vidéo */}
  <div className="flex justify-start white w-full mt-10">
    <div className="m-4 bg-white shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4 ml-10">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded" autoPlay muted>
        <source src="/curlybrace.mp4" type="video/mp4" />
      </video>
    </div>
    <CurlybraceTitle/>
  </div>
</div>
</div>




    
      
      

    </>
  );
}
