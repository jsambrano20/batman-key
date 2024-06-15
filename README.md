GERADOR DE SENHA ALEATÓRIA - REACT NATIVE
Este é um aplicativo simples desenvolvido em React Native e TypeScript que permite gerar senhas aleatórias e copiá-las para a área de transferência do dispositivo. O projeto utiliza o Expo para facilitar o desenvolvimento e implementa o expo-clipboard para manipular a área de transferência e react-native-toast-message para exibir notificações ao usuário.

TECNOLOGIAS UTILIZADAS
React Native
TypeScript
Expo
expo-clipboard
react-native-toast-message
FUNCIONALIDADES
Geração de senhas aleatórias com base em critérios específicos.
Copiar a senha gerada para a área de transferência.
Exibição de notificação ao usuário quando a senha é copiada com sucesso.
ESTRUTURA DO PROJETO
O projeto está estruturado da seguinte forma:

src/components/BatButton/BatButton.tsx: Componente principal que contém a lógica de geração de senha e manipulação de copiar para área de transferência.
src/components/BatTextInput/BatInputText.tsx: Componente de entrada de texto que exibe a senha gerada.
src/services/passGenerate.ts: Arquivo com a lógica para gerar senhas aleatórias.
src/styles/BatButtonStyles.ts: Arquivo com os estilos CSS para o componente BatButton.
Outros arquivos de configuração e dependências conforme necessário.
PRÉ-REQUISITOS
Certifique-se de ter o ambiente de desenvolvimento configurado com Node.js, Expo CLI e um emulador/simulador configurado ou um dispositivo físico para testar o aplicativo.

COMO USAR
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Execute o projeto:

bash
Copiar código
npm start
Abra o aplicativo no Expo:

Escaneie o QR code usando o aplicativo Expo Go em seu dispositivo móvel.
Ou execute em um emulador/simulador que está sendo executado.
Interaja com o aplicativo:

Clique no botão "GENERATE" para gerar uma nova senha aleatória.
Clique no botão "COPY" para copiar a senha gerada para a área de transferência.
Uma notificação será exibida na tela informando se a senha foi copiada com sucesso.
CONTRIBUIÇÕES
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para reportar bugs, sugerir novas funcionalidades ou enviar pull requests com melhorias.
