![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Sobre o repositório
Esse repositório contém o código-fonte ministrado na aula Iniciando com React e TypeScript: [https://www.youtube.com/watch?v=kxoBhslDRcw](https://www.youtube.com/watch?v=kxoBhslDRcw)

## Rodar a aplicação

Execute os comandos:

```bash
docker build -t iniciando-react .
docker run -it -p 3000:3000 -v $(pwd):/home/node/app iniciando-react
```

Acesse no browser http://localhost:3000
