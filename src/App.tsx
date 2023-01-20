import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css'


// author:{avatar)url:"", name:"",, role:"",}
// publishedAt:date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlessandroLobo.png',
      name: 'Alessandro Lobo',
      role: 'CTO @ Academia Corpus'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },

      { type: 'link', content: '👉 jane.design/doctorcare', },

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AlessandroLobo.png',
      name: 'Dérica Mello',
      role: 'Vendedora @ Marlene Modas'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },

      { type: 'link', content: '👉 jane.design/doctorcare', },

    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
  // {
  //   id: 3,
  //   author: {
  //     avatarUrl: 'http://https://github.com/AlessandroLobo.png',
  //     name: 'Ana Laura Lobo',
  //     role: 'Educator @ Uberlandia scool'
  //   },
  //   content: [
  //     { type: 'paragraph', content: 'Fala galeraa 👋', },

  //     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },

  //     { type: 'link', content: '👉 jane.design/doctorcare', },

  //   ],
  //   publishedAt: new Date('2022-05-20 20:00:00')
  // },
];


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>

    </div>
  )
}


