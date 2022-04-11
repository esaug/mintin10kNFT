import React from "react"

export default function Footer() {
    return (
        <div>
            <div className=" container flex flex-row text-center text-white">
                <div className="basis-1/6  md:flex"></div>
                <div className="basis-full border-t-blue mt-10 flex flex-col">

                    <div className="sm: ">
                        <div className=" md:ml-60 place-content-center  col-50 mt-10 md:flex ">
                            

                                <div>
                                    <img src="https://i.ibb.co/QHBCh3D/icons8-discord-30.png" className="inline-block" /> <a className="pr-10">Discord</a>
                                </div>
                                <div>
                                     <img src="https://i.ibb.co/0XCV5Md/icons8-telegram-app-30.png" className="inline-block" /><a className="pr-10">Telegram</a>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/xD21bCD/icons8-facebook-30.png" className="inline-block" /><a className="pr-10">Facebook</a>
                                </div>
                                <div className="sm:pr-14">
                                     <img src="https://i.ibb.co/9nv5Pdz/icons8-twitter-30.png" className="inline-block" /><a>Twitter</a>
                                </div>
                                
                            
                        </div>
                       
                    </div>

                    <div className="h-32"></div>


                </div>
                <div className="basis-1/6 hidden md:flex "></div>
            </div>
        </div>
    )
}