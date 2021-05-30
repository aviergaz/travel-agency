import React from 'react'
import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'

const Home = () => {
  return (
    <>
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>SCE Tours</h1>
        <p>
        12,000+ Travel Experiences In 25+ Countries
        </p>
      </div>
    </section>

    <section className='destinations'>
      <h3>Now available in 25 countries!</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Fly to Italy</h3>
          <p>
          The attractions that follow show off Italy's art, architecture, stunning landscapes, and history, and provide opportunities for active pursuits, as well. To be sure you find the best places to visit and things to do, plan your itinerary using this list of the top attractions in Italy.
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Experience Germany</h3>
          <p>
          History, culture, and natural beauty perhaps best describe the essence of vacationing in Germany. With its many historic cities and small towns, along with an abundance of forests and mountains, visitors are spoiled for choice when it comes to choosing a unique place to visit. 
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Enjoy Paris</h3>
          <p>
          Whether sunshine is sparkling on the café terraces of Boulevard Saint-Germain, or melancholy mists of the Seine River are shrouding Notre-Dame Cathedral, Paris has a way of romancing visitors. The love affair may begin with a first glimpse of the Eiffel Tower, then continue with strolls along the wide tree-lined avenues and in lavish formal gardens. 
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home



// const Home = () => {
//   return (
//     <div>
//       <h1>SCE Tours</h1>
//       <p>12,000+ Travel Experiences In 25+ Countries</p>
//     </div>
//   );
// };

// export default Home;
