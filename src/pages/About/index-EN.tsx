import React from 'react'

import Layout from './Layout'
import SectionRecommendation from './SectionRecommendation-EN'
import SectionKnowledge from './SectionKnowledge-EN'
import SectionContact from './SectionContact-EN'

export default function About() {
  return (
    <Layout>
      <SectionRecommendation />
      <SectionKnowledge />
      <SectionContact />
    </Layout>
  )
}
