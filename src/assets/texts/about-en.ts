import { AboutType } from '../../types'

const aboutList: AboutType[] = [
  {
    id: '1',
    gameTitle: 'About',
    content: [
      {
        text: `This website is designed for cello teachers of beginning instrumental development students who use collective teaching approaches. It is the product of a master's research carried out in 2017 and 2018 at the University of São Paulo, São Paulo, Brazil.`,
        style: ['paragraph'],
      },

      {
        text:
          'Although the research work was directed towards cello students, many of the proposals contained in the games can be developed for other instruments and also for other levels of learning, and it is up to each teacher to make the adaptations he or she deems necessary and effective for their demands. In addition, there are many developments of the initial proposals that can raise other ideas and work perspectives.',
        style: ['paragraph'],
      },
      {
        text: 'Have fun!',
        style: ['paragraph'],
      },
    ],
  },
  {
    id: '2',
    gameTitle: 'About Author',
    content: [
      {
        text:
          'My name is Marta Macedo Brietzke and I am from Porto Alegre, Rio Grande do Sul, Brazil. I started my music studies with my father and, soon after, I participated in the Projeto Prelúdio and in the Orquestra Infanto-Juvenil of the Universidade Federal do Rio Grande do Sul, with violin and cello. I graduated in Music at the same university, doing my postgraduate studies in São Paulo, at the Universidade de São Paulo.',
        style: ['paragraph'],
      },
      {
        text:
          'I worked as an instrumentalist and as a teacher in orchestras and social projects in the capital and metropolitan region of my state. Together with some cello students, we founded a self-managed space for teaching and learning the cello in Porto Alegre, called Filarmônica de Violoncelos-Tchêllistas. My research area is related to the collective teaching of musical instruments, approaching different possibilities and facets. I also dedicate myself to the performance of contemporary concert music, making the premiere of some pieces by Brazilian composers.',
        style: ['paragraph'],
      },
      {
        text: `My master's thesis is available here.`,
        style: ['title1'],
      },
    ],
  },

  {
    id: '3',
    gameTitle: 'Jogo 3',
    content: [
      {
        text:
          'Here is a very timely initiative by Marta Brietzke! By sharing her valuable work here, containing creative proposals aimed at music education, she also instigates and promotes, along with many other educators, the creation of new and current alternatives for making music, interpreting a musical instrument, relating playfully and lucidly with itself and with each other. She opens the door and indicates the way for future musicians working in society to be competent in their profession, however, equally apt not to hinder their steps or thoughts, nor limit the life or movement of all music because they are aware that this is exactly what it is - experience lived responsibly and not falsely reassuring certainty - what matters most to all of us, today and tomorrow.',
        style: ['paragraph'],
      },
    ],
  },
]

export default aboutList
