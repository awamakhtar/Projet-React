
function Stats(){
    return(
        <section className="">
            <div className="bg-[#e6f5db] text-[#302f2f] flex flex-col md:flex-row md:items-center md:justify-between p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-6">
                <div className="space-y-1 text-center md:text-left">
                    <p className="m-0 font-normal tracking-wide text-gray-900  md:text-">Lets Change The</p>
                    <h3 className="m-0 font-bold text-xl tracking-wide">World With Humanity</h3>
                    <p className="m-0 text-sm text-orange-500">Delivering help and hope to children</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6">
                    <div className="flex items-center space-x-1 ">
                                  
                        <img src="/no-poverty.svg" alt="" className="w-8 h-8"/>  
                        <div className="space-y-1  sm:text-lef">
                            <h3 className="m-0 font-bold ">5960</h3>
                            <p className="text-sm text-orange-500">Completed Projects</p>
                        </div > 
                    </div> 
                    <div className="flex items-center  space-x-1"> 
                        <img src="/help.svg" alt="" className="w-8 h-8"/>
                        <div className="space-y-1  sm:text-lef">
                            <h3 className="m-0">3719</h3>
                            <p className="text-sm text-orange-500">People We Help</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <img src="/achievement.svg " alt="" className="w-8 h-8 text-[#647955]"/>
                        <div className="space-y-1 sm:text-lef">
                            <h3 className="m-0">569</h3>
                            <p className="text-sm text-orange-500">Awards Achieved</p>
                        </div>
                    </div>
                </div> 
                           

            </div>
        </section>
    )
}
export default Stats;