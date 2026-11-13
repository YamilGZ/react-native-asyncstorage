# 📦 AsyncStorage Demo — React Native

Aplicación de ejemplo desarrollada con **React Native 0.87** y **TypeScript** para aprender y demostrar cómo persistir datos de forma local usando [`@react-native-async-storage/async-storage`](https://react-native-async-storage.github.io/async-storage/).

Este proyecto es ideal como punto de partida para entender el flujo completo de almacenamiento local en React Native: guardar, leer, eliminar y manejar estados controlados con un formulario sencillo.

---

## ✨ ¿Qué hace la app?

La interfaz de `[App.tsx](App.tsx)` permite:

- Escribir un nombre en un `TextInput` controlado.
- **Guardar** ese nombre en AsyncStorage con el botón *Guardar*.
- **Mostrar** el nombre guardado en pantalla (`Hola: {nombre}`).
- **Eliminar** el nombre de AsyncStorage con el botón *Eliminar Nombre*.
- **Validar** que el campo no esté vacío antes de guardar.
- **Recuperar automáticamente** el nombre guardado al iniciar la app.

> 💡 Todos los datos se almacenan de forma asíncrona y persistente en el dispositivo, por lo que sobreviven al cerrar y volver a abrir la aplicación.

---

## 🛠️ Tecnologías

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| `react-native` | `0.87.1` | Framework principal |
| `react` | `19.2.3` | Librería de UI |
| `typescript` | `^6.0.3` | Tipado estático |
| `@react-native-async-storage/async-storage` | `^3.1.1` | Persistencia local de datos |

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos

- Node.js >= 22.11.0
- Entorno de React Native configurado: [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)

### Pasos

1. Instalá las dependencias:

```sh
npm install
```

2. Iniciá Metro:

```sh
npm start
```

3. En otra terminal, ejecutá la app:

#### Android

```sh
npm run android
```

#### iOS

```sh
npm run ios
```

> Para iOS, recordá ejecutar `bundle install` y `bundle exec pod install` antes de correr la app por primera vez.

---

## 📁 Estructura del proyecto

```
react-native-asyncstorage/
├── android/              # Proyecto Android nativo
├── ios/                  # Proyecto iOS nativo
├── __tests__/            # Tests con Jest
│   └── App.test.tsx      # Test de renderizado con mock de AsyncStorage
├── App.tsx               # Componente principal con la demo de AsyncStorage
├── index.js              # Punto de entrada de la app
├── package.json
├── jest.config.js        # Configuración de Jest
└── README.md
```

---

## 🧪 Tests

El proyecto incluye Jest para ejecutar tests. Como AsyncStorage depende de código nativo, el test utiliza un **mock** para simular sus métodos:

```tsx
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
}));
```

Para correr los tests:

```sh
npm test
```

---

## 📝 Flujo de AsyncStorage en la app

Las operaciones principales están encapsuladas en `[App.tsx](App.tsx)`:

### 1. Guardar

```ts
await AsyncStorage.setItem('nombre', inputTexto);
```

Almacena el valor bajo la clave `'nombre'`.

### 2. Leer

```ts
const nombre = await AsyncStorage.getItem('nombre');
```

Recupera el valor almacenado. Puede devolver `string | null`, por lo que se maneja con `nombre ?? ''`.

### 3. Eliminar

```ts
await AsyncStorage.removeItem('nombre');
```

Borra el valor guardado y limpia el estado de la interfaz.

### Funciones clave

| Función | Descripción |
|---------|-------------|
| `guardarDatos()` | Valida el input, guarda en AsyncStorage, actualiza el estado y limpia el campo. |
| `obtenerDatosStorage()` | Lee el nombre al iniciar la app y lo muestra. |
| `eliminarDatos()` | Elimina el nombre de AsyncStorage y resetea el formulario. |

---

## 🔧 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de Metro. |
| `npm run android` | Compila y ejecuta la app en Android. |
| `npm run android:full` | Ejecuta el flujo completo de inicio en Android (PowerShell). |
| `npm run ios` | Compila y ejecuta la app en iOS. |
| `npm run build:apk` | Genera la APK de release y la copia a `app-asyncstorage.apk`. |
| `npm run clean:deps` | Limpia carpetas de build de Android y `node_modules`. |
| `npm test` | Ejecuta los tests con Jest. |
| `npm run lint` | Corre ESLint sobre el proyecto. |

---

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| Metro tira error de import o componente `undefined` | `npm start -- --reset-cache` |
| El input no se limpia al guardar o eliminar | Verificá que el `TextInput` sea controlado con `value={inputTexto}`. |
| Error `Native module is null` en Android | Recompilá la app: `cd android && ./gradlew clean && cd .. && npm run android`. |
| Tests fallan por AsyncStorage | Revisá que el mock esté definido en `__tests__/App.test.tsx`. |

---

## 📚 Recursos útiles

- [React Native - Getting Started](https://reactnative.dev/docs/getting-started)
- [AsyncStorage oficial](https://react-native-async-storage.github.io/async-storage/)

---

## 👨‍💻 Autor

- **Yamil Zaracho**
