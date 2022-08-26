import React from 'react'
import Background from './Background'
import Background2 from './Background2'
import Subhead from './Subhead'
import Button from './Button'

const Hero = () => {
    return (
        <div className='bg-gray-800'>
            <Background>
                <div className='bg-cyan-300 w-full p-4 z-10'>
                    <p className='text-6xl font-extrabold text-center'>Community Protocol</p>
                </div>
                <div className='container mt-5 px-2 md:px-36'>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='col-auto'>
                        <Subhead>DAO para</Subhead>
                        <Subhead>Comunidades</Subhead>
                        <Subhead>Latinoamericanas</Subhead>
                        <Button>
                            Conoce más
                        </Button>
                    </div>
                    <div className='col-auto'>
                        <img src="https://d33wubrfki0l68.cloudfront.net/eeb1c4eb81864cd215bdcbebb63679534af42773/e7824/static/d17b5ecb3655c50d6540e590a93d65e7/87c97/dao-2.png" className=' w-96  sm:w-fit md:w-96 ' alt="dao" />
                    </div>
                </div>
                </div>
            </Background>
            <Background2>
                <p className='text-6xl font-extrabold text-center text-cyan-300'>Community Protocol</p>
            </Background2>
            <Background>
                
            </Background>
        </div>
    )
}

export default Hero