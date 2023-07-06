import Image from 'next/image';

export type BadgeType =
  | 'html'
  | 'scss'
  | 'css'
  | 'vue'
  | 'vuex'
  | 'vue2'
  | 'vue3'
  | 'react'
  | 'reactQuery'
  | 'bootstrap'
  | 'typescript'
  | 'nestjs'
  | 'mongodb'
  | 'mysql'
  | 'java'
  | 'git'
  | 'gitActions'
  | 'aws'
  | 's3'
  | 'docker'
  | 'k8s'
  | 'express'
  | 'redux';

interface Props {
  type: BadgeType;
  width: number;
  height: number;
}

const src = {
  html: 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white',
  scss: 'https://img.shields.io/badge/Scss-CC6699?style=flat-square&logo=Sass&logoColor=white',
  css: 'https://img.shields.io/badge/Css3-1572B6?style=flat-square&logo=CSS3&logoColor=white',
  vue: 'https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=gray',
  vuex: 'https://img.shields.io/badge/Vuex-4FC08D?style=flat-square&logo=Vue.js&logoColor=gray',
  vue2: 'https://img.shields.io/badge/Vue.js 2-4FC08D?style=flat-square&logo=Vue.js&logoColor=gray',
  vue3: 'https://img.shields.io/badge/Vue.js 3-4FC08D?style=flat-square&logo=Vue.js&logoColor=gray',
  react: 'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white',
  reactQuery:
    'https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=reactquery&logoColor=white',
  bootstrap:
    'https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white',
  typescript:
    'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white',
  nestjs:
    'https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white',
  mongodb:
    'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white',
  mysql: 'https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white',
  java: 'https://img.shields.io/badge/Java-ffffff?style=flat-square&logoColor=gray',
  git: 'https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white',
  gitActions:
    'https://img.shields.io/badge/githubactions-2088FF?style=flat-square&logo=githubactions&logoColor=white',
  ncp: 'https://img.shields.io/badge/Naver Cloud Platform-03C75A?style=flat-square&logo=Naver&logoColor=white',
  aws: 'https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white',
  s3: 'https://img.shields.io/badge/AWS S3-569A31?style=flat-square&logo=amazons3&logoColor=white',
  docker:
    'https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white',
  k8s: 'https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=Kubernetes&logoColor=white',
  express:
    'https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white',
  storybook:
    'https://img.shields.io/badge/StoryBook-FF4785?style=flat-square&logo=storybook&logoColor=white',
  redux: 'https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white',
};

export const StackBadge = (props: Props) => {
  const { type, width, height } = props;
  return <Image width={width} height={height} className={'mr-6'} alt={type} src={src[type]} />;
};
