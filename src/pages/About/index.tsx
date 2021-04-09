import React from 'react'
import loadable from 'loadable-components'

const Layout = loadable(() => import('./Layout'))
const SectionRecommendation = loadable(() => import('./SectionRecommendation'))
const SectionKnowledge = loadable(() => import('./SectionKnowledge'))
const SectionContact = loadable(() => import('./SectionContact'))

export default function About() {
  return (
    <Layout>
      <SectionRecommendation />
      <SectionKnowledge />
      <SectionContact />
    </Layout>
  )
}
