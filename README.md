# 방탈출 카페 리뷰 사이트

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 프로젝트 구조

#### `build`

`yarn build`시 생성되는 폴더다.

#### `src`

프로젝트 관련 모든 Javascript, CSS 소스코드가 들어 있다.

#### `src/index.js`

`yarn start` 명령어를 실행했을 때 프로그램이 처음으로 진입하는 지점이다.

#### `src/assets`

프로젝트에 쓰이는 이미지 파일, 로고 등을 모아 놓은 폴더다.

#### `src/Components`

프로젝트에서 쓰일 React 컴포넌트가 모여있는 폴더다. Routes 폴더에 있는 컴포넌트와는 다르게 이 폴더에 있는 컴포넌트는 재사용이 목적이다.

#### `src/Routes`

Router에서 정의된 Route로 특정 url에 접속했을 시 화면에 메인으로 보여질 컴포넌트가 모여있는 폴더이다. Components 폴더와는 다르게 이 폴더는 Router의 Route에서 정의된 컴포넌트만 모여있다.

#### `src/hooks`

React Hooks을 기반으로 만든 커스텀 훅을 모아 놓은 폴더다.

#### `src/context`

React Context API에서 쓰이는 Context의 정의 부분을 모아 놓은 폴더다.

#### `src/css`

기존 css 방식을 사용할 때 프로젝트에 쓰이는 모든 css 파일을 모아 놓은 폴더로서 styled components 방식을 사용한다면 지워도 되는 폴더다.

## 사용된 기술

#### React

- React Router
- React Hooks(useState, useEffect)

###### 공식 문서 : https://ko.reactjs.org/docs/hooks-intro.html

- React Context API

###### 공식 문서 : https://ko.reactjs.org/docs/context.html#___gatsby

#### Apollo

- Apollo React Client

###### 공식 문서 : https://www.apollographql.com/docs/react/get-started/

- Apollo React Hooks(useQuery, useMutation)

###### 공식 문서 : https://www.apollographql.com/docs/react/data/queries/

###### 공식 문서 : https://www.apollographql.com/docs/react/data/mutations/

#### Javascript

- Optional Chaining
- Styled Components
