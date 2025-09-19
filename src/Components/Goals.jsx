








function Goals(){

    const goals = [
  { src: "/no-poverty.svg", text: "No  Poverty" },
  { src: "/education.svg", text: "Quality Education" },
  { src: "/water.svg", text: "Clean Water and Save life" },
  { src: "/health.svg", text: "Good Health and Care" },
  { src: "/help.svg", text: "Partnerships For the Goals" },
  { src: "/food.svg", text: "Zero Hunger" },
];

    return(
        
            <div className="  py-5  px-8 md:px-28">
                <h4 className="text-center text-xl text-[#302f2f]">Subtainable Development Goals</h4>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  ">
                    {goals.map((goal, i) => (
                    <div
                        key={i}
                        className="min-h-[100px] min-w-[80px]   bg-[#e6f5db] flex
                         flex-col items-center justify-center p-6 rounded-lg shadow-sm hover:shadow-md transition">
                        <img
                        src={goal.src}
                        alt={goal.text}
                        className="w-12 h-12 "/>
                        <p className="text-sm font-medium text-gray-700 text-center leading-snug whitespace-wrap mt-4">
                        {goal.text}
                        </p>
                    </div>
                 ))}
                </div> 
            </div>
        
    )
}
export default Goals;