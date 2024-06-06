import React from 'react'

const PostCardSkeleton = () => {
  return (
    <div className="w-full grid gap-x-5 grid-cols-12 py-5 border-y-2 border-primary">
      
        <div className="col-span-4 bg-slate-200 object-cover w-full h-full aspect-video"></div>
      <div className="col-span-8 flex flex-col gap-2">
        <div className='h-24 w-1/2 bg-slate-300 animate-pulse' />
        <div className='h-full w-full bg-slate-300 animate-pulse'/>
      </div>
    </div>
  )
}

export default PostCardSkeleton