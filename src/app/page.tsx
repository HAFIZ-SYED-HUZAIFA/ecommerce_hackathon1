import Discount from '@/components/Discount'
import Featureproduct from '@/components/Featureproduct'
import Hero from '@/components/Hero'
import Latestblog from '@/components/Latestblog'
import Latestproduct from '@/components/Latestproduct'
import Offer from '@/components/Offer'
import Topcategory from '@/components/Topcategory'
import Trendingproduct from '@/components/Trendingproduct'
import Uniquefeature from '@/components/Uniquefeature'

import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Featureproduct/>
      <Latestproduct/>
      <Offer/>
      <Uniquefeature/>
      <Trendingproduct/>
      <Discount/>
      <Topcategory/>
      <Latestblog/>
    </div>
  )
}

export default page;

