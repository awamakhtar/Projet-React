// function About() {
//   return (
//     <div className="flex flex-col md:flex-row justify-around p-8 text-start md:text-left  ">
      
//       <div className=" text-xl max-w-sm font-semibold">
//         <h2 className="text-2xl font-bold ">
//           We Work in More Than <br />
//           <span className="text-orange-500 ">7k Countries</span> <br />
//           To Strengthen Civic Space
//         </h2>
//       </div>

//       <div className="max-w-md">
//         <p className="text-gray-700 leading-relaxed ">
//           Empowering communities worldwide by protecting human rights, 
//           promoting free  expression, and supporting active citizen participation. 
//           Our work helps ensure that civil society can thrive, speak freely, and shape their own future.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;



function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:px-28 gap-4">
      {/* Bloc gauche */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-xl md:text-3xl  leading-snug font-normal text-[#302f2f]">
          We Work in More Than <br />
          <span className="text-orange-500 font-bold ">7k Countries</span> <br /> To{" "}
          <span className="font-bold">Strengthen Civic Space</span>
        </h2>
      </div>

      {/* Bloc droite */}
      <div className="max-w-lg text-gray-600 text-center md:text-left">
        <p className="mb-4">
          Empowering communities worldwide by protecting human rights,
          promoting free expression, and supporting active citizen
          participation. Our work helps ensure that civil society can thrive,
          speak freely, and shape their own future.
        </p>
        {/* Signature image */}
        <img
          src="/signature.png"
          alt="Signature"
          className="h-10 mt-2"
        />
      </div>
    </div>
  );
}

export default About;

