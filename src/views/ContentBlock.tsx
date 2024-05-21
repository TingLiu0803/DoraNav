// ContentBlock.js or ContentBlock.jsx
import React from 'react'

type ContentBlockProps = {
  title: string
  description: string
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  return (
    <div className="lg:p-6 p-1 lg:m-6 m-1 max-w-2xl">
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="lg:text-lg text-gray-600">{description}</p>
    </div>
  )
}

export default ContentBlock
