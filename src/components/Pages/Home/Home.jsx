import React from 'react'
import Banner from '../../Banner/Banner'
import Catagories from '../../Catagories/Catagories'
import Ourseller from '../../Ourseller/Ourseller'
import Title from '../../Title/Title'
import Topselling from '../../Topselling/Topselling'

function Home() {
  return (
    <>
    
    <Banner />
    <Title title={'All Catagories'}/>
     <Catagories/>
     <Topselling/>
     <hr/>
     <Ourseller/>
    
    
    </>
  )
}

export default Home