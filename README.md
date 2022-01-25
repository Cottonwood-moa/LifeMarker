# LifeMarker  
ㅤ  
Vue.js 사용에 익숙해지기 위해 만든 `팀 소개` 컨셉의 홈페이지 입니다.  
간단한 자동응답 기능을 가진 `챗봇`도 직접 구현했습니다.  
ㅤ  
![image](https://user-images.githubusercontent.com/79053495/150993123-22321eac-2483-49bb-bd38-1d96e0bcb70b.png)  
ㅤ  
![image](https://user-images.githubusercontent.com/79053495/150993275-ffcf6949-be43-49b1-b8f9-34758f965f33.png)  
ㅤ  
![image](https://user-images.githubusercontent.com/79053495/150993359-19d9cb7a-6a87-4d5d-a3f8-9e29a3ab47df.png)  
ㅤ  
## Specs

- Vue3
- Webpack
- SCSS
- Babel
- PostCSS
- Autoprefixer
- ESLint
- Vuex
- Vue Router

## Packages

__webpack__: 모듈(패키지) 번들러의 핵심 패키지  
__webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음  
__webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)  

__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결  
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사  

__sass-loader__: SCSS(Sass) 파일을 로드  
__postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리  
__css-loader__: CSS 파일을 로드  
__style-loader__: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입  
__babel-loader__: JS 파일을 로드  
__vue-loader__: Vue 파일을 로드  
__vue-style-loader__: Vue 파일의 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입  
__file-loader__: 지정된 파일(이미지)을 로드  

__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환  
__@babel/preset-env__: Babel 지원 스펙을 지정  
__@babel/plugin-transform-runtime__: Async/Await 문법 지원  

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)  
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지  
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인  

__vue__: Vue.js 프레임워크  
__@vue/compiler-sfc__: .vue 파일(SFC, 3버전)을 해석  

__eslint__: 정적 코드 분석 도구 __(+ESLint)__  
__eslint-plugin-vue__: Vue.js 코드 분석 __(+ESLint)__  
__babel-eslint__: ES6 이상의 코드(Babel)를 분석 __(+ESLint)__  

__vuex__: 중앙 집중식 저장소 __(+Vuex)__  
__vue-router__: 라우터 __(+VueRouter)__  


