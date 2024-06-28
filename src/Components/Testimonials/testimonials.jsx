// import React from 'react';

function Testimonials() {
    const data = [
      {
        description: 'Eye shadow is a pigmented powder/cream or substance used to accentuate the eye area, traditionally on, above, and under the eyelids. Many colours may be used at once and blended together to create different effects using a blending brush.',
        imageSrc: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_01.jpg',
        name: 'Sandra Olson',
        title: 'Pharmacist'
      },
      {
        description: 'Bronzer gives skin a bit of color and contours the face for a sharper definition or creates a tan-look. Bronzer is considered to be more of a natural look and can be used for everyday wear. Bronzer enhances the color of the face. It comes in either matte, semi-matte/satin, or shimmer finishes.',
        imageSrc: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_03.jpg',
        name: 'Donna Kittrell',
        title: 'Receptionist'
      },
      {
        description: 'Face powder sets the foundation and under eye concealer, giving it a matte finish while also concealing small flaws or blemishes. It can also be used to bake the foundation, so that it stays on longer and create a matte finish.',
        imageSrc: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_02.jpg',
        name: 'Angela Chambers',
        title: 'Computer analyst'
      },
      {
        description: 'Most modern barbershops have special barber chairs, and special equipment for rinsing and washing hair. In some barbershops, people can read magazines or watch TV while the barber works.',
        imageSrc: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_05.jpg',
        name: 'Thomas Wadsworth',
        title: 'Librarian'
      },
      {
        description: 'Foundation is used to smooth out the face by covering spots, acne, blemishes, or uneven skin tone. These are sold in a liquid, cream, or powder, or more recently in a mousse. Foundation provides sheer, matte, dewy or full coverage.',
        imageSrc: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_04.jpg',
        name: 'Ashley Perrin',
        title: 'Psychologist'
      },
      {
        description: 'Primer is used to set the face before makeup is applied. This creates another layer between the skin to prevent acne and makeup clogging up pores. Primer creates an even tone throughout the skin and makes makeup last longer. Primer is applied throughout the face including eyes, lips, and lashes.',
        imageSrc: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_06.jpg',
        name: 'Patricia Bolster',
        title: 'Art historian'
      }
    ];
  
    return (
      <div className='flex flex-col p-5'>
        <h1 className='text-4xl font-bold mb-5'>Testimonials</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {data.map((testimonial, index) => (
            <div key={index} className='bg-white p-5 rounded-lg shadow-md relative'>
              <p className='text-gray-700 mb-3'>{testimonial.description}</p>
              <div className='flex items-center'>
                <img 
                  src={testimonial.imageSrc} 
                  alt={testimonial.name} 
                  className='w-16 h-16 rounded-full border-4 border-pink-500' 
                />
                <div className='ml-4'>
                  <p className='text-lg font-semibold hover:underline '>{testimonial.name}</p>
                  <p className='text-sm text-gray-500'>{testimonial.title}</p>
                  <div className='w-full h-1 bg-transparent hover:bg-pink-500 transition-all duration-300'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Testimonials;
  