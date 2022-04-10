import React from "react"

export default function Footer() {
    return (
        <div>
            <div className="inline-block md:flex md:flex-row  text-center fredoka text-white">
                <div className="basis-1/6 hidden md:flex"></div>
                <div className="basis-full border-t-blue mt-10">

                    <div className="containers text-right justify-center pt-30">
                        <div className="col-50 mt-10">
                            
                                <img src="https://i.ibb.co/QHBCh3D/icons8-discord-30.png" className="inline-block" /> <a className="pr-10">Discord</a>
                                <img src="https://i.ibb.co/0XCV5Md/icons8-telegram-app-30.png" className="inline-block" /><a className="pr-10">Telegram</a>
                                <img src="https://i.ibb.co/xD21bCD/icons8-facebook-30.png" className="inline-block" /><a className="pr-10">Facebook</a>
                                <img src="https://i.ibb.co/9nv5Pdz/icons8-twitter-30.png" className="inline-block" /><a>Twitter</a>
                            
                        </div>
                       
                    </div>

                    <div className="h-32"></div>


                </div>
                <div className="basis-1/6 hidden md:flex "></div>
            </div>
        </div>
    )
}