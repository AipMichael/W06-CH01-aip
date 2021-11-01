Desarrolla una aplicación para gestionar un CRUD de ToDos, con React + Redux. La app tendrá una sola página, donde aparecerá un formulario y un listado.

La app debe comunicarse con una API, donde estarán los ToDos.

Importante: testear la app.

\*\* Listado de responsabilidades

#FormSection

- pide tarea
- tiene un input.
- recibe una función y la ejecuta (agregar a la lista)

#ListSection

- cargar la lista de tareas necesarias

#CustomHook

- useSelector se encarga de la reconciliación: al cambiar el estado se vuelve a mostrar el nuevo estado.

#Reducers

- crear
- read
- update
- delete
- mamáReducer:index.js - contiene los demás reducers

#Actions

- Creator
- Type

#Store

- tiene un rootReducer (mamáReducer)
- tiene un initial value (o permite tenerlos)
- Thunk(s)

#Thunks

- contiene los TODOS
- función asyncrona que necesita el dispatch
- desde aquí se hace el fetch de la Url
- incluye algunas acciones
