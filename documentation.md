- Frontend
  - Configuration
    - ## initialise repository
      ```shell
      git init
      ```
    - ## install vite react template
      ```shell
      npm create vite@latest awesome-devlogs -- --template react
      ```
    - ## install Prettier
      ```shell
      npm install eslint-config-prettier
      ```
    - ## install axios
      ```shell
      npm install axios
      ```
    - install json-server
      - for frontend testing
      - ```shell
        npm install json-server --save-dev
        ```
      - ```shell
        scripts: {
        	"server": "json-server -p3001 --watch db.json"
        }
        ```
    - ## install redux/toolkit
      ```shell
      npm install redux
      npm install react-redux
      npm install @reduxjs/toolkit
      ```
    - ## Tailwind CSS for vite framework
      ```shell
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      ```
      - in your `tailwind.config.js` file.
        ```shell
        /** @type {import('tailwindcss').Config} */
        export default {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```
      - Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.
      - ```jsx
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
  - ## define _devReducer.jsx_
    ```jsx
    import { createSlice } from '@reduxjs/toolkit'
    import devService from '../services/devlogs'

    const devSlice = createSlice({
      name: 'devlogs',
      initialState: [],
      reducers: {
        setDevlogs(state, action) {
          return action.payload
        },
      },
    })

    export const { setDevlogs } = devSlice.actions

    export const initialDevlogs = () => {
      return async (dispatch) => {
        const devlogs = await devService.getAll()
        console.log(devlogs)
        dispatch(setDevlogs(devlogs))
      }
    }

    export default devSlice.reducer
    ```
  - ## define _store.jsx_
    ```jsx
    import { configureStore } from '@reduxjs/toolkit'
    import devReducer from './reducers/devReducer'

    const store = configureStore({
      reducer: {
        devlogs: devReducer,
      },
    })

    export default store
    ```
  - Error encountered #errors #solved
    - the name of **state** in **store** should be same as in the **reducer**
    - ```jsx
      const devSlice = createSlice({
        name: 'devlogs',
      ```
    - ```jsx
      const store = configureStore({
        reducer: {
          devlogs: devReducer,
      ```
    - And it should be accesssed appropriately:
    - ```jsx
      const devlogs = useSelector((state) => state.devlogs)
      ```
  - Testing
    - create and initialize db.json in root
    - ## than start server:
      ```shell
      npm run server
      ```
    - ## Start frontend
      ```shell
      npm run dev
      ```
    - working:
      - ![image_1716790650134_0.png](./assets/working.png)
  - Tailwind css style added.
  - ## url redirect implemented
    ```jsx
    <a
              href={devlog.url}
              key={devlog.id}
              target="_blank"
              rel="noopener noreferrer"
            >
    ```
    - here, `target="_blank"` attribute specifies that the link should open in a new tab, and the `rel="noopener noreferrer"` attribute is a security measure to prevent the new page from gaining access to the `window.opener` property.
  - Filter Button
    - ## define **filterReducer**
      ```jsx
      import { createSlice } from '@reduxjs/toolkit'

      const filterSlice = createSlice({
        name: 'filter',
        initialState: 'ALL',
        reducers: {
          setFilter(state, action) {
            return action.payload
          },
        },
      })

      export const { setFilter } = filterSlice.actions
      export default filterSlice.reducer
      ```
    - ## update **store**
      ```jsx
      import { configureStore } from '@reduxjs/toolkit'
      import devReducer from './reducers/devReducer'
      import filterReducer from './reducers/filterReducer'

      const store = configureStore({
        reducer: {
          devlogs: devReducer,
          filter: filterReducer,
        },
      })

      export default store
      ```
    - ## filter component
      ```jsx
      // ...
        const activeFilter = useSelector((state) => state.filter)

        const getButtonClass = (filter) => {
          return `px-2 py-1 text-sm rounded-full focus:outline-none transition duration-300 ease-in-out ${
            activeFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-transparent text-slate-300 border border-gray-300 hover:bg-gray-500'
          }`
        }

        return (
          <div className="ml-4 mt-4 flex space-x-2">
            <button
              onClick={() => dispatch(setFilter('ALL'))}
              className={getButtonClass('ALL')}
            >
      // ...
      ```
      - here, _activeFilter_ stores the current _state_ of the `filter`
      - `className` will have value (which is a tailwind css class value) as per the _state/value_ of the `filter`
    - ## implement in Devlog listing:
      ```jsx
      const Devlog = () => {
        const devlogs = useSelector(({ filter, devlogs }) => {
          if (filter === 'ALL') {
            return devlogs
          }
          return filter === 'LOGS'
            ? devlogs.filter((devlog) => devlog.type === 'logs')
            : devlogs.filter((devlog) => devlog.type === 'blogs')
        })

        console.log(devlogs)
        return (
          <div className="p-4">
            {devlogs.map((devlog) => (
      // ...
      ```
  - navigation Bar
    - this is a dynamic design where it collapses for smaller screen.
    - ```jsx
      import { useState } from 'react'

      const NavigationBar = () => {
        const [isOpen, setIsOpen] = useState(false)

        return (
          <nav className="bg-transparent-700 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="text-white text-lg font-semibold">
                Best dev logs & blogs
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isOpen
                          ? 'M6 18L18 6M6 6l12 12'
                          : 'M4 6h16M4 12h16m-7 6h7'
                      }
                    ></path>
                  </svg>
                </button>
              </div>
              <ul
                className={`md:flex space-x-4 ${
                  isOpen ? 'block' : 'hidden'
                } md:block`}
              >
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <hr className="border-gray-300 my-4" />
          </nav>
        )
      }

      export default NavigationBar
      ```
  - ## footer
    ```jsx
    const Footer = () => {
      return (
        <footer className="bg-transparent text-gray-300 py-4 mt-20">
          <hr className="border-gray-300 my-4" />
          <div className="max-w-7xl mx-auto flex justify-center px-4">
            <div className="flex space-x-4">
              <p>share ur favourite logs/blogs by making a PR</p>
              <a href=""></a>
            </div>
          </div>
        </footer>
      )
    }

    export default Footer
    ```
- Backend
  - configuration
    - ## initialize node
      ```shell
      npm init
      ```
      - node --watch index.js
    - ## install express
      ```shell
      npm install express
      ```
      - ```shell
        npm install express-async-errors
        ```
    - ```shell
      npm install cors
      ```
    - ```shell
      npm init @eslint/config@latest
      ```
    - ```shell
      npm install --save-dev eslint-config-prettier
      ```
  - Database config
    - get connection link and password for Cluster 0
    - ```shell
      npm install mongoose
      ```
    - ```shell
      npm install dotenv
      ```
      - create .env file and setup URI and PORT
  - ## configure index.js
    ```shell
    const app = require('./app')
    const logger = require('./utils/logger')
    const config = require('./utils/config')

    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
    })
    ```
  - http://localhost:3003/api/devs loading indifinitely #errors #solved
    - took almost 3 hours to find the error in app.js
    - ```jsx
      app.use(cors())
      ```
      - cause: app.use(cors)
- Deployment to render
  - as my connected repository look like this:
    - ![image.png](./assets/github.png)
    - I have to change the root repository in Render
    - ![image.png](./assets/render.png)
