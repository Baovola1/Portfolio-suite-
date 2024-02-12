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
    <div className="m-4 mt-4 bg-slate-800 shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4 ml-10"> 
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded" autoPlay muted >
        <source src="/globalvision.mp4" type="video/mp4" />  
      </video> 
      <p className="text-justify text-white">Globalvision est un logiciel commercial complet qui permet de gérer les produits, les clients et les transactions. Il offre également des fonctionnalités avancées telles que la visualisation de la localisation des acheteurs à l'échelle mondiale, des analyses détaillées des recettes et des bénéfices par mois et par jour, ainsi que la répartition des ventes par catégorie. De plus, il permet de consulter la liste des administrateurs et de suivre la performance des ventes.</p>   
    </div> 
  </div>

  {/* Div vert avec carte contenant une vidéo */}
  <div className="flex justify-end white w-full mt-10">
  <ProxibanqueTitle/>
    <div className="m-4 bg-slate-800 shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4 mr-11">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded"autoPlay muted >
        <source src="/proxibanque.mp4" type="video/mp4" />  
      </video>
      <p className="text-justify text-white">Proxibanque est un logiciel bancaire qui permet aux conseillers de gérer les comptes clients, effectuer des opérations CRUD, des virements, consulter l'historique des transactions, simuler des crédits, et aux responsables de superviser les conseillers.</p>
    </div>
  </div>

  {/* Div bleu avec carte contenant une vidéo */}
  <div className="flex justify-start white w-full mt-10">
    <div className="m-4 bg-slate-800 shadow-lg rounded-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-auto p-4 ml-10">
      {/* Intégration vidéo */}
      <video className="w-full h-auto rounded" autoPlay muted>
        <source src="/curlybrace.mp4" type="video/mp4" />
      </video>
      <p className="text-justify text-white">Curlybrace est une application web qui facilite la communication entre développeurs du monde entier. Elle offre une plateforme pour l'entraide, la recherche d'emplois dans la tech, le partage de projets et la mise en relation des membres, tout en permettant de visualiser leur emplacement sur le globe terrestre.</p>
    </div>
    <CurlybraceTitle/>
  </div>
</div>
</div>




    
      
      

    </>
  );
}
