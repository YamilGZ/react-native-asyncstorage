# React Native + AsyncStorage Demo

Proyecto de ejemplo en React Native que muestra cómo persistir datos localmente con [`@react-native-async-storage/async-storage`](https://react-native-async-storage.github.io/async-storage/).

## Funcionalidad

La app (`[App.tsx](App.tsx)`) presenta una sencilla interfaz para:

- Escribir un nombre en un `TextInput`.
- **Guardar** el nombre en AsyncStorage con el botón *Guardar*.
- **Ver** el nombre guardado en pantalla (`Hola: {nombre}`).
- **Eliminar** el nombre de AsyncStorage y limpiar el input con el botón *Eliminar Nombre*.

## Scripts principales

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de Metro. |
| `npm run android` | Compila y ejecuta la app en Android. |
| `npm run android:full` | Ejecuta el flujo completo de inicio en Android (vía PowerShell). |
| `npm run ios` | Compila y ejecuta la app en iOS. |
| `npm run build:apk` | Genera la APK de release y la copia a `app-asyncstorage.apk`. |
| `npm run clean:deps` | Limpia carpetas de build de Android y `node_modules`. |
| `npm test` | Ejecuta los tests con Jest. |
| `npm run lint` | Corre ESLint sobre el proyecto. |

## Dependencias clave

- `react-native`: `0.87.1`
- `react`: `19.2.3`
- `@react-native-async-storage/async-storage`: `^3.1.1`

## Cómo correr la app

1. Asegúrate de tener el entorno de React Native configurado siguiendo la [guía oficial](https://reactnative.dev/docs/set-up-your-environment).
2. Instala las dependencias:

```sh
npm install
```

3. Inicia Metro:

```sh
npm start
```

4. En otra terminal, ejecuta la app:

### Android

```sh
npm run android
```

### iOS

```sh
npm run ios
```

> Nota: Para iOS es necesario instalar las dependencias de CocoaPods con `bundle install` y `bundle exec pod install` antes de correr la app por primera vez.

## Sobre AsyncStorage

- `AsyncStorage.setItem('nombre', value)` guarda el valor.
- `AsyncStorage.getItem('nombre')` lo recupera (puede devolver `string \| null`).
- `AsyncStorage.removeItem('nombre')` lo elimina.

En este proyecto, las funciones `guardarDatos`, `obtenerDatosStorage` y `eliminarDatos` en `[App.tsx](App.tsx)` encapsulan estas operaciones y manejan errores con bloques `try/catch`.

## Troubleshooting

- Si Metro tira un error de import o componente `undefined`, reinicia el bundler con:
  ```sh
  npm start -- --reset-cache
  ```
- Si la app no refleja cambios del input, verifica que `TextInput` sea controlado (`value={inputTexto}`).

Para más información, consulta la documentación oficial de [React Native](https://reactnative.dev/docs/getting-started) y [AsyncStorage](https://react-native-async-storage.github.io/async-storage/).
