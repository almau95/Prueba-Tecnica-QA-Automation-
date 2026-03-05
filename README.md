# Introduction 

Automatización MaterialLoginExample (Android)

# Requisitos

- Node.js: Instalación de Node.js
- Appium: Instalación de Appium
- WebdriverIO: Incluido como dependencia en el proyecto
- Cucumber: Instalado como parte de las dependencias
- Emulador o dispositivo físico Android configurado para pruebas
- Git para la clonación y gestión del repositorio

## Instalación

1. Clona este repositorio.
	git clone https://github.com/almau95/Prueba-Tecnica-QA-Automation-.git

2. Instala las dependencias con `npm install`.
3. Configura Appium y WebdriverIO.
4. Asegúrate de que el archivo wdio.conf.js esté configurado correctamente para tu dispositivo o emulador:

	platformName: Debe ser "Android".
	deviceName: Nombre de tu dispositivo o emulador.
	app: Ruta a la aplicación MaterialLoginExample.apk.
	automationName: "UiAutomator2" para Android.

## Ejecución de Pruebas

Para ejecutar las pruebas:

- Build and Test
Para ejecutar todas las pruebas se ejecuta el siguiente comando:
    npx wdio run wdio.conf.ts

Para ejecutar determinados archivos o módulos se utiliza el comando --spec:
    npx wdio run wdio.conf.ts --spec features/registro_user.feature

    npx wdio run wdio.conf.ts --spec features/login.feature

Para ejecutar con diferentes niveles de log o configuraciones específicas:
    npx wdio run wdio.conf.ts --logLevel error

    npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@smoke"