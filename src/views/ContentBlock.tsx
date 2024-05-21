// ContentBlock.js or ContentBlock.jsx
import React from 'react'

type ContentBlockProps = {
  title: string
  description: string
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  return (
    <div className="p-6 m-6 max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  )
}

export default ContentBlock
