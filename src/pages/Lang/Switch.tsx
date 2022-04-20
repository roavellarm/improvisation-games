// /* eslint-disable react/prop-types */
// import React from 'react'
// import Switch from 'react-switch'
// import { shade } from 'polished'
// import styled from 'styled-components'

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: space-evenly;
//   align-items: center;
//   width: 200px;
// `

// export default function Header({ onChange, language }: any) {
//   return (
//     <Container>
//       <span role="img" aria-label="English">
//         🇺🇸
//       </span>
//       <Switch
//         onChange={onChange}
//         checked={language === 'pt-BR'}
//         checkedIcon={false}
//         uncheckedIcon={false}
//         height={10}
//         width={40}
//         handleDiameter={20}
//         offColor={shade(0.15, '#f2f2f2')}
//         onColor="#4caf50"
//       />
//       <span role="img" aria-label="Portuguese">
//         🇧🇷
//       </span>
//     </Container>
//   )
// }
