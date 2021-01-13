## Life cicle

- Component will mount (primeira coisa a ser executada)
- Render() (Joga o dom na tela)
- Component did mount (após a primeira renderização)
- Render() (renderiza o componente de novo)

Até aqui uma vez ^^

- Component did update (cada vez q alterar alguma coisa) / render () [add infinitumm]

## useState

Serve pra controle de estado da aplicação.

## useLayoutEffect (equivalente ao componentWillMount)

Serve para manipular coisas que precisam estar prontas antes da renderização da DOM.

## useEffect (equivalente ao componentDidMount ou componentDidUpdate)

Serve pra controle de efeito de tela pra coisas que vão sofrer alguma renderização
ou alguma alteração de estado.

## useMemo

Serve pra memorizar um valor com base em alguma dependencia de tela

## useCallback

Serve para memorizar um efeito de uma função chamada dentro de um useEffect

## memo

Semelhante a um useMemo, mas para um componente
