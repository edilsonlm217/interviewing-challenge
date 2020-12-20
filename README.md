# Interviewing Challenge

Este projeto foi desenvolvido como avaliação prática do processo seletivo para a vaga de Desenvolvedor Fullstack.

## Getting Started

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

### Pré-Requisitos

Se você pretende rodar este projeto em um dispositivo físico, é preciso que a máquina que rodará o backend e o dispositivo onde o app será instalado estejam na mesma rede.
É necessário ter o yarn instalado: https://classic.yarnpkg.com/lang/en/

### Instalação

Primeiramente, abra o terminal em uma pasta de sua preferencia e clone este respositório.

`git clone https://github.com/edilsonlm217/interviewing-challenge.git`

#### Instalando e rodando o backend

Após clonar o repositório, navegue até a pasta backend, instale as dependencias e inicialize o servidor

1. `cd interviewing-challenge/backend`
2. `yarn`
3. `yarn dev`

Não feche o terminal a menos que deseje parar o servidor.

#### Instalando e rodando o mobile

Abra outro terminal e navegue até o folder interviewing-challenge/mobile e installe as dependencias do projeto:

`yarn`

Abra o arquivo mobile/src/services/api.js e edite o endereço da chave 'baseURL' para o IP da sua placa de rede

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://meu_ip_interno:3333/',
  timeout: 5000,
});

export default api;
```

Agora rode o app com o seguinte comando:

`yarn android`
