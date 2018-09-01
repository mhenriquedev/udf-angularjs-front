# TCC Sistemas

### Ferramentas de desenvolvimento

Programas para desenvolver:
* Visual Studio Code
* cmder
* NodeJs
* Git


### Configurando ambiente

Após instalar as ferramentas citadas, abrir o cmder (ou algum console de sua escolha), entrar em um diretório específico para desenvolvimento (ex. Projetos) e digitar os comandos:

```sh
git clone https://github.com/roselinho/udf-angularjs-front
cd X:\...\udf-angularjs-front (Diretório onde deu o clone)
npm install (baixar dependências)
npm install serve -g
```

Após isso, para rodar o projeto basta entrar no diretório do projeto e digitar

```sh
serve
```

#### Configurando Visual Studio Code

Para mantermos um padrão de identação, configurar o VSCode da seguinte maneira:

File > Preferences > Settings > User Settings (Canto superior direito) copiar, colar e salvar as seguintes configurações: 

```sh
{   
"workbench.startupEditor": "newUntitledFile",
"[javascript]": {},
"explorer.confirmDragAndDrop": false,
"explorer.confirmDelete": false,
"editor.autoIndent": false,
"editor.detectIndentation": false,
"editor.tabSize": 3,
"workbench.sideBar.location": "left",
"editor.minimap.enabled": false,
"workbench.statusBar.visible": false,
"workbench.activityBar.visible": true,
"files.autoSave": "off"
}
```
