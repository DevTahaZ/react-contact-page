import React from 'react'
import { useState } from 'react'
import messageIcon from '../../assets/icons/message.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import emailIcon from '../../assets/icons/email.svg'
import hoverMessageIcon from '../../assets/icons/hoverMessage.svg'
import hoverPhoneIcon from '../../assets/icons/hoverPhone.svg'
import hoverEmailIcon from '../../assets/icons/hoverEmail.svg'
import serviceImg from '../../assets/service.svg'

function Contact() {
    const [messageIconDisplay, setMessageDisplayIcon] = useState(messageIcon)
    const [phoneIconDisplay, setPhoneDisplayIcon] = useState(phoneIcon)
    const [emailIconDisplay, setEmailDisplayIcon] = useState(emailIcon)

    const mainStyle = {
        cmn: 'mt-10 px-3',
        md: 'md:ml-40 md:mt-14'
    }

    const headStyle = {
        cmn: 'grid mb-16',
        sm: 'sm:justify-start'
    }

    const bodyStyle = {
        md: 'md:w-[1161px] md:flex md:justify-between'
    }

    const buttonCommonStyle = {
        cmn: 'w-52 h-10 flex font-bold text-sm items-center tracking-wider gap-3 uppercase border text-white bg-black rounded py-2 px-2',
        hover: 'hover:bg-white hover:text-black hover:border-black duration-300'
    }

    const buttonWrapperStyle = {
        cmn: 'grid font-[Poppins] justify-between duration-300',
        md: 'md:w-[472px]  md:flex sm:mb-4 md:mb-0 md:gap-8'
    }

    const chatButton = {
        cmn: 'whitespace-nowrap',
        sm: 'sm:mb-4'
    }

    const emailButton = {
        cmn: 'w-52 h-10 flex justify-center items-center font-bold text-sm tracking-wider gap-3 uppercase border border-solid border-gray-500',
        md: 'md:w-full',
        hover: 'hover:text-white hover:bg-gray-500 hover:border duration-300'
    }

    const labelStyle = {
        cmn: 'grid font-bold text-base',
        md: 'md:w-[450px]'
    }

    const inputStyle = {
        cmn: 'outline-none px-2 text-base font-medium border border-[#5A5959]',
    }

    const submitWrapperStyle = {
        cmn: 'flex justify-end font-[Poppins] font-extrabold',
        md: 'md:w-[450px]'
    }

    const submitStyle = {
        cmn: 'uppercase w-48 h-10 bg-black tracking-wide text-white text-base border px-5 rounded',
        hover: 'hover:text-black hover:bg-white hover:border-black duration-300'
    }

  return (
    <main className={`${mainStyle.cmn} ${mainStyle.md}`}>
        <div className={`${headStyle.cmn} ${headStyle.sm}`}>
            <h1 className='uppercase font-bold text-5xl mb-4'>Contact Us</h1>
            <p className='w-11/12 text-base md:w-4/5'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
        <div className={`${bodyStyle.md}`}>
            <div className='md:w-[472px]'>
                <div className={`${buttonWrapperStyle.cmn} ${buttonWrapperStyle.md}`}>
                        <button
                        onMouseEnter={() => setMessageDisplayIcon(hoverMessageIcon)}
                        onMouseLeave={() => setMessageDisplayIcon(messageIcon)}
                        className={`${buttonCommonStyle.cmn} ${buttonCommonStyle.hover} ${chatButton.cmn} ${chatButton.sm}`}>
                            <img
                            src={messageIconDisplay} alt="" />
                            Via Support Chat</button>
                        <button
                        onMouseEnter={() => setPhoneDisplayIcon(hoverPhoneIcon)}
                        onMouseLeave={() => setPhoneDisplayIcon(phoneIcon)}
                        className={`${buttonCommonStyle.cmn} ${buttonCommonStyle.hover}`}>
                        <img
                            src={phoneIconDisplay} alt="" />
                            Via Call</button>
                </div>
                <div className='md:w-[472px] mb-8'>
                    <button
                    onMouseEnter={() => setEmailDisplayIcon(hoverEmailIcon)}
                    onMouseLeave={() => setEmailDisplayIcon(emailIcon)}
                    className={`${emailButton.cmn} ${emailButton.md} ${emailButton.hover}`}>
                    <img
                        src={emailIconDisplay} alt="" />
                        Via Email Form</button>
                </div>
                <form className='ml-3'>
                    <div className='grid gap-5 mb-5'>
                        <label className={`${labelStyle.cmn} ${labelStyle.md}`}>
                            Name <input className={`${inputStyle.cmn} h-10`} type='text'/>
                        </label>
                        <label className={`${labelStyle.cmn} ${labelStyle.md}`}>
                            E-Mail <input className={`${inputStyle.cmn} h-10`} type='email'/>
                        </label>
                        <label className={`${labelStyle.cmn} ${labelStyle.md}`}>
                            Text <textarea className={`${inputStyle.cmn}`} type='text' cols='5' rows='4'/>
                        </label>
                        <div className={`${submitWrapperStyle.cmn} ${submitWrapperStyle.md}`}>
                            <button className={`${submitStyle.cmn} ${submitStyle.hover}`}>
                            Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='hidden md:block md:w-[608px] md:top-0 duration-300'>
                <img className='-mt-14' src={serviceImg} alt="" />
            </div>
        </div>
    </main>
  )
}

export default Contact