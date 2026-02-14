import React, { useState } from 'react'

const ProductDescription = () => {
  
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0198E9] mb-8">
          Product details of LED Monitor With High Quality In The World
        </h2>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        See the best picture no matter where you sit
      </h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
    
    <div>
 
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
        <li>Size : M, L, XL</li>
        <li>Product Type : Jogger</li>
        <li>Main Material : Cotton</li>
        <li>Gender : Male</li>
        <li>Waist : Mid-rise</li>
        <li>Zip : Fly</li>
      </ul>
    </div>

    <div>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mt-9 md:mt-0">
        <li>Zipper : Yes</li>
        <li>Pocket : Two front and One Back Pockets.</li>
        <li>100% Authentic Product</li>
        <li>
          Product color may slightly vary due to our photography and sometimes
          it’s vary on our devices
        </li>
      </ul>
    </div>
       </div>

       <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Powerful intelligence for perfection
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <p className="text-gray-600 leading-relaxed text-sm">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident.
        </p>
       </div>
      </section>
    </div>
  )
}

export default ProductDescription
