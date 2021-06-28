import React from 'react'

import Layout from './Layout'
import SectionRecommendation from './SectionRecommendation'
import SectionKnowledge from './SectionKnowledge'
import SectionContact from './SectionContact'

export default function About() {
  return (
    <Layout>
      <SectionRecommendation />
      <SectionKnowledge />
      <SectionContact />
    </Layout>
  )
}
