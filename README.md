# designTokens (under development)
Futuras melhorias:
- verificação de possivel paginação na api.
- tentar trazer apenas dados que tenham descrição.

# Libraries & Features
- React native - with expo
- React native testing library
- Style dictionary 
- Storybook


# How to use
- Criar um arquivo .env replicando o .env.example com os dados abaixo:
  - LOAD_STORYBOOK=true -> caso queira rodar no emulador o storybook
  - API_KEY= -> key do site: https://newsapi.org/s/google-news-br-api
  - BASE_URL=https://newsapi.org/v2
- yarn
- yarn pod (caso o uso seja no ios)
- yarn start
- yarn ios | yarn android
- no .env o LOAD_STORYBOOK define se o projeto deve ser executado no storybook ou não.
- yarn test -> rodar os testes
