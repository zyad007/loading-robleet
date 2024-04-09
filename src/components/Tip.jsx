import React, { useEffect, useState } from 'react'

export default function Tip() {
    const [tipText, setTipText] = useState("")
    const [tipTitle, setTipTitle] = useState("")
    const [tipImage, setTipImage] = useState("")
    const tips = [
        {
            text: "Get Big Bonus from refering your friends",
            title: "AFFILIATE SYSTEM",
            img: "../star.png"
        },
        {
            text: "Come to us and get bonuses everyday!",
            title: "DAILY BOUNS",
            img: "../gift.png"
        },
        {
            text: "The higher rank you are, the more surprising the rewards will be",
            title: "XP REWARDS",
            img: "../xp.png"
        },
        {
            text: "Players in the chat randomly get rewards",
            title: "CHAT RAIN",
            img: "../lightning.png"
        },

    ]
    function changeTip() {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * tips.length)
        } while (tips[randomIndex].title === tipTitle)
        setTipImage(tips[randomIndex].img)
        setTipText(tips[randomIndex].text)
        setTipTitle(tips[randomIndex].title)
    }
    useEffect(() => {
        setTimeout(changeTip, 5000)
    }, [tipText])
    useEffect(() => {
        changeTip()
    }, [])
    return (
        <div className='absolute top-2/3 text-white text-xl flex items-center font-Bai'>
            <img className='w-12 m-2' src={tipImage} alt="" />
            <div>{tipText}</div>
        </div>
    )
}
