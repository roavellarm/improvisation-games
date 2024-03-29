import { LO } from 'contexts/LanguageContext'

const textPt = [
  'Me escreva!',
  'Se você experimentar alguma das propostas dos jogos, não deixe de compartilhar comigo. Será muito bom conhecer suas experiências e vivências com as atividades!',
  'Entre em contato',
  'aqui',
  'Colaboradores',
  'Desenhos:',
  'Design e desenvolvimento web:',
  'Desenvolvimento web:',
]

const textEn = [
  'Write me!',
  "If you try any of the games' proposals, be sure to share it with me. It will be great to know your experiences with the activities!",
  'Contact us',
  'here',
  'Colaborators',
  'Drawing:',
  'Design and web development:',
  'Web development:',
]

const textEs = [
  '¡Escríbeme!',
  'Si pruebas alguna de las propuestas de los juegos, no olvides compartirlas conmigo. ¡Será muy bueno conocer sus experiencias con las actividades!',
  'Entre en contacto',
  'aqui',
  'Colaboradores',
  'Dibujos:',
  'Design y desenvolvimiento web:',
  'Desenvolvimiento web:',
]

export const TEXT: any = {
  pt: textPt,
  en: textEn,
  es: textEs,
}

export const SUBJECT = {
  pt: 'Contato jogoscello.com',
  en: 'Contact from jogoscello.com',
  es: 'Conctato de jogoscello.com',
} as LO

export const BODY = {
  pt: 'Olá! Eu sou <seu nome>...',
  en: 'Hi! My name is <your name>...',
  es: 'Hola! Mi nombre es <su nombre>...',
} as LO
