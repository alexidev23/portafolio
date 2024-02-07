import React from 'react'
import Html from '../../assets/img/html5.svg'
import Css from '../../assets/img/css.svg'
import Javascript from '../../assets/img/javascript.svg'
import Python from '../../assets/img/python.svg'
import Django from '../../assets/img/django.svg'
import Bootstrap from '../../assets/img/bootstrap.svg'
import Git from '../../assets/img/git.svg'
// import Php from '../../assets/img/php.svg'
// import Reac from '../../assets/react.svg'
// import Tailwind from '../../assets/img/tailwindcss.svg'

export function Skills () {
  const SkillsMe = [
    {
      id: 1,
      name: 'HTML',
      icon: Html
    },
    {
      id: 2,
      name: 'CSS',
      icon: Css
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
      icon: Javascript
    },
    {
      id: 4,
      name: 'PYTHON',
      icon: Python
    },
    {
      id: 5,
      name: 'DJANGO',
      icon: Django
    },
    {
      id: 6,
      name: 'BOOSTRAP',
      icon: Bootstrap
    },
    {
      id: 7,
      name: 'GIT',
      icon: Git
    }
    // {
    //   id: 8,
    //   name: 'PHP',
    //   icon: Php
    // },
    // {
    //   id: 9,
    //   name: 'REACT',
    //   icon: Reac
    // },
    // {
    //   id: 10,
    //   name: 'TAILWIND',
    //   icon: Tailwind
    // }
  ]

  return (
    <ul className='flex gap-3 mt-5 justify-center flex-wrap'>
      {SkillsMe.map(skills => (
        <li key={skills.id}>
          {skills.name === 'DJANGO'
            ? <div className='bg-[#144b34] h-8 flex items-center justify-center px-1 rounded-md'><span className='text-white font-medium'>Django</span></div>
            : <img src={skills.icon} alt={skills.name} className='h-8' />}
        </li>
      ))}
    </ul>
  )
}
