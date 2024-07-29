import React from 'react'

const OuterSection = () => {
  return (
   <>
    <section className='cta-section '>
    <div className='container'>
        <h3 className='common-heading text-center text-white'>Quality Assured</h3>
    </div>
   </section>

   <section className='outer-card-dv pb-3'>
    <div className='container'>
            <div className='row m-0'>
                <div className='col-md-4 three-cards-inner text-center '>
                    <div className='icons'>
                        <img src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/ingrediants.svg" className='img-responsive' alt="Ingrediants" />
                        <h5 className='pounter-heading'>Finest Ingredients</h5>
                        <p className='common-para mb-0'>
                            Mode from the finest quality ingredients, to give you an authentic taste, every single time.
                        </p>
                    </div>
                </div>
                <div className='col-md-4 three-cards-inner text-center'>
                    <div className='icons'>
                        <img src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/fresh-dough.svg" className='img-responsive' alt="Ingrediants" />
                        <h5 className='pounter-heading '>Fresh Dough</h5>
                        <p className='common-para mb-0'>
                            Our pizza dough is mixed on demand, so that pizza server to you is always hot and fresh.
                        </p>
                    </div>
                </div>
                <div className='col-md-4 three-cards-inner text-center'>
                    <div className='icons'>
                        <img src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/safety-and-quality.svg" className='img-responsive' alt="Ingrediants" />
                        <h5 className='pounter-heading'>Safety and Quality Standards</h5>
                        <p className='common-para mb-0'>
                            Our kitchens follow the highest safety and quality standards,which  are fully compliant with fssai   guidelines.
                        </p>
                    </div>
                </div>
            </div>
        {/* <div className='three-cards'>
        </div> */}
    </div>
   </section>
   </>
  )
}

export default OuterSection
