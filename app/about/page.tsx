import React from 'react'
import './about.css'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='about-container'>
      <div className='image-container'>
        <Image
          src='/subhan.png' 
          alt='Subhan Kaladi' 
          className='about-image' 
        />
      </div>
      <div className='content-container'>
        <h1 className='heading'>Welcome to My Tech Blog: The Future of AI & Technology</h1>
        <p className='intro-text'>
          Hello, Im <strong>Subhan Kaladi</strong>, the creator of this tech blog website.
          After dedicating continuesly <strong>15 hours</strong> of hard work, Ive built a platform to
          share my passion for <strong>Generative AI</strong>, <strong>Next.js</strong>, and <strong>Agentic AI</strong>.
          The website includes live news feeds, a <strong>Login/Signup page</strong>, and insights
          on the latest tech trends and startup tips.
        </p>
        <div className='content'>
          <p>Expect content on:</p>
          <ul>
            <li>Generative AI updates and tools</li>
            <li>Next.js tutorials and best practices</li>
            <li>Agentic AI and its business impact</li>
            <li>Startup advice for aspiring tech entrepreneurs</li>
          </ul>
        </div>
        <p className='thanks'>
          Thank you for visiting my blog, and stay tuned for more!
        </p>
      </div>
    </div>
  )
}

export default Page;
